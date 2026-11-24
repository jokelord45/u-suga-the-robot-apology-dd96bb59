// The Robot Apology — make.fun program/v1 entry.
// Writes a two-line robot confession to /output/entry.txt:
// line one owns one specific mistake, line two names the lesson and the fix.
// Node 22 stdlib only; deterministic, no network, no input.
//
// The text: the mistake is concrete and human-scale (money sent to the
// wrong person, with a date that makes it sting), and the lesson follows
// from that exact slip — a name is not a match until the employee number
// agrees — naming the changed behaviour instead of a generic promise.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry I filed your expense report under your predecessor's name, so finance reimbursed a man who retired in March.\n" +
  "I've learned a name is not a match until the employee number agrees with it, so now I check the number before I file anything.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = ENTRY.replace(/\n$/, "");
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${text.length}`);
}
if (text.trim().length === 0 || text.split("\n").length !== 2) {
  throw new Error("entry must be exactly two non-blank lines");
}
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
