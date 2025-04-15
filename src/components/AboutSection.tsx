'use client';

import { useInView } from 'react-intersection-observer';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.about} id="about">
      <div className={styles.patternOverlay}></div>
      <div className={`${styles.decorShape} ${styles.decorShape1}`}></div>
      <div className={`${styles.decorShape} ${styles.decorShape2}`}></div>
      
      <div className="container">
        <div ref={ref} className={styles.grid}>
          <div className={`${styles.content} fade-up ${inView ? 'visible' : ''}`}>
            <h2 className={styles.sectionTitle}>About Khushiyaan</h2>
            <p className={styles.subtitle}>The art of transforming moments into memories</p>
            <p className={styles.description}>
              At Khushiyaan, we are passionate about creating extraordinary events that resonate with elegance and personal significance. Our dedicated team of event specialists brings a wealth of experience and creativity to every celebration we design.
            </p>
            <p className={styles.description}>
              Founded on the belief that every important moment deserves to be celebrated in style, we have spent years perfecting our craft to deliver bespoke event experiences that exceed expectations. From intimate gatherings to grand celebrations, our attention to detail and commitment to excellence ensure that your special occasion becomes a treasured memory.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>250+</div>
                <div className={styles.statLabel}>Events Designed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>8</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.imageContainer} fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className={styles.imageGrid}>
              <div className={`${styles.imageWrapper} ${styles.image1}`}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.imageIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8h.01M12 3h.01M9 8h.01M3 16l5-5 5 5m4 0l-9-9m5 0l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                  </svg>
                </div>
              </div>
              <div className={`${styles.imageWrapper} ${styles.image2}`}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.imageIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={`${styles.imageWrapper} ${styles.image3}`}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.imageIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}