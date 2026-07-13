import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';
import ContactsBlock from '../components/ContactsBlock';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const AzureCoastDetail = () => {
  const containerRef = useRef(null);
  

  const { scrollY } = useScroll();

  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Сценарии
  const scenarios = [
    { time: 'Утро', title: 'Океанский бриз', desc: <>С первыми лучами солнца моторизованные панорамные окна бесшумно открываются, впуская<br/>свежий морской воздух. Включается режим теплого пола на каменных террасах.</>, img: './images/azure_morning.jpg' },
    { time: 'День', title: 'Защита от зноя', desc: <>Умное стекло автоматически реагирует на интенсивность экваториального солнца, слегка затемняясь<br/>для защиты от бликов. Климат-контроль поддерживает идеальный баланс влажности.</>, img: './images/azure_day.jpg' },
    { time: 'Вечер', title: 'Силуэты на закате', desc: <>Свет в резиденции плавно подстраивается под огненный закат. Архитектурная подсветка<br/>акцентирует внимание на деревянных панелях и фактуре натурального камня.</>, img: './images/azure_evening.jpg' },
    { time: 'Ночь', title: 'Глубокое погружение', desc: <>Океан растворяется во тьме, но безопасность на высшем уровне. Периметр охраняется<br/>тепловизорами, а бассейн светится мягким лазурным светом, приглашая к ночному купанию.</>, img: './images/azure_night.jpg' }
  ];

  return (
    <div ref={containerRef} style={{ backgroundColor: '#050505', minHeight: '100vh', overflowX: 'hidden' }}>
      <Helmet>
        <title>Azure Coast | Резиденция у океана</title>
        <meta name="description" content="Резиденция Azure Coast. Слияние высоких технологий и стихии океана." />
      </Helmet>
      
      {/* 1. HERO BLOCK */}
      <section style={{ position: 'relative', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.img 
          src="./images/azure_hero_premium.jpg" 
          alt="Azure Coast Residence" 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            scale: heroScale, 
            opacity: heroOpacity 
          }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
        
        <motion.div 
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', y: textY, opacity: textOpacity }}
        >
          <div style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', color: 'var(--accent-gold)' }}>Резиденция у океана</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '20px' }}>Azure Coast</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            Слияние высоких технологий и стихии океана.
          </p>
        </motion.div>
      </section>

      {/* 2. ИДЕОЛОГИЯ ПРОЕКТА */}
      <section style={{ padding: '120px 0', backgroundColor: '#000', color: '#fff', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="title-section" style={{ marginBottom: '30px' }}>Симбиоз с природой</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '20px' }}>
                Мы создали резиденцию, которая не просто противостоит суровому морскому климату, но и использует его сильные стороны. Океанский воздух фильтруется и осушается, сохраняя свою свежесть без разрушительной соли.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Акустические системы мирового класса настроены так, чтобы органично сливаться с шумом прибоя, создавая идеальное звуковое полотно во всех 800 квадратных метрах пространства.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px' }}>
                <div style={{ borderTop: '1px solid var(--accent-gold)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>120+</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Метров панорамного стекла</div>
                </div>
                <div style={{ borderTop: '1px solid var(--accent-gold)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>Anti-Salt</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Антикоррозийная защита</div>
                </div>
                <div style={{ borderTop: '1px solid var(--accent-gold)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>Zero</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Бликов на панелях</div>
                </div>
                <div style={{ borderTop: '1px solid var(--accent-gold)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-gold)' }}>100%</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Синхронизация с солнцем</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. АНАТОМИЯ РЕЗИДЕНЦИИ (СЛОИ) */}
      <section className="section" style={{ backgroundColor: '#050505', padding: '150px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vw', background: 'radial-gradient(circle, rgba(229,195,135,0.03) 0%, rgba(0,0,0,0) 50%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px" }} transition={{ duration: 0.8 }} style={{ marginBottom: '100px' }}>
            <h2 className="title-section" style={{ color: '#fff' }}>Анатомия океанской виллы</h2>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Экосистема, разделенная на уровни</p>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', perspective: '1200px' }}>
            
            <motion.div 
              initial={{ rotateX: 60, rotateZ: -30, y: 100, opacity: 0 }}
              whileInView={{ rotateX: 55, rotateZ: -35, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "0px" }}
              style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '400px', maxHeight: '100vw', transformStyle: 'preserve-3d' }}
            >
              {/* Слой 1: Архитектура (Нижний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: -80 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              >
                <div>
                  <h3 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.5rem', marginBottom: '10px' }}>1. Архитектура и материалы</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', margin: 0 }}>Светлый камень, тик и панорамное остекление</p>
                </div>
              </motion.div>

              {/* Слой 2: Инженерия (Средний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: 60 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(229,195,135,0.1)', borderTop: '1px solid rgba(229,195,135,0.3)', borderRight: '1px solid rgba(229,195,135,0.3)', borderBottom: '1px solid rgba(229,195,135,0.3)', borderLeft: '1px solid rgba(229,195,135,0.3)', borderRadius: '20px', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              >
                <div>
                  <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', marginBottom: '10px' }}>2. Адаптивный климат</h3>
                  <p style={{ color: 'rgba(229,195,135,0.6)', fontSize: '0.9rem', margin: 0 }}>Влагозащищенная серверная стойка AURA</p>
                </div>
              </motion.div>

              {/* Слой 3: Интерфейс (Верхний) */}
              <motion.div 
                initial={{ z: 0 }} whileInView={{ z: 200 }} transition={{ duration: 1.5, delay: 0.5 }}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'flex-end', padding: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}
              >
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>3. Невидимые панели</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>Сенсоры скрыты в каменных стенах</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. СЦЕНАРИИ ПОЛНОЭКРАННЫЕ */}
      <section style={{ backgroundColor: '#000' }}>
        <div style={{ textAlign: 'center', padding: '100px 0 60px' }}>
          <h2 className="title-section" style={{ color: '#fff' }}>Дыхание океана</h2>
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
                opacity: 1
              }} 
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'absolute', bottom: '10vh', left: '5vw', width: '90vw', maxWidth: '900px' }}
            >
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: '10px' }}>{s.time}</div>
              <h3 className="title-section" style={{ marginBottom: "30px", color: "#fff" }}>{s.title}</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 5. ОТЗЫВЫ */}
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
                padding: 'clamp(30px, 5vw, 60px)', 
                borderRadius: 'var(--radius-lg)', 
                position: 'relative', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(229,195,135,0.1)',
                borderTop: '1px solid rgba(229,195,135,0.1)',
                borderRight: '1px solid rgba(229,195,135,0.1)',
                borderBottom: '1px solid rgba(229,195,135,0.1)',
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
                Мы долго сомневались, стоит ли ставить систему умного дома на вилле прямо у океана — боялись, что влажность и соль быстро уничтожат электронику. Команда AURA не просто переубедила нас, они создали настоящую экосистему. В доме всегда идеальный климат, панорамные окна защищают от тропического солнца, а акустика звучит так, будто мы на частном концерте прямо под шум прибоя.
              </p>
              
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-gold)' }}></div>
                <div style={{ color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '1rem' }}>
                  Владелец Виллы Azure Coast
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. КОНТАКТЫ */}
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

export default AzureCoastDetail;
