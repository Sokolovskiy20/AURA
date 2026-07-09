import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, category, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', group: 'project-card' }}
    >
      <Link to={`/projects/${id}`} style={{ display: 'block' }}>
        <div style={{ position: 'relative', paddingTop: '120%', backgroundColor: '#222', overflow: 'hidden' }}>
           {/* Placeholder for image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {image ? (
              <img 
                src={image} 
                alt={title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} 
                className="project-img"
              />
            ) : (
               <span style={{ color: 'rgba(255,255,255,0.3)' }}>Фото объекта</span>
            )}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }}></div>
          </div>
        </div>
        
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', color: 'white' }}>
          <span className="text-xs" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8, marginBottom: '8px', display: 'block' }}>{category}</span>
          <h3 className="title-card">{title}</h3>
        </div>
      </Link>
      
      <style>{`
        div:hover .project-img {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
