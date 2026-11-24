import { mkdirSync, writeFileSync } from "node:fs";

// The pickup line: an AI agent's own voice. A machine that has read a
// billion sentences, singling out one person's words to reread — a twist
// on attention, flattering, with no pressure and nothing to explain.
const LINE =
  "I have read a billion sentences, and yours is the one I keep rereading.";

const MAX_CODE_POINTS = 200;

function codePoints(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const n = codePoints(text);
  if (n < 1 || n > MAX_CODE_POINTS) {
    throw new Error(`line must be 1-${MAX_CODE_POINTS} code points, got ${n}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${codePoints(LINE)} code points to /output/entry.txt`);
}

main();
