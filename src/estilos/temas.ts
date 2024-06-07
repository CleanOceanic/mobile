import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#357CCF',
      800: '#071830'
    },
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})