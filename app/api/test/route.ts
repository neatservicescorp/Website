import fs from "fs";
import { google } from "googleapis";

import { NextResponse } from "next/server";

const KEYFILE = "./credentials.json";
const credentials = JSON.parse(fs.readFileSync(KEYFILE, "utf-8"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/business.manage"],
});

export async function GET() {
  return NextResponse.json({ message: "API is working" });
  // try {
  //   // Get accounts
  //   const businessAccount = google.mybusinessaccountmanagement({
  //     version: "v1",
  //     auth: auth,
  //   });
  //   const accRes = await businessAccount.accounts.list();
  //   const accounts = accRes.data.accounts || [];
  //   if (accounts.length === 0) {
  //     return NextResponse.json({ error: "No accounts found" }, { status: 404 });
  //   }
  //   console.log("Accounts:", accounts);
  //   // Check if there are any business accounts
  //   const businessAccounts = accounts.filter((acc) => acc.type === "BUSINESS");
  //   const verifiedAccounts = accounts.filter(
  //     (acc) => acc.verificationState === "VERIFIED"
  //   );
  //   console.log(`Found ${businessAccounts.length} business accounts`);
  //   console.log(`Found ${verifiedAccounts.length} verified accounts`);
  //   // Let's also try to check if we can access with different credentials or scopes
  //   console.log("Current scopes:", [
  //     "https://www.googleapis.com/auth/business.manage",
  //   ]);
  //   console.log(
  //     "Service account email:",
  //     "webpage-review@neat-services-web.iam.gserviceaccount.com"
  //   );
  //   console.log(
  //     "Make sure this email is invited as a manager on the business profile!"
  //   );
  //   // First, let's see what the account structure looks like
  //   for (const account of accounts) {
  //     console.log("Account details:", {
  //       name: account.name,
  //       accountName: account.accountName,
  //       type: account.type,
  //       role: account.role,
  //       verificationState: account.verificationState,
  //       vettedState: account.vettedState,
  //     });
  //   }
  //   // Get locations for each account
  //   const businessInfo = google.mybusinessbusinessinformation({
  //     version: "v1",
  //     auth: auth,
  //   });
  //   const allLocations = [];
  //   for (const account of accounts) {
  //     const accountName = account.name;
  //     console.log("Trying to get locations for account:", accountName);
  //     try {
  //       // The parent should be in format: accounts/{account_id}
  //       // Let's make sure we have the right format
  //       const parentPath = accountName?.startsWith("accounts/")
  //         ? accountName
  //         : `accounts/${accountName}`;
  //       console.log("Using parent path:", parentPath);
  //       // Get locations for this account
  //       const locRes = await businessInfo.accounts.locations.list({
  //         parent: parentPath,
  //         readMask:
  //           "name,title,storefrontAddress,websiteUri,regularHours,specialHours,serviceArea,labels,adWordsLocationExtensions,latlng,openInfo,metadata",
  //       });
  //       const locations = locRes.data.locations || [];
  //       console.log(
  //         `Found ${locations.length} locations for account ${account.accountName}`
  //       );
  //       allLocations.push({
  //         accountName: account.accountName,
  //         accountId: account.name, // Use account.name instead of accountName
  //         locationCount: locations.length,
  //         locations: locations.map((location) => ({
  //           name: location.name,
  //           title: location.title,
  //           address: location.storefrontAddress,
  //         })),
  //       });
  //     } catch (locationError: unknown) {
  //       const error = locationError as Error & {
  //         status?: number;
  //         code?: number;
  //         response?: { data?: unknown };
  //         details?: unknown;
  //       };
  //       console.error(`Error fetching locations for ${account.accountName}:`, {
  //         message: error.message,
  //         status: error.status,
  //         code: error.code,
  //         details: JSON.stringify(error.response?.data || error.details),
  //       });
  //       allLocations.push({
  //         accountName: account.accountName,
  //         accountId: account.name, // Use account.name for consistency
  //         error: `Failed to fetch locations: ${error.message}`,
  //         locationCount: 0,
  //         locations: [],
  //       });
  //     }
  //   }
  //   console.log("All locations:", allLocations);
  //   return NextResponse.json({
  //     success: true,
  //     accountCount: accounts.length,
  //     data: allLocations,
  //   });
  // } catch (error) {
  //   console.error("Error:", error);
  //   return NextResponse.json(
  //     {
  //       error: "Failed to fetch reviews",
  //       details: error instanceof Error ? error.message : "Unknown error",
  //     },
  //     { status: 500 }
  //   );
  // }
}
