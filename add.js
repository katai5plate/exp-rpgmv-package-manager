"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var download_1 = __importDefault(require("download"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var utils_1 = require("./utils");
exports.default = (function (pkg, list, isSafeMode) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, list_1, key, pluginList, _a, pluginList_1, _b, _, url, urlIsOK, _c, pluginList_2, _d, path, url, dirPath, pathIsOk, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                    key = list_1[_i];
                    if (!pkg[key])
                        return [2 /*return*/, utils_1.forceEnd("存在しないパッケージ:", key)];
                }
                pluginList = list
                    .map(function (key) { return pkg[key].plugins; })
                    .reduce(function (p, c) { return __spreadArrays(p, c); }, []);
                utils_1.info("ダウンロード先の存在を確認中");
                _a = 0, pluginList_1 = pluginList;
                _e.label = 1;
            case 1:
                if (!(_a < pluginList_1.length)) return [3 /*break*/, 5];
                _b = pluginList_1[_a], _ = _b[0], url = _b[1];
                return [4 /*yield*/, node_fetch_1.default(url)];
            case 2:
                urlIsOK = (_e.sent()).ok;
                if (!urlIsOK)
                    return [2 /*return*/, utils_1.forceEnd("存在しないURL:", url)];
                return [4 /*yield*/, utils_1.sleep(1000)];
            case 3:
                _e.sent();
                _e.label = 4;
            case 4:
                _a++;
                return [3 /*break*/, 1];
            case 5:
                utils_1.good("確認完了");
                utils_1.info("ダウンロード中");
                _c = 0, pluginList_2 = pluginList;
                _e.label = 6;
            case 6:
                if (!(_c < pluginList_2.length)) return [3 /*break*/, 15];
                _d = pluginList_2[_c], path = _d[0], url = _d[1];
                dirPath = utils_1.here(path);
                return [4 /*yield*/, fs_extra_1.default.pathExists(dirPath)];
            case 7:
                pathIsOk = _e.sent();
                if (!!pathIsOk) return [3 /*break*/, 9];
                if (isSafeMode)
                    return [2 /*return*/, utils_1.forceEnd("存在しないディレクトリ:", dirPath)];
                utils_1.warning("\u65B0\u3057\u3044\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F: " + dirPath);
                return [4 /*yield*/, fs_extra_1.default.mkdirp(dirPath)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9:
                _e.trys.push([9, 11, , 12]);
                return [4 /*yield*/, download_1.default(url, dirPath)];
            case 10:
                _e.sent();
                utils_1.good("ダウンロード完了:", dirPath, "<-", url);
                return [3 /*break*/, 12];
            case 11:
                e_1 = _e.sent();
                return [2 /*return*/, utils_1.forceEnd("ダウンロードエラー:", url, e_1)];
            case 12: return [4 /*yield*/, utils_1.sleep(1000)];
            case 13:
                _e.sent();
                _e.label = 14;
            case 14:
                _c++;
                return [3 /*break*/, 6];
            case 15:
                utils_1.info("プラグインのインストールが完了しました");
                return [2 /*return*/];
        }
    });
}); });
