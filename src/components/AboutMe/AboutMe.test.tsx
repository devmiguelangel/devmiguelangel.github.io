import React from 'react';
import { screen } from '@testing-library/react';
import AboutMe from './AboutMe';
import { renderWithTheme } from '../../utils/themeProvider';

describe('<AboutMe />', () => {
  beforeEach(() => {
    renderWithTheme(<AboutMe />);
  });

  test('should render title', () => {
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  test('should render photo', () => {
    expect(screen.getByAltText(/snapshot/i)).toBeInTheDocument();
  });

  test('should render CV link', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
