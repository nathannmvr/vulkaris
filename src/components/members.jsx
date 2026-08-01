import { IconCode, IconZap, IconBox, IconGear, IconBrush } from './Icons';

/* 
 * ==========================================
 * INSTRUÇÕES PARA ADICIONAR UM NOVO MEMBRO
 * ==========================================
 * 
 * Para adicionar ou editar um membro, basta criar/editar um objeto abaixo.
 * A ordem alfabética e as cores são definidas automaticamente pela página.
 * 
 * - id: Identificador único (geralmente o nome, minúsculo e sem espaço)
 * - name: Nome que aparecerá no card
 * - role: Função/Cargo na equipe (ex: 'Projetista', 'Programação')
 * - description: Um breve texto sobre o que o membro faz
 * - icon: Ícone da área. Use os importados na linha 1 (ex: <IconCode size={30} />)
 * - instagram: O @ do instagram (ex: '@usuario')
 * - image: Caminho da foto (salve o arquivo na pasta public/membros/)
 * 
 * [OPCIONAL]
 * - position: Ajusta o corte da foto redonda. Se a cabeça estiver sendo
 *             cortada pelo círculo, você pode usar valores como 'center 20%', 
 *             'center 10%', 'top', etc., para mover a foto pra baixo/cima.
 *             Se a foto original já for bem centralizada no rosto, pode remover!
 */

export const members = [
  {
    id: 'antonio',
    name: 'Antonio Pedro',
    role: 'Projetista',
    description: 'Modelagem 3D, estrutura mecânica e design dos robôs.',
    icon: <IconBox size={30} />,
    instagram: '@wiik1223',
    image: '/membros/antonio.jpeg',
    position: 'center 20%',
  },
  {
    id: 'beatriz',
    name: 'Beatriz',
    role: 'Mídia & Design',
    description: 'Mídia, divulgação, identidade visual e produção de conteúdos da equipe.',
    icon: <IconBrush size={30} />,
    instagram: '@beatrizt.sv',
    image: '/membros/beatriz.jpeg',
    position: 'center 20%',
  },
  {
    id: 'bianca',
    name: 'Bianca Muniz',
    role: 'Mídia & Design',
    description: 'Mídia, divulgação, identidade visual e produção de conteúdos da equipe.',
    icon: <IconBrush size={30} />,
    instagram: '@eu.biancamuniz',
    image: '/membros/Bianca.png',
    position: 'center 25%',
  },
  {
    id: 'fernanda',
    name: 'Fernanda Santos',
    role: 'Projetista',
    description: 'Modelagem 3D, estrutura mecânica e design dos robôs.',
    icon: <IconBox size={30} />,
    instagram: '@nanda_fehs2',
    image: '/membros/fernanda.jpeg',
  },
  {
    id: 'ingrid',
    name: 'Ingrid',
    role: 'Eletrônica',
    description: 'Eletrônica dos robôs, montagem elétrica e apoio na integração dos componentes.',
    icon: <IconZap size={30} />,
    instagram: '@ingrids.nns',
    image: '/membros/ingrid.jpg',
    position: 'center 15%',
  },
  {
    id: 'nathan',
    name: 'Nathan Maciel',
    role: 'Programação',
    description: 'Programação dos robôs e apoio nas integrações do sistema.',
    icon: <IconCode size={30} />,
    instagram: '@nathanmaciel5',
    image: '/membros/Nathan.webp',
  },
  {
    id: 'pedro',
    name: 'Pedro Victor',
    role: 'Líder',
    description: 'Apoio geral, organização, integração da equipe e suporte técnico.',
    icon: <IconGear size={30} />,
    instagram: '@pedro_victor4896',
    image: '/membros/pedro.jpg',
  },
  {
    id: 'victor',
    name: 'Victor Rodrigues',
    role: 'Eletrônica',
    description: 'Eletrônica dos robôs, montagem elétrica e integração dos componentes.',
    icon: <IconZap size={30} />,
    instagram: '@vii.ctorx',
    image: '/membros/Victor.jpeg',
    position: 'center 20%',
  },
    {
    id: 'nathan',
    name: 'Nathan Maciel',
    role: 'Programação',
    description: 'Programação dos robôs e apoio nas integrações do sistema.',
    icon: <IconCode size={30} />,
    instagram: '@nathanmaciel5',
    image: '/membros/Nathan.webp',
  },
];
