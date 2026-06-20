import '../styles/Contact.css';
import { useState } from 'react';
import { IconInstagram, IconMail, IconQr, IconCopy, IconCheck, IconExternalLink } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    id: 'instagram',
    icon: <IconInstagram size={28} />,
    label: 'Instagram',
    value: '@vulkaris_robotics',
    href: 'https://instagram.com/vulkaris_robotics',
    color: '#FF6B1A',
    external: true,
  },
  {
    id: 'email',
    icon: <IconMail size={28} />,
    label: 'E-mail',
    value: 'vulkarisrobotics@gmail.com',
    href: 'mailto:vulkarisrobotics@gmail.com',
    color: '#4FC3F7',
    external: false,
  },
  {
    id: 'qrcode',
    icon: <IconQr size={28} />,
    label: 'QR Code',
    value: 'Acesse via QR Code em nossos materiais',
    href: 'https://instagram.com/vulkaris_robotics',
    color: '#81D4FA',
    external: true,
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
            Quer saber mais sobre a equipe, nossos projetos ou como fazer parte? Fale conosco!
          </p>
          <div className="divider" />
        </div>

        <div className="contact__layout">
          {/* Cards de contato */}
          <div className="contact__cards" role="list" aria-label="Canais de contato" ref={cardsRef}>
            {contactItems.map(item => (
              <div key={item.id} className="contact__card glass-card reveal-left" data-stagger id={`contact-${item.id}`}
                   role="listitem" style={{ '--contact-color': item.color }}>
                <div className="contact__card-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="contact__card-info">
                  <span className="contact__card-label">{item.label}</span>
                  <span className="contact__card-value">{item.value}</span>
                </div>
                {item.id === 'email' ? (
                  <button className="contact__card-action"
                          onClick={copyEmail}
                          aria-label={copied ? 'E-mail copiado!' : 'Copiar e-mail'}
                          style={{ '--contact-color': item.color }}>
                    {copied ? <IconCheck size={17} /> : <IconCopy size={17} />}
                  </button>
                ) : (
                  <a href={item.href} className="contact__card-action"
                     target={item.external ? '_blank' : undefined}
                     rel={item.external ? 'noopener noreferrer' : undefined}
                     aria-label={`Abrir ${item.label}`}
                     style={{ '--contact-color': item.color }}>
                    <IconExternalLink size={17} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Destaque Instagram */}
          <div className="contact__instagram glass-card reveal-right" ref={highlightRef}>
            <div className="contact__instagram-bg" aria-hidden="true" />
            <div className="contact__instagram-content">
              <div className="contact__instagram-icon">
                <IconInstagram size={52} />
              </div>
              <h3 className="contact__instagram-title">Nos siga no Instagram</h3>
              <p className="contact__instagram-handle">@vulkaris_robotics</p>
              <p className="contact__instagram-desc">
                Acompanhe nossos projetos, bastidores, competições e muito mais no perfil oficial.
              </p>
              <a href="https://instagram.com/vulkaris_robotics" className="btn btn-accent contact__instagram-btn"
                 target="_blank" rel="noopener noreferrer" id="contact-instagram-btn"
                 aria-label="Seguir @vulkaris_robotics no Instagram">
                <IconInstagram size={18} />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
