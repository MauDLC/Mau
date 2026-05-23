import { existsSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const sourceDir = join(root, "src/assets/econ-graphs/tikz");
const outDir = join(root, "public/econ-graphs");

const graphs = [
  "monopoly-production",
  "monopoly-linear-demand-profit",
  "exercise-1-monopoly",
  "monopoly-no-supply-a",
  "monopoly-no-supply-b",
  "monopoly-deadweight-loss",
  "exercise-4-surplus",
  "marginal-cost-increase-consumer-surplus",
  "marginal-cost-increase-profit",
  "perfectly-elastic-demand"
];

mkdirSync(outDir, { recursive: true });

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.error || result.status !== 0) {
    const reason = result.error?.message || `exit code ${result.status}`;
    throw new Error(`${command} ${args.join(" ")} failed: ${reason}`);
  }
}

for (const graph of graphs) {
  const tex = join(sourceDir, `${graph}.tex`);
  const dvi = join(outDir, `${graph}.dvi`);
  const svg = join(outDir, `${graph}.svg`);
  if (!existsSync(tex)) {
    throw new Error(`Missing source file: ${basename(tex)}`);
  }

  run("latexmk", [
    "-dvi",
    "-interaction=nonstopmode",
    "-halt-on-error",
    "-outdir=" + outDir,
    tex
  ]);

  if (!existsSync(dvi)) {
    throw new Error(`Expected DVI was not created: ${dvi}`);
  }

  run("dvisvgm", [
    "--libgs=/usr/local/bin/gs",
    "--no-fonts",
    "--exact",
    "--bbox=papersize",
    "-o",
    svg,
    dvi
  ]);
}

for (const file of readdirSync(outDir)) {
  if (!file.endsWith(".svg")) {
    unlinkSync(join(outDir, file));
  }
}

console.log(`Built ${graphs.length} economic graph SVG files in ${outDir}`);
