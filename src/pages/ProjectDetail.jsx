import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ForestEstateDetail from './ForestEstateDetail';
import AuraSkylineDetail from './AuraSkylineDetail';
import AzureCoastDetail from './AzureCoastDetail';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const projectData = {
  'penthouse-moscow': { 
    title: 'Пентхаус на Патриарших', 
    category: 'Жилая недвижимость / 450 м²', 
    description: 'В этом проекте мы столкнулись с вызовом исторического здания. Заказчик хотел бескомпромиссный умный дом, но архитектурное бюро строго запретило портить историческую лепнину и мрамор панелями управления.', 
    image: './images/apple_hero.jpg',
    challenge: 'Интеграция 250 умных устройств в классический интерьер без визуального шума.',
    solution: 'Мы применили сверхмалые датчики присутствия, которые замуровали под слой штукатурки. Управление светом и шторами осуществляется через скрытые сенсоры в мебели и натуральный голосовой интерфейс.',
    hardware: [
      { name: 'Датчики', value: '142 скрытых сенсора' },
      { name: 'Проводка', value: 'Более 15 км кабеля' },
      { name: 'Акустика', value: 'Невидимые колонки в потолке' }
    ]
  },
  'villa-rublevka': { 
    title: 'Вилла в Подмосковье', 
    category: 'Загородная недвижимость / 1200 м²', 
    description: 'Комплексный проект для большой семьи. Основной фокус был сделан на безопасность периметра, автоматизацию ландшафта и биодинамическое освещение во всех спальнях.', 
    image: './images/apple_light.jpg',
    challenge: 'Управление огромной территорией (гектар) и сложным спа-комплексом с бассейном.',
    solution: 'Установлена промышленная серверная стойка AURA. Климат спа-зоны автоматически регулируется в зависимости от испарения бассейна. На улице проложена умная система снеготаяния и полива с учетом метеоданных.',
    hardware: [
      { name: 'Уличное освещение', value: '250+ умных светильников' },
      { name: 'Безопасность', value: '32 тепловизионные камеры' },
      { name: 'Климат', value: 'Интеграция с VAV-системой' }
    ]
  },
  'apartment-city': { 
    title: 'Апартаменты в Сити', 
    category: 'Жилая недвижимость / 180 м²', 
    description: 'Апартаменты для молодого IT-предпринимателя. Требовался максимально технологичный, "гиковский" подход с возможностью писать собственные скрипты для дома.', 
    image: './images/apple_adv.jpg',
    challenge: 'Создать открытую, но безопасную инфраструктуру с фокусом на вау-эффект.',
    solution: 'Мы установили умное стекло (Smart Glass), которое по нажатию кнопки или расписанию становится матовым. Интегрировали сервер умного дома напрямую с API рабочих сервисов заказчика (свет мигает при важных алертах).',
    hardware: [
      { name: 'Остекление', value: '60 м² Smart Glass' },
      { name: 'Шторы', value: 'Моторизованный Blackout' },
      { name: 'Сервер', value: 'AURA Core Pro' }
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  if (id === 'forest-estate') return <ForestEstateDetail />;
  if (id === 'aura-skyline') return <AuraSkylineDetail />;
  if (id === 'azure-coast') return <AzureCoastDetail />;

  const project = projectData[id];

  if (!project) return <div className="container section" style={{ paddingTop: '140px' }}>Проект не найден</div>;

  return (
    <div style={{ position: 'relative', paddingTop: '140px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '600px', background: 'radial-gradient(ellipse at top, rgba(229,195,135,0.10) 0%, rgba(0,0,0,0) 80%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>{project.category}</div>
          <h1 className="title-section" style={{  }}>{project.title}</h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '80px', backgroundColor: 'var(--bg-secondary)' }}
        >
          <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </motion.div>

        {/* Description Text */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingBottom: '100px' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>
            {project.description}
          </p>
        </motion.div>

        {/* Challenge & Solution */}
        <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '100px 0', marginBottom: '100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>Задача</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: 1.3 }}>{project.challenge}</h3>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '16px' }}>Решение AURA</div>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.solution}</p>
            </motion.div>
          </div>
        </section>

        {/* Hardware Highlights */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ marginBottom: '140px' }}>
          <h2 className="title-h2" style={{ marginBottom: "60px", textAlign: "center" }}>Масштаб интеграции</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {project.hardware.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>{item.name}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery / Detail shots */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
           <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
             <img src="./images/apple_adv.jpg" alt="Detail 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
           <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
             <img src="./images/apple_security.jpg" alt="Detail 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
        </motion.div>

        <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
          <Link to="/projects" className="btn btn-outline">Все проекты</Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
