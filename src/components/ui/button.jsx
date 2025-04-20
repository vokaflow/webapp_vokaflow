
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#0078FF] text-white hover:bg-[#D8409F] transition-all duration-300',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border-2 border-[#0078FF] bg-background hover:bg-[#0078FF]/10 text-[#0078FF]',
        secondary: 'bg-[#D8409F] text-white hover:bg-[#D8409F]/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-[#0078FF] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[44px] px-5 py-3',
        sm: 'h-9 px-4 py-2',
        lg: 'h-[52px] px-6 py-4 text-base',
        xl: 'h-[60px] px-8 py-6 text-lg',
        icon: 'h-[44px] w-[44px]',
        mobile: 'h-[48px] px-5 py-3 text-base w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
