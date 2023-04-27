import { type EvalContext } from "./eval";
import { AnyFn, type TypeOf } from "../@types";
type ParseError = {
    lineNumber: number;
    message: string;
    error: Error;
};
type ParseWarning = {
    lineNumber: number;
    message: string;
};
export type Context = EvalContext;
export type SentenceParserOptions = {
    includeBuiltIns: boolean;
};
declare class SentenceParser {
    options: SentenceParserOptions;
    ctx: Context;
    errors: ParseError[];
    warnings: ParseWarning[];
    constructor(options?: SentenceParserOptions, ctx?: Context, errors?: ParseError[], warnings?: ParseWarning[]);
    builtinFunctions(): {
        $if: (condition: boolean, ifTrue: any, ifFalse: any) => any;
        $abs: (x: any) => number;
        $all: (...args: any[]) => boolean;
        $any: (...args: any[]) => boolean;
        $bool: (x: any) => boolean;
        $float: (x: any) => number;
        $str: (x: any) => string;
        $format: (fmt: string, ...args: any[]) => string;
        $int: (x: any) => number;
        $isnil: (x: any) => boolean;
        $isinstance: (x: any, ...types: TypeOf[]) => boolean;
        $tisstring: (x: any) => boolean;
        $tisnumber: (x: any) => boolean;
        $tisboolean: (x: any) => boolean;
        $tisundefined: (x: any) => boolean;
        $tisobject: (x: any) => boolean;
        $len: (x: any) => number;
        $max: (...args: any[]) => any;
        $min: (...args: any[]) => any;
        $pow: (a: number, b: number) => number;
        $round: (a: number) => number;
        $substring: (x: string, start: number, end?: number) => string;
        $type: (x: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        $math: (key: string, ...args: any[]) => any;
        $getattr: (obj: any, ...path: string[]) => any;
        $concat: (...args: any[]) => string;
        $hasattr: (obj: any, ...path: string[]) => boolean;
        $isset: (obj: any) => boolean;
        $includes: (x: any, value: any) => any;
        $endsWith: (x: any, searchString: string, endPos?: number) => any;
        $startsWith: (x: any, searchString: string, pos?: number) => boolean;
        $lower: (x: any) => string;
        $upper: (x: any) => string;
        $now: () => Date;
    };
    fixName(name: string): string;
    fnExists(name: string): boolean;
    varExists(name: string): boolean;
    addVar(name: string, value: any): void;
    addFunction(name: string, cb: AnyFn): void;
    clearWarnings(): void;
    clearErrors(): void;
    parse(sentence: string): {
        result: string;
        warnings: ParseWarning[];
        errors: ParseError[];
    };
}
declare const ____builtins: () => {
    $if: (condition: boolean, ifTrue: any, ifFalse: any) => any;
    $abs: (x: any) => number;
    $all: (...args: any[]) => boolean;
    $any: (...args: any[]) => boolean;
    $bool: (x: any) => boolean;
    $float: (x: any) => number;
    $str: (x: any) => string;
    $format: (fmt: string, ...args: any[]) => string;
    $int: (x: any) => number;
    $isnil: (x: any) => boolean;
    $isinstance: (x: any, ...types: TypeOf[]) => boolean;
    $tisstring: (x: any) => boolean;
    $tisnumber: (x: any) => boolean;
    $tisboolean: (x: any) => boolean;
    $tisundefined: (x: any) => boolean;
    $tisobject: (x: any) => boolean;
    $len: (x: any) => number;
    $max: (...args: any[]) => any;
    $min: (...args: any[]) => any;
    $pow: (a: number, b: number) => number;
    $round: (a: number) => number;
    $substring: (x: string, start: number, end?: number) => string;
    $type: (x: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    $math: (key: string, ...args: any[]) => any;
    $getattr: (obj: any, ...path: string[]) => any;
    $concat: (...args: any[]) => string;
    $hasattr: (obj: any, ...path: string[]) => boolean;
    $isset: (obj: any) => boolean;
    $includes: (x: any, value: any) => any;
    $endsWith: (x: any, searchString: string, endPos?: number) => any;
    $startsWith: (x: any, searchString: string, pos?: number) => boolean;
    $lower: (x: any) => string;
    $upper: (x: any) => string;
    $now: () => Date;
};
export type BuiltInFunction = ReturnType<typeof ____builtins>;
export type BuiltInFunctionKey = keyof BuiltInFunction;
declare const _default: {
    SentenceParser: typeof SentenceParser;
};
export default _default;
