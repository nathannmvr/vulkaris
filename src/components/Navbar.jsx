import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { IconInstagram, IconSun, IconMoon } from './Icons';

const navLinks = [
  { label: 'Início',   href: '#inicio' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Áreas',   href: '#areas' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Equipe',  href: '#equipe' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('inicio');
  const [theme,          setTheme]          = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#inicio"
          className="navbar__logo"
          onClick={e => handleNavClick(e, '#inicio')}
          aria-label="Vulkaris Robotics Team — Início"
        >
          <img src="/vulkaris_logo.png" alt="Vulkaris Robotics Team Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">VULKARIS</span>
            <span className="navbar__logo-sub">Robotics Team</span>
          </span>
        </a>

        {/* Links */}
        <ul
          id="navbar-menu"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          role="list"
        >
          {navLinks.map(link => (
            <li key={link.href} role="listitem">
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li role="listitem">
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label={`Mudar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
          </li>
          <li role="listitem">
            <a
              href="https://instagram.com/vulkaris_robotics"
              className="btn btn-accent navbar__cta"
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-instagram-btn"
              aria-label="Seguir no Instagram"
            >
              <IconInstagram size={17} />
              Instagram
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          id="navbar-hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </nav>
  );
}
