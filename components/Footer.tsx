'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Wrench, Car } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const services = [
    { name: 'Oil Change', href: '/services/oil-change' },
    { name: 'Brake Repair', href: '/services/brake-repair' }, 
    { name: 'Tire Service', href: '/services/tire-service' },
    { name: 'Engine Diagnostics', href: '/services/engine-diagnostics' },
    { name: 'Suspension Repair', href: '/services/suspension-repair' },
    { name: 'AC Service', href: '/services/ac-service' },
    { name: 'Safety Inspection', href: '/services/safety-inspection' },
    { name: 'Wheel Alignment', href: '/services/wheel-alignment' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="bg-primary-400 rounded-full animate-pulse" style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: '3s'
            }}></div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-300/10 to-primary-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Global Auto Repair</h3>
                <p className="text-primary-300 text-sm font-medium">Since 1964</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted automotive repair center in Toronto with over 60 years of honest, 
              friendly service. We care about your car like it's our own.
            </p>
            <div className="flex space-x-3">
              <motion.a 
                href="#" 
                className="bg-primary-600/80 backdrop-blur-sm p-3 rounded-xl hover:bg-primary-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-primary-600/80 backdrop-blur-sm p-3 rounded-xl hover:bg-primary-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-primary-600/80 backdrop-blur-sm p-3 rounded-xl hover:bg-primary-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary-300 flex items-center">
              <Car className="h-5 w-5 mr-2" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-300 transition-colors"></span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-300 transition-colors"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary-300">Contact Info</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-600/50 p-2 rounded-lg group-hover:bg-primary-500/50 transition-colors">
                  <Phone className="h-4 w-4 text-primary-200" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Call Us</span>
                  <div className="text-white font-medium">(416) 533-3433</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-600/50 p-2 rounded-lg group-hover:bg-primary-500/50 transition-colors">
                  <Mail className="h-4 w-4 text-primary-200" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Email Us</span>
                  <div className="text-white font-medium text-sm">info@globalautotoronto.ca</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-600/50 p-2 rounded-lg group-hover:bg-primary-500/50 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-200" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Location</span>
                  <div className="text-white font-medium">801 St Clarens Ave</div>
                  <div className="text-white font-medium">Toronto, ON M6H 3X4</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-600/50 p-2 rounded-lg group-hover:bg-primary-500/50 transition-colors">
                  <Clock className="h-4 w-4 text-primary-200" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Hours</span>
                  <div className="text-white font-medium">Mon-Fri: 8AM-6PM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/20 to-primary-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-500/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Visit Our Location</h3>
            <p className="text-gray-300">
              Find us easily in Toronto, ON. We're here to serve you!
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-79.44789012345678!3d43.65123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34abcd123456%3A0x9876543210abcdef!2s801%20St%20Clarens%20Ave%2C%20Toronto%2C%20ON%20M6H%203X4%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl"></div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-navy-700/50 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Global Auto Repair. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 