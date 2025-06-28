'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParallaxSeparator from '../components/ParallaxSeparator'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      
      <Services />
      
      <ParallaxSeparator 
        title="60+ Years of Excellence"
        subtitle="Serving Toronto with honest, reliable automotive care since 1964"
        backgroundImage="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
        height="h-[32rem]"
      />
      
      <About />
      
      <ParallaxSeparator 
        title="Why Choose Us"
        subtitle="Experience the difference that comes with decades of expertise"
        backgroundImage="https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
        height="h-[24rem]"
      />
      
      <WhyChooseUs />
      

      
      <ParallaxSeparator 
        title="Get In Touch"
        subtitle="Ready to schedule your next service? We're here to help"
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"
        height="h-[24rem]"
      />
      
      <Contact />
      <Footer />
    </main>
  )
} 