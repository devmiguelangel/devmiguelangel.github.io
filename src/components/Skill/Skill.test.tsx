import React from 'react';
import { screen } from '@testing-library/react';
import Skill from './Skill';
import { renderWithTheme } from '../../utils/themeProvider';

describe('<Skill />', () => {
  beforeEach(() => {
    renderWithTheme(<Skill />);
  });

  test('should render title', () => {
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
  });

  test('should render box skills', () => {
    expect(screen.getByText(/software/i)).toBeInTheDocument();
    expect(screen.getByText(/database/i)).toBeInTheDocument();
    expect(screen.getByText(/ci .* cd/i)).toBeInTheDocument();
    expect(screen.getByText(/mobile/i)).toBeInTheDocument();
  });
});
