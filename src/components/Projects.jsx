import { useState } from 'react';
import '../styles/Projects.css';
import { IconStar, IconGithub, IconExternalLink, IconChevronLeft, IconChevronRight } from './Icons';
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

const projects = [
  {
    id: 'futebol-robos',
    title: 'Futebol de Robôs',
    description: 'Desenvolvimento de robôs autônomos para competições de futebol robótico. O projeto envolve programação de IA, eletrônica avançada, modelagem e montagem completa dos robôs jogadores.',
    status: 'Em Desenvolvimento',
    statusColor: '#FF8C4A',
    image: '/projetos/futebol/robot_soccer.png',
    tags: ['Autonomia', 'IA', 'Eletrônica', 'Competição'],
    featured: false,
    github: null,
    link: null,
    date: getTodayDateWithTime(14, 30),
  },
  {
    id: 'combate-robos',
    title: 'RoboClash',
    description: 'Plataforma de gerenciamento de robôs de combate, permitindo o cadastro de robôs, equipes, eventos e resultados das competições.',
    status: 'Ativo',
    statusColor: '#4FC3F7',
    image: '/projetos/roboClash/roboClash.png',
    tags: ['Desenvolvimento', 'Web', 'Gestão', 'Competições'],
    featured: false,
    github: null,
    link: 'https://roboClash.vercel.app',
    date: getTodayDateWithTime(16, 45),
  },
  {
    id: 'CNC',
    title: 'CNC PCB',
    description: 'Uma máquina CNC impressa em 3D para fabricação de PCBs caseiras',
    status: 'Em Desenvolvimento',
    statusColor: '#FF8C4A',
    image: '/projetos/CNC/cnc.png',
    tags: ['CNC', 'PCB', 'GRBL'],
    featured: false,
    github: 'https://github.com/pedro4896/CNC_PCB',
    link: null,
    date: getTodayDateWithTime(20, 30),
  },
  {
    id: 'Extrusora',
    title: 'Extrusora Garrafa PET',
    description: 'Uma maquina capaz de transformar garrafas Pets em filamentos para impressoras 3D',
    status: 'Em Desenvolvimento',
    statusColor: '#FF8C4A',
    image: '/projetos/extrusora/extrusora.jpg',
    tags: ['3D', 'Reciclagem', 'Criatividade'],
    featured: false,
    github: null,
    link: null,
    date: getTodayDateWithTime(20, 45),
  },
  {
    id: 'automacao-geral',
    title: 'Projetos de Automação',
    description: 'Sistemas automatizados que integram sensores, atuadores e microcontroladores para resolver problemas práticos do dia a dia.',
    status: 'Em Desenvolvimento',
    statusColor: '#FF8C4A',
    image: null,
    tags: ['Sensores', 'Arduino', 'Automação'],
    featured: false,
    github: null,
    link: null,
    date: getTodayDateWithTime(10, 15),
  },
  {
    id: 'prototipagem',
    title: 'Prototipagem Rápida',
    description: 'Criação de protótipos mecânicos com modelagem 3D e impressão 3D, permitindo testar e iterar rapidamente sobre os designs dos robôs.',
    status: 'Ativo',
    statusColor: '#4FC3F7',
    image: null,
    tags: ['3D Print', 'CAD', 'Prototipagem'],
    featured: false,
    github: null,
    link: null,
    date: getTodayDateWithTime(11, 0),
  },
  {
    id: 'inmoov',
    title: 'Braço Robótico InMoov',
    description: 'Desenvolvimento e montagem de um braço robótico de tamanho real de código aberto. Envolve impressão 3D de todas as partes, controle de servomotores, reconhecimento de voz e visão computacional.',
    status: 'Ativo',
    statusColor: '#4FC3F7',
    image: '/projetos/inmoov/inmoov.png',
    tags: ['Braço Robótico', 'Impressão 3D', 'Visão Computacional', 'C++', 'Python', "OpenCV"],
    featured: true,
    github: null,
    link: null,
    date: getTodayDateWithTime(9, 0),
  },
];

export default function Projects() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const featuredRef = useScrollReveal({ threshold: 0.2 });
  const gridRef = useScrollReveal({ threshold: 0.1 });
  const [activeProject, setActiveProject] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const regularProjects = projects.filter(p => !p.featured);
  const gridItems = [...regularProjects];

  const totalPages = Math.ceil(gridItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gridItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to the projects grid start rather than the very top of section
    document.getElementById('projects-grid-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projetos" className="section projects" aria-labelledby="projects-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="reveal-up" ref={headerRef}>
          <h2 id="projects-title" className="section-title">O Que Desenvolvemos</h2>
          <p className="section-subtitle">
            Projetos desafiadores que combinam todas as nossas áreas de atuação,
            da programação à montagem final.
          </p>
          <div className="divider" />
        </div>

        {/* Projeto em destaque */}
        <div>
          {projects.filter(p => p.featured).map(project => (
            <div key={project.id} className="projects__featured glass-card reveal-up" ref={featuredRef} id={`project-${project.id}`}
                 role="article" aria-label={`Projeto em destaque: ${project.title}`}
                 onClick={() => setActiveProject(project)} style={{ cursor: 'pointer', '--project-color': project.statusColor }}>
              <div className="projects__featured-glow" aria-hidden="true" />
              <div className="projects__featured-image">
                <img src={project.image} alt={`Robô jogando futebol — ${project.title}`} loading="lazy" />
                <div className="projects__featured-image-overlay" aria-hidden="true" />
                <div className="projects__status-badge" style={{ '--status-color': project.statusColor }}>
                  <span className="projects__status-dot" aria-hidden="true" />
                  {project.status}
                </div>
              </div>
              <div className="projects__featured-content">
                <div className="projects__featured-label">
                  <IconStar size={14} /> Destaque &bull; {project.date}
                </div>
                <h3 className="projects__featured-title">{project.title}</h3>
                <p className="projects__featured-desc">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map(tag => <span key={tag} className="areas__tag">{tag}</span>)}
                </div>
                {(project.github || project.link) && (
                  <div className="projects__links">
                    {project.github && (
                      <a href={project.github} className="btn btn-outline projects__link-btn" target="_blank" rel="noopener noreferrer" aria-label="Código no GitHub" onClick={e => e.stopPropagation()}>
                        <IconGithub size={16} /> GitHub
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="btn btn-primary projects__link-btn" target="_blank" rel="noopener noreferrer" aria-label="Veja mais detalhes do projeto" onClick={e => e.stopPropagation()}>
                        Veja Mais <IconExternalLink size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="projects__featured-accent-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Anchor for pagination scrolling */}
        <div id="projects-grid-start" style={{ scrollMarginTop: '100px' }} />

        {/* Grid */}
        <div className="projects__grid reveal-up" ref={gridRef}>
          {currentItems.map((project) => {
            return (
              <div key={project.id} className="projects__card glass-card" id={`project-${project.id}`}
                   role="article" onClick={() => setActiveProject(project)} style={{ cursor: 'pointer', '--project-color': project.statusColor }}>
                <div className="projects__card-glow" aria-hidden="true" />
                <div className="projects__card-header">
                  <span className="projects__card-date">{project.date}</span>
                  <span className="projects__status-badge projects__status-badge--small"
                        style={{ '--status-color': project.statusColor }}>
                    <span className="projects__status-dot" aria-hidden="true" />
                    {project.status}
                  </span>
                </div>
                {project.image ? (
                  <div className="projects__card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="projects__card-image-overlay" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="projects__card-banner" aria-hidden="true" />
                )}
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map(tag => <span key={tag} className="areas__tag">{tag}</span>)}
                </div>
                {(project.github || project.link) && (
                  <div className="projects__card-links">
                    {project.github && (
                      <a href={project.github} className="projects__card-link projects__card-link--github" target="_blank" rel="noopener noreferrer" aria-label="Código no GitHub" onClick={e => e.stopPropagation()}>
                        <IconGithub size={15} /> GitHub
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="projects__card-link projects__card-link--more" target="_blank" rel="noopener noreferrer" aria-label="Veja mais detalhes do projeto" onClick={e => e.stopPropagation()}>
                        Veja Mais <IconExternalLink size={15} />
                      </a>
                    )}
                  </div>
                )}
                <div className="projects__card-accent-line" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="projects__pagination" role="navigation" aria-label="Paginação dos projetos">
            <button
              className="projects__page-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Página anterior"
            >
              <IconChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`projects__page-btn ${currentPage === page ? 'projects__page-btn--active' : ''}`}
                onClick={() => handlePageChange(page)}
                aria-label={`Ir para a página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <button
              className="projects__page-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Próxima página"
            >
              <IconChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Modal de Detalhes do Projeto */}
      {activeProject && (
        <div className="projects__modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="projects__modal glass-card" onClick={e => e.stopPropagation()} style={{ '--project-color': activeProject.statusColor }}>
            <button className="projects__modal-close" onClick={() => setActiveProject(null)} aria-label="Fechar modal">
              &times;
            </button>
            <div className="projects__modal-glow" aria-hidden="true" />
            {activeProject.image ? (
              <div className="projects__modal-image">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
            ) : (
              <div className="projects__modal-banner" aria-hidden="true" />
            )}
            <div className="projects__modal-content">
              <div className="projects__modal-header">
                <div className="projects__modal-title-group">
                  <h3 className="projects__modal-title">{activeProject.title}</h3>
                  <span className="projects__modal-date">{activeProject.date}</span>
                </div>
                <span className="projects__status-badge" style={{ '--status-color': activeProject.statusColor }}>
                  <span className="projects__status-dot" aria-hidden="true" />
                  {activeProject.status}
                </span>
              </div>
              <p className="projects__modal-desc">{activeProject.description}</p>
              <div className="projects__tags">
                {activeProject.tags.map(tag => <span key={tag} className="areas__tag">{tag}</span>)}
              </div>
              {(activeProject.github || activeProject.link) && (
                <div className="projects__modal-links">
                  {activeProject.github && (
                    <a href={activeProject.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                      <IconGithub size={16} /> GitHub
                    </a>
                  )}
                  {activeProject.link && (
                    <a href={activeProject.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Veja Mais <IconExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
