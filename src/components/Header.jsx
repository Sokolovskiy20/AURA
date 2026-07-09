import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать меню при смене роута
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Продукты', path: '/products' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Команда', path: '/team' },
    { name: 'Контакты', path: '/contacts' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 105, /* Увеличен zIndex чтобы быть поверх overlay */
          padding: isScrolled ? '12px 0' : '20px 0',
          backgroundColor: isScrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
          transition: 'var(--transition-smooth)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Link to="/" className="title-card" style={{ letterSpacing: "-0.02em", color: "var(--text-primary)", zIndex: 102 }}>
            AURA
          </Link>

          {/* Desktop Nav */}
          <nav className="mobile-hidden" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 400,
                  color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mobile-hidden">
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              Связаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="desktop-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              width: '40px', 
              height: '40px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '6px',
              zIndex: 102,
              position: 'relative'
            }}
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(5,5,5,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 101,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginBottom: '50px' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  style={{ 
                    fontSize: '1.6rem', 
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link to="/contacts" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.2rem', width: '100%', maxWidth: '300px' }}>
              Связаться с нами
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
