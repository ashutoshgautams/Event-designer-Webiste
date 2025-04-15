'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './QuoteForm.module.css';

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [message, setMessage] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd typically send the form data to your backend
    console.log({ name, email, phone, eventType, message });
    // Clear form or show success message
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.background}></div>
      <div className={styles.decorElement1}></div>
      <div className={styles.decorElement2}></div>
      
      <div className="container">
        <div className={styles.sectionIntro}>
          <h2 className="section-title">Get In Touch</h2>
          <p className={styles.subtitle}>
            Let us transform your vision into an unforgettable celebration. Contact us today to begin planning your bespoke event.
          </p>
        </div>
        
        <div ref={ref} className={styles.grid}>
          <div className={`${styles.leftContent} fade-up ${inView ? 'visible' : ''}`}>
            <h3 className={styles.heading}>
              Begin Your <span className={styles.headingHighlight}>Extraordinary</span> Event Journey
            </h3>
            <p className={styles.description}>
              Our dedicated team of event specialists is ready to bring your vision to life. Whether you have a specific concept in mind or need guidance from the very beginning, we&apos;re here to create an experience that exceeds your expectations.
            </p>
            
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div className={styles.contactText}>
                  Rajeev Nagar,<br />
                  Patna, Bihar 800024
                </div>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div className={styles.contactText}>+91 85446 26930</div>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div className={styles.contactText}>khushiyaan025@gmail.com</div>
              </li>
            </ul>
            
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <a href="https://www.instagram.com/khushiyaan025/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="https://wa.me/918544626930" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          
          <div className={`${styles.formContainer} fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className={styles.formDecor}></div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className={styles.formControl}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className={styles.formControl}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className={styles.formControl}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="eventType" className={styles.formLabel}>Event Type</label>
                <select
                  id="eventType"
                  className={styles.formControl}
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="cultural">Cultural Ceremony</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your event and requirements..."
                  rows={5}
                  className={`${styles.formControl} ${styles.textarea}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div className={styles.formSubmit}>
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}