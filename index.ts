#!/usr/bin/env node
import { Pkg, Mode } from "./types";
import add from "./add";
import find from "./find";
import { forceEnd, info } from "./utils";
const packages: Pkg = require("./pkg.json");

const [mode, ...rest] = process.argv.slice(2);

switch (mode) {
  case Mode.add:
    add(packages, rest, false);
    break;
  case Mode.addSafe:
    add(packages, rest, true);
    break;
  case Mode.remove:
    break;
  case Mode.find:
    find(packages, rest);
    break;
  case Mode.debug:
    console.log(process);
    break;
  case Mode.version:
    info("未実装");
    break;
  default:
    forceEnd("無効なコマンドです:", mode);
}
