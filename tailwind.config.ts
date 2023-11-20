import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: "transparent 0px 0px 0px 2px inset",
        secondary: "rgb(240, 242, 248) 0px 0px 0px 2px",
        tertiary: "2px 4px 12px rgba(0,0,0,.08);",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
};
export default config;
