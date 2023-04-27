<!-- THIS FILE IS @autogenerated DO NOT EDIT -->

# Common Utility Functions

```console
npm i clasico
```

## Permissive Sentence Parser

### Usage

Builtin Functions: [Documentation](https://github.com/TheBinaryBrigade/clasico-utils/blob/main/src/eval/README.md#table-of-contens)

```ts

import clasico from "clasico";

const parser = new clasico.parser.SentenceParser({
  includeBuiltIns: true,
});

// Add functions
parser.addFunction("myFunc", (a: number, b: number) => {
  return a + b;
});

// Add variables
parser.addVar("myVar", 42);
parser.addVar("other", { "some": { "variable": "Isla" } });

// Example Input
const input = "$myVar + $myFunc(21, $myVar / 2) should be 84! My name is $getattr($other, 'some.variable'), I have a number, it is $myVar. I don't have $you!!";
console.log("Input:", input);
// Input: $myVar + $myFunc(21, $myVar / 2) should be 84! My name is $getattr($other, 'some.variable'), I have a number, it is $myVar. I don't have $you!!

// Example Output
const output = parser.parse(input);
console.log("Output:", output);
// Output: {
//   result: "84 should be 84! My name is Isla, I have a number, it is 42. I don't have $you!!",
//   warnings: [ { lineNumber: 1, message: "Unknown variable '$you'" } ],
//   errors: []
// }

console.assert(
  output.result == "84 should be 84! My name is Isla, I have a number, it is 42. I don't have $you!!",
  "Evaluation did not match to expected output",
);


```
