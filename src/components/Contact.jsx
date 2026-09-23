import React, { useState } from 'react';
import { PROFILE } from '../data.js';
import { Icon, Spotlight, CopyIcon, CheckIcon } from './UI.jsx';

export default function Contact() {
  const [state, setState] = useState('idle');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setState('copied');
    } catch (e) {
      setState('failed');
    }
    setTimeout(() => setState('idle'), 2600);
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Let's connect.</h2>
        <p className="lede">
          I'm open to software engineer and full-stack roles. Reach out if you'd like to talk about an opening, or about MERN, payments and real-time apps.
        </p>
        <div className="contact-cta">
          <a className="btn btn-primary" href={'mailto:' + PROFILE.email}>Say hello</a>
          <button className="btn btn-ghost" type="button" onClick={copyEmail}>
            {state === 'copied' ? <CheckIcon /> : <CopyIcon />}
            {state === 'copied' ? 'Copied' : 'Copy email address'}
          </button>
        </div>
        <p className="copy-note" role="status">
          {state === 'failed' ? `Couldn't copy automatically. My email is ${PROFILE.email}.` : ''}
        </p>
        <div className="link-cards">
          <Spotlight as="a" className="card link-card" href={PROFILE.linkedin} target="_blank" rel="noopener">
            <Icon name="linkedin" size={28} />
            <div><strong>LinkedIn</strong><span>Connect with me</span></div>
          </Spotlight>
          <Spotlight as="a" className="card link-card" href={PROFILE.github} target="_blank" rel="noopener">
            <Icon name="github" size={28} />
            <div><strong>GitHub</strong><span>Check my repos</span></div>
          </Spotlight>
          <Spotlight as="a" className="card link-card" href={'mailto:' + PROFILE.email}>
            <Icon name="mail" size={28} />
            <div><strong>Email</strong><span>{PROFILE.email}</span></div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
