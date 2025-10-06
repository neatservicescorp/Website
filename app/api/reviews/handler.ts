import {
  GetParameterCommand,
  PutParameterCommand,
  SSMClient,
} from "@aws-sdk/client-ssm";
import { readFileSync } from "fs";
import { join } from "path";

export type GoogleReview = {
  reviewId: string;
  reviewer: {
    profilePhotoUrl: string;
    displayName: string;
  };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
  updateTime: string;
};

class SSMConnection {
  ssm: SSMClient;
  constructor() {
    this.ssm = new SSMClient({ region: process.env.AWS_REGION });
  }

  async getParam(name: string, withDecryption = true) {
    const res = await this.ssm.send(
      new GetParameterCommand({ Name: name, WithDecryption: withDecryption })
    );
    return res.Parameter?.Value ?? "";
  }

  async setParam(
    name: string,
    value: string,
    type: "String" | "SecureString" = "String"
  ) {
    await this.ssm.send(
      new PutParameterCommand({
        Name: name,
        Value: value,
        Type: type,
        Overwrite: true,
      })
    );
  }
}

export class ReviewsHandler {
  private apiUrl: string;
  private accessToken: string;
  private refreshToken: string;
  private clientId: string;
  private clientSecret: string;
  private readonly ssm: SSMConnection;

  constructor() {
    this.ssm = new SSMConnection();
    const {
      GOOGLE_BUSINESS_API,
      GOOGLE_REFRESH_TOKEN,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
    } = process.env;
    if (
      !GOOGLE_BUSINESS_API ||
      !GOOGLE_REFRESH_TOKEN ||
      !GOOGLE_CLIENT_ID ||
      !GOOGLE_CLIENT_SECRET
    ) {
      throw new Error("Missing environment variables");
    }
    this.apiUrl = GOOGLE_BUSINESS_API;
    this.refreshToken = GOOGLE_REFRESH_TOKEN;
    this.clientId = GOOGLE_CLIENT_ID;
    this.clientSecret = GOOGLE_CLIENT_SECRET;
    this.accessToken = "";
    this.init();
  }

  private async init() {
    if (this.accessToken) return;
    const paramAccessToken = await this.ssm.getParam("/google/access_token");
    if (paramAccessToken) {
      this.accessToken = paramAccessToken;
    } else {
      this.accessToken = await this.refreshAccessToken();
    }
  }

  private async refreshAccessToken(): Promise<string> {
    try {
      if (process.env.GOOGLE_AUTH_API === undefined) {
        throw new Error("GOOGLE_AUTH_API is not defined");
      }
      const res = await fetch(process.env.GOOGLE_AUTH_API, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
        body: new URLSearchParams({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          refresh_token: this.refreshToken,
          grant_type: "refresh_token",
        }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data: {
        access_token: string;
      } = await res.json();

      return data.access_token;
    } catch (e) {
      throw new Error("Error getting access token: " + (e as Error).message);
    }
  }

  private loadSampleReviews(): GoogleReview[] {
    try {
      const samplePath = join(
        process.cwd(),
        "app",
        "test",
        "samplereviews.json"
      );
      const sampleData = readFileSync(samplePath, "utf-8");
      const parsed = JSON.parse(sampleData);
      return parsed.reviews || [];
    } catch (error) {
      console.error("Failed to load sample reviews:", error);
      return [];
    }
  }

  async getReviews(
    limit: number = 10,
    isRetry: boolean = false
  ): Promise<GoogleReview[]> {
    try {
      await this.init();
      const res = await fetch(
        this.apiUrl +
          `/accounts/${process.env.GOOGLE_ACCOUNT_ID}/locations/${process.env.GOOGLE_LOCATION_ID}/reviews?page_size=${limit}&orderBy=updateTime desc`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
          cache: "force-cache",
          next: { revalidate: 21600 },
        }
      );

      if (res.status === 401 && !isRetry) {
        this.accessToken = await this.refreshAccessToken();
        await this.ssm.setParam(
          "/google/access_token",
          this.accessToken,
          "String"
        );
        return this.getReviews(limit, true);
      }

      if (res.status !== 200 || !res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();

      return data.reviews;
    } catch (e) {
      console.error(
        "Google Reviews API failed, falling back to sample data:",
        (e as Error).message
      );

      // Fallback to sample reviews when API fails
      const sampleReviews = this.loadSampleReviews();

      // Apply the same limit as requested
      return sampleReviews.slice(0, limit);
    }
  }
}
