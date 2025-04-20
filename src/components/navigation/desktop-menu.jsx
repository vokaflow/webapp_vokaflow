
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DesktopMenu({ menuItems, activeSubmenu, handleMouseEnter, handleMouseLeave }) {
  return (
    <nav className="hidden md:flex items-center justify-center space-x-6 absolute left-1/2 -translate-x-1/2">
      {menuItems.map((item, index) => (
        <div
          key={item.path}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                "text-base font-medium transition-all duration-300 relative flex items-center whitespace-nowrap px-3 py-1.5 rounded-md",
                "hover:text-[#D8409F] hover:bg-[#D8409F]/5",
                isActive ? "text-[#D8409F] bg-[#D8409F]/10" : "text-foreground",
                "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#D8409F] after:left-0 after:-bottom-2",
                "after:scale-x-0 after:origin-right after:transition-transform duration-300",
                "hover:after:scale-x-100 hover:after:origin-left"
              )
            }
          >
            {item.label}
            {item.submenu && (
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            )}
          </NavLink>

          <AnimatePresence>
            {item.submenu && activeSubmenu === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg py-2 z-50"
              >
                {item.submenu.map((subItem) => (
                  <NavLink
                    key={subItem.path}
                    to={subItem.path}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-2.5 text-sm transition-all duration-300",
                        "hover:bg-[#D8409F]/10 hover:text-[#D8409F]",
                        isActive ? "text-[#D8409F] bg-[#D8409F]/10" : "text-foreground"
                      )
                    }
                  >
                    {subItem.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
