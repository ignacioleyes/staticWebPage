// Import the @font-face declaration before extending the theme
import { extendTheme } from "@chakra-ui/react";

// Define the @font-face declaration
const fontStyles = `
  @font-face {
    font-family: 'Objet-Regular';
    src: url('./Objet-Regular.ttf') format('truetype');
  }
`;

// Extend the Chakra UI theme
export const theme = extendTheme({
  styles: {
    global: {
      // Include the font declaration in the global styles
      "@font-face": fontStyles,
    },
  },
  colors: {
    primary: "#FFC63E",
    secondary: "#808182",
    tertiary: "#ef810a",
  },
  fonts: {
    heading: "'Objet-Regular', sans-serif",
    body: "'Objet-Regular', sans-serif",
  },
});