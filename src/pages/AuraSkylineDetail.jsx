import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import FAQ from '../components/FAQ';
import ContactsBlock from '../components/ContactsBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const AuraSkylineDetail = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  // Скролл-анимации в стиле Apple
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 500], [0.9, 0.3]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Сценарии
  const scenarios = [
    { time: 'Утро', title: 'Рассвет над мегаполисом', desc: <>Автоматические шторы блэкаут плавно открываются на 50%, впуская мягкий свет<br/>утреннего города. Активируется сценарий "Бодрое утро" с теплым полом и легким джазом.</>, img: './images/skyline_morning_hq_1782971981483.jpg' },
    { time: 'День', title: 'Абсолютный фокус', desc: <>Дневное солнце может слепить на такой высоте. Умные окна автоматически затемняются<br/>с солнечной стороны, а климат-контроль поддерживает идеальную горную свежесть.</>, img: './images/skyline_interior_hq_1782971973065.jpg' },
    { time: 'Вечер', title: 'Огни большого города', desc: <>Когда город зажигает огни, пентхаус отвечает тем же. Активируется архитектурная<br/>подсветка, подчеркивающая премиальные материалы, а звук заполняет пространство.</>, img: './images/skyline_hero_hq_1782971963536.jpg' },
    { time: 'Ночь', title: 'Приватная зона', desc: <>Умное стекло (Smart Glass) в спальне становится матовым по нажатию одной кнопки.<br/>Включается охранный периметр террасы, дом погружается в сон.</>, img: './images/skyline_night_private_hq.jpg' }
  ];

  return (
    <div ref={containerRef} style={{ backgroundColor: '#000', minHeight: '100vh', overflowX: 'hidden' }}>
      <Helmet>
        <title>AURA Skyline | Пентхаус Умный Дом</title>
        <meta name="description" content="Пентхаус AURA Skyline. Абсолютный контроль на высоте птичьего полета." />
      </Helmet>
      
      {/* 1. HERO BLOCK */}
      <section style={{ position: 'relative', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.img 
          src="./images/skyline_hero_premium.jpg" 
          alt="AURA Skyline Penthouse" 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            scale: heroScale, 
            opacity: heroOpacity 
          }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, #000 100%)' }}></div>
        
        <motion.div 
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px', y: textY, opacity: textOpacity }}
        >
          <div style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', fontSize: '0.9rem' }}>Премиальный Пентхаус</div>
          <h1 className="title-hero" style={{ color: "#fff", margin: 0, textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            AURA SKYLINE
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Скролл вниз
          <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--accent-gold)', margin: '10px auto 0' }}></div>
        </motion.div>
      </section>

      {/* 2. НИКАКИХ УСТРОЙСТВ */}
      <section className="section" style={{ backgroundColor: '#000', padding: '150px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ flex: '1 1 400px' }}>
              <h2 className="title-section" style={{ marginBottom: "30px", color: "#fff" }}>Абсолютный контроль.<br />На высоте птичьего полета.</h2>
              <p className="text-lead" style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px" }}>
                Пентхаус — это символ статуса, где каждая деталь должна быть идеальной. Мы интегрировали сотни датчиков так, чтобы не нарушить задумку архитектора.
              </p>
              <p className="text-lead" style={{ color: "rgba(255,255,255,0.6)", marginBottom: "20px" }}>
                В AURA Skyline нет привычных выключателей. Интерьер остается чистым и бескомпромиссным. Вы взаимодействуете с домом через скрытые интерфейсы, наслаждаясь видом на неоновый мегаполис за панорамным окном.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
              style={{ flex: '1 1 500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '600px' }}
            >
              <img src="./images/skyline_interior_hq_1782971973065.jpg" alt="Чистый интерьер на высоте" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ТРИ СЛОЯ СИСТЕМЫ (3D) */}
      <section className="section" style={{ backgroundColor: '#050505', padding: '150px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(229,195,135,0.03) 0%, rgba(0,0,0,0) 50%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '100px' }}>
            <h2 className="title-section" style={{ color: '#fff' }}>Архитектура Умного Пентхауса</h2>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Многоуровневая система, обеспечивающая автономность на 60-м этаже.</p>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', perspective: '1200px' }}>
            
            <motion.div 
              initial={{ rotateX: 60, rotateZ: -30, y: 100, opacity: 0 }}
              whileInView={{ rotateX: 55, rotateZ: -35, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "0px" }}
              style={{ position: 'relative', width: '400px', height: '400px', transformStyle: 'preserve-3d' }}
            >
              {/* Слой 1: Дизайн (Нижний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: -80 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              >
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>1. Дизайн</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0 }}>Премиальная отделка</p>
                </div>
              </motion.div>

              {/* Слой 2: Инженерия (Средний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: 60 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(229,195,135,0.1)', border: '1px solid rgba(229,195,135,0.3)', borderRadius: '20px', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              >
                <div>
                  <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '10px' }}>2. Жизнеобеспечение</h3>
                  <p style={{ color: 'rgba(229,195,135,0.6)', fontSize: '0.9rem', margin: 0 }}>Мощный климат и фильтрация воздуха</p>
                </div>
              </motion.div>

              {/* Слой 3: Интерфейс (Верхний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: 200 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}
              >
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>3. Умные интерфейсы</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>Управление со смартфона и голосом</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. СЦЕНАРИИ ПОЛНОЭКРАННЫЕ */}
      <section style={{ backgroundColor: '#000' }}>
        <div style={{ textAlign: 'center', padding: '100px 0 60px' }}>
          <h2 className="title-section" style={{ color: '#fff' }}>Ритм мегаполиса</h2>
        </div>
        
        {scenarios.map((s, idx) => (
          <div key={idx} style={{ position: 'relative', width: '100vw', height: '85vh', overflow: 'hidden' }}>
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false, margin: "-100px" }}
              src={s.img} alt={s.time} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                opacity: 1,
                filter: s.time === 'Ночь' ? 'none' : (s.time === 'Вечер' ? 'brightness(0.85)' : 'none')
              }} 
            />
            {s.time === 'Ночь' && (
              <>
                {/* Оверлей удален, так как новое фото уже имеет правильные цвета */}
              </>
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{ position: 'absolute', bottom: '10vh', left: '10vw', maxWidth: '900px' }}
            >
              <div style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{s.time}</div>
              <h3 style={{ color: '#fff', fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '20px', lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 5. ДО И ПОСЛЕ (ИНТЕРАКТИВНЫЙ СЛАЙДЕР) */}
      <section className="section" style={{ backgroundColor: '#000', padding: '150px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section" style={{ color: '#fff' }}>Умное Остекление (Smart Glass)</h2>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Приватность по одному клику. Потяните ползунок, чтобы включить матирование панорамного окна в переговорной зоне пентхауса.</p>
          </motion.div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '60vh', minHeight: '400px', margin: '0 auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'ew-resize', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            
            {/* Изображение "ДО" (Прозрачное окно) */}
            <img 
              src="./images/skyline_interior_hq_1782971973065.jpg" 
              alt="До" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            
            {/* Текст ДО (он всегда виден на правой части) */}
            <div style={{ position: 'absolute', top: '30px', right: '30px', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', textShadow: '0 2px 10px rgba(0,0,0,0.8)', textAlign: 'right' }}>ПРОЗРАЧНОЕ СТЕКЛО</div>

            {/* Изображение "ПОСЛЕ" (Матовое окно) - обрезается по ползунку */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: `${sliderPos}%`, height: '100%', overflow: 'hidden' }}>
              <img 
                src="./images/skyline_interior_hq_1782971973065.jpg" 
                alt="После" 
                style={{ width: '1000px', height: '100%', objectFit: 'cover', filter: 'blur(10px) brightness(1.2)', transform: 'scale(1.05)' }} 
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '1000px', height: '100%', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ position: 'absolute', top: '30px', left: '30px', color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 'bold', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>МАТОВОЕ (РЕЖИМ ПРИВАТНОСТИ)</div>
            </div>

            {/* Линия-разделитель */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, width: '4px', backgroundColor: 'var(--accent-gold)', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
              {/* Круглая ручка ползунка */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 17L4 12L8 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L20 12L16 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Невидимый input range для управления */}
            <input 
              type="range" min="0" max="100" value={sliderPos} 
              onChange={(e) => setSliderPos(e.target.value)} 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'ew-resize', zIndex: 10 }} 
            />
          </div>
        </div>
      </section>

      {/* 6. ОТЗЫВЫ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(229,195,135,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp} style={{ marginBottom: '80px' }}>
            <h2 className="title-section" style={{  }}>Отзыв заказчика</h2>
          </motion.div>

          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={fadeUp}
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                background: 'linear-gradient(135deg, rgba(229,195,135,0.08) 0%, rgba(0,0,0,0.5) 100%)',
                padding: '60px 60px 60px 80px', 
                borderRadius: 'var(--radius-lg)', 
                position: 'relative', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(229,195,135,0.1)',
                border: '1px solid rgba(229,195,135,0.1)',
                borderLeft: '4px solid var(--accent-gold)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(229,195,135,0.4)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 3 21l-2-2.223c2.473-1.018 4.356-3.155 4.887-5.777H0V3h9.983zm14.017 0v7.391c0 5.704-3.731 9.57-6.983 10.609l-2-2.223c2.473-1.018 4.356-3.155 4.888-5.777h-5.888V3h9.983z"/>
                  </svg>
                </div>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '1.4rem', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '40px', color: '#fff' }}>
                Для меня было критически важно, чтобы технологии не бросались в глаза. Ребята из AURA сделали невозможное: мой пентхаус полностью автоматизирован, но я не вижу ни одного пульта. А функция Smart Glass на окнах переговорной — это просто вау.
              </p>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-gold)' }}></div>
                <div style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '1rem' }}>
                  Владелец Пентхауса, Предприниматель
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ />

      {/* 8. КОНТАКТЫ */}
      <ContactsBlock />

      {/* Back Link */}
      <div className="container" style={{ padding: '40px 0 80px', textAlign: 'center' }}>
        <Link to="/projects" style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>&lsaquo;</span> Вернуться ко всем проектам
        </Link>
      </div>

    </div>
  );
};

export default AuraSkylineDetail;
