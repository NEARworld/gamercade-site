import { createGlobalStyle } from "styled-components";

export const theme = {
  mode: 'dark',
  dark: {
    bg: {
      primary: '#0d1117',
      secondary: '#161b22'
    },
    text: {
      primary: 'rgba(255,255,255,0.7)',
      secondary: ''
    }
  },
  light: {
    bg: {
      primary: '#0d1117',
      secondary: '#161b22'
    },
    text: {
      primary: '',
      secondary: ''
    }
  }
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
  }
`
export default GlobalStyle;