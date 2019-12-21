"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * テキストベースで検索する
 */
exports.default = (function (pkg, words) {
    if (words.length === 0)
        return;
    var db = Object.entries(pkg).map(function (_a) {
        var key = _a[0], content = _a[1];
        return ({
            key: key,
            text: JSON.stringify(__spreadArrays([key], Object.values(content)))
        });
    });
    var textResult = db
        .filter(function (item) {
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            if (item.text.match(word))
                return true;
        }
    })
        .map(function (item) { return item.key; });
    console.log(textResult);
});
