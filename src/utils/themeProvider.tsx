import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { lightTheme } from '../components/styles/theme';

export const renderWithTheme = (component: React.ReactElement, options?: RenderOptions): RenderResult => {
  const Wrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
};
