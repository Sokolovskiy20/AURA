import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const ContactsBlock = () => {
  return (
    <section id="contacts" style={{ backgroundColor: 'var(--bg-primary)', padding: '120px 0 80px' }}>
      <div className="container">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="title-section" style={{ marginBottom: '20px' }}>Контакты</h2>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>Мы готовы обсудить ваш будущий дом.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ backgroundColor: 'var(--bg-card)', padding: '60px', borderRadius: 'var(--radius-lg)' }}>
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }} style={{ backgroundColor: 'var(--bg-card)', padding: '60px', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="title-h2" style={{ marginBottom: "40px", color: "#fff" }}>Написать нам</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Имя" className="form-input" />
              <input type="tel" placeholder="Телефон" className="form-input" />
              <textarea placeholder="Опишите ваш объект (площадь, стадия ремонта)" className="form-input" style={{ minHeight: '120px', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', padding: '18px', fontSize: '1.1rem' }}>Пригласить инженера</button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactsBlock;
