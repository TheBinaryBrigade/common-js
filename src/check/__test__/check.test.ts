import { describe, expect, test } from "@jest/globals";
import check from "..";
import { TypeOf } from "../../@types";

class _MyCustomError extends Error {}

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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: true },
      { input: new _MyCustomError(), output: true },
      { input: new Date(), output: true },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: new Date(), output: false },
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
  },
  isDate: {
    examples: [
      { input: 1641004800000, output: true },
      { input: "2022-01-01", output: true },
      { input: "1995-12-17T03:24:00", output: true },
      { input: new Date(), output: true },
      { input: new Date().toISOString(), output: true },
      { input: `${new Date()}`, output: true },
      { input: "04 Dec 1995 00:12:00 GMT", output: true },
      { input: "01 Jan 1970 00:00:00 GMT", output: true },
      { input: 42, output: true },
      { input: 42.01, output: true },
      { input: Math.PI, output: true },
      { input: "42", output: true },
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
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean"
  },
  isError: {
    examples: [
      { input: new Error(), output: true },
      { input: new _MyCustomError(), output: true },
      { input: 1641004800000, output: false },
      { input: "2022-01-01", output: false },
      { input: "1995-12-17T03:24:00", output: false },
      { input: new Date(), output: false },
      { input: new Date().toISOString(), output: false },
      { input: `${new Date()}`, output: false },
      { input: "04 Dec 1995 00:12:00 GMT", output: false },
      { input: "01 Jan 1970 00:00:00 GMT", output: false },
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
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean"
  },
  isNil: {
    examples: [
      { input: null, output: true },
      { input: undefined, output: true },
      { input: new Error(), output: false },
      { input: new _MyCustomError(), output: false },
      { input: 1641004800000, output: false },
      { input: "2022-01-01", output: false },
      { input: "1995-12-17T03:24:00", output: false },
      { input: new Date(), output: false },
      { input: new Date().toISOString(), output: false },
      { input: `${new Date()}`, output: false },
      { input: "04 Dec 1995 00:12:00 GMT", output: false },
      { input: "01 Jan 1970 00:00:00 GMT", output: false },
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
      { input: () => { return 42; }, output: false },
      { input: [1, 2][Symbol.iterator], output: false },
    ],
    returnType: "boolean"
  }
};

describe("check", () => {
  describe("isError (error like)", () => {
    const examples = [
      [new Error(), true],
      [new _MyCustomError(), true],
      [{stack: ["some stack"], message: "some error message"}, true],
      [{stack: ["some stack"], messages: ["some error message"]}, false],
      [{}, false],
      [undefined, false],
      [null, false],
      ["", false],
      ["Hello", false],
      [42, false],
      [false, false],
      [new Set([42, 42, 42]), false],
      [[1, 2, 3], false],
      [() => new Error(), false],
    ];

    examples.forEach(([input, output]) => {
      test(`(${JSON.stringify(input)}) : (${typeof input})`, () => {
        const result = check.isError(input, true);
        expect(typeof result).toBe("boolean");
        expect(result).toBe(output);
      });
    });
  });

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