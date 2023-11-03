/** @type {import('tailwindcss').Config} */

import twElements from "./src/lib/external/tw-elements.mjs";
import opsStatusCode from "./src/lib/theme/ops_status_code.mjs";
import twcolors from "./src/lib/external/tw-colors.mjs";

const colors = {
  ...twcolors,
  ...opsStatusCode,
};

export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    colors,
    extend: {
      backgroundImage: (theme) => ({
        "gradient-blue": "linear-gradient(to bottom, #499bea 0%, #207ce5 100%)",
        "gradient-green":
          "linear-gradient(to bottom, #38a169 0%, #2f855a 100%)",
        "gradient-red": "linear-gradient(to bottom, #e53e3e 0%, #c53030 100%)",
        "gradient-yellow":
          "linear-gradient(to bottom, #ed8936 0%, #c05621 100%)",
        "gradient-indigo":
          "linear-gradient(to bottom, #667eea 0%, #4c51bf 100%)",
        "gradient-purple":
          "linear-gradient(to bottom, #9f7aea 0%, #805ad5 100%)",
        "gradient-pink": "linear-gradient(to bottom, #ed64a6 0%, #d53f8c 100%)",
      }),
      variants: {
        extend: {
          backgroundImage: ["hover", "focus", "disabled"],
          backgroundColor: ["disabled"],
          textColor: ["disabled"],
        },
      },
    },
  },
  plugins: [twElements],
};
