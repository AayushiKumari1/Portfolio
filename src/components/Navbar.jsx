import React, { useState } from 'react';
import { NAV } from '../data.js';
import { useActiveSection, useScrollProgress } from '../hooks.js';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './UI.jsx';

const IDS = NAV.map((n) => n.id);

export default function Navbar({ theme, onToggleTheme }) {
  const active = useActiveSection(IDS);
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="wrap nav-inner">
        <a className="brand" href="#top">AK<b>.</b></a>
        <nav id="site-nav" className={'nav' + (open ? ' open' : '')} aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={'#' + n.id}
              className={active === n.id ? 'active' : ''}
              aria-current={active === n.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
