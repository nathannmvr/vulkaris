/**
 * useScrollReveal — hook para animar elementos ao entrar no viewport.
 * Usa IntersectionObserver para performance máxima (sem scroll listeners).
 *
 * @param {Object} options
 * @param {number} options.threshold  — % do elemento visível para disparar (default 0.12)
 * @param {string} options.rootMargin — margem antes do viewport (default "0px 0px -60px 0px")
 * @param {boolean} options.once     — animar só uma vez (default true)
 */
import { useEffect, useRef } from 'react';

export function useScrollReveal({
  threshold  = 0.12,
  rootMargin = '0px 0px -60px 0px',
  once       = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-revealed');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useStaggerReveal — anima filhos de um container em sequência.
 * Cada filho com [data-stagger] recebe delay proporcional ao índice.
 */
export function useStaggerReveal({
  threshold  = 0.08,
  rootMargin = '0px 0px -40px 0px',
  staggerMs  = 100,
  once       = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll('[data-stagger]'));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * staggerMs}ms`;
            child.classList.add('is-revealed');
          });
          if (once) observer.unobserve(container);
        } else if (!once) {
          children.forEach(child => {
            child.style.transitionDelay = '0ms';
            child.classList.remove('is-revealed');
          });
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, staggerMs, once]);

  return ref;
}
