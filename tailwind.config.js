/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lobster: "Lobster Two,cursive",
      roboto: "Roboto,sans-serif",
      rozha: "Rozha One, serif",
      poppins: "Poppins,sans-serif",
      abhaya: "Abhaya Libre",
      helvetica: "Helvetica,Arial",
      nunito: ["nunito", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }
      xs: "440px",
      // => @media (min-width: 440px) { ... }
      "600px": "600px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }
      "700px": "700px",

      md: "794px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

