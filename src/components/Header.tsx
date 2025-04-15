'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'themes', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className="container">
          <div className={styles.headerInner}>
            <div className={styles.backdrop}></div>
            
            {/* Logo */}
            <div className={styles.logoWrapper}>
              <div className={styles.logoShape}></div>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoAccent}>K</span>hushiyaan
              </Link>
            </div>
            
            {/* Main Navigation */}
            <nav className={styles.nav}>
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <Link 
                    href="#services" 
                    className={`${styles.menuLink} ${activeSection === 'services' ? styles.active : ''}`}
                  >
                    services
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="#themes" 
                    className={`${styles.menuLink} ${activeSection === 'themes' ? styles.active : ''}`}
                  >
                    collections
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="#about" 
                    className={`${styles.menuLink} ${activeSection === 'about' ? styles.active : ''}`}
                  >
                    about us
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="#contact" 
                    className={`${styles.menuLink} ${activeSection === 'contact' ? styles.active : ''}`}
                  >
                    contact
                  </Link>
                </li>
              </ul>
              
              {/* Actions */}
              <div className={styles.actions}>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.actionButton}
                  aria-label="Instagram"
                >
                  <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.actionButton}
                  aria-label="Twitter"
                >
                  <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                
                <a
                  href="https://wa.me/918544626930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                  aria-label="Contact on WhatsApp"
                >
                  <span>Let&apos;s Talk</span>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </a>
              </div>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={styles.menuToggle} 
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className={styles.menuIcon}>
                <span className={styles.menuIconBar}></span>
                <span className={styles.menuIconBar}></span>
                <span className={styles.menuIconBar}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={styles.mobileMenu}>
        <nav className={styles.mobileNav}>
          <ul>
            <li className={styles.mobileMenuItem}>
              <Link href="#services" className={styles.mobileMenuLink} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link href="#themes" className={styles.mobileMenuLink} onClick={closeMenu}>
                Collections
              </Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link href="#about" className={styles.mobileMenuLink} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className={styles.mobileMenuItem}>
              <Link href="#contact" className={styles.mobileMenuLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.mobileActions}>
          <div className={styles.mobileActionsTitle}>Connect with us</div>
          <div className={styles.mobileActionButtons}>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
              aria-label="Instagram"
            >
              <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
              aria-label="Twitter"
            >
              <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            
            <a 
              href="https://wa.me/918544626930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
              aria-label="WhatsApp"
            >
              <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
          </div>
          
          <div className={styles.mobileContactInfo}>
            <div className={styles.mobileContactItem}>
              <svg className={styles.mobileContactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>+91 8544 626930</span>
            </div>
            <div className={styles.mobileContactItem}>
              <svg className={styles.mobileContactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>khushiyaan025@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className={styles.overlay} onClick={closeMenu}></div>
    </>
  );
}