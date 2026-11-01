import { access, copyFile, mkdir } from "node:fs/promises";
import { constants } from "node:fs";
import { courses } from "../src/data/courses.js";
import { projects } from "../src/data/projects.js";

const routePaths = new Set([
  "notes",
  "notlar",
  ...Object.keys({
    "1-sinif": true,
    "2-sinif": true,
    "3-sinif": true,
    "gelecek-donem": true,
  }).flatMap((gradeId) => [`notes/${gradeId}`, `notlar/${gradeId}`]),
  ...courses.flatMap((course) => [
    `notes/${course.grade}/${course.id}`,
    `notlar/${course.grade}/${course.id}`,
  ]),
  ...projects.map((project) => `projects/${project.id}`),
]);

try {
  await access("dist/index.html", constants.R_OK);
  await copyFile("dist/index.html", "dist/404.html");
  await Promise.all(
    [...routePaths].map(async (routePath) => {
      const routeDirectory = `dist/${routePath}`;
      await mkdir(routeDirectory, { recursive: true });
      await copyFile("dist/index.html", `${routeDirectory}/index.html`);
    }),
  );
  console.log(`404.html and ${routePaths.size} static route entries created for GitHub Pages.`);
} catch (error) {
  console.error("Could not create GitHub Pages route files:", error.message);
  process.exitCode = 1;
}
