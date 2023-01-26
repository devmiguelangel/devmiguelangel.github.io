import { createGlobalStyle, DefaultTheme } from 'styled-components';

// Colors
export const COLOR_MAIN = '#40d783';

export const COLOR_LIGHT = '#FFFDF7';

export const COLOR_DARK = '#1A202C';

export const COLOR_DIMMED = '#364259';

// Themes
export interface IGlobalTheme {
  theme: DefaultTheme;
}

const defaultColors = {
  main: COLOR_MAIN,
  white: COLOR_LIGHT,
  black: COLOR_DARK,
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: COLOR_LIGHT,
    secondary: COLOR_DARK,
    dimmed: COLOR_DIMMED,
    ...defaultColors,
  },
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: COLOR_DARK,
    secondary: COLOR_LIGHT,
    dimmed: COLOR_DIMMED,
    ...defaultColors,
  },
};

// Global styles
export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;

    color-scheme: light dark;
    /* color: rgba(255, 255, 255, 0.87) */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    // place-items: center;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */
  }
`;
