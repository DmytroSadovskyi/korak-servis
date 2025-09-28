'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useScrollToSection } from '@/hooks/scrollToSection';
// import  LocaleSwitcher  from '@/components/LocaleSwitcher/LocaleSwitcher';
import croatianLang from '@/messages/hr.json';


export const Header = () => {
  
  const {header: {logoAlt,toggleAriaLabel,links}} = croatianLang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

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
              <Image src="/logo.svg" alt={logoAlt} width={0} height={0} className='logo-image'/>
            </Link>
        </div>
        <button className="mobile-menu-btn" onClick={handleToggleMenu}>
          {isMenuOpen ? <FaTimes aria-label={toggleAriaLabel}/> : <FaBars aria-label={toggleAriaLabel}/>}
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {/* <LocaleSwitcher /> */}
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