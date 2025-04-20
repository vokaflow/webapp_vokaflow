
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { AuthButtons } from './auth-buttons';

export function MobileMenu({ isOpen, menuItems, setIsOpen }) {
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location, setIsOpen]);

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return isOpen ? (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden mt-2 bg-background/95 backdrop-blur-sm rounded-b-lg shadow-lg border-t"
    >
      <div className="py-2 space-y-1">
        {menuItems.map((item, index) => (
          <div key={item.path} className="border-b border-border/50 last:border-0">
            <div className="flex items-center justify-between">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "block text-base font-medium transition-colors hover:text-primary px-4 py-2.5",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
                onClick={() => {
                  if (!item.submenu) setIsOpen(false);
                }}
              >
                {item.label}
              </NavLink>
              {item.submenu && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mr-2"
                  onClick={() => toggleSubmenu(index)}
                >
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      activeSubmenu === index ? "rotate-180" : ""
                    )} 
                  />
                </Button>
              )}
            </div>
            {item.submenu && activeSubmenu === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-muted/30"
              >
                {item.submenu.map((subItem) => (
                  <NavLink
                    key={subItem.path}
                    to={subItem.path}
                    className={({ isActive }) =>
                      cn(
                        "block text-sm transition-colors hover:text-primary px-8 py-2.5 border-t border-border/30",
                        isActive ? "text-primary bg-primary/5" : "text-foreground"
                      )
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </div>
        ))}
        <div className="px-4 py-3">
          <AuthButtons isMobile={true} />
        </div>
      </div>
    </motion.div>
  ) : null;
}
