import '../styles/Team.css';
import { IconCode, IconZap, IconBox, IconGear, IconBrush } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const members = [
  {
    id: 'nathan',
    name: 'Nathan',
    role: 'Programação',
    description: 'Programação dos robôs e apoio nas integrações do sistema.',
    icon: <IconCode size={30} />,
    color: '#4FC3F7',
    initials: 'N',
  },
  {
    id: 'victor',
    name: 'Victor',
    role: 'Eletrônica',
    description: 'Eletrônica dos robôs, montagem elétrica e integração dos componentes.',
    icon: <IconZap size={30} />,
    color: '#FF6B1A',
    initials: 'V',
  },
  {
    id: 'ingrid',
    name: 'Ingrid',
    role: 'Eletrônica',
    description: 'Eletrônica dos robôs, montagem elétrica e apoio na integração dos componentes.',
    icon: <IconZap size={30} />,
    color: '#81D4FA',
    initials: 'I',
  },
  {
    id: 'antonio',
    name: 'Antônio',
    role: 'Modelagem 3D',
    description: 'Modelagem 3D, estrutura mecânica e design dos robôs.',
    icon: <IconBox size={30} />,
    color: '#FF8C4A',
    initials: 'A',
  },
  {
    id: 'pedro',
    name: 'Pedro',
    role: 'Suporte Técnico',
    description: 'Apoio geral, organização, integração da equipe e suporte técnico.',
    icon: <IconGear size={30} />,
    color: '#4FC3F7',
    initials: 'P',
  },
  {
    id: 'beatriz',
    name: 'Beatriz',
    role: 'Mídia & Design',
    description: 'Mídia, divulgação, identidade visual e produção de conteúdos da equipe.',
    icon: <IconBrush size={30} />,
    color: '#FF6B1A',
    initials: 'B',
  },
];

export default function Team() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useStaggerReveal({ staggerMs: 120, threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.5 });

  return (
    <section id="equipe" className="section team" aria-labelledby="team-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="reveal-up" ref={headerRef}>
          <h2 id="team-title" className="section-title">Nossa Equipe</h2>
          <p className="section-subtitle">
            Cada membro traz habilidades únicas que, juntas, formam a base sólida da Vulkaris Robotics Team.
          </p>
          <div className="divider" />
        </div>

        <div className="team__grid" role="list" ref={gridRef}>
          {members.map((member) => (
            <div
              key={member.id}
              className="team__card glass-card reveal-up"
              data-stagger
              id={`member-${member.id}`}
              role="listitem"
              style={{ '--member-color': member.color }}
              aria-label={`${member.name} — ${member.role}`}
            >
              <div className="team__card-glow" aria-hidden="true" />

              <div className="team__avatar-wrapper">
                <div className="team__avatar" aria-hidden="true">
                  <span className="team__avatar-icon">{member.icon}</span>
                </div>
                <div className="team__avatar-ring" aria-hidden="true" />
              </div>

              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <span className="team__role">{member.role}</span>
                <p className="team__desc">{member.description}</p>
              </div>

              <div className="team__card-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="team__cta reveal-scale" aria-label="Convite para contato" ref={ctaRef}>
          <p className="team__cta-text">Tem interesse em fazer parte da Vulkaris?</p>
          <a
            href="#contato"
            className="btn btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
            id="team-contact-btn"
            aria-label="Entre em contato para saber mais"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
