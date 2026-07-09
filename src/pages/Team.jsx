import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';
import ContactsBlock from '../components/ContactsBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Team = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#000', color: '#f5f5f7' }}>
      <Helmet>
        <title>Команда | AURA</title>
      </Helmet>
      
      {/* 1. CINEMATIC HERO */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
        <motion.div 
          initial={{ scale: 1.05 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 3, ease: 'easeOut' }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        >
          <img src="./images/forest_night_hq_1782971535534.jpg" alt="AURA Team Background" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, #000 100%)' }}></div>
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ zIndex: 1, textAlign: 'center', maxWidth: '1000px', padding: '0 20px' }}>
          <motion.div variants={fadeUp} style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-gold)', marginBottom: '30px' }}>
            ЗАКРЫТОЕ ЭКСПЕРТНОЕ БЮРО АВТОМАТИЗАЦИИ
          </motion.div>
          <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.2rem, 6vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: '900px', margin: '0 auto', color: '#f5f5f7' }}>
            Команда, которая делает технологии невидимыми
          </motion.h1>
          <motion.div variants={fadeUp} style={{ marginTop: '50px' }}>
            <Link to="/contacts" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', padding: '16px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1.1rem' }}>
              Запросить консультацию
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 1.5 ПРОЦЕСС ВНЕДРЕНИЯ */}
      <section className="section" style={{ backgroundColor: '#000', paddingTop: '120px' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#f5f5f7' }}>Процесс внедрения</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem', color: '#86868b' }}>
              От концепции до полного растворения технологий в интерьере
            </p>
          </motion.div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '25px', bottom: '25px', left: '24px', width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', overflow: 'hidden', zIndex: 0 }}>
              <motion.div 
                animate={{ y: ['-100%', '300%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                style={{ 
                  width: '100%', height: '40%', 
                  background: 'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)', 
                  boxShadow: '0 0 15px var(--accent-gold)' 
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {[
                { step: "01", title: "Аудит и концепция", desc: "Анализируем архитектурный проект, выявляем потребности и формируем концепцию невидимой автоматизации." },
                { step: "02", title: "Проектирование", desc: "Разрабатываем детальную инженерную документацию, координируясь с архитекторами и дизайнерами." },
                { step: "03", title: "Монтаж", desc: "Осуществляем ювелирный монтаж скрытых систем, датчиков и кабельных трасс с миллиметровой точностью." },
                { step: "04", title: "Программирование", desc: "Настраиваем индивидуальные сценарии, интерфейсы и логику работы системы под ваш ритм жизни." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 1 }}>
                  <motion.div 
                    animate={{ boxShadow: ['0 0 0px rgba(229,195,135,0)', '0 0 25px rgba(229,195,135,0.4)', '0 0 0px rgba(229,195,135,0)'] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                    style={{ 
                      width: '50px', height: '50px', borderRadius: '50%', 
                      backgroundColor: '#000', 
                      border: '2px solid rgba(229,195,135,0.3)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      color: 'var(--accent-gold)', fontWeight: 600, fontSize: '1.1rem', 
                      flexShrink: 0, position: 'relative', zIndex: 2 
                    }}
                  >
                    <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%', opacity: 0.5 }}></div>
                    <span style={{ position: 'relative', zIndex: 1, backgroundColor: '#000', padding: '4px' }}>{item.step}</span>
                  </motion.div>
                  
                  <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                    variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { delay: idx * 0.2, duration: 0.8 } } }}
                    style={{ 
                      flex: 1,
                      backgroundColor: 'var(--bg-card)', 
                      padding: '40px', 
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255,255,255,0.03)',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}
                  >
                    <h3 className="title-card">{item.title}</h3>
                    <p style={{ color: '#86868b', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEAM UNIFORM GRID */}
      <section style={{ padding: '100px 0 150px', backgroundColor: '#000' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '80px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>Лица AURA</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {[
              { name: 'Александр Волков', role: 'Основатель, Главный архитектор систем', img: './images/team_james_1782934033751.jpg', roleColor: 'var(--accent-gold)' },
              { name: 'Елена Смирнова', role: 'Шеф-дизайнер интеграций', img: './images/team_emily_1782934061766.jpg', roleColor: '#86868b' },
              { name: 'Дмитрий Морозов', role: 'Ведущий инженер-программист', img: './images/team_david_1782934042450.jpg', roleColor: '#86868b' },
              { name: 'Михаил Лебедев', role: 'Руководитель инсталляций', img: './images/team_michael_1782934051902.jpg', roleColor: '#86868b' },
              { name: 'Константин Орлов', role: 'Специалист по сетям и безопасности', img: './images/team_robert_1782934070039.jpg', roleColor: '#86868b' },
              { name: 'Анна Соколова', role: 'Директор по клиентскому сервису', img: './images/team_sarah_1782934078062.jpg', roleColor: '#86868b' }
            ].map((member, idx) => (
              <motion.div key={idx} variants={fadeUp} 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  position: 'relative', 
                  height: '450px', 
                  backgroundColor: '#1d1d1f',
                  cursor: 'pointer'
                }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40%',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(229,195,135,0) 0%, rgba(229,195,135,0.8) 50%, rgba(229,195,135,0) 100%)',
                  boxShadow: '0 4px 15px rgba(229,195,135,0.4)',
                  zIndex: 2
                }}></div>
                <motion.img 
                  src={member.img} 
                  alt={member.name} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, zIndex: 0, position: 'relative' }} 
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)', zIndex: 1 }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: member.roleColor, marginBottom: '4px', fontWeight: 600 }}>{member.role}</div>
                  <h3 className="title-card">{member.name}</h3>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BENTO BLOCK */}
      <section style={{ padding: '100px 0', backgroundColor: '#000' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#f5f5f7' }}>Доверие к нам</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {[
              { width: 'calc(33.333% - 16px)', title: '10+ лет опыта', text: 'Каждый инженер прошел сертификацию для работы с протоколами автоматизации премиум-класса.' },
              { width: 'calc(33.333% - 16px)', title: 'Закрытое бюро', text: 'Мы не работаем на массовый рынок. Каждый проект — это штучная работа.' },
              { width: 'calc(33.333% - 16px)', title: 'Конфиденциальность', text: 'Строго соблюдаем NDA. Проекты ваших систем и планировки остаются строго конфиденциальными.' },
              { width: 'calc(50% - 12px)', title: 'Эстетика', text: 'Эстетика абсолютной «невидимости». Датчики, кабели скрыты от глаз, оставляя только чистый дизайн интерьера.' },
              { width: 'calc(50% - 12px)', title: 'Простота', text: 'Никаких перегруженных пультов. Управление климатом, светом и безопасностью интуитивно.' }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeUp} style={{ 
                minWidth: '300px', 
                flex: `1 1 ${card.width}`, 
                backgroundColor: 'var(--bg-card)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                borderTop: '1px solid rgba(229,195,135,0.1)',
                borderRight: '1px solid rgba(229,195,135,0.1)',
                borderBottom: '1px solid rgba(229,195,135,0.1)',
                borderLeft: '1px solid rgba(229,195,135,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                borderRadius: 'var(--radius-lg)', 
                padding: '40px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                textAlign: 'left' 
              }}>
                <h3 className="title-card">{card.title}</h3>
                <p style={{ fontSize: '1rem', color: '#86868b', lineHeight: 1.6 }}>{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 4. PROJECTS CAROUSEL */}
      <section style={{ padding: '100px 0', backgroundColor: '#000' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#f5f5f7', margin: 0 }}>Избранные проекты</h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            <button 
              onClick={scrollLeft} 
              aria-label="Прокрутить влево"
              style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: '#fff', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} 
              onMouseOver={(e) => {e.currentTarget.style.borderColor='var(--accent-gold)'; e.currentTarget.style.color='var(--accent-gold)'}} 
              onMouseOut={(e) => {e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'; e.currentTarget.style.color='#fff'}}
            >
              ←
            </button>
            <button 
              onClick={scrollRight} 
              aria-label="Прокрутить вправо"
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: '#fff', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} 
              onMouseOver={(e) => {e.currentTarget.style.borderColor='var(--accent-gold)'; e.currentTarget.style.color='var(--accent-gold)'}} 
              onMouseOut={(e) => {e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'; e.currentTarget.style.color='#fff'}}
            >
              →
            </button>

            <div ref={carouselRef} className="hide-scrollbar" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '40px', scrollSnapType: 'x mandatory', margin: '0 -20px', padding: '0 20px 40px 20px', WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}>
            {[
              { 
                title: 'ЗАГОРОДНАЯ РЕЗИДЕНЦИЯ «FOREST ESTATE»', 
                img: './images/forest_hero_apple_1782971244210.jpg', 
                desc: 'Технологическая экосистема в гармонии с природой.',
                link: '/projects/forest-estate'
              },
              { 
                title: 'ПЕНТХАУС «AURA SKYLINE»', 
                img: './images/skyline_hero_hq_1782971963536.jpg', 
                desc: 'Абсолютный контроль на высоте птичьего полета.',
                link: '/projects/aura-skyline'
              },
              { 
                title: 'РЕЗИДЕНЦИЯ «AZURE COAST»', 
                img: './images/azure_hero_premium.jpg', 
                desc: 'Слияние высоких технологий и стихии океана.',
                link: '/projects/azure-coast'
              }
            ].map((proj, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.1 }} style={{ minWidth: '350px', width: '450px', flexShrink: 0, scrollSnapAlign: 'start', position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '450px', backgroundColor: '#1d1d1f', textAlign: 'left' }}>
                <Link to={proj.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 80%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <h3 style={{ color: '#f5f5f7', fontSize: '1.2rem', fontWeight: 600, marginBottom: '12px', lineHeight: 1.4 }}>{proj.title}</h3>
                      <p style={{ color: '#86868b', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px' }}>{proj.desc}</p>
                      <div style={{ color: 'var(--accent-gold)', fontWeight: 500, textTransform: 'uppercase', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>ПОДРОБНЕЕ &rsaquo;</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* 4.5 REVIEWS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section" style={{ color: '#f5f5f7' }}>Отзывы</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem', color: '#86868b' }}>
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
                  borderTop: '1px solid rgba(229,195,135,0.1)',
                  borderRight: '1px solid rgba(229,195,135,0.1)',
                  borderBottom: '1px solid rgba(229,195,135,0.1)',
                  borderLeft: '1px solid rgba(229,195,135,0.1)',
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



      {/* 6. FAQ */}
      <FAQ />

      {/* 7. CONTACTS */}
      <ContactsBlock />

    </div>
  );
};

export default Team;
