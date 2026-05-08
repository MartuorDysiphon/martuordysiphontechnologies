'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './Marquee.module.css'

const services = [
  'Fintech',
  'Secure APIs',
  'Cloud Infrastructure',
  'System Audits',
  'Pen Testing',
  'Full-stack Apps',
  'Data Pipelines',
  'Edge Computing'
]

export default function Marquee() {
  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        {services.map((service, index) => (
          <span key={index} className={styles.marqueeItem}>
            <span className={styles.separator}></span>
            {service}
          </span>
        ))}
        {services.map((service, index) => (
          <span key={`dup-${index}`} className={styles.marqueeItem}>
            <span className={styles.separator}></span>
            {service}
          </span>
        ))}
      </div>
    </div>
  )
}