'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Executed Works', href: '#executed-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Contact', href: '#contact' },
]


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const header = document.querySelector('.header') as HTMLElement | null;

  if (!element) return;

  const headerOffset = header?.offsetHeight || 0;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};


export const  Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };


  const handleAnchorClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div>
            <Link href="/">
              <Image src="/logo-2.png" alt="Korak Servis Logo" width={70} height={90} />
            </Link>
          
          </div>
        </div>
        <button className="mobile-menu-btn" onClick={handleToggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={(e) => {
    e.preventDefault();
    handleAnchorClick(link.href.slice(1));
  }}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}