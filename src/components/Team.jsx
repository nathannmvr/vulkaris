import { useState } from 'react';
import '../styles/Team.css';
import { IconInstagram, IconCopy, IconCheck, IconUsers } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { members } from './members';

export default function Team() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useStaggerReveal({ staggerMs: 120, threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.5 });
  const [copiedId, setCopiedId] = useState(null);
  const [activeMember, setActiveMember] = useState(null);

  const handleCopy = (e, text, id) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

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
              style={{ '--member-color': member.color, cursor: 'pointer' }}
              aria-label={`${member.name} — ${member.role}`}
              onClick={() => setActiveMember(member)}
            >
              <div className="team__card-glow" aria-hidden="true" />
              <div className="team__card-banner" aria-hidden="true" />

              <div className="team__avatar-wrapper">
                <div className="team__avatar" aria-hidden="true">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      className="team__avatar-img"
                      style={member.position ? { objectPosition: member.position } : {}}
                    />
                  ) : (
                    <span className="team__avatar-icon">{member.icon}</span>
                  )}
                </div>
                <div className="team__avatar-ring" aria-hidden="true" />
              </div>

              <div className="team__info">
                <span className="team__role-badge">
                  <span className="team__role-icon" aria-hidden="true">{member.icon}</span>
                  {member.role}
                </span>
                <h3 className="team__name">{member.name}</h3>
                <p className="team__desc">{member.description}</p>
                {member.instagram && (
                  <div className="team__instagram-wrapper">
                    <a
                      href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                      className="team__instagram-pill"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${member.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IconInstagram size={14} />
                      <span>{member.instagram}</span>
                    </a>
                    <button
                      className="team__copy-pill-btn"
                      onClick={(e) => handleCopy(e, member.instagram, member.id)}
                      aria-label={`Copiar Instagram de ${member.name}`}
                      title="Copiar usuário"
                    >
                      {copiedId === member.id ? <IconCheck size={12} /> : <IconCopy size={12} />}
                    </button>
                  </div>
                )}
              </div>

              <div className="team__card-accent-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="team__cta reveal-scale" aria-label="Convite para contato" ref={ctaRef}>
          <h3 className="team__cta-text">Tem interesse em fazer parte da Vulkaris?</h3>
          <p className="team__cta-subtext">
            Venha desenvolver robôs, aprender novas tecnologias e fazer parte de uma equipe apaixonada por inovação.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYgU3F8kC_TO7ZsyXKA0IxSfJY-JwXd38ADZkRNLuUbHvGNQ/viewform?usp=sharing&ouid=110021712325885217404"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            id="team-contact-btn"
            aria-label="Preencher formulário para fazer parte da Vulkaris"
          >
            <IconUsers size={18} /> Clique Aqui
          </a>
        </div>
      </div>

      {/* Modal de Detalhes do Membro */}
      {activeMember && (
        <div className="team__modal-overlay" onClick={() => setActiveMember(null)}>
          <div
            className="team__modal glass-card"
            onClick={e => e.stopPropagation()}
            style={{ '--member-color': activeMember.color }}
          >
            <button
              className="team__modal-close"
              onClick={() => setActiveMember(null)}
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <div className="team__modal-glow" aria-hidden="true" />
            <div className="team__modal-banner" aria-hidden="true" />

            <div className="team__modal-content">
              <div className="team__modal-avatar-wrapper">
                <div className="team__modal-avatar">
                  {activeMember.image ? (
                    <img
                      src={activeMember.image}
                      alt={`Foto de ${activeMember.name}`}
                      className="team__modal-avatar-img"
                      style={activeMember.position ? { objectPosition: activeMember.position } : {}}
                    />
                  ) : (
                    <span className="team__modal-avatar-icon">{activeMember.icon}</span>
                  )}
                </div>
                <div className="team__modal-avatar-ring" aria-hidden="true" />
              </div>

              <span className="team__role-badge">
                <span className="team__role-icon" aria-hidden="true">{activeMember.icon}</span>
                {activeMember.role}
              </span>
              <h3 className="team__modal-name">{activeMember.name}</h3>
              <div className="team__modal-divider" />
              <p className="team__modal-desc">{activeMember.description}</p>

              {activeMember.instagram && (
                <div className="team__modal-instagram-section">
                  <span className="team__modal-instagram-title">Contato</span>
                  <div className="team__instagram-wrapper">
                    <a
                      href={`https://instagram.com/${activeMember.instagram.replace('@', '')}`}
                      className="team__instagram-pill"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${activeMember.name}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <IconInstagram size={14} />
                      <span>{activeMember.instagram}</span>
                    </a>
                    <button
                      className="team__copy-pill-btn"
                      onClick={(e) => handleCopy(e, activeMember.instagram, activeMember.id)}
                      aria-label={`Copiar Instagram de ${activeMember.name}`}
                      title="Copiar usuário"
                    >
                      {copiedId === activeMember.id ? <IconCheck size={12} /> : <IconCopy size={12} />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
