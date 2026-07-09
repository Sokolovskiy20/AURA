import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const ProjectCard = ({ id, title, category, image }) => (
  <motion.section 
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }}
    variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } } }}
    style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden', marginBottom: '10px' }}
  >
    <img src={image} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', zIndex: 1 }}></div>
    <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px', color: '#fff', zIndex: 2 }}>
      <div style={{ width: '100%' }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 400, marginBottom: '16px', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>{title}</h3>
        <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6, maxWidth: '800px' }}>{category}</p>
          <div style={{ flexShrink: 0 }}>
            <Link to={`/projects/${id}`} className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600 }}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const Projects = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: '#000', color: '#f5f5f7', paddingTop: '140px', overflow: 'hidden', minHeight: '100vh', position: 'relative' }}>
      <Helmet>
        <title>Наши Проекты | AURA</title>
      </Helmet>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '600px', background: 'radial-gradient(ellipse at top, rgba(229,195,135,0.10) 0%, rgba(0,0,0,0) 80%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="title-section" style={{ marginBottom: '20px', fontSize: '4rem', lineHeight: 1.1 }}>Реализованные кейсы</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>Мы создаем умные дома, где технологии становятся частью архитектуры, оставаясь невидимыми. Познакомьтесь с нашими решениями для пентхаусов и загородных резиденций.</p>
          <div style={{ marginTop: '40px' }}>
            <Link to="#" className="btn" style={{ backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Смотреть проекты</Link>
          </div>
        </motion.div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ProjectCard 
          id="forest-estate" 
          title={<>ЗАГОРОДНАЯ РЕЗИДЕНЦИЯ<br/>«FOREST ESTATE»</>} 
          category={<>Комплексная автоматизация климата, систем питания и освещения в гармонии с природой.<br/>Управление домом через невидимые интерфейсы, чтобы полностью раствориться в лесу.</>}
          image="./images/forest_hero_apple_1782971244210.jpg"
        />
        <ProjectCard 
          id="aura-skyline" 
          title="ПЕНТХАУС «AURA SKYLINE»" 
          category={<>Интеграция сотен скрытых сенсоров в премиальный интерьер на высоте птичьего полета.<br/>Умное остекление и архитектурная подсветка, подчеркивающая статус владельца.</>}
          image="./images/skyline_hero_premium.jpg"
        />
        <ProjectCard 
          id="azure-coast" 
          title="РЕЗИДЕНЦИЯ «AZURE COAST»" 
          category={<>Адаптивный морской климат, защита от солнца и стихия океана в единой экосистеме.<br/>Автоматические смарт-панели и звуковые системы, синхронизированные с шумом прибоя.</>}
          image="./images/azure_hero_premium.jpg"
        />
      </div>
      
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '120px 0 80px' }}>
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

    </div>
  );
};

export default Projects;
