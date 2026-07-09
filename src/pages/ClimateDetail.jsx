import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import ContactsBlock from '../components/ContactsBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const ClimateDetail = () => {
  const [isWinter, setIsWinter] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* 1. HERO BLOCK */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '600px', background: 'radial-gradient(ellipse at top, rgba(229,195,135,0.10) 0%, rgba(0,0,0,0) 80%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h1 className="title-hero" style={{ marginBottom: '20px' }}>Климат-контроль</h1>
            <p className="subtitle">Горный воздух и идеальная температура в любой сезон. Забудьте о духоте.</p>
            <div style={{ marginTop: '30px' }}>
              <button className="btn btn-primary" onClick={() => document.getElementById('contacts').scrollIntoView({behavior: 'smooth'})}>Рассчитать стоимость</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}
          >
            <img src="./images/prod_climate.jpg" alt="Климат-контроль" style={{ width: '100%', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      {/* 2. ТЕХНОЛОГИИ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '120px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section" style={{  }}>Технологии, которые заботятся о вас</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Инновации, скрытые в архитектуре
            </p>
          </motion.div>

          <div className="flex-col-mobile" style={{ display: 'flex', flexDirection: 'row', gap: '20px', height: '400px', width: '100%' }}>
            {[
              { title: "Невидимые решетки", desc: "Воздух подается через щелевые диффузоры, которые визуально сливаются с архитектурой потолка." },
              { title: "Мониторинг CO2", desc: "Датчики углекислого газа постоянно измеряют качество воздуха и автоматически запускают приток свежего." },
              { title: "Бесшумность", desc: "Уровень шума не превышает 15 дБ. Система работает абсолютно незаметно даже ночью." },
              { title: "Зональный контроль", desc: "Индивидуальная температура и влажность в каждой комнате по вашему желанию." }
            ].map((tech, idx) => {
              const isHovered = hoveredCard === idx;
              const isAnyHovered = hoveredCard !== null;
              const flexValue = isHovered ? 4 : (isAnyHovered ? 1 : 1);

              return (
              <motion.div 
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.8 } } }}
                style={{ 
                  flex: flexValue,
                  transition: 'flex 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  backgroundColor: 'var(--bg-card)', 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(229,195,135,0.1)',
                  padding: '40px 30px', 
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  textAlign: 'left'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)', opacity: isHovered ? 0.8 : 0.2, transition: 'opacity 0.6s' }}></div>
                
                <div style={{ fontSize: '3rem', color: 'var(--accent-gold)', opacity: isHovered ? 0.3 : 0.1, marginBottom: '30px', lineHeight: 1, transition: 'opacity 0.6s' }}>0{idx + 1}</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 className="title-card" style={{ marginBottom: "16px", minHeight: "60px", display: "flex", alignItems: "flex-start" }}>{tech.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{tech.desc}</p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* 3. СЦЕНАРИИ (ЛЕТО / ЗИМА) */}
      <section style={{ backgroundColor: '#000', minHeight: '100vh', overflowX: 'hidden' }}>
      <Helmet>
        <title>Климат-контроль | Продукты AURA</title>
        <meta name="description" content="Умный климат-контроль AURA. Идеальная погода в вашем доме." />
      </Helmet>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(229,195,135,0.05) 0%, rgba(0,0,0,0) 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '60px' }}>
            <h2 className="title-section" style={{  }}>Сценарии климата</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0' }}>Нажмите, чтобы увидеть, как меняется атмосфера</p>
            
            <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
              <button 
                onClick={() => setIsWinter(false)} 
                style={{ 
                  padding: '12px 30px', 
                  borderRadius: '30px', 
                  border: '1px solid rgba(229,195,135,0.3)', 
                  background: !isWinter ? 'rgba(229,195,135,0.1)' : 'transparent',
                  color: !isWinter ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Жаркое лето
              </button>
              <button 
                onClick={() => setIsWinter(true)} 
                style={{ 
                  padding: '12px 30px', 
                  borderRadius: '30px', 
                  border: '1px solid rgba(229,195,135,0.3)', 
                  background: isWinter ? 'rgba(229,195,135,0.1)' : 'transparent',
                  color: isWinter ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Морозная зима
              </button>
            </div>
          </motion.div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '60vh', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            <img 
              src="./images/apple_adv.jpg" 
              alt="Summer Scene" 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', 
                opacity: isWinter ? 0 : 1, transition: 'opacity 1s ease-in-out' 
              }} 
            />
            {/* Имитация холодного свежего воздуха летом */}
            <div 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                backgroundColor: '#053050', mixBlendMode: 'overlay',
                opacity: isWinter ? 0 : 0.6, transition: 'opacity 1s ease-in-out', zIndex: 1
              }}
            ></div>
            <div 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                background: 'radial-gradient(ellipse, rgba(50,150,255,0.3) 0%, rgba(0,0,0,0) 70%)',
                opacity: isWinter ? 0 : 1, transition: 'opacity 1s ease-in-out', zIndex: 2, pointerEvents: 'none'
              }}
            ></div>

            {/* Имитация уютного тепла зимой */}
            <img 
              src="./images/apple_adv.jpg" 
              alt="Winter Scene" 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
                opacity: isWinter ? 1 : 0, transition: 'opacity 1s ease-in-out',
                filter: 'brightness(0.7) sepia(0.3)'
              }} 
            />
            <div 
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                backgroundColor: '#502005', mixBlendMode: 'multiply',
                opacity: isWinter ? 0.7 : 0, transition: 'opacity 1s ease-in-out', zIndex: 1
              }}
            ></div>
            <div 
              style={{ 
                position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50%',
                background: 'radial-gradient(ellipse, rgba(255,100,50,0.4) 0%, rgba(0,0,0,0) 70%)',
                opacity: isWinter ? 1 : 0, transition: 'opacity 1s ease-in-out', zIndex: 2, pointerEvents: 'none', mixBlendMode: 'screen'
              }}
            ></div>

            <div style={{ position: 'absolute', bottom: '40px', left: '40px', zIndex: 3, textAlign: 'left', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '8px' }}>
                {isWinter ? 'Уютное тепло' : 'Освежающая прохлада'}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
                {isWinter ? 'Автоматическое отопление и увлажнение воздуха для защиты от зимней сухости.' : 'Система мягко кондиционирует воздух, не создавая сквозняков.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 ПРОЦЕСС ВНЕДРЕНИЯ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="title-section" style={{  }}>Процесс внедрения</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
              От теплотехнического расчета до чистого воздуха
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

            <div className="flex-col-mobile" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {[
                { step: "01", title: "Расчет", desc: "Проводим теплотехнический расчет и подбираем мощности кондиционирования и отопления." },
                { step: "02", title: "Проектирование", desc: "Разрабатываем схемы воздуховодов и интеграции фанкойлов и диффузоров в дизайн интерьера." },
                { step: "03", title: "Монтаж", desc: "Прокладываем скрытые трассы, устанавливаем блоки и интегрируем их с системой умного дома." },
                { step: "04", title: "Калибровка", desc: "Настраиваем датчики CO2, температуры и влажности для идеально точной работы сценариев." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 1 }}>
                  <motion.div 
                    animate={{ boxShadow: ['0 0 0px rgba(229,195,135,0)', '0 0 25px rgba(229,195,135,0.4)', '0 0 0px rgba(229,195,135,0)'] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                    style={{ 
                      width: '50px', height: '50px', borderRadius: '50%', 
                      backgroundColor: 'var(--bg-primary)', 
                      border: '2px solid rgba(229,195,135,0.3)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      color: 'var(--accent-gold)', fontWeight: 600, fontSize: '1.1rem', 
                      flexShrink: 0, position: 'relative', zIndex: 2 
                    }}
                  >
                    <div style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%', opacity: 0.5 }}></div>
                    <span style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-primary)', padding: '4px' }}>{item.step}</span>
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
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ОТЗЫВЫ (копия с Home) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section" style={{  }}>Отзывы</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '16px auto 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
              Мы ценим каждого клиента. Их слова говорят сами за себя.
            </p>
          </motion.div>

          <div className="reviews-grid">
            {[
              { text: "Система климата от AURA — это фантастика. Никаких сквозняков, всегда идеальная температура.", author: "Александр, Пентхаус" },
              { text: "Раньше зимой всегда было душно от отопления. Теперь воздух увлажнен и свеж круглосуточно.", author: "Евгений, Резиденция" },
              { text: "Очень круто, что решеток вентиляции вообще не видно, они сливаются с потолком. Дизайн не пострадал.", author: "Михаил, Апартаменты" }
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

      {/* 5. FAQ */}
      <FAQ />

      {/* 6. КОНТАКТЫ */}
      <ContactsBlock />

      {/* Back Link */}
      <div className="container" style={{ padding: '40px 0 80px', textAlign: 'center' }}>
        <Link to="/products" style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>&lsaquo;</span> Вернуться ко всем продуктам
        </Link>
      </div>
    </div>
  );
};

export default ClimateDetail;
