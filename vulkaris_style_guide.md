# 🎨 Vulkaris Style Guide — Guia Completo de Estilização UX/UI

> **Objetivo**: Este documento contém TODAS as instruções de design, cores, tipografia, componentes, animações e padrões de UX/UI do site Vulkaris Robotics Team. Use-o como prompt/referência para qualquer agente de IA recriar esta mesma estética.

---

## 1. 🎯 Conceito Visual

**Estilo**: Dark futurista / Sci-fi tecnológico com toques de glassmorphismo
**Sensação**: Premium, tecnológico, robótico, moderno
**Inspiração**: Interfaces de ficção científica, HUDs de naves, dashboards de robótica

### Princípios-Chave
- Fundo escuro predominante com acentos de cor vibrantes (ciano + laranja)
- Efeitos de glow (brilho neon) nos elementos interativos
- Glassmorphismo (vidro translúcido com blur) em cards e navbar
- Micro-animações em TODOS os elementos hover
- Partículas flutuantes e orbs de luz no background
- Grid de linhas sutil no fundo do hero (estilo blueprint)
- Anéis orbitais rotativos ao redor de elementos visuais centrais
- Suporte a tema claro (light mode) via `[data-theme="light"]`

---

## 2. 🎨 Paleta de Cores

### Dark Mode (Padrão)

#### Fundos
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-bg-primary` | `#0f1117` | Fundo principal da página |
| `--color-bg-secondary` | `#151a24` | Fundo alternado entre seções |
| `--color-bg-card` | `#1a2030` | Fundo de cards |
| `--color-bg-card-hover` | `#1e2540` | Card em hover |
| `--color-surface` | `#1e2532` | Superfícies elevadas |

#### Cor Primária — Azul Ciano
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-primary` | `#4FC3F7` | Cor principal (textos, ícones, bordas) |
| `--color-primary-light` | `#81D4FA` | Variante clara |
| `--color-primary-dark` | `#0288D1` | Variante escura (gradientes de botão) |
| `--color-primary-glow` | `rgba(79, 195, 247, 0.25)` | Glow suave |
| `--color-primary-glow-strong` | `rgba(79, 195, 247, 0.45)` | Glow forte (hover) |

#### Cor de Acento — Laranja Fogo
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-accent` | `#FF6B1A` | Acento (CTAs secundários, destaques) |
| `--color-accent-light` | `#FF8C4A` | Variante clara |
| `--color-accent-dim` | `#CC5510` | Variante escura |
| `--color-accent-glow` | `rgba(255, 107, 26, 0.28)` | Glow suave |
| `--color-accent-glow-strong` | `rgba(255, 107, 26, 0.5)` | Glow forte (hover) |

#### Cinza Metálico
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-steel` | `#8C9BAD` | Detalhes metálicos |
| `--color-steel-dark` | `#5A6878` | Detalhes metálicos escuros |

#### Texto
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-text-primary` | `#F0F4F8` | Títulos, texto principal |
| `--color-text-secondary` | `#A8B8CC` | Descrições, parágrafos |
| `--color-text-muted` | `#5A6878` | Labels, textos terciários |

#### Bordas
| Token | Cor |
|-------|-----|
| `--color-border` | `rgba(79, 195, 247, 0.18)` |
| `--color-border-accent` | `rgba(255, 107, 26, 0.3)` |
| `--color-border-steel` | `rgba(140, 155, 173, 0.2)` |

#### Elementos Especiais
| Token | Cor | Uso |
|-------|-----|-----|
| `--color-glass` | `rgba(26, 32, 48, 0.75)` | Fundo de cards com glassmorphismo |
| `--color-btn-primary-text` | `#0a0e15` | Texto em botões primários |
| `--color-tag-bg` | `rgba(255, 255, 255, 0.04)` | Fundo de tags |
| `--color-tag-border` | `rgba(255, 255, 255, 0.09)` | Borda de tags |
| `--color-tag-bg-hover` | `rgba(255, 255, 255, 0.08)` | Fundo de tags em hover |
| `--color-tag-border-hover` | `rgba(255, 255, 255, 0.18)` | Borda de tags em hover |

### Light Mode

```css
[data-theme="light"] {
  --color-bg-primary:    #f2f9fd;
  --color-bg-secondary:  #e6f2f9;
  --color-bg-card:       #ffffff;
  --color-bg-card-hover: #f1f5f9;
  --color-surface:       #ffffff;

  --color-primary:       #0288D1;
  --color-primary-light: #4FC3F7;
  --color-primary-dark:  #01579B;
  --color-primary-glow:  rgba(2, 136, 209, 0.15);

  --color-accent:        #E65100;
  --color-accent-light:  #FF6B1A;

  --color-text-primary:  #0f1117;
  --color-text-secondary:#334155;
  --color-text-muted:    #64748b;

  --color-glass:         rgba(255, 255, 255, 0.85);
  --color-btn-primary-text: #ffffff;
}
```

---

## 3. ✏️ Tipografia

### Fontes
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Token | Fonte | Uso |
|-------|-------|-----|
| `--font-display` | `'Orbitron', monospace` | Títulos, nomes de seção, badges, stats, nomes de membros |
| `--font-body` | `'Inter', sans-serif` | Corpo de texto, parágrafos, descrições, botões |

### Hierarquia de Texto

| Elemento | Font-family | Tamanho | Peso | Extras |
|----------|-------------|---------|------|--------|
| Nome principal (Hero) | Orbitron | `clamp(2.8rem, 7vw, 5.2rem)` | 900 | `letter-spacing: 5px`, gradient text, `drop-shadow` ciano |
| Subtítulo (Hero) | Orbitron | `clamp(0.8rem, 1.8vw, 1.1rem)` | 400 | `letter-spacing: 8px`, uppercase, cor muted |
| Título de seção | Orbitron | `clamp(1.75rem, 4vw, 2.6rem)` | 700 | Gradient text (branco → ciano) |
| Subtítulo de seção | Inter | `1.05rem` | 400 | `color-text-secondary`, `max-width: 600px` |
| Título de card | Orbitron | `1rem – 1.1rem` | 700 | `letter-spacing: 0.8px` |
| Descrição de card | Inter | `0.88rem – 0.97rem` | 400 | `line-height: 1.7`, `color-text-secondary` |
| Tags | Inter | `0.73rem` | 500 | Pill shape, borda sutil |
| Labels / Stat labels | Inter | `0.72rem` | 700 | `uppercase`, `letter-spacing: 1–2px` |
| Badge | Inter | `0.75rem` | 700 | `uppercase`, `letter-spacing: 2px` |

### Texto com Gradiente
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Título de seção: branco → ciano */
.section-title {
  background: linear-gradient(135deg, #ffffff 0%, #4FC3F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 4. 📐 Design Tokens

### Espaçamento
| Token | Valor |
|-------|-------|
| `--section-padding` | `100px 0` (desktop) / `68px 0` (tablet) / `50px 0` (mobile) |
| `--container-max` | `1200px` |
| Container padding lateral | `0 24px` |

### Border Radius
| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `8px` | Links, pequenos elementos |
| `--radius-md` | `14px` | Cards padrão, imagens |
| `--radius-lg` | `20px` | Cards de seção, glass cards |
| `--radius-xl` | `28px` | Featured cards, CTA sections |
| Botões / Tags / Badges | `50px` | Forma pill / cápsula |

### Transições
| Token | Valor | Uso |
|-------|-------|-----|
| `--transition-fast` | `0.18s ease` | Hover de cor, ícones |
| `--transition-base` | `0.28s ease` | Cards, botões, transformações |
| `--transition-slow` | `0.5s ease` | Imagens, filtros, overlays |

### Sombras
| Token | Valor |
|-------|-------|
| `--shadow-glow` | `0 0 28px rgba(79, 195, 247, 0.25)` |
| `--shadow-glow-accent` | `0 0 28px rgba(255, 107, 26, 0.28)` |
| `--shadow-card` | `0 4px 24px rgba(0, 0, 0, 0.45)` |

---

## 5. 🧩 Componentes

### 5.1 Navbar
- **Posição**: Fixed no topo, `z-index: 1000`
- **Estado normal**: Transparente, sem fundo
- **Estado scrolled** (após 50px de scroll):
  - `background: rgba(15, 17, 23, 0.93)`
  - `backdrop-filter: blur(20px)`
  - `border-bottom: 1px solid rgba(79, 195, 247, 0.15)`
  - `box-shadow: 0 4px 30px rgba(0,0,0,0.6)`
  - Padding reduzido de `18px 0` → `12px 0`
- **Logo**: Imagem 42×42px + texto Orbitron (gradient branco→ciano) + subtexto em uppercase muted
  - Hover na logo: `scale(1.08) rotate(4deg)` na imagem
- **Links**: Cor `text-secondary`, hover → `text-primary` + underline animado (gradient ciano→laranja, `width: 0` → `width: 60%`)
  - Link ativo: underline permanente
- **CTA**: Botão `btn-accent` (laranja) ao lado dos links
- **Toggle de tema**: Botão circular 38×38px, borda ciano, hover → fundo ciano sutil + scale
- **Mobile**: Hamburger com 3 linhas animadas em X, drawer lateral 290px da direita com `backdrop-filter: blur(20px)`, overlay escuro com blur

### 5.2 Hero Section
- **Layout**: Grid 2 colunas `1fr 1fr`, gap `60px`, `min-height: 100vh`
- **Background layers**:
  1. Grid de linhas (blueprint): `background-image` com linhas de 1px ciano a 6% opacidade, `55×55px`, com `mask-image: radial-gradient` fade-out
  2. Orbs flutuantes:
     - Ciano: 480px, `blur(64px)`, canto superior direito, `animation: float 9s`
     - Laranja: 360px, canto inferior esquerdo, `float 11s reverse`
     - Laranja fraco: 180px, centro, `float 6s`
  3. Partículas: 18 pontos de 3px, alternando cores ciano/laranja com `box-shadow` glow
  4. Scan line: Linha horizontal 2px ciano translúcido, `animation: scan-line 4s linear infinite`
- **Conteúdo**: Badge → Título → Tagline → Descrição → Botões → Stats
- **Visual**: Logo com anéis orbitais giratórios (3 anéis: ciano 12s, laranja 19s reverse, ciano dashed 26s) + animação `logo-levitate` (float + scale suave)
- **Scroll indicator**: Texto "Explore" em uppercase + linha com dot animado descendo
- **Animação de entrada**: `fade-in-up` com stagger (delay entre elementos de 150ms)

### 5.3 Botões
```
┌─ btn-primary ──────────────────────────┐
│  Gradiente: primary-dark → primary     │
│  Cor texto: #0a0e15 (escuro)           │
│  box-shadow: 0 4px 18px glow           │
│  Hover: translateY(-2px) + glow forte  │
│  Shine effect: ::before sweep 90deg    │
│  border-radius: 50px (pill)            │
│  padding: 13px 30px                    │
└────────────────────────────────────────┘

┌─ btn-accent ───────────────────────────┐
│  Gradiente: accent-dim → accent        │
│  Cor texto: #fff                       │
│  box-shadow: 0 4px 18px accent-glow   │
│  Hover: translateY(-2px) + glow forte  │
└────────────────────────────────────────┘

┌─ btn-outline ──────────────────────────┐
│  Background: transparente              │
│  Border: 2px solid primary             │
│  Cor texto: primary                    │
│  Hover: bg primary, texto escuro,      │
│         translateY(-2px) + glow        │
└────────────────────────────────────────┘
```

Todos os botões possuem um efeito **shine** (`::before`): um gradiente branco translúcido que varre da esquerda para direita no hover.

### 5.4 Glass Card
```css
.glass-card {
  background: rgba(26, 32, 48, 0.75);       /* Fundo translúcido */
  border: 1px solid rgba(79, 195, 247, 0.18); /* Borda ciano sutil */
  border-radius: 20px;
  backdrop-filter: blur(12px);
}
```

### 5.5 Cards de Área / Serviço
- `padding: 30px 26px`, `border-radius: 20px`
- Borda sutil `rgba(255,255,255,0.07)`
- **Topo**: Linha de 2px horizontal com gradiente na cor do card (`--card-color`), aparece no hover
- **Glow interno**: `radial-gradient` na cor do card, `opacity: 0` → `0.07` no hover
- **Ícone**: Cor do card, hover → `scale(1.1) rotate(-4deg)`
- **Título**: Orbitron, `1rem`, 700
- **Tags**: Pill (`border-radius: 50px`), fundo/borda quase transparentes, se iluminam no hover
- **Hover do card**: `translateY(-7px)` + borda mais visível

### 5.6 Cards de Projeto
- Similar aos cards de área, com header (ícone + status badge)
- **Status badge**: Pill com borda na cor do status + dot pulsante (`animation: pulse-dot 1.5s ease infinite`)
- **Featured card**: Grid 2 colunas (imagem + conteúdo), `border-radius: 28px`
  - Imagem: `object-fit: cover`, `filter: saturate(0.9) brightness(0.85)` → hover: `saturate(1) brightness(0.92)` + `scale(1.05)`
  - Overlay com gradiente para fundir com o card
  - Label: Orbitron, cor laranja, uppercase

### 5.7 Cards de Equipe / Time
- Layout centrado (texto e avatar no centro)
- **Avatar**: Círculo 80×80px, gradiente `member-color → preto`, borda na cor do membro
  - `box-shadow: 0 0 22px rgba(0,0,0,0.5)` → hover: `box-shadow: 0 0 28px member-color` + `scale(1.06)`
  - **Anel orbital**: Borda circular girando (`spin-ring 8s linear infinite`)
- **Role badge**: Pill com borda na cor do membro, texto uppercase
- **Linha decorativa**: 36px → 72px no hover, gradiente `transparent → member-color → transparent`
- **Hover**: `translateY(-9px)` + sombra forte

### 5.8 Gallery
- Grid 3 colunas com itens que podem ser `--wide` (span 2 colunas) ou `--tall` (span 2 linhas)
- Imagens: `filter: saturate(0.78) brightness(0.82)` → hover: `saturate(1) brightness(0.88)` + `scale(1.05)`
- **Overlay no hover**: Gradiente do fundo escuro, opacidade 0→1 com label em gradient text
- **Borda no hover**: `border: 2px solid rgba(79, 195, 247, 0.42)`

### 5.9 Contact Cards
- Cada card tem uma barra lateral de 3px na cor do contato (`--contact-color`), aparece no hover
- Hover: `translateX(4px)` (desliza para direita)
- **Botão de ação**: Quadrado 40×40px com border-radius 10px, hover → preenchido com a cor do contato + `scale(1.1)`
- **Instagram highlight**: Card grande com gradiente radial laranja/ciano no fundo, ícone com `animation: pulse-icon-accent 3s`

### 5.10 Footer
- Grid 3 colunas: `2fr 1fr 1fr`
- Glow radial ciano sutil no fundo (`560×180px`)
- Links com seta `→` que aparece no hover + `padding-left: 18px`
- **Link Instagram**: Pill com fundo laranja sutil, borda laranja, hover → mais opaco + `translateY(-2px)` + sombra

### 5.11 Badge
```css
.badge {
  padding: 5px 16px;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.18);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #4FC3F7;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

### 5.12 Divider (Separador entre seções)
```css
/* Linha horizontal gradiente ciano → laranja */
.divider {
  width: 72px;
  height: 3px;
  background: linear-gradient(90deg, #4FC3F7, #FF6B1A);
  margin: 14px auto 30px;
  border-radius: 2px;
}
```

### 5.13 Scrollbar Customizada
```css
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #151a24; }
::-webkit-scrollbar-thumb {
  background: #0288D1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover { background: #4FC3F7; }
```

### 5.14 Scroll Progress Bar
- Barra fixa no topo (height: 3px), `z-index: 9999`
- `background: linear-gradient(90deg, ciano, laranja)`
- `box-shadow: 0 0 10px glow ciano`
- Width controlada por JavaScript (0%→100% conforme scroll)

---

## 6. 🎬 Animações

### 6.1 Keyframes Globais

```css
/* Flutuação suave (orbs, partículas) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-18px); }
}

/* Levitação da logo (float + scale) */
@keyframes logo-levitate {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-14px) scale(1.03); }
}

/* Glow pulsante (box-shadow) */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 18px rgba(79,195,247,0.25); }
  50%      { box-shadow: 0 0 38px rgba(79,195,247,0.45), 0 0 70px rgba(79,195,247,0.25); }
}

/* Scan line (horizontal de cima pra baixo) */
@keyframes scan-line {
  0%   { top: -100%; }
  100% { top: 100%; }
}

/* Fade in + slide up */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Fade in simples */
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Rotação contínua (anéis orbitais) */
@keyframes spin-ring {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Dot de scroll descendo */
@keyframes scroll-dot {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
}

/* Dot pulsante (status badge) */
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.35; }
}

/* Glow pulsante de ícone (laranja) */
@keyframes pulse-icon-accent {
  0%, 100% { filter: drop-shadow(0 0 12px rgba(255,107,26,0.4)); }
  50%      { filter: drop-shadow(0 0 28px rgba(255,107,26,0.8)); }
}
```

### 6.2 Sistema de Scroll Reveal

Classes aplicadas a elementos para animação de entrada no viewport, acionadas via **IntersectionObserver**:

```css
/* Estado inicial (escondido) */
.reveal-up    { opacity: 0; transform: translateY(52px); }
.reveal-left  { opacity: 0; transform: translateX(-52px); }
.reveal-right { opacity: 0; transform: translateX(52px); }
.reveal-scale { opacity: 0; transform: scale(0.88); }
.reveal-fade  { opacity: 0; }

/* Transição */
transition:
  opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

/* Estado revelado (classe .is-revealed adicionada via JS) */
.reveal-*.is-revealed {
  opacity: 1;
  transform: none;
}

/* Delays para stagger manual */
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
.reveal-delay-5 { transition-delay: 500ms; }
```

### 6.3 Stagger Reveal (JavaScript/React)

Hook `useStaggerReveal`: Observa um container e, ao entrar no viewport, adiciona `is-revealed` a cada filho `[data-stagger]` com delay progressivo (`i * staggerMs`).

```js
// Uso em React:
const containerRef = useStaggerReveal({ staggerMs: 150 });
// Em filhos: className="reveal-up" data-stagger
```

### 6.4 Separador Animado entre Seções

```css
.section-divider::before {
  /* Linha que expande do centro para as bordas */
  width: 0; → width: 100% (quando .is-revealed)
  background: linear-gradient(90deg, transparent, ciano, laranja, transparent);
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 7. 🖼️ Padrões de Hover / Micro-Interações

| Elemento | Efeito |
|----------|--------|
| Botões | `translateY(-2px)` + glow intensificado + shine sweep |
| Cards de área | `translateY(-7px)` + borda mais visível + glow radial interno |
| Cards de time | `translateY(-9px)` + sombra forte + avatar scale + linha expande |
| Cards de projeto | `translateY(-6px)` + borda ciano + glow |
| Cards de contato | `translateX(4px)` + barra lateral aparece |
| Gallery items | `scale(1.05)` na imagem + overlay label + borda ciano |
| Imagens | `saturate(0.78→1) brightness(0.82→0.88)` no hover |
| Links da navbar | Underline gradiente expande (0%→60%) |
| Logo da navbar | `scale(1.08) rotate(4deg)` |
| Ícones de card | `scale(1.1) rotate(-4deg)` |
| Links do footer | Seta `→` aparece + padding-left 18px |
| Botão de ação (contato) | Preenche com a cor + `scale(1.1)` |
| Theme toggle | `scale(1.05)` + borda ciano + fundo ciano translúcido |

---

## 8. 📱 Responsividade

### Breakpoints
| Breakpoint | Uso |
|------------|-----|
| `900px` | Grid → 1 coluna; navbar → hamburger + drawer; hero → stacked |
| `768px` | Gallery → 2 colunas; padding/font ajustados |
| `640px` | Cards → 1 coluna; footer → 1 coluna |
| `480px` | Botões → full-width stacked; gallery → 1 coluna |

### Padrões Responsivos
- Grids: `repeat(3, 1fr)` → `repeat(2, 1fr)` → `1fr`
- Hero visual vai para `order: -1` (aparece acima do texto no mobile)
- Texto: centralizado no mobile via `text-align: center`
- Buttons: `flex-direction: column` + `align-items: stretch` no mobile
- Navbar: drawer lateral com `right: -100%` → `right: 0` + overlay com `backdrop-filter: blur(4px)`

---

## 9. 🔧 Padrões Estruturais

### Metodologia de Nomenclatura
**BEM** (Block Element Modifier): `bloco__elemento--modificador`
```
.hero__title-vulkaris
.navbar__link--active
.projects__card--coming-soon
.team__card-glow
```

### Padrão de Alternância de Fundos
Seções alternam entre `--color-bg-primary` e `--color-bg-secondary`:
```
Hero       → bg-primary (com gradiente)
About      → gradient (primary → secondary)
Areas      → bg-secondary
Projects   → bg-primary
Team       → bg-secondary
Gallery    → bg-primary
Contact    → bg-secondary
Footer     → bg-primary + border-top
```

### CSS Custom Properties por Componente
Cada card pode receber uma cor via CSS variable inline:
```html
<!-- Cards de área -->
<div style="--card-color: #4FC3F7">

<!-- Cards de time -->
<div style="--member-color: #FF6B1A">

<!-- Cards de contato -->
<div style="--contact-color: #4FC3F7">

<!-- Status badges -->
<div style="--status-color: #4CAF50">
```

### Ícones
- **Tipo**: SVG inline (componentes React que aceitam `size` prop)
- **Stroke**: `currentColor`, `strokeWidth: 2`, `strokeLinecap: round`, `strokeLinejoin: round`
- **Tamanhos comuns**: 17–24px em botões/links, 28–36px em cards

---

## 10. ♿ Acessibilidade

- `aria-label` em todas as seções, botões e links
- `aria-hidden="true"` em elementos decorativos (partículas, orbs, anéis, glows)
- `aria-expanded` e `aria-controls` no hamburger menu
- `aria-current="page"` no link ativo da navbar
- `role="navigation"`, `role="list"`, `role="listitem"` na navbar
- **Reduced motion**: Respeita `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .reveal-* { opacity: 1 !important; transform: none !important; transition: none !important; }
    .scroll-progress { display: none; }
  }
  ```

---

## 11. 📋 Checklist para Recriar Este Estilo

Ao pedir para um agente de IA criar um site com esta estilização, use este checklist:

- [ ] Importar fontes **Orbitron** (display) e **Inter** (body) do Google Fonts
- [ ] Definir CSS variables para TODAS as cores (dark + light mode)
- [ ] Fundo escuro `#0f1117` com seções alternando `#151a24`
- [ ] Glassmorphismo: `backdrop-filter: blur(12px)` + fundo translúcido + borda ciano sutil
- [ ] Botões pill (`border-radius: 50px`) com gradientes + glow + shine effect
- [ ] Texto gradiente (ciano → laranja) em destaques
- [ ] Cards com borda quase invisível que brilha no hover + translateY
- [ ] Scroll reveal via IntersectionObserver (fade-up, scale, stagger)
- [ ] Orbs flutuantes com `filter: blur(64px)` no hero
- [ ] Grid de blueprint no background do hero
- [ ] Anéis orbitais rotativos ao redor do elemento visual principal
- [ ] Partículas flutuantes alternando ciano e laranja
- [ ] Scan line horizontal animada
- [ ] Scrollbar customizada (7px, ciano)
- [ ] Barra de progresso de scroll no topo
- [ ] Separadores entre seções que expandem do centro
- [ ] Hover com `translateY(-6px a -9px)` em cards
- [ ] Imagens com `saturate` e `brightness` reduzidos, restaurados no hover
- [ ] Tags em formato pill com estilo ghost
- [ ] Status badges com dot pulsante
- [ ] Suporte a `prefers-reduced-motion`
- [ ] BEM naming convention
- [ ] Responsividade em 4 breakpoints (900, 768, 640, 480)

---

> **Nota**: Este guia foi extraído do projeto [Vulkaris Robotics Team](file:///d:/Vulkaris) e pode ser usado como prompt completo para qualquer agente de IA recriar esta estética em um novo projeto.
