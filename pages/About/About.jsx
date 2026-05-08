'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutContent} ${isInView ? styles.visible : ''}`}>
            <div className={styles.sectionTag}>
              Our story
            </div>
            <h2 className={styles.sectionTitle}>
              How we got <span className={styles.highlight}>here.</span>
            </h2>
            
            <div className={styles.storyBlock}>
              <p className={styles.storyText}>
                Martuor Dysiphon started in 2022, built on a simple idea: technology should solve real problems, not create new ones. What began as personal curiosity about how systems work turned into a proper engineering practice.
              </p>
              <p className={styles.storyText}>
                I'm Katlego MJ, the person behind this Company. I've spent years learning networking, security, and software architecture, not through courses only, but by building things, breaking things, and figuring out what actually works.
              </p>
              <p className={styles.storyText}>
                Today, I help businesses build secure, reliable digital systems. No fluff, no overpromising just honest work and clean code that ships on time and stays working.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Live Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>99.99%</div>
                <div className={styles.statLabel}>Secure</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Years building</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>0</div>
                <div className={styles.statLabel}>Security breaches</div>
              </div>
            </div>
          </div>

          <div className={`${styles.aboutImage} ${isInView ? styles.visible : ''}`}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="/assets/about/hero.png" width={550} height={700} alt="Katlego M. J." />
              </div>
              <div className={styles.sinceBadge}>
                <span className={styles.sinceYear}>2022</span>
                <span className={styles.sinceText}>Launch</span>
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