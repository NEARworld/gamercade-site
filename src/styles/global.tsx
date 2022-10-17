import { createGlobalStyle } from "styled-components";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const theme = {
  mode: "dark",
  dark: {
    bg: {
      primary: "#0d1117",
      secondary: "#161b22",
    },
    text: {
      primary: "#ffffffe4",
      secondary: "rgba(255,255,255,0.7)",
    },
    border: {
      primary: "#ffffff40",
      secondary: "rgba(255,255,255,0.7)",
    },
  },
  light: {
    bg: {
      primary: "#0d1117",
      secondary: "#161b22",
    },
    text: {
      primary: "",
      secondary: "",
    },
  },
};

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
    color: ${theme.dark.text.primary};
    position: relative;
  }
  #modal {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #00000075;
    min-height: 100vh;
  }
`;
export default GlobalStyle;
