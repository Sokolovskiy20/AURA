import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const Contacts = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: '#000', color: '#f5f5f7', paddingTop: '140px', overflow: 'hidden', minHeight: '100vh', position: 'relative' }}>
      <Helmet>
        <title>Контакты | AURA</title>
      </Helmet>
      
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '600px', background: 'radial-gradient(ellipse at top, rgba(229,195,135,0.15) 0%, rgba(0,0,0,0) 80%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="title-hero" style={{ marginBottom: '20px' }}>Контакты</h1>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Мы готовы обсудить ваш будущий дом.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto', paddingBottom: '140px' }}>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ backgroundColor: 'var(--bg-secondary)', padding: 'clamp(30px, 5vw, 60px)', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="title-h2" style={{ marginBottom: "40px" }}>Офис в Дубае</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <div className="text-sm" style={{ color: "var(--text-secondary)", marginBottom: '8px' }}>Адрес</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>Dubai Marina, Marina Plaza, Office 1402</div>
              </div>
              <div>
                <div className="text-sm" style={{ color: "var(--text-secondary)", marginBottom: '8px' }}>Телефон</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>+971 4 000 0000</div>
              </div>
              <div>
                <div className="text-sm" style={{ color: "var(--text-secondary)", marginBottom: '8px' }}>Email</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>hello@aura.space</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }} style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)', padding: 'clamp(30px, 5vw, 60px)', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="title-h2" style={{ marginBottom: "40px", color: "#fff" }}>Написать нам</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Имя" className="form-input" />
              <input type="tel" placeholder="Телефон" className="form-input" />
              <textarea placeholder="Опишите ваш объект (площадь, стадия ремонта)" className="form-input" style={{ minHeight: '120px', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>Пригласить инженера</button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contacts;
