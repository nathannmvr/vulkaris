import '../styles/Footer.css';
import { IconInstagram } from './Icons';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Rodapé">
      <div className="footer__top">
        <div className="footer__glow" aria-hidden="true" />
        <div className="container">
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img src="/vulkaris_logo.png" alt="Vulkaris Robotics Team Logo" className="footer__logo-img" />
                <div>
                  <span className="footer__logo-name">VULKARIS</span>
                  <span className="footer__logo-sub">Robotics Team</span>
                </div>
              </div>
              <p className="footer__tagline">
                Transformando ideias em robôs, tecnologia em aprendizado e inovação em movimento.
              </p>
              <a href="https://instagram.com/vulkaris_robotics" className="footer__instagram"
                 target="_blank" rel="noopener noreferrer" id="footer-instagram-btn"
                 aria-label="Seguir Vulkaris no Instagram">
                <IconInstagram size={18} />
                @vulkaris_robotics
              </a>
            </div>

            {/* Navegação */}
            <nav className="footer__nav" aria-label="Navegação do rodapé">
              <h3 className="footer__nav-title">Navegação</h3>
              <ul className="footer__nav-list" role="list">
                {[
                  { label: 'Início',          href: '#inicio' },
                  { label: 'Sobre',           href: '#sobre' },
                  { label: 'Áreas de Atuação', href: '#areas' },
                  { label: 'Projetos',        href: '#projetos' },
                  { label: 'Equipe',          href: '#equipe' },
                  { label: 'Galeria',         href: '#galeria' },
                  { label: 'Contato',         href: '#contato' },
                ].map(link => (
                  <li key={link.href} role="listitem">
                    <a href={link.href} className="footer__nav-link"
                       onClick={e => scrollTo(e, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Áreas */}
            <div className="footer__areas">
              <h3 className="footer__nav-title">Áreas</h3>
              <ul className="footer__nav-list" role="list">
                {['Programação', 'Eletrônica', 'Modelagem 3D', 'Montagem de Robôs', 'Automação', 'Competições'].map(area => (
                  <li key={area} role="listitem">
                    <span className="footer__area-item">— {area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {year} <strong>Vulkaris Robotics Team</strong>. Todos os direitos reservados.
            </p>
            <p className="footer__made-with">
              Feito com <IconInstagram size={14} style={{ display: 'inline', verticalAlign: 'middle', color: '#FF6B1A' }} /> pela equipe Vulkaris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
