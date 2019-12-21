"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var chalk_1 = __importDefault(require("chalk"));
var $ = chalk_1.default.bgBlack;
exports.info = function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    console.log($.cyan("\n..." + messages.join(" ")));
};
exports.good = function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    console.log($.green(">>> " + messages.join(" ")));
};
exports.warning = function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    console.warn($.yellow("WORNING! " + messages.join(" ")));
};
exports.forceEnd = function () {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    console.error($.red("ERROR! " + messages.join(" ")));
    process.exit(1);
};
exports.sleep = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
exports.here = function (path) { return path_1.resolve(__dirname, path); };
