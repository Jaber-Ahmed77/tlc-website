import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Resolve directory and filename for compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define ESLint configuration array
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js core web vitals
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript and TypeScript files
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "react/no-unescaped-entities": "warn", // Warn about unescaped entities in React
    },
  },
];

// Export the ESLint configuration
export default eslintConfig;
