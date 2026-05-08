'use client'

import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

export default function ProjectCard({ project, isVisible, delay }) {
  return (
    <motion.div 
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.cardIcon}>
        <img className={styles.iconEmoji} src={project.imageIcon} alt={project.title} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.projectRole}>{project.role}</div>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <button 
          className={styles.projectLink}
          onClick={() => window.open(project.link, '_blank')}
        >
          View project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </motion.div>
  )
}