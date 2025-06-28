'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, Clock, Phone, Star, ArrowRight, Wrench, Shield, Eye, X, Sparkles, ChevronLeft, ChevronRight, Settings, Zap } from 'lucide-react'

// Improved count-up animation hook with faster, smoother animation
const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Use easing function for smoother animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return count
}

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const stats = [
    { number: 60, suffix: '+', label: 'Years Experience', icon: Clock },
    { number: 5000, suffix: '+', label: 'Cars Serviced', icon: Car },
    { number: 4.8, isDecimal: true, label: 'Average Rating', icon: Star },
    { number: 100, suffix: '%', label: 'Satisfaction', icon: Shield },
  ]

  // Better quality car images with fallbacks
  const carImages = [
    {
      url: 'https://images.unsplash.com/photo-1580339164651-0346223274ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      fallback: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      title: 'Professional Auto Repair Service'
    },
    {
      url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      fallback: 'https://images.unsplash.com/photo-1632823471565-1ecdf3d7e4ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      title: 'Modern Automotive Technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      fallback: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      title: 'Expert Tire Services'
    },
    {
      url: 'https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      fallback: 'https://images.unsplash.com/photo-1580339164651-0346223274ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90',
      title: 'Engine Diagnostics'
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoadError, setImageLoadError] = useState<{ [key: number]: boolean }>({})

  const openImagePopup = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeImagePopup = () => {
    setSelectedImage(null)
  }

  const handleImageError = (index: number) => {
    setImageLoadError(prev => ({ ...prev, [index]: true }))
  }

  const handleBookNow = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Navigation functions for image cycling
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Auto-cycle through images with smoother transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-xl" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 right-10"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2, ease: "easeInOut" }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary-300/20 to-primary-400/20 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Wrench className="h-4 w-4 mr-2" />
              Trusted Auto Repair Since 1964
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-navy-900 leading-tight mb-6"
            >
              We Care About
              <span className="block text-primary-500 font-medium">
                Your Car
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-navy-600 mb-8 max-w-2xl"
            >
              Global Auto Repair is your trusted automotive repair and used vehicle center in Toronto. 
              We are known for honest service and friendly environment with over 60 years 
              of automotive service experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Book Appointment
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleServices}
                className="border-2 border-navy-300 text-navy-700 px-8 py-4 rounded-xl font-semibold hover:bg-navy-700 hover:text-white hover:border-navy-700 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Enhanced Stats with Premium Styling and Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                const count = stat.isDecimal ? 
                  (useCountUp(48, 1200) / 10).toFixed(1) : 
                  useCountUp(stat.number, 1200)
                
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.15), 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                                         className="group relative text-center bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon Container */}
                    <motion.div 
                      className="relative flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative">
                        {/* Icon Background with Gradient */}
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                          <Icon className="h-6 w-6 text-white drop-shadow-sm" />
                        </div>
                        
                        {/* Pulsing Ring Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl opacity-0 group-hover:opacity-20"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Number Display */}
                    <motion.div 
                      className="mb-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 1 + (index * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-navy-800 to-navy-900 bg-clip-text text-transparent">
                        {count}{stat.suffix || ''}
                      </span>
                    </motion.div>
                    
                    {/* Label */}
                    <motion.p 
                      className="text-sm lg:text-base text-navy-600 font-medium leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + (index * 0.1) }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Car Images Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >


            <div className="relative z-10">
              {/* Main Featured Image - Made Bigger */}
              <motion.div
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-4 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group cursor-pointer">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={imageLoadError[currentImageIndex] ? carImages[currentImageIndex].fallback : carImages[currentImageIndex].url}
                      alt={carImages[currentImageIndex].title}
                      className="w-full h-96 md:h-[450px] object-cover rounded-xl"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      onClick={() => openImagePopup(imageLoadError[currentImageIndex] ? carImages[currentImageIndex].fallback : carImages[currentImageIndex].url)}
                      onError={() => handleImageError(currentImageIndex)}
                      loading="eager"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                  >
                    <ChevronLeft className="h-5 w-5 text-navy-700 group-hover:text-primary-600" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                  >
                    <ChevronRight className="h-5 w-5 text-navy-700 group-hover:text-primary-600" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image Title Overlay */}
                  <div className="absolute bottom-16 left-4 right-4">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-black/50 backdrop-blur-sm rounded-lg p-3"
                    >
                      <h3 className="text-white font-semibold text-sm md:text-base">
                        {carImages[currentImageIndex].title}
                      </h3>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Thumbnail Images Grid - Made Bigger */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {carImages.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => goToImage(index + 1)}
                  >
                    <img 
                      src={imageLoadError[index + 1] ? image.fallback : image.url}
                      alt={image.title}
                      className={`w-full h-32 md:h-36 object-cover rounded-xl shadow-md transition-all duration-300 ${
                        currentImageIndex === index + 1 
                          ? 'ring-2 ring-primary-500 ring-offset-2' 
                          : 'hover:shadow-lg'
                      }`}
                      onError={() => handleImageError(index + 1)}
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-4 right-4 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-4 left-4 w-56 h-56 bg-gradient-to-br from-primary-100/20 to-primary-200/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImagePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage}
                alt="Car Service Image"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                onClick={closeImagePopup}
              >
                <X className="h-6 w-6 text-navy-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero 