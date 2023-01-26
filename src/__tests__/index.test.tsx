import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';

describe('Home', () => {
  it('should render the sign in buttons', () => {
    render(<Home />);

    const signInButton = screen.getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute('href', '/sign-in');

    expect(screen.getByRole('link', { name: /Sign In/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign In/i })).toHaveClass('rounded-md bg-blue-600');
  });

  it('should render the sign up buttons', () => {
    render(<Home />);

    const signUpButton = screen.getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute('href', '/sign-up');

    expect(screen.getByRole('link', { name: /Sign Up/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Sign Up/i })).toHaveClass('rounded-md bg-white');
  });

  it('renders the SVG element', () => {
    render(<Home />);
    const svg = screen.getByTestId('svg-element');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 1155 678');
  });
});
