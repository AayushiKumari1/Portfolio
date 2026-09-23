import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data.js';
import { Icon, SectionHead } from './UI.jsx';

const TABS = ['All', ...Object.keys(SKILL_GROUPS)];

export default function Skills() {
  const [tab, setTab] = useState('All');
  const items = tab === 'All' ? Object.values(SKILL_GROUPS).flat() : SKILL_GROUPS[tab];

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead title="Technical arsenal" sub="The languages, frameworks and tools I use to build and ship web applications." />
        <div className="tabs" role="tablist" aria-label="Skill categories">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={'tab' + (tab === t ? ' on' : '')}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <ul className="skill-grid" role="tabpanel" key={tab}>
          {items.map((s) => (
            <li className="skill" key={s.label}>
              {s.icon ? <Icon name={s.icon} size={34} /> : <span className="glyph">{s.glyph}</span>}
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
