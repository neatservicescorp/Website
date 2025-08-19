import fs from "fs";
import { google } from "googleapis";

const KEYFILE = "./credentials.json";
const credentials = JSON.parse(fs.readFileSync(KEYFILE, "utf-8"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/business.manage"],
});

export async function GET() {
  const businessAccount = google.mybusinessaccountmanagement({
    version: "v1",
    auth: auth,
  });

  const accRes = await businessAccount.accounts.list();
  const accounts = accRes.data.accounts || [];

  console.log(accounts);
}
