'use client'

import { useState, useEffect } from 'react'
import styles from './navigation.module.css'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <div className={styles.logoMark}>
                <img src="/assets/logo/logo.svg" width={50} height={50} alt="logo" />
            </div>
            <span className={styles.logoText}>
              Martuor <span>Dysiphon</span>
            </span>
          </div>

          <div className={styles.navLinks}>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Work</a>
            <a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Team</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
          </div>

          <div className={styles.navActions}>
            <button 
              className={styles.btnGhost}
              onClick={(e) => handleLinkClick(e, '#portfolio')}
            >
              Recent work
            </button>
            <button 
              className={styles.btnSolid}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Let's talk
            </button>
          </div>

          <button 
            className={styles.burger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeBtn}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
        <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
        <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Work</a>
        <a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Team</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
      </div>
    </>
  )
}