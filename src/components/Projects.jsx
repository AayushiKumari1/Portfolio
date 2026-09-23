import React from 'react';
import { PROJECTS, PROFILE } from '../data.js';
import CodeWindow from './Code.jsx';
import { Icon, Spotlight, SectionHead, ArrowIcon } from './UI.jsx';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead
          title="Featured projects"
          sub="Full-stack applications built end to end, from the interface to billing and real-time connections."
        />
        <div className="projects">
          {PROJECTS.map((p, i) => (
            <Spotlight as="article" className={'card proj' + (i % 2 ? ' rev' : '')} key={p.id}>
              <div className="proj-side">
                <CodeWindow file={p.file} code={p.code} />
                <ul className="proj-tech" aria-label="Technologies used">
                  {p.tech.map(([icon, label]) => (
                    <li key={label}><Icon name={icon} size={20} /><span>{label}</span></li>
                  ))}
                </ul>
              </div>
              <div className="proj-body">
                <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p className="proj-kind">{p.kind}</p>
                <p>{p.description}</p>
                <ul className="bullets">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <a className="link-arrow" href={PROFILE.github} target="_blank" rel="noopener">
                  View source on GitHub <ArrowIcon />
                </a>
              </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
