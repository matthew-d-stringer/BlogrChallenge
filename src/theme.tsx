import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    red: {
      light: "hsl(356, 100%, 66%)",
      veryLight: "hsl(355, 100%, 74%)",
    },
    blue: {
      veryDark: "hsl(208, 49%, 24%)",
      grayish: "hsl(208, 49%, 24%)",
      veryDarkGrayish: "hsl(208, 49%,24%)",
      veryDarkBlack: "hsl(240, 10%, 16%)",
    },
    white: "hsl(0, 0%, 100%)",
  },
  fonts: {
    mono: "Overpass",
    // body: "Ubuntu",
  },
  breakpoints,
});

export default theme;
