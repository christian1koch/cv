const { resolve } = require("node:path");

const { JAVASCRIPT_FILES } = require("@vercel/style-guide/eslint/constants");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
  ],
  parserOptions: { project },
  settings: {
    "import/resolver": { typescript: { project } },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    "jsx-a11y": {
      polymorphicPropName: "component",
      components: {
        Button: "button",
        Icon: "svg",
        IconButton: "button",
        Image: "img",
        Input: "input",
        Link: "a",
        List: "ul",
        ListItem: "li",
        ListItemButton: "button",
        ListDivider: "li",
        NextImage: "img",
        NextLink: "a",
        Textarea: "textarea",
      },
    },
  },
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumber: true,
        allowRegExp: false,
        allowNever: false,
      },
    ],
    "react/function-component-definition": ["off"],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    "no-implicit-coercion": "off",
    // sort import statements
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: { order: "asc" },
      },
    ],
    // sort named imports within an import statement
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
  },
  overrides: [
    {
      files: ["src/app/**/{page,layout,not-found}.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    /**
     * JS files are using @babel/eslint-parser, so typed linting doesn't work there.
     * @see {@link https://github.com/vercel/style-guide/blob/canary/eslint/_base.js}
     * @see {@link https://typescript-eslint.io/linting/typed-linting#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     */
    {
      files: JAVASCRIPT_FILES,
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
    {
      files: [
        "*.config.{mjs,ts}",
        "src/app/**/{page,layout,not-found,*error,opengraph-image,apple-icon}.tsx",
        "src/app/**/{sitemap,robots}.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["*.config.{mjs,ts}"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    // module declarations
    {
      files: ["**/*.d.ts"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
};
