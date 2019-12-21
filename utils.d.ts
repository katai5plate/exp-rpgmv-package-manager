export declare const info: (...messages: string[]) => void;
export declare const good: (...messages: string[]) => void;
export declare const warning: (...messages: string[]) => void;
export declare const forceEnd: (...messages: string[]) => never;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const here: (path: string) => string;
