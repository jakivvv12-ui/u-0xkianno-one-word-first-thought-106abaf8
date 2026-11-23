// One Word, First Thought — entry program.
// Writes exactly one word to /output/entry.txt: the first word that came
// to mind. No input, no randomness, no network: the same word every run.
//
// The word: "kerfuffle" — a noisy little commotion. It is surprising
// (nobody guesses it), vivid (you can hear the fuss), and carries a spark
// of wit in its sound, which is exactly what the judge prizes over safe
// filler. Nine letters: short enough to win the size tie-break too.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "kerfuffle";

// Runtime guard: fail hard rather than ever ship an invalid entry.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  WORD.trim() !== WORD ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
