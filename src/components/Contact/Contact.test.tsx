import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeConsumer } from 'styled-components';
import Contact from './Contact';
import { lightTheme } from '../styles/theme';

describe('<Contact />', () => {
  beforeEach(() => {
    ThemeConsumer._currentValue = lightTheme;
    render(<Contact />);
  });

  test('should render title', () => {
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('should render contact form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();

    expect(screen.getByRole('textbox', { name: 'name' })).toHaveAttribute('placeholder', 'Your name');
    expect(screen.getByRole('textbox', { name: 'email' })).toHaveAttribute('placeholder', 'Your email');
    expect(screen.getByRole('textbox', { name: 'subjects' })).toHaveAttribute('placeholder', 'Subjects');
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'send' })).toBeInTheDocument();
  });
});
