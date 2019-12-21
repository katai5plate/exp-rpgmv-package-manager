import { Pkg, PkgItem } from "./types";

/**
 * テキストベースで検索する
 */
export default (pkg: Pkg, words: string[]) => {
  if (words.length === 0) return;
  const db = Object.entries(pkg).map(([key, content]) => ({
    key,
    text: JSON.stringify([key, ...Object.values(content)])
  }));
  const textResult = db
    .filter(item => {
      for (let word of words) {
        if (item.text.match(word)) return true;
      }
    })
    .map(item => item.key);
  console.log(textResult);
};
