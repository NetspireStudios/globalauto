'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Clock, DollarSign, Shield, Star, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceIncluded {
  item: string
}

interface ServicePageTemplateProps {
  serviceName: string
  icon: React.ComponentType<any>
  price: string
  duration: string
  warranty: string
  description: string
  heroImage: string
  rating: number
  reviewCount: number
  features: ServiceFeature[]
  included: ServiceIncluded[]
  ctaTitle?: string
  ctaDescription?: string
}

const ServicePageTemplate = ({
  serviceName,
  icon: Icon,
  price,
  duration,
  warranty,
  description,
  heroImage,
  rating,
  reviewCount,
  features,
  included,
  ctaTitle = "Ready to Book Your Service?",
  ctaDescription = "Don't wait until it's too late. Schedule your service today and keep your vehicle running like new."
}: ServicePageTemplateProps) => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50">
      {/* Header */}
      <motion.div 
        className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-navy-700 hover:text-primary-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-600" />
                <span className="text-navy-700 font-medium">(905) 281-9054</span>
              </div>
              <motion.button
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-xl mr-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-light text-navy-900">
                    {serviceName}
                  </h1>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-navy-600 ml-2">{rating}/5 ({reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-navy-600 mb-8">
                {description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-100">
                  <DollarSign className="h-8 w-8 text-theme-medium-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-900">{price}</div>
                  <div className="text-sm text-navy-600">Starting Price</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-100">
                  <Clock className="h-8 w-8 text-theme-medium-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-900">{duration}</div>
                  <div className="text-sm text-navy-600">Service Time</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-100">
                  <Shield className="h-8 w-8 text-theme-medium-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-navy-900">{warranty}</div>
                  <div className="text-sm text-navy-600">Warranty</div>
                </div>
              </div>

              <motion.button
                className="bg-gradient-to-r from-theme-medium-500 to-theme-dark-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Appointment
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <img 
                src={heroImage}
                alt={serviceName}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">60+</div>
                  <div className="text-sm text-navy-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-navy-900 mb-4">
              Why Choose Our {serviceName}?
            </h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              Experience the difference with our professional service that goes beyond your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-theme-light-50 to-theme-light-100 rounded-xl p-6 border border-theme-light-200"
              >
                <CheckCircle className="h-8 w-8 text-theme-medium-600 mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-navy-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-navy-900 mb-4">
              What's Included in Your Service
            </h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              Our comprehensive service includes everything you need for optimal vehicle performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-primary-100"
              >
                <CheckCircle className="h-6 w-6 text-theme-medium-600 flex-shrink-0" />
                <span className="text-navy-700">{item.item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-theme-medium-600 to-theme-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {ctaTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-theme-medium-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (905) 281-9054
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-theme-medium-600 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Request Quote Online
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicePageTemplate 