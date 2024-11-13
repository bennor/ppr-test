import fs from "node:fs";
import path from "node:path";

export function getBuildId(): string {
  try {
    // Read the BUILD_ID file from the .next directory
    const buildIdPath = path.join(process.cwd(), ".next", "BUILD_ID");
    return fs.readFileSync(buildIdPath, "utf8").trim();
  } catch (error) {
    console.error("Failed to read BUILD_ID:", error);
    return "unknown";
  }
}
