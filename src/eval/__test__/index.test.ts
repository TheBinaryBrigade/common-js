import { beforeAll, describe, expect, jest, test } from "@jest/globals";

import parser, { Context } from "../index";

const ctx: Context = {
  funcs: {
    // Note: builtins need to be added explicitly 
    ...parser.builtinFunctions(),
    // You can declare your own functions like this
    $myFunc: (a: number, b: number) => {
      return a + b;
    },
  },
  // You can declare your variables here
  vars: {
    $myVar: 42,
    // for accessing deep variables use the builtin $getattr($other, 'some.variable')
    $other: {
      some: {
        variable: "Dustin"
      }
    },
    $void: ""
  }
};

const tests: {
    input: string,
    output: string,
}[] = [
  {
    input: "$myVar + $myFunc(21, $myVar / 2) should be 84! My name is $getattr($other, 'some.variable'), I have a number, it is $myVar. It was $myVar!!!",
    output: "84 should be 84! My name is Dustin, I have a number, it is 42. It was 42!!!",
  },
  {
    input: "Hi $myVar, thanks for the space.",
    output: "Hi 42, thanks for the space.",
  },
  {
    input: "Hi $myVar... thanks for the space.",
    output: "Hi 42... thanks for the space.",
  },
  {
    input: "Hi $myVar!! thanks for the space.",
    output: "Hi 42!! thanks for the space.",
  },
  {
    input: "Hello, $myVar. I have 1 + 1 cats",
    output: "Hello, 42. I have 2 cats",
  }
];

describe("parse sentence edge cases", () => {
  tests.forEach(({ input, output }) => {
    test(input, () => {
      const result = parser.parseSentence(input, ctx);
      expect(result).toBe(output);
    });
  });
});