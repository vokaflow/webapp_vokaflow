
import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > lastScrollY.current && current > 100) {
      setIsVisible(false);
      setIsOpen(false);
    } else if (current < 100) {
      setIsVisible(true);
    }
    lastScrollY.current = current;
  });

  const menuItems = [
    { path: '/caracteristicas', label: 'Características' },
    { path: '/beneficios', label: 'Beneficios' },
    { path: '/casos-exito', label: 'Casos de Éxito' },
    { path: '/precios', label: 'Precios' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : '-100%',
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent"
    >
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/3abef47c5f736d5cc02cd02dc8a89871.png"
              alt="VokaFlow Logo"
              width={32}
              height={32}
              className="h-8 w-auto dark:hidden"
              loading="eager"
              decoding="async"
            />
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/logo_vokaflow_white.png"
              alt="VokaFlow Logo"
              width={32}
              height={32}
              className="h-8 w-auto hidden dark:block"
              loading="eager"
              decoding="async"
            />
          </NavLink>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
              aria-label="Toggle theme"
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <NavLink to="/acceso">
              <Button
                variant="outline"
                className="border-[#0078FF] text-[#0078FF] hover:bg-[#0078FF]/10"
              >
                Acceso
              </Button>
            </NavLink>
            <NavLink to="/registro">
              <Button
                className="bg-[#D8409F] text-white hover:bg-[#D8409F]/90"
              >
                Registro
              </Button>
            </NavLink>
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

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4"
          >
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "block text-sm font-medium transition-colors hover:text-primary",
                      isActive ? "text-primary" : "text-foreground"
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 space-y-2">
                <NavLink to="/acceso" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-[#0078FF] text-[#0078FF] hover:bg-[#0078FF]/10"
                  >
                    Acceso
                  </Button>
                </NavLink>
                <NavLink to="/registro" className="block">
                  <Button
                    className="w-full bg-[#D8409F] text-white hover:bg-[#D8409F]/90"
                  >
                    Registro
                  </Button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
