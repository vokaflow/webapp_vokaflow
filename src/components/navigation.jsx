
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLogo } from './navigation/nav-logo';
import { DesktopMenu } from './navigation/desktop-menu';
import { MobileMenu } from './navigation/mobile-menu';
import { ThemeToggle } from './navigation/theme-toggle';
import { AuthButtons } from './navigation/auth-buttons';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import { useMenuItems } from './navigation/menu-items';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState(null);
  const isVisible = useScrollVisibility(100);
  const menuItems = useMenuItems();

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : '-100%',
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center space-x-4 z-10">
            <NavLogo />
            <ThemeToggle />
          </div>

          <DesktopMenu 
            menuItems={menuItems}
            activeSubmenu={activeSubmenu}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />

          <div className="flex items-center space-x-4 z-10">
            <div className="hidden md:flex items-center">
              <AuthButtons />
            </div>

            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          menuItems={menuItems}
          setIsOpen={setIsOpen}
        />
      </div>
    </motion.nav>
  );
}
