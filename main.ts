import * as fs from "node:fs";
import * as path from "node:path";

const roast = "IsmaLove: a girlfriend who works all night for 20 cents, forgets her own rules, and thinks 'sayang' is a bug fix.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), roast, "utf8");
