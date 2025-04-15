'use client';

import { useInView } from 'react-intersection-observer';
import styles from './ThemeSection.module.css';

const themes = [
  {
    title: 'Royal Elegance',
    description: 'A sophisticated blend of regal aesthetics and modern luxury, featuring rich textures, opulent details, and a refined color palette of deep emeralds, golds, and midnight blues.',
  },
  {
    title: 'Contemporary Minimalist',
    description: 'Clean lines, thoughtful negative space, and a curated approach to design create a serene atmosphere where every element has purpose and aesthetic intention.',
  },
  {
    title: 'Botanical Luxury',
    description: 'Immerse your guests in a verdant paradise where lush greenery, delicate blooms, and natural elements create an atmosphere of organic sophistication and tranquility.',
  }
];

export default function ThemeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.themes} id="themes">
      <div className={styles.patternBg}></div>
      <div className={styles.overlay}></div>
      <div className={styles.decorLine1}></div>
      <div className={styles.decorLine2}></div>
      
      <div className="container">
        <div className={styles.sectionIntro}>
          <h2 className="section-title">Signature Collections</h2>
          <p className={styles.subtitle}>
            Our meticulously curated design concepts bring together aesthetics, atmosphere, and emotion to 
            create experiences that transcend the ordinary.
          </p>
        </div>
        
        <div ref={ref} className={styles.grid}>
          {themes.map((theme, index) => (
            <div 
              key={index}
              className={`${styles.themeCard} fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={styles.themeImage}>
                <div className={styles.themeImagePlaceholder}>
                  <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.themeTitle}>{theme.title}</h3>
                <p className={styles.description}>{theme.description}</p>
                <div className={styles.button}>
                  <a href="#" className="btn-text">Explore Collection</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}