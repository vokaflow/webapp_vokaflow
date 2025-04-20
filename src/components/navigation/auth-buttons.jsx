
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIntl } from 'react-intl';

export function AuthButtons({ isMobile = false }) {
  const intl = useIntl();

  return (
    <div className={`${isMobile ? 'space-y-2' : 'flex items-center space-x-4'}`}>
      <NavLink to="/acceso" className={isMobile ? "block w-full" : ""}>
        <Button
          variant="outline"
          className={cn(
            "border-[#0078FF] text-[#0078FF] hover:bg-[#0078FF]/10",
            isMobile && "w-full text-base py-2.5"
          )}
        >
          {intl.formatMessage({ id: 'auth.login' })}
        </Button>
      </NavLink>
      <NavLink to="/registro" className={isMobile ? "block w-full" : ""}>
        <Button
          className={cn(
            "bg-[#D8409F] text-white hover:bg-[#D8409F]/90",
            isMobile && "w-full text-base py-2.5"
          )}
        >
          {intl.formatMessage({ id: 'auth.register' })}
        </Button>
      </NavLink>
    </div>
  );
}
