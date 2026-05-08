'use client'

import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    id: '01',
    title: 'Software Development',
    description: 'Custom web apps, APIs, and internal tools. Clean code that actually works and stays maintainable.',
    iconColor: '#fff'
  },
  {
    id: '02',
    title: 'Cybersecurity',
    description: 'Penetration testing, threat modelling, and infrastructure hardening. Your data stays your data.',
    iconColor: '#fff'
  },
  {
    id: '03',
    title: 'Cloud & Infrastructure',
    description: 'AWS setup, Kubernetes, zero-downtime deployments. Systems that don\'t fall over on weekends.',
    iconColor: '#fff'
  },
  {
    id: '04',
    title: 'Data Engineering',
    description: 'Data pipelines, analytics dashboards, and ETL workflows. Turn your data into decisions.',
    iconColor: '#fff'
  },
  {
    id: '05',
    title: 'Hardware Setup',
    description: 'Server racks, networking gear, and peripheral configuration. Get your physical infrastructure running smoothly.',
    iconColor: '#fff'
  },
  {
    id: '06',
    title: 'Custom PC Build',
    description: 'Gaming rigs, workstations, or budget builds. Hand-picked components assembled with care and cable management.',
    iconColor: '#fff'
  },
  {
    id: '07',
    title: 'Laptop Repair',
    description: 'Screen repairs, keyboard replacements, battery swaps, and diagnostic troubleshooting. Same-day service available.',
    iconColor: '#fff'
  },
  {
    id: '08',
    title: 'Graphic Design',
    description: 'Logos, branding, social media assets, and print materials. Designs that actually look good and convert.',
    iconColor: '#fff'
  },
  {
    id: '09',
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, and user testing. Interfaces people actually enjoy using.',
    iconColor: '#fff'
  }
]

// Icon components as SVGs
const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 7L3 12L8 17M16 7L21 12L16 17M14 3L10 21" strokeLinecap="round"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L3 6V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V6L12 2Z" strokeLinecap="round"/>
    <path d="M12 8V12M12 16H12.01" strokeLinecap="round"/>
  </svg>
)

const CloudIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 10C18 6.686 15.314 4 12 4C9.5 4 7.3 5.5 6.3 7.7C4.1 8.1 2.5 10.1 2.5 12.5C2.5 15 4.5 17 7 17H17C19.5 17 21.5 15 21.5 12.5C21.5 10.2 19.8 8.3 17.5 8.1C17.2 8 17 8 18 10Z" strokeLinecap="round"/>
  </svg>
)

const DataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6C4 4.895 7.134 4 11 4C14.866 4 18 4.895 18 6M4 6C4 7.105 7.134 8 11 8C14.866 8 18 7.105 18 6M4 6V18C4 19.105 7.134 20 11 20C14.866 20 18 19.105 18 18V6" strokeLinecap="round"/>
    <path d="M4 12C4 13.105 7.134 14 11 14C14.866 14 18 13.105 18 12" strokeLinecap="round"/>
  </svg>
)

const HardwareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="7" width="18" height="10" rx="2"/>
    <path d="M7 11H9M15 11H17" strokeLinecap="round"/>
  </svg>
)

const PcIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="5" width="16" height="12" rx="1"/>
    <path d="M8 17L10 21H14L16 17" strokeLinecap="round"/>
  </svg>
)

const RepairIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16.5 9.4L20.1 13L14.6 18.5L11 14.9M7.5 14.6L3.9 11L9.4 5.5L13 9.1" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const DesignIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3L21 21M15 9L18 12L15 15M9 15L6 12L9 9" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="9"/>
  </svg>
)

const UiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M8 8H16M8 12H12" strokeLinecap="round"/>
  </svg>
)

const iconComponents = [
  CodeIcon, ShieldIcon, CloudIcon, DataIcon,
  HardwareIcon, PcIcon, RepairIcon, DesignIcon, UiIcon
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <div className={`${styles.servicesIntro} ${isInView ? styles.visible : ''}`}>
          <div className={styles.sectionTag}>
            <span className={styles.tagLine}></span>
            What We Do
            <span className={styles.tagLine}></span>
          </div>
          <h2 className={styles.sectionTitle}>
            Services We <span className={styles.highlight}>Offer</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From code to hardware, comprehensive tech solutions under one roof
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const IconComponent = iconComponents[index]
            return (
              <div 
                key={service.id}
                className={`${styles.serviceCard} ${isInView ? styles.visible : ''} ${hoveredId === service.id ? styles.hovered : ''}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={styles.cardIconWrapper} style={{ background: service.iconColor }}>
                  <IconComponent />
                </div>
                <div className={styles.cardNumber}>{service.id}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.cardGlow} style={{ background: `linear-gradient(135deg, ${service.iconColor}, ${service.iconColor}80)` }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}