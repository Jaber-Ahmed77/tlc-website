import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Ensure proper base directory
});

// Assign the configuration array to a variable
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Specify file types
    rules: {
      "no-unused-vars": "warn",
      "react/no-unescaped-entities": "warn",
    },
  },
];

// Export the configuration array
export default eslintConfig;
