import '../styles/Hero.css';
import { IconPlay, IconInstagram, IconPhone } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { members } from './members';

export default function Hero() {
  const contentRef = useStaggerReveal({ staggerMs: 150 });
  const visualRef = useScrollReveal();
  
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero" aria-label="Seção inicial — Vulkaris Robotics Team">
      {/* Partículas */}
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{ '--delay': `${i * 0.32}s`, '--x': `${(i * 17 + 5) % 100}%`, '--y': `${(i * 23 + 10) % 100}%` }}
          />
        ))}
      </div>

      <div className="hero__grid"  aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />
      <div className="hero__scan"  aria-hidden="true" />

      <div className="container">
        {/* Conteúdo textual */}
        <div className="hero__content" ref={contentRef}>
          <h1 className="hero__title reveal-up" data-stagger>
            <span className="hero__title-vulkaris">VULKARIS</span>
            <span className="hero__title-sub">Robotics Team</span>
          </h1>

          <p className="hero__tagline reveal-up" data-stagger>
            Transformando ideias em robôs, tecnologia em{' '}
            <span className="gradient-text">aprendizado</span> e inovação em{' '}
            <span className="gradient-text">movimento.</span>
          </p>

          <p className="hero__description reveal-up" data-stagger>
            Uma equipe apaixonada por robótica, programação e inovação tecnológica.
            Desenvolvemos projetos, competimos em torneios e aprendemos juntos.
          </p>

          <div className="hero__actions reveal-up" data-stagger>
            <a href="#projetos" className="btn btn-primary hero__btn"
               onClick={e => scrollTo(e, '#projetos')} id="hero-projects-btn"
               aria-label="Ver nossos projetos">
              <IconPlay size={18} />
              Veja Nossos Projetos
            </a>
            <a href="https://instagram.com/vulkaris_robotics" className="btn btn-outline hero__btn"
               target="_blank" rel="noopener noreferrer" id="hero-instagram-btn"
               aria-label="Acompanhe no Instagram @vulkaris_robotics">
              <IconInstagram size={17} />
              Acompanhe no Instagram
            </a>
            <a href="#contato" className="btn btn-accent hero__btn"
               onClick={e => scrollTo(e, '#contato')} id="hero-contact-btn"
               aria-label="Entre em contato">
              <IconPhone size={17} />
              Entre em Contato
            </a>
          </div>

          <div className="hero__stats reveal-up" aria-label="Estatísticas da equipe" data-stagger>
            <div className="hero__stat">
              <span className="hero__stat-number">{members.length}</span>
              <span className="hero__stat-label">Membros</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">6+</span>
              <span className="hero__stat-label">Áreas de Atuação</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">∞</span>
              <span className="hero__stat-label">Inovação</span>
            </div>
          </div>
        </div>

        {/* Lado visual — logo real */}
        <div className="hero__visual reveal-scale" ref={visualRef} aria-hidden="true">
          <div className="hero__image-wrapper">
            <img
              src="/vulkaris_logo.png"
              alt="Vulkaris Robotics Team Logo"
              className="hero__logo-img"
            />
            <div className="hero__image-ring hero__image-ring--1" />
            <div className="hero__image-ring hero__image-ring--2" />
            <div className="hero__image-ring hero__image-ring--3" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-label="Role para baixo">
        <span className="hero__scroll-text">Explore</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>
      
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
    </section>
  );
}
