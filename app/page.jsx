'use client'

import Hero from '@/components/Hero/Hero'
import Marquee from '@/components/Marquee/Marquee'
import About from '@/components/About/About'
import Portfolio from '@/components/Portfolio/Portfolio'
import Services from '@/components/Services/Services'
import Team from '@/components/Team/Team'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'

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