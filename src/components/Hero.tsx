'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const preTitleRef = useRef<HTMLSpanElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [preTitleRef, mainTitleRef, descriptionRef, ctaRef, rightContentRef];
    
    elements.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('visible');
        }, 300 * index);
      }
    });
    
    // Initialize cursor effect (optional)
    
    // Uncomment to enable custom cursor
    // initCursor();
    
    return () => {
      const cursorDot = document.querySelector('.cursor-dot');
      const cursorDotOutline = document.querySelector('.cursor-dot-outline');
      
      if (cursorDot) document.body.removeChild(cursorDot);
      if (cursorDotOutline) document.body.removeChild(cursorDotOutline);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Flowing Shapes Background */}
      <div className={`${styles.flowingShape} ${styles.shape1}`}></div>
      <div className={`${styles.flowingShape} ${styles.shape2}`}></div>
      <div className={`${styles.flowingShape} ${styles.shape3}`}></div>
      
      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatingElement} ${styles.element1}`}></div>
        <div className={`${styles.floatingElement} ${styles.element2}`}></div>
        <div className={`${styles.floatingElement} ${styles.element3}`}></div>
        <div className={`${styles.floatingElement} ${styles.element4}`}></div>
      </div>
      
      {/* Main Content */}
      <div className={styles.heroInner}>
        <div className={styles.splitContainer}>
          {/* Left Side */}
          <div className={styles.leftSide}>
            <div className={styles.contentWrapper}>
              <span ref={preTitleRef} className={`${styles.preTitle} fade-up`}>
                Crafting magical moments
              </span>
              
              <h1 ref={mainTitleRef} className={`${styles.mainTitle} fade-up`}>
                Where Dreams Become <span className={styles.titleHighlight}>Celebrations</span>
              </h1>
              
              <p ref={descriptionRef} className={`${styles.description} fade-up`}>
                At Khushiyaan, we transform your most cherished moments into extraordinary experiences. With meticulous attention to detail and a passion for perfection, we create events that reflect your unique style and love story.
              </p>
              
              <div ref={ctaRef} className={`${styles.ctaContainer} fade-up`}>
                <a href="#contact" className="btn btn-primary btn-icon">
                  Start Planning
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#services" className="btn btn-outline">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className={styles.rightSide}>
            <div className={styles.imageBackgroundOverlay}></div>
            {/* We would use an actual image in production */}
            <div className={styles.imageBackground}></div>
            
            <div ref={rightContentRef} className={`${styles.rightContent} fade-up`}>
              <h2 className={styles.rightTitle}>Elevate Your Special Day</h2>
              <p className={styles.rightDescription}>
                From intimate gatherings to grand celebrations, we specialize in creating moments that last a lifetime.
              </p>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Personalized planning experience</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Exquisite venue selection</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Bespoke decor & styling</span>
                </li>
                <li className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Exceptional guest experience</span>
                </li>
              </ul>
              
              <a href="#contact" className="btn btn-primary">
                Request a Consultation
              </a>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className={styles.verticalDivider}></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a href="#services" className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Discover</span>
        <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
}