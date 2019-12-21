#!/usr/bin/env node
import { Pkg, Mode } from "./types";
import find from "./find";
const packages: Pkg = require("./pkg.json");

const [mode, ...rest] = process.argv.slice(2);

switch (mode) {
  case Mode.add:
    break;
  case Mode.remove:
    break;
  case Mode.find:
    find(packages, rest);
    break;
  default:
    process.exit(1);
}
