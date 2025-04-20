
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from './contact';
import { toast } from '@/components/ui/use-toast';

// Mock toast
jest.mock('@/components/ui/use-toast', () => ({
  toast: jest.fn(),
  useToast: () => ({ toast: jest.fn() })
}));

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders contact form', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('handles form submission with valid data', async () => {
    render(<Contact />);
    
    await userEvent.type(screen.getByLabelText(/nombre/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/mensaje/i), 'Test message');
    
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: expect.any(String),
          description: expect.any(String)
        })
      );
    });
  });

  it('displays validation errors for invalid data', async () => {
    render(<Contact />);
    
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/este campo es requerido/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<Contact />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
    });
  });
});
