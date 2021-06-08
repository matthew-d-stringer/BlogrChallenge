import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    lightRed: 'hsl(356, 100%, 66%)',
    veryLightRed: 'hsl(355, 100%, 74%)',
    veryDarkBlue: 'hsl(208, 49%, 24%)',
    white: 'hsl(0, 0%, 100%)',
    grayishBlue: 'hsl(208, 49%, 24%)',
    veryDarkGrayishBlue: 'hsl(208, 49%,24%)',
    veryDarkBlackBlue: 'hsl(240, 10%, 16%)'
  },
  fonts,
  breakpoints,
})

export default theme
