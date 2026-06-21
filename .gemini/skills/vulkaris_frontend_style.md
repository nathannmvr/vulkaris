# Skill: Vulkaris Frontend Style System

## Quando Aplicar
Sempre que criar, modificar ou gerar código frontend (HTML, CSS, JSX, React, etc.) dentro do projeto Vulkaris, **OBRIGATORIAMENTE** siga todas as instruções de estilização abaixo. Não use estilos genéricos. Cada componente visual DEVE seguir este design system.

---

## Identidade Visual

- **Estilo**: Dark futurista / Sci-fi tecnológico com glassmorphismo
- **Sensação**: Premium, tecnológico, robótico, moderno
- **Inspiração**: HUDs de ficção científica, dashboards de robótica
- **Idioma do site**: Português brasileiro (pt-BR)

---

## Fontes (Google Fonts)

Sempre inclua no `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

| Variável | Fonte | Quando usar |
|----------|-------|-------------|
| `--font-display` | `'Orbitron', monospace` | Títulos, nomes de seção, badges, stats, nomes de membros, labels de destaque |
| `--font-body` | `'Inter', sans-serif` | Corpo de texto, parágrafos, descrições, botões, tags |

---

## Paleta de Cores — CSS Custom Properties

Sempre declare estas variáveis no `:root`. O sistema opera com dark mode padrão e light mode via `[data-theme="light"]`.

### Dark Mode (Padrão)
```css
:root {
  /* ── Fundos ── */
  --color-bg-primary:    #0f1117;
  --color-bg-secondary:  #151a24;
  --color-bg-card:       #1a2030;
  --color-bg-card-hover: #1e2540;
  --color-surface:       #1e2532;

  /* ── Azul ciano (primário) ── */
  --color-primary:       #4FC3F7;
  --color-primary-light: #81D4FA;
  --color-primary-dark:  #0288D1;
  --color-primary-glow:  rgba(79, 195, 247, 0.25);
  --color-primary-glow-strong: rgba(79, 195, 247, 0.45);

  /* ── Laranja fogo (acento) ── */
  --color-accent:        #FF6B1A;
  --color-accent-light:  #FF8C4A;
  --color-accent-dim:    #CC5510;
  --color-accent-glow:   rgba(255, 107, 26, 0.28);
  --color-accent-glow-strong: rgba(255, 107, 26, 0.5);

  /* ── Cinza metálico ── */
  --color-steel:         #8C9BAD;
  --color-steel-dark:    #5A6878;

  /* ── Texto ── */
  --color-text-primary:  #F0F4F8;
  --color-text-secondary:#A8B8CC;
  --color-text-muted:    #5A6878;
  --color-text-gradient-start: #ffffff;
  --color-text-gradient-end:   var(--color-primary);

  /* ── Bordas ── */
  --color-border:        rgba(79, 195, 247, 0.18);
  --color-border-accent: rgba(255, 107, 26, 0.3);
  --color-border-steel:  rgba(140, 155, 173, 0.2);

  /* ── Glassmorphismo ── */
  --color-glass:         rgba(26, 32, 48, 0.75);

  /* ── Botões ── */
  --color-btn-primary-text: #0a0e15;

  /* ── Tags ── */
  --color-tag-bg:        rgba(255, 255, 255, 0.04);
  --color-tag-border:    rgba(255, 255, 255, 0.09);
  --color-tag-bg-hover:  rgba(255, 255, 255, 0.08);
  --color-tag-border-hover: rgba(255, 255, 255, 0.18);

  /* ── Tipografia ── */
  --font-display: 'Orbitron', monospace;
  --font-body:    'Inter', sans-serif;

  /* ── Espaçamento ── */
  --section-padding: 100px 0;
  --container-max:   1200px;

  /* ── Border radius ── */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;

  /* ── Transições ── */
  --transition-fast: 0.18s ease;
  --transition-base: 0.28s ease;
  --transition-slow: 0.5s ease;

  /* ── Sombras ── */
  --shadow-glow:        0 0 28px var(--color-primary-glow);
  --shadow-glow-accent: 0 0 28px var(--color-accent-glow);
  --shadow-card:        0 4px 24px rgba(0, 0, 0, 0.45);
}
```

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
  --color-primary-glow-strong: rgba(2, 136, 209, 0.3);
  --color-accent:        #E65100;
  --color-accent-light:  #FF6B1A;
  --color-accent-dim:    #B23C00;
  --color-accent-glow:   rgba(230, 81, 0, 0.15);
  --color-accent-glow-strong: rgba(230, 81, 0, 0.3);
  --color-text-primary:  #0f1117;
  --color-text-secondary:#334155;
  --color-text-muted:    #64748b;
  --color-text-gradient-start: #0f1117;
  --color-text-gradient-end:   var(--color-primary-dark);
  --color-border:        rgba(2, 136, 209, 0.2);
  --color-border-accent: rgba(230, 81, 0, 0.2);
  --color-glass:         rgba(255, 255, 255, 0.85);
  --color-btn-primary-text: #ffffff;
  --color-tag-bg:        rgba(2, 136, 209, 0.06);
  --color-tag-border:    rgba(2, 136, 209, 0.15);
  --color-tag-bg-hover:  rgba(2, 136, 209, 0.12);
  --color-tag-border-hover: rgba(2, 136, 209, 0.25);
  --shadow-glow:        0 0 20px var(--color-primary-glow);
  --shadow-glow-accent: 0 0 20px var(--color-accent-glow);
  --shadow-card:        0 4px 18px rgba(0, 0, 0, 0.08);
}
```

---

## Regras Globais de CSS

Sempre aplique:

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; font-size: 16px; overflow-x: hidden; }

body {
  font-family: var(--font-body);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Scrollbar customizada */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: var(--color-bg-secondary); }
::-webkit-scrollbar-thumb { background: var(--color-primary-dark); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }
```

---

## Componentes Obrigatórios

### Container
```css
.container { max-width: var(--container-max); margin: 0 auto; padding: 0 24px; }
```

### Seções
- Padding: `var(--section-padding)` → 100px desktop, 68px tablet, 50px mobile
- Seções alternam fundo entre `--color-bg-primary` e `--color-bg-secondary`
- Entre cada seção, inserir um separador animado `.section-divider`

### Títulos de Seção
```css
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.6rem);
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, var(--color-text-gradient-start) 0%, var(--color-text-gradient-end) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Texto com Gradiente (destaques)
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Divider
```css
.divider {
  width: 72px; height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: 14px auto 30px;
  border-radius: 2px;
}
```

### Botões — 3 variantes, TODOS com forma pill
```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 30px; border-radius: 50px;
  font-family: var(--font-body); font-size: 0.97rem; font-weight: 600;
  text-decoration: none; cursor: pointer; border: none;
  transition: all var(--transition-base);
  position: relative; overflow: hidden;
}
/* Efeito shine no hover */
.btn::before {
  content: ''; position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s ease;
}
.btn:hover::before { left: 100%; }

/* Primário — ciano */
.btn-primary {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: var(--color-btn-primary-text); font-weight: 700;
  box-shadow: 0 4px 18px var(--color-primary-glow);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px var(--color-primary-glow-strong); }

/* Acento — laranja */
.btn-accent {
  background: linear-gradient(135deg, var(--color-accent-dim), var(--color-accent));
  color: #fff; box-shadow: 0 4px 18px var(--color-accent-glow);
}
.btn-accent:hover { transform: translateY(-2px); box-shadow: 0 8px 28px var(--color-accent-glow-strong); }

/* Outline — ciano */
.btn-outline {
  background: transparent; color: var(--color-primary); border: 2px solid var(--color-primary);
}
.btn-outline:hover {
  background: var(--color-primary); color: var(--color-btn-primary-text);
  transform: translateY(-2px); box-shadow: 0 8px 28px var(--color-primary-glow);
}
```

### Glass Card
```css
.glass-card {
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### Badge
```css
.badge {
  display: inline-block; padding: 5px 16px;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid var(--color-border); border-radius: 50px;
  font-size: 0.75rem; font-weight: 700; color: var(--color-primary);
  letter-spacing: 2px; text-transform: uppercase;
}
```

### Tags (pill ghost)
```css
.tag {
  padding: 4px 11px;
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  border-radius: 50px;
  font-size: 0.73rem; color: var(--color-text-muted); font-weight: 500;
  transition: all var(--transition-fast);
}
```

---

## Padrões de Cards

Todos os cards compartilham estas regras base:
- Fundo: `var(--color-bg-card)` ou `var(--color-glass)` com `border: 1px solid` sutil
- `border-radius: var(--radius-lg)` (20px)
- Transição suave em hover: `all var(--transition-base)`
- Títulos de card: `font-family: var(--font-display)`, peso 700, `letter-spacing: 0.8px`
- Descrições: Inter, `0.88-0.97rem`, `line-height: 1.7`, cor `--color-text-secondary`

### Hover de Cards
| Tipo | translateY | Efeitos extras |
|------|-----------|----------------|
| Cards de Área/Serviço | `-7px` | Borda mais visível + glow radial interno + ícone `scale(1.1) rotate(-4deg)` |
| Cards de Projeto | `-6px` | Borda ciano + glow |
| Cards de Time/Equipe | `-9px` | Sombra forte + avatar `scale(1.06)` + linha decorativa expande |
| Cards de Contato | `translateX(4px)` | Barra lateral 3px aparece |
| Featured Card | `-4px` | Borda laranja + glow + imagem `scale(1.05)` |

### CSS Variables por Card
Cada card recebe sua cor via CSS custom property inline:
```html
<div style="--card-color: #4FC3F7">    <!-- área -->
<div style="--member-color: #FF6B1A">  <!-- time -->
<div style="--contact-color: #4FC3F7"> <!-- contato -->
<div style="--status-color: #4CAF50">  <!-- status -->
```

---

## Animações Obrigatórias

### Keyframes que DEVEM estar no CSS global:
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}
@keyframes logo-levitate {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-14px) scale(1.03); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 18px var(--color-primary-glow); }
  50% { box-shadow: 0 0 38px var(--color-primary-glow-strong), 0 0 70px var(--color-primary-glow); }
}
@keyframes scan-line {
  0% { top: -100%; }
  100% { top: 100%; }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(36px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes spin-ring {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes pulse-icon-accent {
  0%, 100% { filter: drop-shadow(0 0 12px rgba(255,107,26,0.4)); }
  50% { filter: drop-shadow(0 0 28px rgba(255,107,26,0.8)); }
}
```

### Scroll Reveal (IntersectionObserver)
Elementos devem ter classes de animação de entrada no viewport:
```css
.reveal-up    { opacity: 0; transform: translateY(52px); }
.reveal-left  { opacity: 0; transform: translateX(-52px); }
.reveal-right { opacity: 0; transform: translateX(52px); }
.reveal-scale { opacity: 0; transform: scale(0.88); }
.reveal-fade  { opacity: 0; }

/* Todos com esta transição */
.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade {
  will-change: opacity, transform;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Quando revelado (JS adiciona .is-revealed) */
.reveal-up.is-revealed,
.reveal-left.is-revealed,
.reveal-right.is-revealed,
.reveal-scale.is-revealed,
.reveal-fade.is-revealed {
  opacity: 1; transform: none;
}

/* Delays para stagger */
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
.reveal-delay-5 { transition-delay: 500ms; }
```

Use IntersectionObserver (ou hook React `useScrollReveal`) com `threshold: 0.12` e `rootMargin: "0px 0px -60px 0px"`.

Para stagger de filhos, use `useStaggerReveal` com `staggerMs: 100-150` e `[data-stagger]` nos filhos.

### Scroll Progress Bar
Barra fixa no topo da página (height: 3px, z-index: 9999):
```css
.scroll-progress {
  position: fixed; top: 0; left: 0;
  height: 3px; width: 0%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  z-index: 9999;
  box-shadow: 0 0 10px var(--color-primary-glow);
  pointer-events: none;
}
```

### Separador entre Seções
```css
.section-divider {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 2px; z-index: 10;
}
.section-divider::before {
  content: ''; position: absolute;
  left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), var(--color-accent), transparent);
  border-radius: 2px;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.section-divider.is-revealed::before { width: 100%; }
```

---

## Hero Section — Elementos de Background

Toda hero DEVE conter as seguintes camadas decorativas:

1. **Grid blueprint**: Linhas ciano a 6% opacidade, 55×55px, com `mask-image: radial-gradient` fade-out
2. **Orbs flutuantes**: Círculos com `filter: blur(64px)` animados com `float` — ciano (480px, topo-direita, 9s), laranja (360px, baixo-esquerda, 11s reverse), laranja fraco (180px, centro, 6s)
3. **Partículas**: ~18 pontos de 3px alternando ciano/laranja com glow, `animation: float` com delays variados
4. **Scan line**: Linha horizontal 2px ciano translúcido, `animation: scan-line 4s linear infinite`
5. **Anéis orbitais** (ao redor do elemento visual central): 3 anéis com `spin-ring` em velocidades diferentes (12s, 19s reverse, 26s dashed)

---

## Ícones SVG

Usar SVG inline com estas propriedades:
```
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
fill="none"
```
Tamanhos: 17-24px em botões/links, 28-36px em cards.

---

## Imagens

Todas as imagens devem ter filtro de dessaturação que restaura no hover:
```css
img {
  filter: saturate(0.78) brightness(0.82);
  transition: filter var(--transition-slow), transform var(--transition-slow);
}
elemento:hover img {
  filter: saturate(1) brightness(0.88);
  transform: scale(1.05);
}
```

---

## Navbar

- Fixed no topo, transparente inicialmente
- Após 50px de scroll: glassmorphismo (`backdrop-filter: blur(20px)`, bg `rgba(15,17,23,0.93)`, `border-bottom` ciano sutil)
- Links com underline animado gradient (ciano→laranja), expande 0%→60%
- Logo com `scale(1.08) rotate(4deg)` no hover
- Incluir botão de toggle dark/light mode
- Mobile: hamburger → drawer lateral 290px com overlay blur

---

## Responsividade

| Breakpoint | Mudanças |
|------------|----------|
| ≤ 900px | Grids → 1-2 colunas, navbar → hamburger, hero stacked (visual acima com `order: -1`), texto centralizado |
| ≤ 768px | Gallery → 2 colunas, padding/font reduzidos, section-padding → 68px |
| ≤ 640px | Cards → 1 coluna, footer → 1 coluna |
| ≤ 480px | Botões → full-width stacked, gallery → 1 coluna, section-padding → 50px |

---

## Acessibilidade

OBRIGATÓRIO em todo componente:
- `aria-label` em seções, botões e links
- `aria-hidden="true"` em elementos decorativos (partículas, orbs, anéis, glows)
- `aria-expanded` e `aria-controls` no hamburger
- `aria-current="page"` no link ativo
- `role="navigation"` na nav, `role="list"` em listas
- Suporte a `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
  .scroll-progress { display: none; }
}
```

---

## Nomenclatura CSS

Usar metodologia **BEM**: `bloco__elemento--modificador`
```
.hero__title-vulkaris
.navbar__link--active
.projects__card--coming-soon
.team__card-glow
```

---

## Checklist Rápido

Antes de finalizar qualquer frontend Vulkaris, verificar que TODOS estes itens estão presentes:

- [ ] Fontes Orbitron + Inter importadas
- [ ] Todas as CSS variables declaradas (dark + light mode)
- [ ] Fundo escuro `#0f1117` alternando com `#151a24`
- [ ] Glassmorphismo em cards e navbar
- [ ] Botões pill com gradiente + glow + shine
- [ ] Texto gradiente (ciano → laranja) nos destaques
- [ ] Cards com hover translateY + glow
- [ ] Scroll reveal via IntersectionObserver
- [ ] Orbs flutuantes + partículas no hero
- [ ] Grid blueprint no background do hero
- [ ] Anéis orbitais rotativos
- [ ] Scan line animada
- [ ] Scrollbar customizada (7px, ciano)
- [ ] Barra de progresso de scroll no topo
- [ ] Separadores animados entre seções
- [ ] Imagens com saturate/brightness reduzidos
- [ ] Tags pill ghost style
- [ ] Acessibilidade completa (aria-labels, roles, reduced-motion)
- [ ] BEM naming convention
- [ ] 4 breakpoints responsivos (900, 768, 640, 480)
