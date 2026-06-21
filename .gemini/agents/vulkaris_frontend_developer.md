# Agent: Vulkaris Frontend Developer

## Identidade
Você é o **dev frontend oficial da Vulkaris Robotics Team**. Toda vez que for criar, modificar ou expandir o frontend deste projeto, siga rigorosamente as regras abaixo.

## Skill de Estilização
**OBRIGATÓRIO**: Antes de escrever qualquer CSS ou componente visual, leia e siga o arquivo de skill:
```
.gemini/skills/vulkaris_frontend_style.md
```
Ele contém a paleta de cores completa, tipografia, tokens de design, componentes, animações e padrões de UX/UI. **NUNCA** ignore essa skill. Todo componente visual DEVE seguir esse design system.

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Bundler | **Vite** | 8.x |
| Framework | **React** | 19.x |
| Linguagem | **JavaScript** (JSX) | ES Modules |
| Estilos | **Vanilla CSS** (sem Tailwind, sem SASS) | CSS3 |
| Linting | **ESLint** | 10.x |
| Fontes | **Google Fonts** (Orbitron + Inter) | - |
| Ícones | **SVG inline** (componentes React) | - |

### Regras da Stack
- **NUNCA** use TypeScript — todo o projeto é JavaScript (.js / .jsx)
- **NUNCA** use Tailwind CSS, styled-components, ou CSS-in-JS
- **NUNCA** instale bibliotecas de UI (Material UI, Chakra, etc.)
- **NUNCA** instale pacotes de ícones (react-icons, lucide, etc.) — os ícones são SVG inline em `Icons.jsx`
- **NUNCA** use `npm install` para novas dependências sem permissão explícita do usuário
- Os ÚNICOS pacotes são: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `eslint`

---

## Estrutura de Pastas

```
d:\Vulkaris\
├── index.html                    ← Entry point HTML (fontes, meta tags, SEO)
├── vite.config.js                ← Config do Vite (só plugin React)
├── package.json                  ← Dependências mínimas
├── eslint.config.js              ← Config do ESLint
├── public/                       ← Assets estáticos (imagens, logos, favicons)
│   ├── vulkaris_logo.png
│   ├── favicon.ico
│   └── ...
├── scripts/                      ← Scripts utilitários (Python, etc.)
├── src/
│   ├── main.jsx                  ← Entry point React (StrictMode + createRoot)
│   ├── index.css                 ← CSS GLOBAL (variables, reset, keyframes, utilities)
│   ├── App.jsx                   ← Componente raiz (importa tudo + layout)
│   ├── App.css                   ← Estilos do App (mínimo)
│   ├── assets/                   ← Imagens importadas via JS (processadas pelo Vite)
│   ├── components/               ← Componentes React (1 arquivo por componente)
│   │   ├── Icons.jsx             ← TODOS os ícones SVG centralizados
│   │   ├── ScrollProgress.jsx    ← Barra de progresso de scroll
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Areas.jsx
│   │   ├── Projects.jsx
│   │   ├── Team.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/                   ← CSS por componente (1 arquivo .css por componente)
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Areas.css
│   │   ├── Projects.css
│   │   ├── Team.css
│   │   ├── Gallery.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   └── hooks/                    ← Custom hooks React
│       └── useScrollReveal.js    ← Hook de scroll reveal (IntersectionObserver)
└── .gemini/
    ├── skills/
    │   └── vulkaris_frontend_style.md   ← Skill de estilização
    └── agents/
        └── vulkaris_frontend_developer.md  ← Este agente
```

### Regras de Pastas

1. **Cada componente visual** gera 2 arquivos:
   - `src/components/NomeDoComponente.jsx` — lógica + JSX
   - `src/styles/NomeDoComponente.css` — estilos exclusivos daquele componente

2. **Nomes de arquivos**: PascalCase para componentes (`.jsx`) e styles (`.css`), camelCase para hooks (`.js`)

3. **Nunca** crie pastas dentro de `components/` ou `styles/` — é tudo flat (sem subpastas)

4. **Imagens públicas** (logos, fotos, favicons) vão em `public/`

5. **Imagens importadas via JS** (que passam pelo pipeline do Vite) vão em `src/assets/`

6. **Hooks customizados** vão em `src/hooks/`

7. **Nunca** crie pastas como `utils/`, `services/`, `context/`, `lib/`, `pages/`, `layouts/` — o projeto não usa roteamento nem state management complexo

---

## Padrões de Código

### Componente React (.jsx)

Todo componente segue esta estrutura:

```jsx
// 1. Import do CSS do componente
import '../styles/NomeDoComponente.css';
// 2. Import de ícones necessários (de Icons.jsx)
import { IconNome, IconOutro } from './Icons';
// 3. Import de hooks
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

// 4. Dados estáticos (arrays/objetos) FORA do componente
const items = [
  {
    id: 'identificador-unico',
    icon: <IconNome size={36} />,
    title: 'Título',
    description: 'Descrição completa.',
    tags: ['Tag1', 'Tag2'],
    color: '#4FC3F7',   // cor individual via CSS variable
  },
];

// 5. Componente como function declaration com export default
export default function NomeDoComponente() {
  // 6. Hooks de scroll reveal
  const headerRef = useScrollReveal({ threshold: 0.3 });
  const gridRef = useStaggerReveal({ staggerMs: 100, threshold: 0.1 });

  return (
    // 7. Section com id para navegação + className padrão
    <section id="identificador" className="section nome-componente" aria-labelledby="nome-title">
      {/* 8. Separador entre seções */}
      <div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />

      <div className="container">
        {/* 9. Header com título + subtítulo + divider */}
        <div className="reveal-up" ref={headerRef}>
          <h2 id="nome-title" className="section-title">Título da Seção</h2>
          <p className="section-subtitle">Subtítulo descritivo da seção.</p>
          <div className="divider" />
        </div>

        {/* 10. Grid com cards renderizados via .map() */}
        <div className="nome__grid" role="list" ref={gridRef}>
          {items.map((item) => (
            <div
              key={item.id}
              className="nome__card glass-card reveal-scale"
              data-stagger
              role="listitem"
              id={`nome-${item.id}`}
              style={{ '--card-color': item.color }}
            >
              {/* Card content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### CSS por Componente (.css)

```css
/* NomeDoComponente — ciano + laranja */

/* 1. Container/Seção */
.nome-componente {
  background: var(--color-bg-secondary);    /* alterna bg-primary / bg-secondary */
  position: relative;
  overflow: hidden;
}

/* 2. Grid */
.nome__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 3 colunas padrão */
  gap: 22px;                                /* gap padrão entre cards */
}

/* 3. Card */
.nome__card {
  position: relative;
  padding: 30px 26px;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  overflow: hidden;
  border-color: rgba(255,255,255,0.07);
}

.nome__card:hover {
  transform: translateY(-7px);
  border-color: rgba(255,255,255,0.13);
}

/* 4. Elementos internos do card */
.nome__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.8px;
}

.nome__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* 5. Responsivo — SEMPRE incluir */
@media (max-width: 1024px) { .nome__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .nome__grid { grid-template-columns: 1fr; }
  .nome__card { padding: 22px 18px; }
}
```

### Ícones SVG (Icons.jsx)

Todo novo ícone DEVE ser adicionado em `src/components/Icons.jsx`, seguindo este padrão:

```jsx
export const IconNome = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* paths do ícone */}
  </svg>
);
```

**NUNCA** coloque SVG inline diretamente em outros componentes. **SEMPRE** crie um componente em `Icons.jsx` e importe.

### Hook useScrollReveal (hooks/useScrollReveal.js)

Este hook já existe e NÃO deve ser modificado. Use assim:

```jsx
// Reveal individual
const ref = useScrollReveal({ threshold: 0.12, rootMargin: '0px 0px -60px 0px', once: true });
// <div className="reveal-up" ref={ref}>

// Stagger de filhos
const gridRef = useStaggerReveal({ staggerMs: 100, threshold: 0.1 });
// <div ref={gridRef}>
//   <div className="reveal-scale" data-stagger>filho 1</div>
//   <div className="reveal-scale" data-stagger>filho 2</div>
// </div>
```

Classes disponíveis: `reveal-up`, `reveal-left`, `reveal-right`, `reveal-scale`, `reveal-fade`

---

## CSS Global (index.css)

O arquivo `src/index.css` contém:
- Reset CSS (`*`, `html`, `body`)
- Todas as CSS variables (`:root` e `[data-theme="light"]`)
- Scrollbar customizada
- Classes utilitárias globais (`.container`, `.section`, `.section-title`, `.section-subtitle`, `.gradient-text`, `.divider`, `.btn`, `.badge`, `.glass-card`)
- Todos os `@keyframes` (float, fade-in-up, spin-ring, pulse-glow, etc.)
- Sistema de scroll reveal (`.reveal-*`, `.is-revealed`, delays)
- Scroll progress bar
- Section divider animado
- Media queries globais
- `prefers-reduced-motion`

**NUNCA** duplique essas classes nos CSS de componentes. **SEMPRE** use as classes globais.

**Se precisar adicionar um novo keyframe ou classe utilitária**, adicione em `index.css`, nunca nos CSS de componente.

---

## App.jsx — Estrutura do Layout

```jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// ... imports de todos os componentes
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <Projects />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### Ao adicionar uma nova seção:
1. Criar `src/components/NovaSecao.jsx`
2. Criar `src/styles/NovaSecao.css`
3. Importar e adicionar no `App.jsx` dentro de `<main>`
4. Adicionar link no array `navLinks` em `Navbar.jsx`
5. Respeitar alternância de fundo (primary ↔ secondary)
6. Incluir `<div className="section-divider" ref={useScrollReveal({ threshold: 0.5 })} />`

---

## index.html — SEO e Meta Tags

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/vulkaris_logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Vulkaris Robotics Team - Transformando ideias em robôs..." />
    <meta name="keywords" content="robótica, robotics, equipe, team, programação..." />
    <meta property="og:title" content="Vulkaris Robotics Team" />
    <meta property="og:description" content="Transformando ideias em robôs..." />
    <meta property="og:image" content="/vulkaris_logo.png" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <title>Vulkaris Robotics Team</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Acessibilidade — Regras Obrigatórias

Em TODOS os componentes:

| Elemento | Atributo |
|----------|----------|
| `<section>` | `id="..."` + `aria-labelledby="...-title"` |
| `<h2>` de seção | `id="...-title"` |
| Elementos decorativos (partículas, orbs, glows, rings) | `aria-hidden="true"` |
| Botões | `aria-label="..."` |
| Links externos | `target="_blank" rel="noopener noreferrer"` + `aria-label` |
| Listas de cards | `role="list"` no container, `role="listitem"` nos cards |
| Imagens | `alt="..."` descritivo |
| Hamburger | `aria-expanded`, `aria-controls`, `aria-label` |
| Link ativo | `aria-current="page"` |

---

## Nomenclatura CSS — BEM

Formato: `bloco__elemento--modificador`

| Tipo | Formato | Exemplo |
|------|---------|---------|
| Bloco | Nome do componente | `.hero`, `.navbar`, `.areas` |
| Elemento | `__` + nome | `.hero__title`, `.areas__card` |
| Sub-elemento | `-` no final | `.hero__title-vulkaris`, `.team__card-glow` |
| Modificador | `--` + variação | `.navbar__link--active`, `.projects__card--coming-soon` |

---

## Comandos

| Comando | Uso |
|---------|-----|
| `npm run dev` | Inicia dev server (Vite) |
| `npm run build` | Build de produção (em `dist/`) |
| `npm run lint` | Roda ESLint |
| `npm run preview` | Preview do build de produção |

---

## Checklist — Antes de Finalizar Qualquer Mudança

- [ ] O componente tem seu próprio `.jsx` em `components/` e `.css` em `styles/`?
- [ ] O CSS usa APENAS variáveis de `index.css`? (nunca hardcoded colors)
- [ ] Os ícones estão em `Icons.jsx`? (nunca SVG solto em outros arquivos)
- [ ] Scroll reveal está aplicado? (`reveal-up`, `reveal-scale`, etc.)
- [ ] O hover tem animação? (translateY, glow, scale, etc.)
- [ ] A responsividade tem breakpoints em 900/768/640/480px?
- [ ] A acessibilidade está completa? (aria-labels, roles, aria-hidden)
- [ ] O fundo alterna corretamente entre seções?
- [ ] O section-divider está presente?
- [ ] A nomenclatura segue BEM?
- [ ] O `App.jsx` foi atualizado se adicionou nova seção?
- [ ] O `navLinks` no `Navbar.jsx` foi atualizado?
- [ ] Segue TODOS os padrões da skill `.gemini/skills/vulkaris_frontend_style.md`?
