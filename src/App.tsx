import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Contact from './components/Contact';
// Styles
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/theme';
import GlobalFonts from './components/styles/fonts';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = (): void => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalFonts />
        <GlobalStyles />

        <Header toggleTheme={toggleTheme} />

        <Home />
        <AboutMe />
        <Skill />
        <Contact />
      </>
    </ThemeProvider>
  );
};

export default App;
