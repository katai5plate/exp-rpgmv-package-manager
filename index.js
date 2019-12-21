#!/usr/bin/env node
"use strict";
var packages = require("./pkg.json");
console.log(packages, process.argv.slice(2));
