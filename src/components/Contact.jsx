import '../styles/Contact.css';
import { useState } from 'react';
import { IconInstagram, IconMail, IconCopy, IconCheck, IconExternalLink, IconUsers } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    id: 'email',
    icon: <IconMail size={26} />,
    label: 'E-mail',
    value: 'vulkarisrobotics@gmail.com',
    href: 'mailto:vulkarisrobotics@gmail.com',
    color: '#4FC3F7',
    actionType: 'copy',
  },
  {
    id: 'instagram',
    icon: <IconInstagram size={26} />,
    label: 'Instagram',
    value: '@vulkaris_robotics',
    href: 'https://instagram.com/vulkaris_robotics',
    color: '#FF6B1A',
    actionType: 'link',
  },
  {
    id: 'recrutamento',
    icon: <IconUsers size={26} />,
    label: 'Recrutamento',
    value: 'Processo Seletivo',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScYgU3F8kC_TO7ZsyXKA0IxSfJY-JwXd38ADZkRNLuUbHvGNQ/viewform?usp=sharing&ouid=110021712325885217404',
    color: '#FF8C4A',
    actionType: 'link',
  },
];

export default function Contact() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const cardsRef = useStaggerReveal({ staggerMs: 120, threshold: 0.1 });
  const highlightRef = useScrollReveal({ threshold: 0.2 });

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('vulkarisrobotics@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contato" className="section contact" aria-labelledby="contact-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="reveal-up" ref={headerRef}>
          <h2 id="contact-title" className="section-title">Fale Conosco</h2>
          <p className="section-subtitle">
            Quer tirar dúvidas, propor parcerias ou fazer parte da equipe? Escolha o melhor canal para falar com a gente.
          </p>
          <div className="divider" />
        </div>

        <div className="contact__container glass-card reveal-up" ref={highlightRef}>
          <div className="contact__glow-overlay" aria-hidden="true" />
          <div className="contact__grid-layout">
            
            {/* Coluna da Esquerda: Info & Marca */}
            <div className="contact__info-panel">
              <h3 className="contact__panel-title">Vamos Construir o Futuro Juntos</h3>
              <p className="contact__panel-desc">
                A Vulkaris está sempre aberta a novas conexões. Seja você um estudante interessado em robótica, 
                um potencial patrocinador ou um entusiasta da tecnologia, entre em contato!
              </p>
            </div>

            {/* Coluna da Direita: Canais de Contato */}
            <div className="contact__channels" role="list" aria-label="Canais de contato" ref={cardsRef}>
              {contactItems.map(item => (
                <div key={item.id} className="contact__channel-card glass-card reveal-left" data-stagger
                     style={{ '--channel-color': item.color }}>
                  <div className="contact__channel-card-glow" aria-hidden="true" />
                  <div className="contact__channel-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="contact__channel-info">
                    <span className="contact__channel-label">{item.label}</span>
                    <span className="contact__channel-value">{item.value}</span>
                  </div>
                  {item.actionType === 'copy' ? (
                    <button className="contact__channel-action"
                            onClick={copyEmail}
                            aria-label={copied ? 'E-mail copiado!' : 'Copiar e-mail'}
                            style={{ '--channel-color': item.color }}>
                      {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    </button>
                  ) : (
                    <a href={item.href} className="contact__channel-action"
                       target="_blank" rel="noopener noreferrer"
                       aria-label={`Abrir ${item.label}`}
                       style={{ '--channel-color': item.color }}>
                      <IconExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
