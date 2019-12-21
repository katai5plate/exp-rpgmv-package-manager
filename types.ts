export interface PkgItem {
  title: string;
  author: string[];
  homepage: string;
  license: string;
  keywords: string[];
  plugins: [string, string][];
}
export interface Pkg {
  [pluginName: string]: PkgItem;
}
export enum Mode {
  add = "add",
  addSafe = "add-safe",
  remove = "remove",
  removeSafe = "remove-safe",
  find = "find",
  version = "version",
  debug = "debug"
}
