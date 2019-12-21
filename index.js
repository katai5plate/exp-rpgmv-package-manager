#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var add_1 = __importDefault(require("./add"));
var find_1 = __importDefault(require("./find"));
var utils_1 = require("./utils");
var packages = require("./pkg.json");
var _a = process.argv.slice(2), mode = _a[0], rest = _a.slice(1);
switch (mode) {
    case types_1.Mode.add:
        add_1.default(packages, rest, false);
        break;
    case types_1.Mode.addSafe:
        add_1.default(packages, rest, true);
        break;
    case types_1.Mode.remove:
        break;
    case types_1.Mode.find:
        find_1.default(packages, rest);
        break;
    default:
        utils_1.forceEnd("無効なコマンドです:", mode);
}
