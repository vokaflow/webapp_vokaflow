
import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavLogo() {
  return (
    <NavLink to="/" className="flex items-center z-10">
      <img
        src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/3abef47c5f736d5cc02cd02dc8a89871.png"
        alt="VokaFlow Logo"
        className="h-8 w-auto block"
      />
    </NavLink>
  );
}
