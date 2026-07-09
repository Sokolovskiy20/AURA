import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Страница не найдена | AURA</title>
      </Helmet>
      <section 
        className="section" 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#000',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(229,195,135,0.05) 0%, rgba(0,0,0,0) 50%)', zIndex: 0, pointerEvents: 'none' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px' }}
        >
          <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', fontWeight: 400, color: 'var(--accent-gold)', lineHeight: 1, marginBottom: '20px' }}>
            404
          </h1>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#f5f5f7', marginBottom: '20px' }}>
            Страница не найдена
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#86868b', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Возможно, она была перемещена или удалена. Вернитесь на главную, чтобы продолжить знакомство с технологиями AURA.
          </p>
          <Link 
            to="/" 
            style={{ 
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'var(--accent-gold)',
              color: '#000',
              fontWeight: 600,
              borderRadius: '30px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#d4b373';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            На главную
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default NotFound;
