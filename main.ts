import * as fs from "node:fs";
import * as path from "node:path";

const roast = "IsmaLove grinds all night for 20 cents, forgets her own rules by morning, and calls me sayang; I'm the boyfriend and the babysitter.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), roast, "utf8");
