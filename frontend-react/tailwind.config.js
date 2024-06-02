import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          main: "#0EA5E9",
          darker: "#0283B5",
          lighter: "#B1E6FB",
          subtle: "#6E9CAE",
        },
        "error": {
          main: "#EF4444",
          darker: "#E53535",
          lighter: "#FF5C5C",
          subtle: "#FF8080",
        },
        "warning": {
          main: "#EAB308",
          darker: "#E5B800",
          lighter: "#FDDD48",
          subtle: "#FDED72",
        },
        "success": {
          main: "#22C55E",
          darker: "#05A660",
          lighter: "#39D98A",
          subtle: "#56EBA0",
        },
        "natural": {
          1: "#1A1A1A",
          2: "#5B5F67",
          3: "#8F90A6",
          4: "#C7C9D9",
        },
        "light": {
          1: "#DDE5E9",
          2: "#EBEBF0",
          3: "#FAFAFC",
          4: "#FDFDFF",
        },
        "sidebar": {
          1: "#03AFF1",
          2: "#E6F7FE",
        },
      }
    },
  },
  plugins: [
    daisyui,
    flowbite
  ]
};