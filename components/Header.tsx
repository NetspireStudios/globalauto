'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Car, 
  Settings, 
  Shield, 
  Users, 
  Phone, 
  Menu, 
  X,
  ChevronDown,
  Wrench,
  Droplets,
  Circle,
  Zap,
  CheckCircle,
  AlertTriangle,
  Gauge
} from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home', icon: Car },
    { name: 'About', href: '#about', icon: Users },
    { name: 'Why Choose Us', href: '#why-choose-us', icon: Shield },
    { name: 'Contact', href: '#contact', icon: Phone },
  ]

  const services = [
    { name: 'Synthetic Oil Change', icon: Droplets, href: '/services/oil-change', price: '$79.99' },
    { name: 'Brake Repair & Service', icon: Shield, href: '/services/brake-repair', price: '$149.99' },
    { name: 'Tires & Wheels', icon: Circle, href: '/services/tire-service', price: '$25/tire' },
    { name: 'AC Diagnostics & Repair', icon: Zap, href: '/services/ac-service', price: 'Free Diagnostic' },
    { name: 'Engine Diagnostics', icon: Settings, href: '/services/engine-diagnostics', price: '$89.99' },
    { name: 'Suspension Repair', icon: Car, href: '/services/suspension-repair', price: '$299.99' },
    { name: 'MTO Safety Inspection', icon: CheckCircle, href: '/services/safety-inspection', price: '$109.99' },
    { name: 'Wheel Alignment', icon: Gauge, href: '/services/wheel-alignment', price: '$99.99' },
    { name: 'Undercoating', icon: Shield, href: '/services/undercoating', price: '$149.99' },
    { name: 'Emergency Services', icon: AlertTriangle, href: '/services/emergency-service', price: 'Call for rates' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    
    if (href.startsWith('#')) {
      // Small delay to allow menu to close first
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // For external links, navigate immediately
      window.location.href = href
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg shadow-md">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-navy-900">
                  Global Auto Repair
                </span>
                <div className="text-xs text-primary-600 font-medium">
                  Since 1964
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-1.5 px-4 py-2 text-navy-700 hover:text-primary-600 font-medium text-sm transition-all duration-200 rounded-lg hover:bg-primary-50"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span>{item.name}</span>
              </motion.button>
            ))}

            {/* Services Dropdown - Changed to hover */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.div
                className="flex items-center space-x-1.5 px-4 py-2 text-navy-700 hover:text-primary-600 font-medium text-sm transition-all duration-200 rounded-lg hover:bg-primary-50 cursor-pointer"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                <Settings className="h-3.5 w-3.5" />
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-3 w-3" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <Link 
                          href="/services"
                          className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                      {services.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-center justify-between w-full px-4 py-2.5 text-left text-sm text-navy-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="h-3.5 w-3.5 text-primary-500" />
                              <span>{service.name}</span>
                            </div>
                            <span className="text-xs text-primary-600 font-medium">{service.price}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-sm">
              <Phone className="h-3.5 w-3.5 text-primary-600" />
              <span className="text-navy-700 font-medium">(905) 281-9054</span>
            </div>
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-navy-700" />
            ) : (
              <Menu className="h-5 w-5 text-navy-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-lg text-navy-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.button>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <motion.button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-navy-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span className="text-sm font-medium">Services</span>
                  </div>
                  <ChevronDown className={`h-3 w-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6 mt-2 space-y-1"
                    >
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View All Services →
                      </Link>
                      {services.slice(0, 5).map((service) => (
                        <motion.div key={service.name} whileHover={{ x: 3 }}>
                          <Link
                            href={service.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between px-3 py-2 text-left text-sm text-navy-600 hover:text-primary-600 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <service.icon className="h-3 w-3 text-primary-500" />
                              <span>{service.name}</span>
                            </div>
                            <span className="text-xs text-primary-600">{service.price}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-3 border-t border-gray-100 space-y-3">
                <div className="flex items-center space-x-2 px-3 text-sm">
                  <Phone className="h-4 w-4 text-primary-600" />
                  <span className="text-navy-700 font-medium">(905) 281-9054</span>
                </div>
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-md"
                  whileTap={{ scale: 0.98 }}
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 