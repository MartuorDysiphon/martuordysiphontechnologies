'use client'

import Link from 'next/link'
import styles from './PrivaryPolicy.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyPage}>
      <div className="container">
        <div className={styles.navBar}>
          <Link href="/" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Back to Home
          </Link>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.activeLink}>Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className={styles.content}>
          <h1>Privacy Policy</h1>
          <div className={styles.lastUpdated}>Last Updated: 08 May 2026</div>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>Martuor Dysiphon ("we", "our", "us", or "the Studio") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
            <p>We are based in South Africa and operate in compliance with the Protection of Personal Information Act (POPIA). By using our website or services, you agree to the collection and use of information in accordance with this policy.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information you provide to us</h3>
            <p>When you contact us through our website, we may collect:</p>
            <ul>
              <li>Your name and email address</li>
              <li>Your phone number (if provided)</li>
              <li>Information about your project or inquiry</li>
              <li>Any other information you choose to share with us</li>
            </ul>

            <h3>2.2 Information collected automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Your IP address and browser type</li>
              <li>Pages you visit and time spent on our site</li>
              <li>Device information and operating system</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>To respond to your inquiries</strong> - We use your contact information to answer questions about our services</li>
              <li><strong>To provide and improve our services</strong> - We analyze usage patterns to make our website better</li>
              <li><strong>To communicate with you</strong> - We may send updates about your project or respond to support requests</li>
              <li><strong>To maintain security</strong> - We monitor for suspicious activity or potential threats</li>
              <li><strong>To comply with legal obligations</strong> - We may need to retain information for legal or regulatory reasons</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Legal Basis for Processing (POPIA Compliance)</h2>
            <p>Under South Africa's POPIA, we process your personal information based on one or more of the following grounds:</p>
            <ul>
              <li><strong>Consent</strong> - You have given us explicit consent to process your information</li>
              <li><strong>Contractual necessity</strong> - Processing is necessary for a contract with you (e.g., providing services)</li>
              <li><strong>Legal obligation</strong> - We are required to process information by law</li>
              <li><strong>Legitimate interests</strong> - Processing serves our legitimate business interests without overriding your rights</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. How We Share Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
            <ul>
              <li><strong>Service providers</strong> - We use Formspree to process contact form submissions. They handle your data according to their privacy policy</li>
              <li><strong>Legal requirements</strong> - If required by law or to protect our rights, we may disclose information to authorities</li>
              <li><strong>Business transfers</strong> - In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Data Security</h2>
            <p>We take data security seriously. We implement appropriate technical and organizational measures to protect your personal information, including:</p>
            <ul>
              <li>Secure HTTPS encryption for all data transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure storage practices for any retained data</li>
            </ul>
            <p>However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:</p>
            <ul>
              <li>Contact form submissions: Up to 12 months, unless we establish a working relationship</li>
              <li>Client project data: Duration of the engagement plus 24 months for legal and business records</li>
              <li>Website analytics data: Anonymized after 26 months</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Your Rights Under POPIA</h2>
            <p>As a South African resident or data subject, you have the following rights:</p>
            <ul>
              <li><strong>Right to access</strong> - You can request a copy of the personal information we hold about you</li>
              <li><strong>Right to rectification</strong> - You can correct inaccurate or incomplete information</li>
              <li><strong>Right to erasure</strong> - You can request deletion of your information in certain circumstances</li>
              <li><strong>Right to object</strong> - You can object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent</strong> - You can withdraw previously given consent at any time</li>
              <li><strong>Right to lodge a complaint</strong> - You can complain to the Information Regulator of South Africa</li>
            </ul>
            <p>To exercise these rights, contact us at the email address below.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. We use:</p>
            <ul>
              <li><strong>Essential cookies</strong> - Required for the website to function properly</li>
              <li><strong>Analytics cookies</strong> - To understand how visitors use our site (anonymized)</li>
              <li><strong>Preference cookies</strong> - To remember your settings and preferences</li>
            </ul>
            <p>You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites (e.g., client sites, GitHub, LinkedIn). We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately.</p>
          </section>

          <section className={styles.section}>
            <h2>12. International Data Transfers</h2>
            <p>While we are based in South Africa, some of our service providers (like Formspree) may operate in other countries. When transferring data internationally, we ensure appropriate safeguards are in place to protect your information.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Contact Us</h2>
            <p>If you have any questions about this privacy policy or how we handle your personal information, please contact us:</p>
            <ul className={styles.contactList}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <span>katlegomorwamohube@protonmail.com</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 0 0-10 10c0 7 10 14 10 14s10-7 10-14a10 10 0 0 0-10-10z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>South Africa</span>
              </li>
            </ul>
          </section>

          <div className={styles.footerNote}>
            <p>© {new Date().getFullYear()} Martuor Dysiphon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}