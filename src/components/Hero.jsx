import React from 'react';
import { PROFILE, ROLES, HERO_CODE, FLOATING } from '../data.js';
import { useRotating, useTypewriter } from '../hooks.js';
import CodeWindow from './Code.jsx';
import { Icon, ArrowIcon } from './UI.jsx';

export default function Hero() {
  const roleIndex = useRotating(ROLES.length);
  const typed = HERO_CODE.slice(0, useTypewriter(HERO_CODE));

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status rise" style={{ '--d': '0ms' }}>
            <span className="status-dot" aria-hidden="true" />
            Open to software engineer and full-stack roles
          </p>
          <h1 className="rise" style={{ '--d': '80ms' }}>
            <span className="h1-a">Aayushi</span>{" "}
            <span className="h1-b">Kumari.</span>
          </h1>
          <p className="hero-role rise" style={{ '--d': '160ms' }}>
            I'm a <span className="role-swap" key={roleIndex}>{ROLES[roleIndex]}</span>
          </p>
          <p className="hero-lede rise" style={{ '--d': '220ms' }}>
            Computer Engineering graduate building web apps with payments, AI and real-time video.
          </p>
          <div className="hero-cta rise" style={{ '--d': '280ms' }}>
            <a className="btn btn-primary" href="#projects">View my work <ArrowIcon /></a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
            <div className="socials">
              <a className="social" href={PROFILE.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" size={22} /></a>
              <a className="social" href={PROFILE.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" size={22} /></a>
              <a className="social" href={'mailto:' + PROFILE.email} aria-label="Email"><Icon name="mail" size={22} /></a>
            </div>
          </div>
        </div>

        <div className="hero-visual rise" style={{ '--d': '200ms' }}>
          <CodeWindow file="aayushi.js" code={typed} caret minLines={HERO_CODE.split('\n').length} />
          {FLOATING.map((name, i) => (
            <span className={'float f' + (i + 1)} key={name} aria-hidden="true">
              <Icon name={name} size={30} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
