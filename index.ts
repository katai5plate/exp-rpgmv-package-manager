#!/usr/bin/env node
interface Pkg {
  [pluginName: string]: {
    title: string;
    author: string[];
    homepage: string;
    license: string;
    plugins: [string, string][];
  };
}
const packages: Pkg = require("./pkg.json");
console.log(packages, process.argv);
