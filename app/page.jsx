'use client'

import Hero from '@/pages/Hero/Hero'
import Marquee from '@/pages/Marquee/Marquee'
import About from '@/pages/About/About'
import Portfolio from '@/pages/Portfolio/Portfolio'
import Services from '@/pages/Services/Services'
import Team from '@/pages/Team/Team'
import Testimonials from '@/pages/Testimonials/Testimonials'
import Contact from '@/pages/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </>
  )
}