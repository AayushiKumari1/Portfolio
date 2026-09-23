import React from 'react';
import { MARQUEE, ABOUT, STATS, ACHIEVEMENTS, EDUCATION } from '../data.js';
import { Icon, Spotlight, CountUp, SectionHead, UpIcon } from './UI.jsx';
import PhotoCard from './Photo.jsx';

export function Marquee() {
  const set = (hidden) => (
    <ul className="mq-set" aria-hidden={hidden || undefined}>
      {MARQUEE.map(([icon, label]) => (
        <li className="mq-item" key={label}><Icon name={icon} size={32} /><span>{label}</span></li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="group" aria-label="Technologies I work with">
      <div className="mq-track">{set(false)}{set(true)}</div>
    </div>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead title="About me" />
        <div className="about-grid">
          <PhotoCard />
          <div className="bento">
            <Spotlight className="card bento-text">
              {ABOUT.map((p) => <p key={p}>{p}</p>)}
            </Spotlight>
            {STATS.map((s) => (
              <Spotlight className="card stat" key={s.label}>
                <strong><CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="wrap">
        <SectionHead title="Achievements" sub="Practice, certifications and results that back up the projects." />
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a) => (
            <Spotlight className="card ach" key={a.title}>
              <span className="ach-icon"><Icon name={a.icon} size={30} /></span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              {a.meta ? <p className="ach-meta">{a.meta}</p> : null}
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHead title="Education" />
        <ol className="timeline">
          {EDUCATION.map((e) => (
            <li className={'tl-item' + (e.current ? ' current' : '')} key={e.title}>
              <div className="tl-head">
                <h3>{e.title}</h3>
                <span className="tl-score">{e.score}</span>
              </div>
              <p className="tl-place">{e.place}</p>
              <p className="tl-when">{e.when}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-inner">
        <span>&copy; {new Date().getFullYear()} Aayushi Kumari. All rights reserved.</span>
        <a className="to-top" href="#top">Back to top <UpIcon /></a>
      </div>
    </footer>
  );
}
