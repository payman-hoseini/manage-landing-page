import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Bright-Red': 'hsl(12, 88%, 59%)',
        'Dark-Blue': 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
        'Very-Pale-Red': 'hsl(13, 100%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)'
      },
      fontFamily : {
        Vietnam : ["Vietnam"]
      }
    },
  },
  plugins: [],
};
export default config;
