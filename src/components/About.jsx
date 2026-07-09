import '../styles/About.css';
import { IconTarget, IconEye, IconHandshake, IconRobot } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const values = [
  {
    icon: <IconTarget size={28} />,
    title: 'Missão',
    desc: 'Desenvolver projetos robóticos inovadores que unem aprendizado e criatividade.',
  },
  {
    icon: <IconEye size={28} />,
    title: 'Visão',
    desc: 'Ser referência em robótica educacional, inspirando a próxima geração de engenheiros.',
  },
  {
    icon: <IconHandshake size={28} />,
    title: 'Valores',
    desc: 'Trabalho em equipe, inovação, persistência e compartilhamento do conhecimento.',
  },
];

export default function About() {
  const textRef = useScrollReveal({ threshold: 0.2 });
  const valuesRef = useStaggerReveal({ staggerMs: 120 });
  const visualRef = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="sobre" className="section about" aria-labelledby="about-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="about__grid">

          {/* Texto */}
          <div className="about__content reveal-left" ref={textRef}>
            <h2 id="about-title" className="section-title about__title">Quem Somos</h2>
            <div className="divider" style={{ margin: '14px 0 22px' }} />

            <p className="about__text">
              A <strong className="about__highlight">Vulkaris Robotics Team</strong> é uma equipe apaixonada
              por tecnologia, inovação e aprendizado. Nascemos da vontade de criar, experimentar e
              transformar ideias em realidade por meio da robótica.
            </p>
            <p className="about__text">
              Trabalhamos de forma colaborativa, unindo habilidades em{' '}
              <span className="about__accent">programação</span>,{' '}
              <span className="about__accent">eletrônica</span>,{' '}
              <span className="about__accent">modelagem 3D</span>,{' '}
              <span className="about__accent">montagem</span> e{' '}
              <span className="about__accent">design</span>{' '}
              para desenvolver projetos robóticos que desafiam os limites da criatividade.
            </p>
            <p className="about__text">
              Nossa missão é aprender fazendo, competir para evoluir e inspirar novos talentos
              a se apaixonar pelo universo da tecnologia e robótica.
            </p>

            <div className="about__values" ref={valuesRef}>
              {values.map(item => (
                <div key={item.title} className="about__value-card glass-card reveal-up" data-stagger role="article">
                  <span className="about__value-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="about__value-title">{item.title}</h3>
                    <p className="about__value-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="about__visual reveal-right" ref={visualRef}>
            <div className="about__visual-wrapper">
              {/* Elementos decorativos no background */}
              <div className="about__glow-orb" aria-hidden="true" />
              <div className="about__tech-ring about__tech-ring--outer" aria-hidden="true" />
              <div className="about__tech-ring about__tech-ring--inner" aria-hidden="true" />

              <div className="about__image-container">
                <img
                  src="/vulkaris.gif"
                  alt="Logotipo animado da Equipe Vulkaris"
                  className="about__image"
                  loading="lazy"
                />
                <div className="about__image-overlay" aria-hidden="true" />
                <div className="about__image-border"  aria-hidden="true" />
              </div>
            </div>

            <div className="about__card-floating glass-card" aria-label="Slogan da equipe">
              <IconRobot size={36} className="about__card-icon" />
              <p className="about__card-text">
                "Transformando ideias em robôs e inovação em movimento"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
