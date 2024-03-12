const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dana: "dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        DanaHeavy: "Dana Heavy",
        DanaExtraBold: "Dana ExtraBold",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
