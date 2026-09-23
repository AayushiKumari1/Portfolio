import React, { useState, useEffect } from 'react';
import { ICONS } from '../icons.js';
import { useInView, prefersReducedMotion } from '../hooks.js';

/** Technology logo (inlined as a data URI). Black logos are inverted in dark mode via CSS. */
export function Icon({ name, size = 24, className = '' }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <img
      className={'ico' + (icon.mono ? ' mono' : '') + (className ? ' ' + className : '')}
      src={icon.src}
      width={size}
      height={size}
      alt=""
      draggable="false"
    />
  );
}

const svgProps = {
  width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
};
export const SunIcon = () => (<svg {...svgProps}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
export const MoonIcon = () => (<svg {...svgProps}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>);
export const MenuIcon = () => (<svg {...svgProps}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = () => (<svg {...svgProps}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const ArrowIcon = () => (<svg {...svgProps} width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const CopyIcon = () => (<svg {...svgProps} width="18" height="18"><rect x="9" y="9" width="11" height="11" rx="2.5" /><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" /></svg>);
export const CheckIcon = () => (<svg {...svgProps} width="18" height="18"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>);
export const CameraIcon = () => (<svg {...svgProps} width="18" height="18"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.2l1.3-2h6l1.3 2h1.2A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" /><circle cx="12" cy="12.5" r="3.3" /></svg>);
export const UpIcon = () => (<svg {...svgProps} width="18" height="18"><path d="M12 19V5M6 11l6-6 6 6" /></svg>);

/** Card whose glow follows the pointer. */
export function Spotlight({ as: Tag = 'div', className = '', children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={'spot ' + className} onPointerMove={onMove} {...rest}>
      {children}
    </Tag>
  );
}

/** Number that counts up the first time it scrolls into view. */
export function CountUp({ to, decimals = 0, suffix = '' }) {
  const [ref, inView] = useInView(0.6);
  const [value, setValue] = useState(prefersReducedMotion() ? to : 0);
  useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion()) { setValue(to); return undefined; }
    let raf;
    let start;
    const duration = 1200;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      setValue(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}

export function SectionHead({ title, sub }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}
