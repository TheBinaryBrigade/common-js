import { describe, expect, test } from "@jest/globals";
import check from "..";
import { TypeOf } from "../../@types";

type CheckFn = keyof typeof check;
const tests: {
    [key in CheckFn]: {
        examples: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            input: any,
            output: boolean,
        }[],
        returnType: TypeOf,
    }
} = {
  isNumber: {
    examples: [
      { input: 42, output: true },
      { input: 42.01, output: true },
      { input: Math.PI, output: true },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: false, output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isString: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: true },
      { input: "42e1000", output: true },
      { input: "padding42", output: true },
      { input: "42px", output: true },
      { input: " ", output: true },
      { input: "", output: true },
      { input: false, output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isBoolean: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: false, output: true },
      { input: true, output: true },
      { input: new Boolean(true), output: true },
      { input: new Boolean(false), output: true },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isFunction: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: true },
      { input: [1, 2][Symbol.iterator], output: true },
    ],
    returnType: "boolean",
  },
  isObject: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: true },
      { input: new Boolean(false), output: true },
      { input: new Array([1]), output: true },
      { input: new Set([1]), output: true },
      { input: [1.42, 2.42, 3.42], output: true },
      { input: { hello: 42 }, output: true },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isNumeric: {
    examples: [
      { input: 42, output: true },
      { input: 42.01, output: true },
      { input: Math.PI, output: true },
      { input: "42", output: true },
      { input: "  42", output: true },
      { input: "42e1000", output: true },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isValidBoolean: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: "1", output: true },
      { input: "0", output: true },
      { input: "false", output: true },
      { input: "true", output: true },
      { input: false, output: true },
      { input: true, output: true },
      { input: new Boolean(true), output: true },
      { input: new Boolean(false), output: true },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isTrue: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: "1", output: true },
      { input: "0", output: false },
      { input: "false", output: false },
      { input: "true", output: true },
      { input: false, output: false },
      { input: true, output: true },
      { input: "false", output: false },
      { input: "true", output: true },
      { input: "  FALSE", output: false },
      { input: "  TRUE", output: true },
      { input: new Boolean(true), output: true },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isFalse: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: "1", output: false },
      { input: "0", output: true },
      { input: "false", output: true },
      { input: "true", output: false },
      { input: false, output: true },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: true },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isArray: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: true },
      { input: new Set([1]), output: false },
      { input: [1.42, 2.42, 3.42], output: true },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isSet: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: false },
      { input: "42e1000", output: false },
      { input: "padding42", output: false },
      { input: "42px", output: false },
      { input: " ", output: false },
      { input: "", output: false },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: false },
      { input: new Set([1]), output: true },
      { input: [1.42, 2.42, 3.42], output: false },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  },
  isIterable: {
    examples: [
      { input: 42, output: false },
      { input: 42.01, output: false },
      { input: Math.PI, output: false },
      { input: "42", output: true },
      { input: "42e1000", output: true },
      { input: "padding42", output: true },
      { input: "42px", output: true },
      { input: " ", output: true },
      { input: "", output: true },
      { input: true, output: false },
      { input: new Boolean(true), output: false },
      { input: new Boolean(false), output: false },
      { input: new Array([1]), output: true },
      { input: new Set([1]), output: true },
      { input: [1.42, 2.42, 3.42], output: true },
      { input: { hello: 42 }, output: false },
      { input: null, output: false },
      { input: undefined, output: false },
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean",
  }
};

describe("check", () => {
  Object.entries(tests).forEach(([fnName, { examples, returnType }]) => {
    describe(fnName, () => {
      const call = check[fnName as CheckFn];
      examples.forEach(({input, output}) => {
        test(`(${JSON.stringify(input)}) : (${typeof input})`, () => {
          const result = call(input);
          expect(typeof result).toBe(returnType);
          expect(result).toBe(output);
        });
      });
    });
  });
});