import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // We fetch the base path dynamically so links don't break on GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;

  const links = [
    { name: 'home', href: `${baseUrl}` },
    { name: 'about', href: `${baseUrl}about` },
    { name: 'portfolio', href: `${baseUrl}portfolio` },
    { name: 'blog', href: `${baseUrl}blog` },
    { name: 'connect', href: `${baseUrl}outreach` },
  ];

  return (
    <nav style={{ padding: '1rem', background: '#1a1a1a', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '1.2rem' }}>aloha</strong>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}