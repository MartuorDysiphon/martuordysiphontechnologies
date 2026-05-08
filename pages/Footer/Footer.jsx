'use client'

import styles from './Footer.module.css'
import Link from 'next/link'

import privacy from '../Privacy/PrivaryPolicy'
import terms from '../Terms/Terms'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.brandLogo}>
              <div className={styles.logoMark}>
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M6 24L16 8l10 16" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 18l4-6 4 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className={styles.brandName}>Martuor Dysiphon</span>
            </div>
            <p className={styles.brandDesc}>
              Building secure, dependable digital systems for businesses that need technology they can trust.
            </p>
            <p className={styles.brandLoc}>
              Based in South Africa · Serving globally
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Explore</h4>
              <ul>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
                <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
                <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a></li>
                <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Team</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <ul>
                <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
                <li><a href="https://github.com/MartuorDysiphon">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/katlego-morwamohube-a0a804197/">LinkedIn</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul>
                <Link href="../Privacy/PrivaryPolicy">
                  Privacy Policy
                </Link>
                <Link href="../Terms/Terms">
                  Terms of Service
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} Martuor Dysiphon. Built Securely by Martuor Dysiphon.</p>
        </div>
      </div>
    </footer>
  )
}