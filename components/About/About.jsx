'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} ${isInView ? styles.visible : ''}`}>
            <div className={styles.sectionTag}>
              Our Story
            </div>
            <h2 className={styles.sectionTitle}>
              From curiosity to <span className={styles.highlight}>Engineering.</span>
            </h2>
            
            <div className={styles.storyBlock}>
              <p className={styles.storyText}>
                Martuor Dysiphon started in 2026, built on a simple belief: technology should solve real problems, not create new ones. What began as personal curiosity about how systems work evolved into a proper engineering practice.
              </p>
              <p className={styles.storyText}>
                I'm Katlego MJ, the person behind this company. I've spent years learning networking, security, and software architecture not just through courses, but by building things, breaking things, and figuring out what actually works in production.
              </p>
              <p className={styles.storyText}>
                Today, I help businesses build secure, reliable digital systems. No fluff, no overpromising, just honest work and clean code that ships on time and stays working.
              </p>
            </div>

            {/* Kevin Mitnick Quote - Static Version */}
            <div className={styles.quoteBlock}>
              <div className={styles.quoteIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/>
                </svg>
              </div>
              <div className={styles.quoteContent}>
                <p className={styles.quoteText}>
                  "The human factor is truly the soft underbelly of security. You can have the best technology in the world, but if people don't follow security protocols, it's worthless."
                </p>
                <div className={styles.quoteAuthor}>
                  <span className={styles.authorName}>Kevin Mitnick</span>
                  <span className={styles.authorBook}>The Art of Deception</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.aboutImage} ${isInView ? styles.visible : ''}`}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <img 
                  src="/assets/about/hero.png" 
                  width={550} 
                  height={700} 
                  alt="Katlego M. J. - Founder of Martuor Dysiphon"
                  className={styles.profileImage}
                />
                <div className={styles.fallbackInitial} style={{ display: 'none' }}>
                  K
                </div>
              </div>
              <div className={styles.sinceBadge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span className={styles.sinceYear}>Est. 2026</span>
              </div>
            </div>
            <div className={styles.imageCaption}>
              <div className={styles.captionName}>Katlego M. J.</div>
              <div className={styles.captionRole}>Founder & Lead Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}