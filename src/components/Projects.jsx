import '../styles/Projects.css';
import { IconStar, IconFlask, IconRocket, IconInstagram } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 'futebol-robos',
    title: 'Futebol de Robôs',
    description: 'Desenvolvimento de robôs autônomos para competições de futebol robótico. O projeto envolve programação de IA, eletrônica avançada, modelagem e montagem completa dos robôs jogadores.',
    status: 'Em Desenvolvimento',
    statusColor: '#4FC3F7',
    image: '/robot_soccer.png',
    tags: ['Autonomia', 'IA', 'Eletrônica', 'Competição'],
    featured: true,
  },
  {
    id: 'automacao-geral',
    title: 'Projetos de Automação',
    description: 'Sistemas automatizados que integram sensores, atuadores e microcontroladores para resolver problemas práticos do dia a dia.',
    status: 'Planejado',
    statusColor: '#FF8C4A',
    image: null,
    tags: ['Sensores', 'Arduino', 'Automação'],
    featured: false,
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
  },
];

export default function Projects() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const featuredRef = useStaggerReveal({ staggerMs: 200, threshold: 0.2 });
  const gridRef = useStaggerReveal({ staggerMs: 150, threshold: 0.1 });

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
        <div ref={featuredRef}>
          {projects.filter(p => p.featured).map(project => (
            <div key={project.id} className="projects__featured glass-card reveal-up" data-stagger id={`project-${project.id}`}
                 role="article" aria-label={`Projeto em destaque: ${project.title}`}>
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
                <IconStar size={14} /> Destaque
              </div>
              <h3 className="projects__featured-title">{project.title}</h3>
              <p className="projects__featured-desc">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map(tag => <span key={tag} className="areas__tag">{tag}</span>)}
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid" ref={gridRef}>
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="projects__card glass-card reveal-up" data-stagger id={`project-${project.id}`}
                 role="article">
              <div className="projects__card-header">
                <IconFlask size={28} className="projects__card-icon" />
                <span className="projects__status-badge projects__status-badge--small"
                      style={{ '--status-color': project.statusColor }}>
                  <span className="projects__status-dot" aria-hidden="true" />
                  {project.status}
                </span>
              </div>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <div className="projects__tags">
                {project.tags.map(tag => <span key={tag} className="areas__tag">{tag}</span>)}
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <div className="projects__card projects__card--coming-soon glass-card reveal-up" data-stagger
               role="article" aria-label="Novos projetos em breve">
            <div className="projects__coming-soon-content">
              <IconRocket size={44} className="projects__coming-icon" />
              <h3 className="projects__card-title">Mais por vir...</h3>
              <p className="projects__card-desc">
                Novos projetos estão sendo planejados. Acompanhe no Instagram
                para ficar por dentro de todas as novidades!
              </p>
              <a href="https://instagram.com/vulkaris_robotics" className="btn btn-outline"
                 target="_blank" rel="noopener noreferrer" id="projects-instagram-btn"
                 style={{ marginTop: '14px', fontSize: '0.88rem', padding: '9px 22px' }}
                 aria-label="Acompanhar Vulkaris no Instagram">
                <IconInstagram size={16} />
                @vulkaris_robotics
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
