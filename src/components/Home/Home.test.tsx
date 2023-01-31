import React from 'react';
import { screen } from '@testing-library/react';
import Home from './Home';
import { renderWithTheme } from '../../utils/themeProvider';

describe('<Home />', () => {
  beforeEach(() => {
    renderWithTheme(<Home />);
  });

  test('should render title name', () => {
    expect(screen.getByText(/miguel angel/i)).toBeInTheDocument();
  });

  test('should render title position', () => {
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument();
  });
});
