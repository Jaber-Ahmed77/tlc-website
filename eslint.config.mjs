import { fileURLToPath } from "url";
// import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


module.exports = {
  extends: [
    'next/core-web-vitals', // Extend Next.js core web vitals rules
  ],
  rules: {
    'no-unused-vars': 'warn', // Warn about unused variables
    'react/no-unescaped-entities': 'warn', // Warn about unescaped entities in React
  },
};
