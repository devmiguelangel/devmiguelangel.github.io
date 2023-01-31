import React from 'react';
import { screen } from '@testing-library/react';
import Menu from './Menu';
import { renderWithTheme } from '../../utils/themeProvider';

describe('<Menu />', () => {
  test('should render component', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
