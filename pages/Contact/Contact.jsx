'use client'

import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('https://formspree.io/f/meenleoq', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className={styles.contactLayout}>
          <div className={`${styles.contactInfo} ${isInView ? styles.visible : ''}`}>
            <div className={styles.sectionTag}>
              Get in touch
            </div>
            <h2 className={styles.sectionTitle}>
              Let's build <span className={styles.highlight}>something great.</span>
            </h2>
            <p className={styles.sectionSub}>
              Tell me about your project, infrastructure, or security challenge. I'll get back to you within 24 hours.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>NDA available</strong>
                  <p className={styles.featureDesc}>Your ideas stay yours. Confidentiality guaranteed.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 6v6l4 2"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div>
                  <strong>Quick proposal</strong>
                  <p className={styles.featureDesc}>48-hour project scoping for urgent needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.contactForm} ${isInView ? styles.visible : ''}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First name</label>
                  <input 
                    type="text" 
                    name="firstname" 
                    required 
                    className={styles.input}
                    placeholder="John"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last name</label>
                  <input 
                    type="text" 
                    name="lastname" 
                    required 
                    className={styles.input}
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Email address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className={styles.input}
                  placeholder="hello@company.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Project idea</label>
                <textarea 
                  name="message" 
                  required 
                  className={styles.textarea}
                  rows="4"
                  placeholder="What are you building? What challenges are you facing?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message →'}
              </button>
              
              {status === 'success' && (
                <p className={styles.successMsg}>Message sent! I'll get back to you within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}