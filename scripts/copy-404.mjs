import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";

try {
  await access("dist/index.html", constants.R_OK);
  await copyFile("dist/index.html", "dist/404.html");
  console.log("404.html created for GitHub Pages SPA fallback.");
} catch (error) {
  console.error("Could not create 404.html:", error.message);
  process.exitCode = 1;
}
