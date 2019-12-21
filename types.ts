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
  remove = "remove",
  find = "find"
}
