'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Services', href: '#services' },
  { name: 'Executed Works', href: '#executed-works' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]


export const  Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

  const scrollToSection = useCallback((id: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
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
  }, []);


  useEffect(() => {
    if (isMenuOpen && typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleAnchorClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
            <Link href="/">
              <Image src="/logo-2.png" alt="Korak Servis Logo" width={70} height={90} />
            </Link>
        </div>
        <button className="mobile-menu-btn" onClick={handleToggleMenu}>
          {isMenuOpen ? <FaTimes aria-label='menu button'/> : <FaBars aria-label='menu button'/>}
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