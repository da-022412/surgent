import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import checkFile from "eslint-plugin-check-file";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Enforce naming conventions for all source files and folders
  {
    plugins: { "check-file": checkFile },
    files: ["src/**/*"],
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          // Component files (PascalCase) and config/utility files (kebab-case)
          "src/**/*.{tsx,ts}": "PASCAL_CASE",
          "src/**/index.ts": "KEBAB_CASE",
        },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          // Component folders use PascalCase; app router segments use kebab-case
          "src/components/**/": "PASCAL_CASE",
          "src/features/**/": "PASCAL_CASE",
          "src/app/**/": "KEBAB_CASE",
          "src/lib/**/": "KEBAB_CASE",
          "src/hooks/**/": "KEBAB_CASE",
        },
      ],
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
