import { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import { IconInstagram, IconCamera, IconChevronLeft, IconChevronRight } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const getTodayDateWithTime = (hour, minute) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const hh = String(hour).padStart(2, '0');
  const min = String(minute).padStart(2, '0');
  return `${dd}/${mm}/${yyyy} às ${hh}:${min}`;
};

// Span: 1 = normal, 2 = tall (dobro da altura), 4 = wide (dobro da largura)
const galleryItems = [
  {
    id: 'novos_membros',
    src: '/galeria/novosMembros.png',
    alt: 'Divulgação dos novos membros da Equipe Vulkaris',
    label: 'Novos Membros',
    span: 'normal',
    date: getTodayDateWithTime(13, 29),
    desc: 'Divulgação dos novos membros da Equipe Vulkaris',
    instagramLink: 'https://www.instagram.com/p/DavNBz5Fu0f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 'team-working-1',
    src: '/team_working.png',
    alt: 'Equipe Vulkaris trabalhando em projeto de robótica no laboratório',
    label: 'Bastidores',
    span: 'normal',
    date: getTodayDateWithTime(16, 0),
    desc: 'Alinhamento mecânico do chassi e testes de calibração eletrônica feitos em conjunto pela equipe no laboratório.',
    instagramLink: null,
  },
];

export default function Gallery() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useScrollReveal({ threshold: 0.1 });
  const ctaRef = useScrollReveal({ threshold: 0.5 });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [activeItem, setActiveItem] = useState(null);

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('gallery-grid-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNextItem = (e) => {
    e.stopPropagation();
    const currentIndex = galleryItems.findIndex(item => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  const handlePrevItem = (e) => {
    e.stopPropagation();
    const currentIndex = galleryItems.findIndex(item => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') {
        const index = galleryItems.findIndex(item => item.id === activeItem.id);
        setActiveItem(galleryItems[(index + 1) % galleryItems.length]);
      }
      if (e.key === 'ArrowLeft') {
        const index = galleryItems.findIndex(item => item.id === activeItem.id);
        setActiveItem(galleryItems[(index - 1 + galleryItems.length) % galleryItems.length]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

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

        {/* Anchor for pagination scrolling */}
        <div id="gallery-grid-start" style={{ scrollMarginTop: '100px' }} />

        <div className="gallery__grid reveal-up" role="list" aria-label="Galeria de imagens da Vulkaris Robotics Team" ref={gridRef}>
          {currentItems.map(item => (
            <div key={item.id} className={`gallery__item gallery__item--${item.span}`}
                 role="listitem" id={`gallery-${item.id}`} onClick={() => setActiveItem(item)}>
              <img src={item.src} alt={item.alt} className="gallery__image" loading="lazy" />
              <div className="gallery__overlay" aria-hidden="true">
                {item.instagramLink && (
                  <a
                    href={item.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery__instagram-link"
                    aria-label="Ver publicação no Instagram"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconInstagram size={18} />
                  </a>
                )}
                <span className="gallery__date">{item.date}</span>
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="gallery__pagination" role="navigation" aria-label="Paginação da galeria">
            <button
              className="gallery__page-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              <IconChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`gallery__page-btn ${currentPage === page ? 'gallery__page-btn--active' : ''}`}
                onClick={() => handlePageChange(page)}
                aria-label={`Ir para a página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              className="gallery__page-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              <IconChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal de Expansão */}
      {activeItem && (
        <div className="gallery__modal-overlay" onClick={() => setActiveItem(null)}>
          <button className="gallery__modal-nav gallery__modal-nav--prev" onClick={handlePrevItem} aria-label="Imagem anterior">
            <IconChevronLeft size={24} />
          </button>

          <div className="gallery__modal glass-card" onClick={e => e.stopPropagation()}>
            <button className="gallery__modal-close" onClick={() => setActiveItem(null)} aria-label="Fechar galeria">
              &times;
            </button>

            <div className="gallery__modal-image-wrapper">
              <img src={activeItem.src} alt={activeItem.alt} className="gallery__modal-image" />
            </div>

            <div className="gallery__modal-info">
              <div className="gallery__modal-header">
                <span className="gallery__modal-label">{activeItem.label}</span>
                <span className="gallery__modal-date">{activeItem.date}</span>
              </div>
              <p className="gallery__modal-desc">{activeItem.desc || activeItem.alt}</p>
              {activeItem.instagramLink && (
                <div className="gallery__modal-actions">
                  <a
                    href={activeItem.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery__modal-instagram-btn"
                  >
                    <IconInstagram size={16} />
                    <span>Ver no Instagram</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <button className="gallery__modal-nav gallery__modal-nav--next" onClick={handleNextItem} aria-label="Próxima imagem">
            <IconChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
