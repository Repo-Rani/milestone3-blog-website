import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      
      screens: {
        xs: "320px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'],  
        serif: ['Merriweather', 'serif'],  
        inter: ["inter", "serif"]
      },
    },
  },
  plugins: [],
};
export default config;
