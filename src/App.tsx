import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from './components/Home';
import Header from './components/Header';
// Styles
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/theme';
import GlobalFonts from './components/styles/fonts';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = (): void => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalFonts />
        <GlobalStyles />

        <Header />

        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
