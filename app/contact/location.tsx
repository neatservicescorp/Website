import { readFileSync } from "fs";
import path from "path";
import React from "react";
import Snippet from "./wrapper";

export default function Location() {
  const filePath = path.join(process.cwd(), "public/location.html");
  const html = readFileSync(filePath, "utf8");

  return <Snippet html={html} />;
}
