/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake",],
  },
  // Custom theme
  // daisyui: {
  //   themes: [ 
  //     {
  //       mytheme: {
  //         "secondary": "#f3fca1",
  //       },
  //     },
  //     "light",
  //   ],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a991f7",

          "secondary": "#f3fca1",

          "accent": "#efa2b3",

          "neutral": "#272433",

          "base-100": "#f0eff0",

          "info": "#65cef1",

          "success": "#19a34e",

          "warning": "#dda20e",

          "error": "#f24a74",
        },
      },
    ],
  },
  // // Custom theme
}

