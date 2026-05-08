'use client'

import Link from 'next/link'
import styles from './Terms.module.css'

export default function TermsOfService() {
  return (
    <div className={styles.termsPage}>
      <div className="container">
        <div className={styles.navBar}>
          <Link href="/" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Back to Home
          </Link>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms" className={styles.activeLink}>Terms of Service</Link>
          </div>
        </div>

        <div className={styles.content}>
          <h1>Terms of Service</h1>
          <div className={styles.lastUpdated}>Last Updated: 08 May 2026</div>

          <section className={styles.section}>
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the website and services provided by Martuor Dysiphon ("we", "our", "us", or "the Studio"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.</p>
            <p>These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Our Services</h2>
            <p>Martuor Dysiphon provides software engineering, cybersecurity, cloud infrastructure, data engineering, hardware setup, PC building, laptop repair, graphic design, UI/UX design, and IT consulting services. Specific details of each service are described on our website.</p>
            <p>All services are subject to:</p>
            <ul>
              <li>A signed service agreement or statement of work</li>
              <li>Payment of applicable fees as outlined in proposals or invoices</li>
              <li>Mutual agreement on project scope, timeline, and deliverables</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Client Responsibilities</h2>
            <p>As a client engaging our services, you agree to:</p>
            <ul>
              <li>Provide accurate, complete, and timely information needed to perform the services</li>
              <li>Respond to requests for feedback, approval, or information within agreed timeframes</li>
              <li>Ensure you have the legal right to use any materials, content, or intellectual property you provide to us</li>
              <li>Pay all fees as outlined in your service agreement or invoice</li>
              <li>Comply with all applicable laws and regulations related to your use of our services</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Project Engagement Process</h2>
            <h3>4.1 Initial Consultation</h3>
            <p>We offer a free initial consultation to understand your project needs, goals, and requirements. No obligation is created during this consultation.</p>
            
            <h3>4.2 Proposal and Quotation</h3>
            <p>After the initial consultation, we provide a detailed proposal outlining project scope, deliverables, timeline, and fees. This proposal is valid for 30 days from the date of issue.</p>
            
            <h3>4.3 Service Agreement</h3>
            <p>Before work begins, both parties sign a service agreement that formalizes the engagement. This agreement overrides any conflicting terms in these general terms.</p>
            
            <h3>4.4 Project Execution</h3>
            <p>Work proceeds according to the agreed timeline. We provide regular updates and seek feedback at key milestones.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Fees and Payment</h2>
            <p>Our fees are outlined in project proposals and service agreements. Payment terms include:</p>
            <ul>
              <li><strong>Deposit</strong> - A 50% deposit is required before work begins on most projects</li>
              <li><strong>Milestone payments</strong> - For larger projects, payments are tied to approved milestones</li>
              <li><strong>Final payment</strong> - Remaining balance due upon project completion and before final deliverables are released</li>
              <li><strong>Hourly work</strong> - Billed monthly with 15-day payment terms</li>
              <li><strong>Late payments</strong> - A 10% late fee applies to invoices unpaid after 30 days</li>
            </ul>
            <p>All fees are in South African Rand (ZAR) unless otherwise specified. We reserve the right to suspend services for overdue accounts.</p>
          </section>

          <section className={styles.section}>
            <h2>6. Intellectual Property Rights</h2>
            <h3>6.1 Deliverables Ownership</h3>
            <p>Upon full payment of all fees, we assign to you all intellectual property rights in the custom deliverables created specifically for your project. This includes source code, designs, and other work product.</p>
            
            <h3>6.2 Our Tools and Methods</h3>
            <p>We retain ownership of our pre-existing tools, methodologies, frameworks, and code libraries that we use to create deliverables. You receive a perpetual, royalty-free license to use these as incorporated into your deliverables.</p>
            
            <h3>6.3 Third-Party Materials</h3>
            <p>Our deliverables may incorporate open-source or third-party materials. These are governed by their respective licenses, which we will disclose to you.</p>
            
            <h3>6.4 Our Website Content</h3>
            <p>All content on our website (text, graphics, logos, icons, images) is our property and may not be copied or used without our permission.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Confidentiality</h2>
            <p>Both parties agree to keep confidential any non-public information shared during our engagement. This includes business plans, technical specifications, trade secrets, and client data. Confidentiality obligations survive the termination of our agreement.</p>
            <p>We will not:</p>
            <ul>
              <li>Share your confidential information with third parties without your consent</li>
              <li>Use your confidential information for any purpose other than performing our services</li>
              <li>Publicly disclose our working relationship without your approval (except for portfolio use as described below)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Portfolio and Case Studies</h2>
            <p>We may showcase completed work in our portfolio, case studies, and marketing materials. Unless you request otherwise during our engagement, we assume consent to display your project anonymously or with company branding. If you require complete confidentiality, we will honor that request.</p>
            <p>We never share sensitive technical details, source code, or proprietary information without explicit permission.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Warranties and Disclaimers</h2>
            <h3>9.1 Our Warranty</h3>
            <p>We warrant that our services will be performed in a professional and workmanlike manner, consistent with industry standards. If you find defects in our deliverables, we will correct them at no additional charge for 30 days after delivery.</p>
            
            <h3>9.2 Disclaimer</h3>
            <p>EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
            <p>We do not warrant that our services or deliverables will be error-free, uninterrupted, or meet all your business requirements. You are responsible for testing and validation before production deployment.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MARTUOR DYSIPHON SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH OUR SERVICES OR THESE TERMS.</p>
            <p>Our total liability to you for any claims arising from our services shall not exceed the total fees paid by you to us during the six months preceding the claim.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Martuor Dysiphon from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
            <ul>
              <li>Your breach of these Terms of Service</li>
              <li>Your use of our deliverables in violation of applicable laws</li>
              <li>Your infringement of any third-party rights</li>
              <li>Any content or materials you provide to us</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>12. Termination</h2>
            <p>Either party may terminate a service agreement for material breach by the other party that remains uncured for 14 days after written notice. Either party may terminate for convenience with 30 days written notice, subject to payment for work completed.</p>
            <p>Upon termination:</p>
            <ul>
              <li>We will deliver completed work for which you have paid</li>
              <li>You will pay for all work performed up to the termination date</li>
              <li>Confidentiality obligations survive termination</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>13. Governing Law</h2>
            <p>These Terms of Service and any agreements incorporating them shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law principles. Any legal action arising from these terms shall be brought exclusively in the courts of South Africa.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Dispute Resolution</h2>
            <p>Before filing a lawsuit, both parties agree to attempt to resolve any dispute through good-faith negotiations. If negotiations fail, either party may submit the dispute to binding arbitration in Johannesburg, South Africa, in accordance with the Arbitration Foundation of Southern Africa (AFSA) rules.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Force Majeure</h2>
            <p>Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including but not limited to natural disasters, war, terrorism, riots, labour disputes, government actions, or internet outages.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Entire Agreement</h2>
            <p>These Terms of Service, together with any signed service agreement or statement of work, constitute the entire agreement between you and Martuor Dysiphon regarding our services. They supersede all prior or contemporaneous communications, whether oral or written.</p>
          </section>

          <section className={styles.section}>
            <h2>17. Severability</h2>
            <p>If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
          </section>

          <section className={styles.section}>
            <h2>18. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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