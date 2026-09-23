import React from 'react';
import { PROFILE } from '../data.js';

/**
 * Shows the photo set in data.js (PROFILE.photo). With no photo configured,
 * shows initials instead — there is no in-browser upload here, since that
 * would only be visible to the person using it, not to site visitors.
 */
export default function PhotoCard() {
  return (
    <figure className="photo-card">
      <div className="photo-ring">
        <div className="photo-frame">
          {PROFILE.photo ? (
            <img src={PROFILE.photo} alt="Portrait of Aayushi Kumari" />
          ) : (
            <div className="photo-empty">
              <span className="initials" aria-hidden="true">AK</span>
            </div>
          )}
        </div>
      </div>
      <figcaption>
        <strong>{PROFILE.name}</strong>
        <span>Full-Stack Developer</span>
      </figcaption>
    </figure>
  );
}
