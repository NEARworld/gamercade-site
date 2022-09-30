import { createGlobalStyle } from "styled-components";

export const theme = {
  mode: 'dark',
  dark: {
    bg: {
      primary: '#0d1117',
      secondary: '#161b22'
    },
    text: {
      primary: '#ffffffe4',
      secondary: 'rgba(255,255,255,0.7)'
    },
    border: {
      primary: '#ffffff40',
      secondary: 'rgba(255,255,255,0.7)'
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
  html {
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    background-color: ${theme.dark.bg.secondary};
    color: ${theme.dark.text.primary}
  }
`
export default GlobalStyle;