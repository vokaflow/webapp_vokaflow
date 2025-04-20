
import React from 'react';
import { cn } from '@/lib/utils';

export function LoadingSpinner({ className }) {
  return (
    <div className="flex items-center justify-center min-h-[200px]" role="status">
      <div
        className={cn(
          "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          "text-[#0078FF] dark:text-[#D8409F]",
          className
        )}
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
}
