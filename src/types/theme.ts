export type Theme = {
  mode: string,
  dark: {
    bg: {
      primary: string;
      secondary: string;
    },
    text: {
      primary: string;
      secondary: string;
    }
  },
  light: {
    bg: {
      primary: string;
      secondary: string;
    },
    text: {
      primary: string;
      secondary: string;
    }
  }
}

export interface ThemeProps {
  theme: Theme;
}