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
          // Only component .tsx files require PascalCase.
          // src/app/ is excluded — Next.js reserves lowercase names there (page, layout, etc.)
          "src/components/**/*.tsx": "PASCAL_CASE",
          "src/features/**/*.tsx": "PASCAL_CASE",
        },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          // Component folders (one level inside namespace dirs) use PascalCase.
          // The namespace dirs (surgent/, ui/) are exempt — */ requires exactly
          // one more segment, so it never matches the namespace dir itself.
          "src/components/surgent/*/": "PASCAL_CASE",
          "src/components/ui/*/": "PASCAL_CASE",
          // Feature component folders (one level inside features/*/components/)
          "src/features/design-system/components/*/": "PASCAL_CASE",
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
