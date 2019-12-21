import { resolve } from "path";
import color from "chalk";

const $ = color.bgBlack;

export const info = (...messages: string[]) => {
  console.log($.cyan(`\n...${messages.join(" ")}`));
};

export const good = (...messages: string[]) => {
  console.log($.green(`>>> ${messages.join(" ")}`));
};

export const warning = (...messages: string[]) => {
  console.warn($.yellow(`WORNING! ${messages.join(" ")}`));
};

export const forceEnd = (...messages: string[]) => {
  console.error($.red(`ERROR! ${messages.join(" ")}`));
  process.exit(1);
};

export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const here = (path: string) => resolve(__dirname, path);
