import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0 40px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div>
            <Link to="/" className="title-card" style={{ letterSpacing: "-0.02em", color: "var(--text-primary)", display: "block", marginBottom: "20px" }}>
              AURA
            </Link>
            <p className="text-sm" style={{ color: "var(--text-secondary)", maxWidth: '300px' }}>
              Интеллектуальное пространство. Переосмысление концепции умного дома.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm" style={{ fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Продукты</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/products/lighting" className="text-sm" style={{ color: "var(--text-secondary)" }}>Умный свет</Link>
              <Link to="/products/climate" className="text-sm" style={{ color: "var(--text-secondary)" }}>Климат-контроль</Link>
              <Link to="/products/security" className="text-sm" style={{ color: "var(--text-secondary)" }}>Безопасность</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm" style={{ fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Компания</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/team" className="text-sm" style={{ color: "var(--text-secondary)" }}>Команда</Link>
              <Link to="/projects" className="text-sm" style={{ color: "var(--text-secondary)" }}>Проекты</Link>
              <Link to="/contacts" className="text-sm" style={{ color: "var(--text-secondary)" }}>Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm" style={{ fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>Связь</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>hello@aura.space</span>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>+7 (495) 000-00-00</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Copyright © 2026 AURA Inc. Все права защищены.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="#" className="text-xs" style={{ color: "var(--text-secondary)" }}>Политика конфиденциальности</Link>
            <span style={{ color: 'rgba(0,0,0,0.1)' }}>|</span>
            <Link to="#" className="text-xs" style={{ color: "var(--text-secondary)" }}>Условия использования</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
