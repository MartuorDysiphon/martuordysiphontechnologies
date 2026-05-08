'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'

export default function Hero() {
  const codeRef = useRef(null)

  useEffect(() => {
    const codeLines = [
      { num: '01', text: 'from fastapi import FastAPI, Security', highlight: 'fastapi' },
      { num: '02', text: 'from middleware import AuthMiddleware', highlight: 'middleware' },
      { num: '03', text: '# enforce strict transport security', highlight: null },
      { num: '04', text: 'app = FastAPI(title="Martuor Core")', highlight: 'FastAPI' },
      { num: '05', text: '', highlight: null },
      { num: '06', text: '@app.middleware("http")', highlight: 'middleware' },
      { num: '07', text: 'async def secure_headers(request, call):', highlight: null },
      { num: '08', text: '    response = await call(request)', highlight: null },
      { num: '09', text: '    response.headers["X-Frame-Options"] = "DENY"', highlight: null },
      { num: '10', text: '    return response', highlight: null },
    ]

    if (codeRef.current) {
      codeRef.current.innerHTML = ''
      let delay = 0
      codeLines.forEach((line) => {
        setTimeout(() => {
          const lineDiv = document.createElement('div')
          lineDiv.className = styles.codeLine
          const lineNum = document.createElement('span')
          lineNum.className = styles.lineNum
          lineNum.textContent = line.num
          const lineText = document.createElement('span')
          if (line.highlight) {
            const regex = new RegExp(`(${line.highlight})`, 'g')
            lineText.innerHTML = line.text.replace(regex, '<span class="' + styles.highlight + '">$1</span>')
          } else {
            lineText.textContent = line.text
          }
          lineDiv.appendChild(lineNum)
          lineDiv.appendChild(lineText)
          codeRef.current.appendChild(lineDiv)
          lineDiv.classList.add(styles.show)
        }, delay)
        delay += line.text ? 120 : 80
      })
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroLeft}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              Systems Of The New <span className={styles.highlightText}> Generations.</span>
            </h1>
            <p className={styles.heroSub}>
              We build secure, robust software for businesses that need technology they can trust. 
              No fancy marketing speak, just solid engineering and solutions that last.
            </p>
            <div className={styles.heroCtas}>
              <button 
                className="btn-primary"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Work with us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14L14 2M14 2H5.5M14 2V9.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                See our work
              </button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <span className={styles.codeFile}>main.py</span>
              </div>
              <div className={styles.codeBody} ref={codeRef}></div>
              <div className={styles.terminalFooter}>
                <span className={styles.termPrompt}>➜</span>
                <span className={styles.termText}>MDT Deployed For Production</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}