'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './Portfolio.module.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Prosp.Here',
    role: 'NGO Mentorship Platform',
    description: 'Connecting SAICA, ACCA, and CIMA students with real mentors. Features Varsity Compass tool and free virtual sessions — no fees, no gatekeeping.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind', 'Node.js'],
    imageIcon: '/assets/projects/prosphere.png',
    link: 'https://www.prosphere.site/'
  },
  {
    id: 2,
    title: 'Ke Pabala Aesthetics',
    role: 'E-Commerce Platform',
    description: 'Full online store for beauty and fashion products. Built with secure payments, real-time inventory, and a smooth shopping experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageIcon: '/assets/projects/kepabala.png',
    link: 'https://www.kepabalaaesthetics.store/'
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="container">
        <div className={`${styles.portfolioHeader} ${isInView ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>
            Portfolio
          </div>
          <h2 className={styles.sectionTitle}>
            Projects We <span className={styles.highlight}>built.</span>
          </h2>
          <p className={styles.sectionSub}>
            Real projects for businesses that need digital solutions.
          </p>
        </div>

        <div className={styles.portfolioGrid}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              isVisible={isInView}
              delay={index * 0.1}
            />
          ))}
          
          <div className={`${styles.viewMoreCard} ${isInView ? styles.visible : ''}`}>
            <div className={styles.viewMoreIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h16M12 4v16M12 4L8 8M12 4l4 4"/>
              </svg>
            </div>
            <div className={styles.viewMoreContent}>
              <h3 className={styles.viewMoreTitle}>View All Projects</h3>
              <p className={styles.viewMoreDesc}>Check out my complete portfolio for more case studies and client work.</p>
              <a href="https://www.katlegomorwamohube.site/#projects" className={styles.viewMoreBtn}>Explore All Projects →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}