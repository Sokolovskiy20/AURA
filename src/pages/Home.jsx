import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';
import ContactsBlock from '../components/ContactsBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Home = () => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>AURA | Умный Дом Премиум-класса</title>
      </Helmet>
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#000' }}>
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.05 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 3, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        >
          <img src="./images/apple_hero.jpg" alt="AURA Premium Smart Home" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </motion.div>
        
        {/* Gradients for readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '10vh', textAlign: 'center' }}>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.2rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px', color: '#fff' }}>
              Пространство <br/>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>которое чувствует ваш ритм</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px', lineHeight: 1.5 }}>
              Интеллектуальный дом, полностью скрытый от глаз. Ультимативный комфорт и приватность на высоте.
            </motion.p>
            <motion.div variants={fadeUp} className="mobile-stack" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link to="/contacts" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', padding: '16px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1.1rem' }}>
                Запросить консультацию
              </Link>
              <Link to="/products" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '16px 32px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', backdropFilter: 'blur(10px)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                Смотреть продукты <span style={{ fontSize: '1.2em' }}>&rsaquo;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ADVANTAGES SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section">Преимущества</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
              Мы внедряем интеллектуальные технологии, делая вашу жизнь максимально комфортной.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left' }}>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ height: '100%' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%' }}>
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src="./images/apple_security.jpg" alt="Privacy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)' }}></div>
                </div>
                <div style={{ padding: '0 40px 50px 40px', position: 'relative', zIndex: 2, marginTop: '-30px' }}>
                  <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', opacity: 0.3, marginBottom: '10px', lineHeight: 1 }}>01</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>Безопасность</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Многоуровневая система защиты.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} transition={{ delay: 0.1 }} style={{ height: '100%' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%' }}>
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src="./images/apple_adv.jpg" alt="Aesthetics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)' }}></div>
                </div>
                <div style={{ padding: '0 40px 50px 40px', position: 'relative', zIndex: 2, marginTop: '-30px' }}>
                  <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', opacity: 0.3, marginBottom: '10px', lineHeight: 1 }}>02</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>Контроль</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Управление из любой точки мира.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} transition={{ delay: 0.2 }} style={{ height: '100%' }}>
              <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', height: '100%' }}>
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src="./images/apple_hero.jpg" alt="Reliability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)' }}></div>
                </div>
                <div style={{ padding: '0 40px 50px 40px', position: 'relative', zIndex: 2, marginTop: '-30px' }}>
                  <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', opacity: 0.3, marginBottom: '10px', lineHeight: 1 }}>03</div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>Приватность</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Система работает только локально.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '140px', paddingBottom: '140px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '100px' }}>
            <h2 className="title-section">Продукты</h2>
          </motion.div>
        </div>

        <div>
          {/* Product 1: Lighting */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', marginBottom: '10px' }}>
            <img src="./images/apple_light.jpg" alt="Lighting" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px', color: '#fff', textAlign: 'left' }}>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 400, marginBottom: '16px', textTransform: 'uppercase' }}>Освещение</h3>
                <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
                  <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
                    Мягкий и ровный свет создаст нужную атмосферу.<br/>Умное управление, сценарии, энергосбережение.
                  </p>
                  <div style={{ flexShrink: 0 }}>
                    <Link to="/products/lighting" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600 }}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 2: Climate */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', marginBottom: '10px' }}>
            <img src="./images/apple_adv.jpg" alt="Climate" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px', color: '#fff', textAlign: 'left' }}>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 400, marginBottom: '16px', textTransform: 'uppercase' }}>Климат-контроль</h3>
                <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
                  <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
                    Умный климат-контроль создаст идеальную температуру.<br/>Умное управление, сценарии, энергосбережение.
                  </p>
                  <div style={{ flexShrink: 0 }}>
                    <Link to="/products/climate" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600 }}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 3: Security */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
            <img src="./images/apple_security.jpg" alt="Security" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px', color: '#fff', textAlign: 'left' }}>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 400, marginBottom: '16px', textTransform: 'uppercase' }}>Безопасность</h3>
                <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
                  <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
                    Надежная система безопасности обеспечит защиту.<br/>Умное управление, сценарии, энергосбережение.
                  </p>
                  <div style={{ flexShrink: 0 }}>
                    <Link to="/products/security" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600 }}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* NEW: PROJECTS SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="title-section">Проекты</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem', textWrap: 'balance' }}>
              Мы создаем интеллектуальные пространства, опережающие время. Технологии, которые работают безупречно.
            </p>
          </motion.div>

          <div className="hide-scrollbar mobile-vertical-carousel" style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '40px', scrollSnapType: 'x mandatory', margin: '0 -22px', padding: '0 22px 40px 22px' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ minWidth: '320px', width: '85%', maxWidth: '800px', flexShrink: 0, scrollSnapAlign: 'start' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px', height: '450px' }}>
                <img src="./images/forest_hero_apple_1782971244210.jpg" alt="Forest Estate" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="title-card">Загородная резиденция «Forest Estate»</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>Технологическая экосистема в гармонии с природой. Комплексная<br/>автоматизация климата, систем питания и биодинамического освещения.</p>
              <Link to="/projects/forest-estate" style={{ color: 'var(--accent-gold)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.9rem' }}>Подробнее &rsaquo;</Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} transition={{ delay: 0.1 }} style={{ minWidth: '320px', width: '85%', maxWidth: '800px', flexShrink: 0, scrollSnapAlign: 'start' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px', height: '450px' }}>
                <img src="./images/skyline_hero_hq_1782971963536.jpg" alt="AURA Skyline" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="title-card">Пентхаус «AURA Skyline»</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>Абсолютный контроль на высоте птичьего полета. Интеграция сотен<br/>скрытых сенсоров в премиальный интерьер и умное остекление.</p>
              <Link to="/projects/aura-skyline" style={{ color: 'var(--accent-gold)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.9rem' }}>Подробнее &rsaquo;</Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} transition={{ delay: 0.2 }} style={{ minWidth: '320px', width: '85%', maxWidth: '800px', flexShrink: 0, scrollSnapAlign: 'start' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px', height: '450px' }}>
                <img src="./images/azure_hero_premium.jpg" alt="Azure Coast" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="title-card">Резиденция «Azure Coast»</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>Слияние высоких технологий и стихии океана. Адаптивный морской климат,<br/>автоматические панели от тропического солнца и синхронизированный звук.</p>
              <Link to="/projects/azure-coast" style={{ color: 'var(--accent-gold)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.9rem' }}>Подробнее &rsaquo;</Link>
            </motion.div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/projects" className="btn btn-outline">Все проекты</Link>
          </div>
        </div>
      </section>

      {/* 4. REVIEWS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section">Отзывы</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
              Мы ценим каждого клиента. Их слова говорят сами за себя.
            </p>
          </motion.div>

          <div className="reviews-grid">
            {[
              { text: "Умный дом превзошел все мои ожидания. Ребята все сделали быстро и качественно.", author: "Александр, Пентхаус" },
              { text: "Система работает безупречно. Очень доволен результатом.", author: "Евгений, Резиденция" },
              { text: "Спасибо команде AURA за профессионализм. Теперь мой дом по-настоящему умный.", author: "Михаил, Апартаменты" }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.8 } } }}
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(229,195,135,0.1)',
                  padding: '50px 40px', 
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(229,195,135,0.4)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 3 21l-2-2.223c2.473-1.018 4.356-3.155 4.887-5.777H0V3h9.983zm14.017 0v7.391c0 5.704-3.731 9.57-6.983 10.609l-2-2.223c2.473-1.018 4.356-3.155 4.888-5.777h-5.888V3h9.983z"/>
                  </svg>
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '40px', flex: 1, fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: '#fff', lineHeight: 1.6 }}>{review.text}</p>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>{review.author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: FAQ SECTION */}
      <FAQ />

      {/* 5. FOOTER CONTACT FORM */}
      <ContactsBlock />

    </div>
  );
};

export default Home;
