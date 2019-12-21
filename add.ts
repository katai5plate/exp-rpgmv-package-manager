import download from "download";
import fs from "fs-extra";
import fetch from "node-fetch";
import { Pkg } from "./types";
import { info, good, warning, forceEnd, sleep, here } from "./utils";

export default async (pkg: Pkg, list: string[], isSafeMode: boolean) => {
  for (let key of list) {
    if (!pkg[key]) return forceEnd("存在しないパッケージ:", key);
  }
  const pluginList = list
    .map(key => pkg[key].plugins)
    .reduce((p, c) => [...p, ...c], []);
  info("ダウンロード先の存在を確認中");
  for (let [_, url] of pluginList) {
    // ダウンロード先があるかどうかを調べる
    const urlIsOK = (await fetch(url)).ok;
    if (!urlIsOK) return forceEnd("存在しないURL:", url);
    await sleep(1000);
  }
  good("確認完了");
  info("ダウンロード中");
  for (let [path, url] of pluginList) {
    // ディレクトリパスが存在するか調べ、なければ作成する
    const dirPath = here(path);
    const pathIsOk = await fs.pathExists(dirPath);
    if (!pathIsOk) {
      if (isSafeMode) return forceEnd("存在しないディレクトリ:", dirPath);
      warning(`新しいディレクトリが作成されました: ${dirPath}`);
      await fs.mkdirp(dirPath);
    }
    // ダウンロードする
    try {
      await download(url, dirPath);
      good("ダウンロード完了:", dirPath, "<-", url);
    } catch (e) {
      return forceEnd("ダウンロードエラー:", url, e);
    }
    await sleep(1000);
  }
  info("プラグインのインストールが完了しました");
};
