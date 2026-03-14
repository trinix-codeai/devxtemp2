import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const webDir = resolve(rootDir, "apps", "web");

if (!existsSync(resolve(webDir, "package.json"))) {
  console.error(`Could not find web app at ${webDir}.`);
  process.exit(1);
}

const buildResult = spawnSync("npm", ["run", "build"], {
  cwd: webDir,
  stdio: "inherit",
  shell: true
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

const sourceDist = resolve(webDir, "dist");
const targetDist = resolve(rootDir, "dist");

rmSync(targetDist, { recursive: true, force: true });
mkdirSync(targetDist, { recursive: true });
cpSync(sourceDist, targetDist, { recursive: true });
