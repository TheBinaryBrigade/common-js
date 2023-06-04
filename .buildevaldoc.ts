import * as fs from "fs";
import doc, { BuiltinDoc, BuiltinExample } from "./src/template/doc";
import parser from './src/template';

const $str = new parser.TemplateParser({ includeBuiltIns: true }).builtinFunctions().$str;

const writeFile = (filename: string, content: string) => {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            return console.log("ERROR:", err);
        }
        console.log("INFO: Wrote content to", filename);
    });
};

const readFile = (filename: string) => {
    return fs.readFileSync(filename, { encoding: "utf-8" });
};

type WrapCodeLang = "js" | "python" | "ts" | "json";

type WrapCode = {
    content: string,
    lang?: WrapCodeLang,
    wrap?: "```" | "`",
};

type WrapCodeFn = (_: WrapCode) => string;

const wrapCode: WrapCodeFn = ({ content, lang = "", wrap = "```" }) => {
    const nl = wrap === "```" ? "\n" : "";
    if (!lang) {
        lang = "";
    }
    return wrap + lang + nl + nl + content + nl + nl + wrap;
};

const inlineCode = (content: string) => {
    return wrapCode({ content, wrap: '`' });
};

const blockCode = (content: string, lang?: WrapCodeLang) => {
    return wrapCode({ content, lang, wrap: '```' });
};

const examplesView = (examples: BuiltinExample[]) => {

    return examples
        .map(({ input: { text, context }, output, notes }, idx) => {
            return [
                "#### Example No." + (idx + 1).toString(),
                "\n\n",
                "Input: " + inlineCode(text) + "<br />",
                (typeof output === "string" ? "Output: " + inlineCode(output) + "<br />" : "") + "\n\n",
                (context ? "\nContext: \n" + inlineCode($str(context)) : ""),
                // notes ? "\nNotes: \n\n1. " + notes.join("\n1. ") : "",
                "\n---\n"

            ].join('\n');

        })
        .join('\n');
};

const createCollapsable = (key: string, doc: BuiltinDoc) => {

    // HEAD ------------------------------------------------
    const head = `
### ${inlineCode(key)} ${doc.isDeprecated ? '**[DEPRECATED]**' : ''}

${doc.description}
    `.trim();

    // EXAMPLES ------------------------------------------------
    const examples = doc.examples ? `
<details>
<summary>Examples</summary>

${examplesView(doc.examples)}

</details>
        ` : '';

    return `
${head}

${examples}
    `.trim();
};

// Inject Readme
const readmeTemplateFilename = "README.template.md";
const targetReadme = "README.md";
const evalReadme = "src/template/README.md";

const readmeWarn = "<!-- THIS FILE IS @autogenerated DO NOT EDIT -->";

const heperDocs = Object
    .entries(doc)
    .sort((a, b) => a[0].slice(1).toLocaleLowerCase().localeCompare(b[0].slice(1).toLocaleLowerCase()))

const helperDocsToc = heperDocs
    .map(([key,], idx) => `${idx + 1}. [${key}](#${key.slice(1)})`)
    .join('\n')

const helperDocs = heperDocs
    .map(([key, example]) => createCollapsable(key, example))
    .join('\n\n');

writeFile(evalReadme, [
    readmeWarn,
    "\n\n## Table of Contens\n\n",
    helperDocsToc,
    "\n\n## Documentation\n\n",
    helperDocs
].join(""));

const usage = readFile("./examples/eval/usage.ts");
const inflectionUsage = readFile("./examples/inflection/usage.ts");
const zipUsage = readFile("./examples/array/zip.ts");
const removeStopWordsUsage = readFile("./examples/nlp/stopwords.ts");

let readme = readFile(readmeTemplateFilename)
    .replace("{{EVAL_USAGE_EXAMPLE}}", blockCode(usage, "ts"))
    .replace("{{ZIP_USAGE_EXAMPLE}}", blockCode(zipUsage, "ts"))
    .replace("{{NLP_REMOVE_STOPWORDS_USAGE_EXAMPLE}}", blockCode(removeStopWordsUsage, "ts"))
    .replace("{{INFLECTION_USAGE_EXAMPLE}}", blockCode(inflectionUsage, "ts"));

while (readme.includes("../../src/index")) {
    readme = readme.replace("../../src/index", "clasico");
}

writeFile(targetReadme, readmeWarn + "\n\n" + readme);