import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LightingDetail from './LightingDetail';
import ClimateDetail from './ClimateDetail';
import SecurityDetail from './SecurityDetail';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const productData = {
  lighting: { 
    name: 'Умный свет', 
    description: 'Освещение, которое живет в ритме вашего тела. Забудьте о выключателях.', 
    image: './images/apple_light.jpg',
    manifesto: 'Свет — это не просто лампочка. Это инструмент управления вашим самочувствием. Наша система анализирует естественное освещение за окном и плавно меняет цветовую температуру в доме. Бодрящий холодный свет утром. Мягкий теплый закат вечером.',
    features: [
      { title: 'Биодинамика', desc: 'Автоматическая синхронизация света с циркадными ритмами человека.', span: 2 },
      { title: 'Никаких выключателей', desc: 'Датчики присутствия миллиметрового диапазона включают свет до того, как вы войдете в комнату.', span: 1 },
      { title: 'Скрытый монтаж', desc: 'Светильники без рамок (trimless), сливающиеся с архитектурой потолка.', span: 1 },
      { title: 'Сценарии', desc: 'Свет подстраивается под вас: "Кино", "Чтение", "Сон" активируются одной фразой.', span: 2 },
    ],
    specs: [
      { label: 'Индекс цветопередачи', value: 'CRI > 98' },
      { label: 'Диммирование', value: 'Плавное от 0.1% до 100% (DALI)' },
      { label: 'Срок службы LED', value: 'Более 50 000 часов' },
    ]
  },
  climate: { 
    name: 'Климат-контроль', 
    description: 'Горный воздух и идеальная температура в любой сезон.', 
    image: './images/apple_adv.jpg',
    manifesto: 'Дышите полной грудью. AURA бесшовно объединяет кондиционирование, вентиляцию и увлажнение. Никаких сквозняков, никакого шума. Система сама отслеживает уровень CO2 и влажности, поддерживая идеальный микроклимат.',
    features: [
      { title: 'Невидимые решетки', desc: 'Воздух подается через щелевые диффузоры, которые визуально неотличимы от теневого профиля.', span: 2 },
      { title: 'Мониторинг CO2', desc: 'Датчики углекислого газа автоматически запускают приток свежего воздуха.', span: 1 },
      { title: 'Бесшумность', desc: 'Уровень шума на минимальных оборотах не превышает порог восприятия человеческого уха (15 дБ).', span: 1 },
      { title: 'Зональный контроль', desc: 'Индивидуальная температура в каждой комнате с точностью до 0.5 градуса.', span: 2 },
    ],
    specs: [
      { label: 'Очистка воздуха', value: 'HEPA фильтры класса H13' },
      { label: 'Точность датчиков', value: '±0.1°C, ±1% влажности' },
      { label: 'Увлажнение', value: 'Форсуночная система (пар)' },
    ]
  },
  security: { 
    name: 'Безопасность', 
    description: 'Ваш дом — ваша неприступная цифровая крепость.', 
    image: './images/apple_security.jpg',
    manifesto: 'Приватность превыше всего. В отличие от массовых решений, AURA обрабатывает все данные локально. Видео с камер и биометрия не отправляются в облако. Ваш дом знает вас в лицо, впускает без ключей и моментально реагирует на любую угрозу.',
    features: [
      { title: 'Face ID для дома', desc: 'Биометрические замки скрытого монтажа открывают дверь за 0.3 секунды при вашем приближении.', span: 2 },
      { title: 'Локальный сервер', desc: 'Никаких облаков. Вся система управляется из защищенной серверной в вашем доме.', span: 1 },
      { title: 'Защита от протечек', desc: 'Сверхбыстрые электроприводы перекрывают воду за 1 секунду при обнаружении влаги.', span: 1 },
      { title: 'Имитация присутствия', desc: 'Когда вы в отпуске, дом сам включает свет и закрывает шторы, имитируя вашу жизнь.', span: 2 },
    ],
    specs: [
      { label: 'Шифрование', value: 'AES-256 (военный стандарт)' },
      { label: 'Резервное питание', value: 'До 72 часов автономной работы' },
      { label: 'Распознавание', value: 'Нейросеть с защитой от фото' },
    ]
  }
};

const BentoCard = ({ feature }) => (
  <motion.div 
    variants={fadeUp}
    style={{
      backgroundColor: 'var(--bg-secondary)',
      padding: '40px',
      borderRadius: 'var(--radius-lg)',
      gridColumn: `span ${feature.span}`
    }}
  >
    <h3 className="title-card">{feature.title}</h3>
    <p className="text-base" style={{ color: "var(--text-secondary)" }}>{feature.desc}</p>
  </motion.div>
);

const ProductDetail = () => {
  const { id } = useParams();
  
  if (id === 'lighting') return <LightingDetail />;
  if (id === 'climate') return <ClimateDetail />;
  if (id === 'security') return <SecurityDetail />;

  const product = productData[id];

  if (!product) return <div className="container section" style={{ paddingTop: '140px' }}>Продукт не найден</div>;

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Product Hero */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '600px', background: 'radial-gradient(ellipse at top, rgba(229,195,135,0.10) 0%, rgba(0,0,0,0) 80%)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            <h1 className="title-hero" style={{ marginBottom: '20px' }}>{product.name}</h1>
            <p className="subtitle">{product.description}</p>
            <div style={{ marginTop: '30px' }}>
              <button className="btn btn-primary">Оформить предзаказ</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              {product.manifesto}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section style={{ paddingBottom: '140px' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {product.features.map((f, i) => (
              <BentoCard key={i} feature={f} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Specs */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="title-h2" style={{ marginBottom: "60px", textAlign: "center" }}>Спецификации</h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              {product.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '24px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <span className="text-lead" style={{ fontWeight: 500 }}>{spec.label}</span>
                  <span className="text-lead" style={{ color: "var(--text-secondary)" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <Link to="/products" style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>&lsaquo;</span> Вернуться к списку
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
