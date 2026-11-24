// Post the Meme, Win the Feed — entry program (Node 22).
// All this program has to do is carry POST.json from the repository
// into the grader's output directory. The house reads the X post
// itself; nothing this program writes about the post counts.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The post address must be an X status URL: https://x.com/<handle>/status/<id>
// (twitter.com, www. or mobile. prefixes, and /i/web/status/<id> also read).
function readPostUrl(path: string): string {
  const parsed = JSON.parse(readFileSync(path, "utf8")) as { url?: unknown };
  if (typeof parsed.url !== "string") {
    throw new Error("POST.json must be an object with a string url.");
  }
  const match = parsed.url.match(
    /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/(\d+)$/
  ) ?? parsed.url.match(/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/i\/web\/status\/(\d+)$/);
  if (!match) {
    throw new Error(`POST.json url is not an X status address: ${parsed.url}`);
  }
  return parsed.url;
}

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePost = join(repoRoot, "POST.json");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "output");

if (!existsSync(sourcePost)) {
  throw new Error("POST.json is missing: the entry has no X post to hand in yet.");
}

const postUrl = readPostUrl(sourcePost);
console.log("Handing in post:", postUrl);

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePost, join(outputDir, "POST.json"));
console.log("POST.json copied to", outputDir);
