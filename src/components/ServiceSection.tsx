'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './ServiceSection.module.css';

const services = [
  {
    title: 'Weddings',
    description: 'Elegant and sophisticated celebrations curated to perfection, transforming your special day into an unforgettable experience of luxury and romance.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 14.66V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H9.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 2L22 6L12 16H8V12L18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Milestone Celebrations',
    description: 'From birthdays to anniversaries, we craft bespoke experiences that reflect your unique story and create moments of joy that will be cherished for a lifetime.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Corporate Events',
    description: 'Elevate your business gatherings with our meticulous attention to detail, creating sophisticated and memorable events that reflect your values and vision.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Cultural Ceremonies',
    description: 'Honor traditions with a contemporary touch, as we blend cultural authenticity with modern elegance to create ceremonies that respect heritage while feeling fresh.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

// Service detail pages content

export default function ServiceSection() {
  const setActiveService = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleServiceClick = (serviceType: string) => {
    setActiveService[1](serviceType);
    // In a real implementation, this would navigate to the service detail page
    // or open a modal with more information
    console.log(`Navigate to ${serviceType} service page`);
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.background}></div>
      <div className={`${styles.decorCircle} ${styles.circle1}`}></div>
      <div className={`${styles.decorCircle} ${styles.circle2}`}></div>
      
      <div className="container">
        <div className={styles.sectionIntro}>
          <h2 className="section-title">Our Expertise</h2>
          <p className={styles.subtitle}>We specialize in creating bespoke experiences that transform your vision into unforgettable moments.</p>
        </div>
        
        <div ref={ref} className={styles.grid}>
          {services.map((service, index) => {
            const serviceKey = service.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <div 
                key={index}
                className={`${styles.serviceItem} fade-up ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleServiceClick(serviceKey)}
              >
                <div className={styles.inner}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                  
                  {/* <div className={styles.explore}>
                    <span className={styles.exploreText}>Explore Services</span>
                    <svg className={styles.exploreIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}