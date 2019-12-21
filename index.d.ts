#!/usr/bin/env node
interface Pkg {
    [pluginName: string]: {
        title: string;
        author: string[];
        homepage: string;
        license: string;
        plugins: [string, string][];
    };
}
declare const packages: Pkg;
