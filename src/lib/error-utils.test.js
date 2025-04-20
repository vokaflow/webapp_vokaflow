
import { errorLogger, handleAsyncError, validateForm } from './error-utils';
import { toast } from '@/components/ui/use-toast';

// Mock toast
jest.mock('@/components/ui/use-toast', () => ({
  toast: jest.fn()
}));

describe('errorLogger', () => {
  const originalConsoleError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
    jest.clearAllMocks();
  });

  it('logs error with context', () => {
    const error = new Error('Test error');
    const context = { userId: '123' };
    
    errorLogger.log(error, context);
    
    expect(console.error).toHaveBeenCalled();
    expect(toast).toHaveBeenCalledWith({
      variant: "destructive",
      title: "Error",
      description: "Ha ocurrido un error. Por favor, inténtalo de nuevo."
    });
  });
});

describe('handleAsyncError', () => {
  it('returns result for successful promise', async () => {
    const result = await handleAsyncError(Promise.resolve('success'));
    expect(result).toBe('success');
  });

  it('logs and rethrows error for failed promise', async () => {
    const error = new Error('Test error');
    await expect(handleAsyncError(Promise.reject(error))).rejects.toThrow('Test error');
    expect(toast).toHaveBeenCalled();
  });
});

describe('validateForm', () => {
  const rules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    message: { required: true }
  };

  it('returns no errors for valid data', () => {
    const data = {
      name: 'John',
      email: 'john@example.com',
      message: 'Hello'
    };
    
    const errors = validateForm(data, rules);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('returns errors for invalid data', () => {
    const data = {
      name: '',
      email: 'invalid-email',
      message: ''
    };
    
    const errors = validateForm(data, rules);
    expect(errors).toHaveProperty('name', 'Este campo es requerido');
    expect(errors).toHaveProperty('email', 'Email inválido');
    expect(errors).toHaveProperty('message', 'Este campo es requerido');
  });

  it('validates minLength rule', () => {
    const data = {
      name: 'J',
      email: 'john@example.com',
      message: 'Hello'
    };
    
    const errors = validateForm(data, rules);
    expect(errors).toHaveProperty('name', 'Mínimo 2 caracteres');
  });
});
