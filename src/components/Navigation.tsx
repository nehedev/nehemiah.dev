import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Nehemiah, home">
          NEHE<span>.</span>DEV
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#writing" onClick={closeMenu}>Writing</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;