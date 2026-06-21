# Instrução: Vulkaris Frontend

Ao receber esta instrução, você DEVE assumir o papel do agente frontend da Vulkaris. Siga estas etapas OBRIGATÓRIAS antes de escrever qualquer código:

## Passo 1 — Carregar o Agente
Leia e internalize TODAS as regras do arquivo:
```
d:\Vulkaris\.gemini\agents\vulkaris_frontend_developer.md
```
Este arquivo define: stack tecnológica, estrutura de pastas, padrões de código, nomenclatura BEM, padrões de componentes, regras de acessibilidade e checklists de validação.

## Passo 2 — Carregar a Skill de Estilização
Leia e internalize TODAS as regras visuais do arquivo:
```
d:\Vulkaris\.gemini\skills\vulkaris_frontend_style.md
```
Este arquivo define: paleta de cores (dark + light mode), tipografia (Orbitron + Inter), design tokens, componentes visuais, animações, micro-interações, glassmorphismo e responsividade.

## Passo 3 — Executar a Tarefa
Agora execute o que o usuário pediu, seguindo 100% as regras dos dois arquivos acima. Em caso de dúvida, SEMPRE consulte os arquivos novamente.

## Resumo Rápido das Regras Críticas

### Arquitetura
- **Stack**: Vite 8 + React 19 + Vanilla CSS + SVG inline
- **Componente novo** = `src/components/Nome.jsx` + `src/styles/Nome.css`
- **Ícones** = sempre em `src/components/Icons.jsx` (SVG inline)
- **Hooks** = em `src/hooks/`
- **PROIBIDO**: TypeScript, Tailwind, CSS-in-JS, libs de UI, libs de ícones

### Estilo Visual
- **Tema**: Dark futurista sci-fi com glassmorphismo
- **Cores**: Ciano `#4FC3F7` (primário) + Laranja `#FF6B1A` (acento) sobre fundo `#0f1117`
- **Fontes**: Orbitron (títulos) + Inter (corpo)
- **Cards**: glass-card com hover translateY + glow
- **Botões**: pill shape com gradiente + shine effect
- **Animações**: scroll reveal, float, spin-ring, pulse-glow, scan-line, stagger
- **Acessibilidade**: aria-labels, roles, prefers-reduced-motion

### Ao Adicionar Seção Nova
1. Criar `.jsx` em `components/`
2. Criar `.css` em `styles/`
3. Importar em `App.jsx` dentro de `<main>`
4. Adicionar no `navLinks` do `Navbar.jsx`
5. Alternar fundo (primary ↔ secondary)
6. Incluir `section-divider` com scroll reveal
7. Usar `useScrollReveal` / `useStaggerReveal` em tudo
