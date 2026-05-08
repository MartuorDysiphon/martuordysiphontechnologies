'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'Dimpho Ntabanyane',
    role: 'CEO, Ke Pabala Aesthetics',
    quote: 'Martuor Dysiphon didn\'t just build our website, they created a whole new digital experience for selling our products. The attention to security and performance was impressive.',
    rating: 5
  },
  {
    id: 2,
    name: 'Midge Mtshweni',
    role: 'Vice Chairperson, PROSP.HERE',
    quote: 'I was sceptical at first, but the delivery exceeded my expectations. The system has been running without issues for months. That\'s what real engineering looks like.',
    rating: 5
  },
  {
    id: 3,
    name: 'KJ Ramotete',
    role: 'Financial Officer, Binary Brains',
    quote: 'At first, I was hesitant to trust a new agency with our financial data, but their expertise and professionalism gave me complete confidence.',
    rating: 4.5
  }

]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
      <div className="container">
        <div className={`${styles.testimonialsIntro} ${isInView ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>
            Client feedback
          </div>
          <h2 className={styles.sectionTitle}>
            What people <span className={styles.highlight}>say.</span>
          </h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`${styles.testimonialCard} ${isInView ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div className={styles.authorInitial}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}