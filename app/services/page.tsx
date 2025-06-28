'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Droplets, Shield, Car, Settings, Zap, CheckCircle, Circle, Gauge, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const ServicesPage = () => {
  const services = [
    {
      id: 'oil-change',
      name: 'Synthetic Oil Change',
      icon: Droplets,
      price: '$79.99',
      description: 'Premium synthetic oil change with comprehensive inspection',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Premium synthetic oil', '30-minute service', '24-month warranty']
    },
    {
      id: 'brake-repair',
      name: 'Brake Repair & Service',
      icon: Shield,
      price: '$149.99',
      description: 'Complete brake system inspection and repair services',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Safety-first approach', 'Quality parts', 'Expert technicians']
    },
    {
      id: 'tire-service',
      name: 'Tires & Wheels',
      icon: Circle,
      price: '$25/tire',
      description: 'Tire installation, balancing, and wheel alignment services',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Professional installation', 'Wheel balancing', 'Road hazard warranty']
    },
    {
      id: 'ac-service',
      name: 'AC Diagnostics & Repair',
      icon: Zap,
      price: 'Free Diagnostic',
      description: 'Complete air conditioning system service and repair',
      image: 'https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Free diagnostics', 'R134a & R1234yf', 'Climate control experts']
    },
    {
      id: 'engine-diagnostics',
      name: 'Engine Diagnostics',
      icon: Settings,
      price: '$89.99',
      description: 'Advanced computer diagnostics for modern vehicles',
      image: 'https://images.unsplash.com/photo-1580339164651-0346223274ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Computer diagnostics', 'Check engine light', 'Performance issues']
    },
    {
      id: 'suspension-repair',
      name: 'Suspension Repair',
      icon: Car,
      price: '$299.99',
      description: 'Complete suspension system repair and maintenance',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Smooth ride guarantee', 'Quality shocks/struts', 'Professional installation']
    },
    {
      id: 'safety-inspection',
      name: 'MTO Safety Inspection',
      icon: CheckCircle,
      price: '$109.99',
      description: 'Official Ontario Ministry of Transportation safety inspection',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Licensed facility', 'MTO certified', 'Same-day service']
    },
    {
      id: 'wheel-alignment',
      name: 'Wheel Alignment',
      icon: Gauge,
      price: '$99.99',
      description: 'Precision wheel alignment for optimal tire wear and handling',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Precision alignment', 'Extended tire life', 'Improved handling']
    },
    {
      id: 'undercoating',
      name: 'Undercoating & Rust Protection',
      icon: Shield,
      price: '$149.99',
      description: 'Protect your vehicle from salt and corrosion damage',
      image: 'https://images.unsplash.com/photo-1580339164651-0346223274ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Rust prevention', 'Salt protection', 'Extended vehicle life']
    },
    {
      id: 'emergency-service',
      name: 'Emergency Services',
      icon: AlertTriangle,
      price: 'Call for rates',
      description: '24/7 emergency roadside assistance and towing',
      image: 'https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['24/7 availability', 'Towing service', 'Roadside assistance']
    }
  ]

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
            <div className="text-center">
              <h1 className="text-xl font-bold text-navy-900">Our Services</h1>
              <p className="text-sm text-navy-600">Professional automotive repair and maintenance</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-navy-700 font-medium">(416) 533-3433</span>
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light text-navy-900 mb-4">
              Our Complete Service Menu
            </h1>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we offer comprehensive automotive services 
              to keep your vehicle running safely and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {service.price}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-navy-600 mb-4 text-sm">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary-600" />
                              <span className="text-sm text-navy-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="mt-4 pt-4 border-t border-gray-100"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-primary-600 font-medium text-sm group-hover:underline">
                            Learn More →
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert technicians are here to help you determine exactly what your vehicle needs. 
              Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call (416) 533-3433
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 