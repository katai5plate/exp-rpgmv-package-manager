#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var find_1 = __importDefault(require("./find"));
var packages = require("./pkg.json");
var _a = process.argv.slice(2), mode = _a[0], rest = _a.slice(1);
switch (mode) {
    case types_1.Mode.add:
        break;
    case types_1.Mode.remove:
        break;
    case types_1.Mode.find:
        find_1.default(packages, rest);
        break;
    default:
        process.exit(1);
}
