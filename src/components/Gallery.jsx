import '../styles/Gallery.css';
import { IconInstagram, IconCamera } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const galleryItems = [
  {
    id: 'robot-soccer-1',
    src: '/robot_soccer.png',
    alt: 'Robô futebolista da Vulkaris em ação durante competição',
    label: 'Futebol de Robôs',
    span: 'wide',
  },
  {
    id: 'team-working-1',
    src: '/team_working.png',
    alt: 'Equipe Vulkaris trabalhando em projeto de robótica no laboratório',
    label: 'Bastidores',
    span: 'tall',
  },
  {
    id: 'robot-soccer-2',
    src: '/robot_soccer.png',
    alt: 'Protótipo de robô desenvolvido pela equipe Vulkaris',
    label: 'Prototipagem',
    span: 'normal',
  },
  {
    id: 'team-working-2',
    src: '/team_working.png',
    alt: 'Teste de sistemas eletrônicos pela equipe Vulkaris',
    label: 'Eletrônica',
    span: 'normal',
  },
  {
    id: 'robot-soccer-3',
    src: '/robot_soccer.png',
    alt: 'Competição de robótica com participação da Vulkaris',
    label: 'Competição',
    span: 'normal',
  },
  {
    id: 'team-working-3',
    src: '/team_working.png',
    alt: 'Integração de componentes mecânicos pela Vulkaris',
    label: 'Integração',
    span: 'normal',
  },
];

export default function Gallery() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useStaggerReveal({ staggerMs: 120, threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.5 });

  return (
    <section id="galeria" className="section gallery" aria-labelledby="gallery-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="reveal-up" ref={headerRef}>
          <h2 id="gallery-title" className="section-title">Nossa História em Imagens</h2>
          <p className="section-subtitle">
            Robôs, bastidores, testes e competições — veja um pouco da nossa jornada.
          </p>
          <div className="divider" />
        </div>

        <div className="gallery__grid" role="list" aria-label="Galeria de imagens da Vulkaris Robotics Team" ref={gridRef}>
          {galleryItems.map(item => (
            <div key={item.id} className={`gallery__item gallery__item--${item.span} reveal-scale`} data-stagger
                 role="listitem" id={`gallery-${item.id}`}>
              <img src={item.src} alt={item.alt} className="gallery__image" loading="lazy" />
              <div className="gallery__overlay" aria-hidden="true">
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery__instagram-cta reveal-up" ref={ctaRef}>
          <p className="gallery__cta-text">
            <IconCamera size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
            Mais fotos e vídeos no nosso Instagram
          </p>
          <a href="https://instagram.com/vulkaris_robotics" className="btn btn-primary"
             target="_blank" rel="noopener noreferrer" id="gallery-instagram-btn"
             aria-label="Ver mais fotos no Instagram @vulkaris_robotics">
            <IconInstagram size={18} />
            @vulkaris_robotics
          </a>
        </div>
      </div>
    </section>
  );
}
