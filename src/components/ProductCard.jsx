import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ position: 'relative', paddingTop: '100%', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
        {/* Placeholder for image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
          {image ? <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: 'var(--text-secondary)' }}>Фото продукта</span>}
        </div>
      </div>
      
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 className="title-card">{name}</h3>
        <p className="text-body" style={{ fontSize: '0.95rem', marginBottom: '30px', flexGrow: 1 }}>
          {description}
        </p>
        
        <Link to={`/products/${id}`} style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 500, fontSize: '0.9rem' }}>
          Узнать больше 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
