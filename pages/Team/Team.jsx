'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './Team.module.css'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="section" ref={ref}>
      <div className="container">
        <div className={`${styles.teamIntro} ${isInView ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>
            Behind the Systems
          </div>
          <h2 className={styles.sectionTitle}>
            Sovereign <span className={styles.highlight}>Developer.</span>
          </h2>
          <p className={styles.sectionSub}>
            The Architecture of One: Engineering for Longevity and Scale (Solo Agility).
          </p>
        </div>

        <div className={styles.teamContainer}>
          <div className={`${styles.teamCard} ${isInView ? styles.visible : ''}`}>
            <div className={styles.teamPhoto}>
            </div>
            <div className={styles.teamInfo}>
              <h3 className={styles.teamName}>Katlego M. J.</h3>
              <div className={styles.teamRole}>Founder & Lead Engineer</div>
              <p className={styles.teamBio}>
                I build secure, reliable systems for businesses that need technology they can trust. 
                I handle everything from architecture to deployment, because I believe in owning the work from start to finish.
              </p>
              <div className={styles.teamSkills}>
                <span className={styles.skill}>System Engineer</span>
                <span className={styles.skill}>Cybersecurity</span>
                <span className={styles.skill}>Full-stack Dev</span>
                <span className={styles.skill}>Network Engineer</span>
              </div>
              <a href='https://katlegomorwamohube.site/'
                className={styles.portfolioButton}
                onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}