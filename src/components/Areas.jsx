import '../styles/Areas.css';
import { IconCode, IconZap, IconBox, IconTool, IconCpu, IconTrophy } from './Icons';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const areas = [
  {
    id: 'programacao',
    icon: <IconCode size={36} />,
    title: 'Programação',
    description: 'Desenvolvimento de algoritmos, lógica de controle, automação e software embarcado para os robôs.',
    tags: ['C/C++', 'Python', 'Arduino', 'Algoritmos'],
    color: '#4FC3F7',
  },
  {
    id: 'eletronica',
    icon: <IconZap size={36} />,
    title: 'Eletrônica',
    description: 'Projeto de circuitos, integração de sensores e atuadores, montagem elétrica e diagnóstico.',
    tags: ['Circuitos', 'Sensores', 'Arduino', 'PCB', 'IoT'],
    color: '#FF6B1A',
  },
  {
    id: 'modelagem',
    icon: <IconBox size={36} />,
    title: 'Modelagem',
    description: 'Design e prototipagem das estruturas mecânicas dos robôs com ferramentas de CAD.',
    tags: ['CAD', 'Impressão 3D', 'Solidworks', 'Fusion 360'],
    color: '#81D4FA',
  },
  {
    id: 'montagem',
    icon: <IconTool size={36} />,
    title: 'Montagem de Robôs',
    description: 'Integração de componentes mecânicos, eletrônicos e de software em estruturas funcionais.',
    tags: ['Mecânica', 'Integração', 'Testes', 'Prototipagem'],
    color: '#FF8C4A',
  },
  {
    id: 'automacao',
    icon: <IconCpu size={36} />,
    title: 'Automação',
    description: 'Implementação de sistemas autônomos de decisão, controle e movimentação em robôs.',
    tags: ['PID', 'Visão', 'Autonomia', 'IA'],
    color: '#4FC3F7',
  },
  {
    id: 'competicoes',
    icon: <IconTrophy size={36} />,
    title: 'Competições',
    description: 'Participação em torneios de robótica, colocando em prática todo o aprendizado da equipe.',
    tags: ['Torneios', 'Estratégia', 'Desafios'],
    color: '#FF6B1A',
  },
];

export default function Areas() {
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useStaggerReveal({ staggerMs: 100, threshold: 0.1 });

  return (
    <section id="areas" className="section areas" aria-labelledby="areas-title">
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />
      <div className="container">
        <div className="reveal-up" ref={headerRef}>
          <h2 id="areas-title" className="section-title">Áreas de Atuação</h2>
          <p className="section-subtitle">
            Nossa equipe atua em diversas frentes da robótica, combinando habilidades complementares
            para criar projetos completos e inovadores.
          </p>
          <div className="divider" />
        </div>

        <div className="areas__grid" role="list" ref={gridRef}>
          {areas.map((area) => (
            <div
              key={area.id}
              className="areas__card glass-card reveal-scale"
              data-stagger
              role="listitem"
              id={`area-${area.id}`}
              style={{ '--card-color': area.color }}
            >
              <div className="areas__card-glow" aria-hidden="true" />
              <div className="areas__icon" aria-hidden="true">{area.icon}</div>
              <h3 className="areas__title">{area.title}</h3>
              <p className="areas__desc">{area.description}</p>
              <div className="areas__tags" aria-label={`Tecnologias de ${area.title}`}>
                {area.tags.map(tag => (
                  <span key={tag} className="areas__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
