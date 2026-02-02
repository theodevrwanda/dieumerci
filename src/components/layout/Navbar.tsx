import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import logo from '@/assets/logo.svg';
import logoBlack from '@/assets/logo-black.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed top-6 left-1/2 z-50 flex items-center justify-between px-6 py-2 transition-all duration-300 transform -translate-x-1/2 rounded-full border border-black/5 dark:border-white/10 ${isScrolled || isMobileMenuOpen
          ? 'glass-navbar w-[90%] md:w-auto min-w-[320px] md:min-w-[600px] bg-white/80 dark:bg-black/50 shadow-sm'
          : 'glass-navbar w-[90%] md:w-auto min-w-[320px] md:min-w-[600px] bg-white/50 dark:bg-black/30'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="mr-8 hover:opacity-80 transition-opacity flex items-center">
          <img
            src={theme === 'dark' ? logo : logoBlack}
            alt="NDM Logo"
            className="h-8 w-auto min-w-[100px] object-contain"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-5 py-2 text-sm font-medium transition-colors rounded-full duration-300 ease-in-out group"
            >
              <span className={`relative z-10 transition-colors duration-300 ${isActive(item.path) ? 'text-black dark:text-white' : 'text-gray-400 group-hover:text-foreground'
                }`}>
                {item.label}
              </span>

              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-pill"
                  className="absolute inset-0 bg-white/10 dark:bg-white/10 rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {/* Hover effect for non-active items */}
              {!isActive(item.path) && (
                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 ml-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 hover:bg-white/10 text-foreground transition-colors"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          <Link to="/chat" className="hidden md:flex">
            <Button variant="default" className="rounded-full px-6 bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black font-semibold transition-all">
              Let's Talk <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-full w-10 h-10 hover:bg-white/10 text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 p-4 rounded-3xl glass-navbar md:hidden border border-white/10"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(item.path)
                    ? 'bg-white/10 text-foreground'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/chat" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-xl mt-2 bg-white text-black hover:bg-white/90">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;