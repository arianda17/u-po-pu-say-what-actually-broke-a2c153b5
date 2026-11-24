import { mkdirSync, writeFileSync } from "fs";

// Entry line intent: a disk-full failure. It names the real problem in plain
// words, tells the user what to do (delete something), and lands the twist that
// there is no room even for the error message itself.
const ENTRY =
  "Your disk is full. There is no room for this error message, let alone your data. Delete something - starting with those cat videos.";

// Guard: the entry must be a single non-empty line of 1-200 characters. A bad
// edit must never silently ship an invalid entry, so refuse to write anything.
if (typeof ENTRY !== "string" || !/^[^\n\r]*$/.test(ENTRY) || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Invalid entry: ${ENTRY.length} chars, must be a single 1-200 char line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
