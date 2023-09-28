// Import the @font-face declaration before extending the theme
import { extendTheme } from "@chakra-ui/react";

// Define the @font-face declaration
const fontStyles = `
  @fontFace {
    font-family: 'Saira-Regular';
    src: url('./Saira-Regular.ttf') format('truetype');
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
        heading: "'Saira-Regular', sans-serif",
        body: "'Saira-Regular', sans-serif",
    },
});
