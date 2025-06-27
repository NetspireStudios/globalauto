'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSeparatorProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: string
}

const ParallaxSeparator = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = 'h-[28rem]' 
}: ParallaxSeparatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Only apply parallax to the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = backgroundImage
  }, [backgroundImage])

  // Check if this is the "Expert Auto Care" title to apply special styling
  const isExpertAutoCare = title === "Expert Auto Care"

  return (
    <div ref={containerRef} className={`relative ${height} overflow-hidden`}>
      {/* Parallax Background Image - Only this moves */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: backgroundY }}
      >
        {isLoaded && (
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}
        
        {/* Overlay gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      </motion.div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20" />
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Static Content - Stays centered and doesn't move */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {isExpertAutoCare ? (
            // Animated wavy text for "Expert Auto Care"
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 relative overflow-hidden"
            >
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {title}
              </motion.span>
              {/* Moving wave effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300/30 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{
                  width: '50%',
                  filter: 'blur(1px)',
                }}
              />
            </motion.h2>
          ) : (
            // Regular text for other titles
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
            >
              {title}
            </motion.h2>
          )}
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ParallaxSeparator 