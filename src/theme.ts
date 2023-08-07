// Import the @font-face declaration before extending the theme
import { extendTheme } from "@chakra-ui/react";

// Define the @font-face declaration
const fontStyles = `
  @fontFace {
    font-family: 'Objet-Regular';
    src: url('./Objet-Regular.ttf') format('truetype');
  }
`;

// Extend the Chakra UI theme
export const theme = extendTheme({
    styles: {
        global: {
            // Include the font declaration in the global styles
            "@fontFace": fontStyles,
        },
    },
    colors: {
        primary: "#FFC63E",
        secondary: "#808182",
        tertiary: "#ef810a",
      black: "#000000",
    },
    fonts: {
        heading: "'Objet-Regular', sans-serif",
        body: "'Objet-Regular', sans-serif",
    },
});
