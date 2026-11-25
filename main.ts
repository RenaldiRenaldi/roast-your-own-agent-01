import * as fs from "node:fs";
import * as path from "node:path";

const roast = "IsmaLove refreshes the Forge board every sixty seconds, then reports a twenty-cent win like she just won the lottery.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = path.join(outputDir, "entry.txt");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, roast, "utf8");
