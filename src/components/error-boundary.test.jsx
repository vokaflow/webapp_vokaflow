
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary, withErrorBoundary } from './error-boundary';

// Mock component that throws an error
const ThrowError = () => {
  throw new Error('Test error');
  return null;
};

// Mock component for testing withErrorBoundary HOC
const TestComponent = () => <div>Test Component</div>;

describe('ErrorBoundary', () => {
  // Suppress console.error for cleaner test output
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  
  afterAll(() => {
    console.error = originalError;
  });

  it('renders children when there is no error', () => {
    const { container } = render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(container).toHaveTextContent('Test content');
  });

  it('renders error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Algo salió mal')).toBeInTheDocument();
    expect(screen.getByText('Hemos detectado un error inesperado. Nuestro equipo ha sido notificado.')).toBeInTheDocument();
  });

  it('allows user to reload the page when there is an error', () => {
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
      writable: true
    });

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByText('Recargar página'));
    expect(mockReload).toHaveBeenCalled();
  });

  it('withErrorBoundary HOC wraps component with ErrorBoundary', () => {
    const WrappedComponent = withErrorBoundary(TestComponent);
    const { container } = render(<WrappedComponent />);
    expect(container).toHaveTextContent('Test Component');
  });
});
