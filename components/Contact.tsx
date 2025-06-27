'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-navy-900 mb-4">
            Contact <span className="text-primary-500 font-medium">Us</span>
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Ready to schedule your appointment? Get in touch with us today for expert automotive service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Call Us</h3>
                <p className="text-navy-600 mb-1">(905) 281-9054</p>
                <p className="text-sm text-navy-500">Emergency calls available</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Visit Us</h3>
                <p className="text-navy-600 mb-1">469 Hensall Cir</p>
                <p className="text-navy-600">Mississauga, ON L5A 3P4, Canada</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Working Hours</h3>
                <p className="text-navy-600 mb-1">Week Days: 9:00 AM - 7:00 PM</p>
                <p className="text-navy-600 mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-navy-600">Sunday: CLOSED</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-500 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Email Us</h3>
                <p className="text-navy-600">info@hensallauto.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Request Call Back</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Name *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Contact Number *</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Your Message *</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your vehicle and service needs..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 