'use client'

import { motion } from 'framer-motion'
import { 
  Wrench, 
  Car, 
  Shield, 
  Zap, 
  Settings, 
  Gauge,
  Droplets,
  CheckCircle,
  Circle,
  AlertTriangle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Synthetic Oil Change',
      shortDescription: 'Premium synthetic oil for optimal engine performance',
      description: 'Our synthetic oil change service includes premium quality synthetic oil that provides superior engine protection, improved fuel efficiency, and extended service intervals. We also check and top off all fluids, inspect filters, and perform a complimentary 21-point inspection.',
      items: ['Premium Synthetic Oil', 'New Oil Filter', 'Fluid Top-off', '21-Point Inspection', 'Disposal of Old Oil'],
      price: 'Starting at $79.99',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Droplets,
      title: 'Fluid Changes',
      shortDescription: 'Complete fluid maintenance for all vehicle systems',
      description: 'Keep your vehicle running smoothly with our comprehensive fluid change services. We handle brake fluid, coolant, transmission fluid, power steering fluid, and differential fluid changes using manufacturer-recommended fluids.',
      items: ['Brake Fluid Flush', 'Coolant System Flush', 'Transmission Service', 'Power Steering Flush', 'Differential Service'],
      price: 'Prices vary by service',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: Zap,
      title: 'AC Diagnostics & Repairs',
      shortDescription: 'Stay cool with expert climate control services',
      description: 'Our certified technicians diagnose and repair all air conditioning issues. From refrigerant recharges to compressor replacements, we ensure your climate control system works efficiently year-round.',
      items: ['AC System Diagnostics', 'Refrigerant Recharge', 'Compressor Repair', 'Evaporator Service', 'Climate Control Repair'],
      price: 'Free diagnostics with repair',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100'
    },
    {
      icon: Shield,
      title: 'Brake Repair',
      shortDescription: 'Safety-first brake system services',
      description: 'Your safety is our priority. We provide comprehensive brake services including pad replacement, rotor resurfacing or replacement, brake fluid flushes, and complete brake system overhauls using quality parts.',
      items: ['Brake Pad Replacement', 'Rotor Service', 'Brake Line Repair', 'Caliper Service', 'ABS Diagnostics'],
      price: 'Starting at $149.99/axle',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: Settings,
      title: 'Exhaust Repair',
      shortDescription: 'Complete exhaust system services',
      description: 'From muffler replacements to catalytic converter repairs, we handle all exhaust system issues. Our services reduce emissions, improve fuel efficiency, and eliminate annoying exhaust noises.',
      items: ['Muffler Replacement', 'Catalytic Converter', 'Exhaust Pipe Repair', 'O2 Sensor Service', 'Emissions Testing'],
      price: 'Free exhaust inspection',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: Car,
      title: 'Suspension Repair',
      shortDescription: 'Smooth ride guaranteed',
      description: 'Experience a comfortable ride with our suspension services. We repair and replace shocks, struts, springs, and all suspension components to restore your vehicle\'s handling and comfort.',
      items: ['Shock Absorbers', 'Strut Replacement', 'Spring Service', 'Ball Joint Repair', 'Sway Bar Links'],
      price: 'Starting at $299.99',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: CheckCircle,
      title: 'MTO Safety Inspection',
      shortDescription: 'Ontario safety standards certification',
      description: 'Our licensed technicians perform thorough MTO safety inspections required for vehicle transfers and registrations. We check all safety components and provide detailed reports of any required repairs.',
      items: ['Complete Safety Check', 'Brake System Test', 'Suspension Inspection', 'Emissions Test', 'Safety Certificate'],
      price: '$109.99 + HST',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Circle,
      title: 'Tires & Wheels',
      shortDescription: 'Complete tire services and wheel care',
      description: 'From tire repairs to complete replacements, we offer comprehensive tire services. We carry all major brands and provide professional installation, balancing, and alignment services.',
      items: ['Tire Installation', 'Tire Rotation', 'Wheel Balancing', 'Tire Repair', 'Seasonal Changeover'],
      price: 'Starting at $25/tire',
      color: 'from-slate-600 to-slate-700',
      bgColor: 'from-slate-50 to-slate-100'
    },
    {
      icon: Zap,
      title: 'Electrical Diagnostics',
      shortDescription: 'Modern vehicle electrical system experts',
      description: 'Our advanced diagnostic equipment and experienced technicians can solve any electrical issue. From battery problems to complex computer diagnostics, we have you covered.',
      items: ['Computer Diagnostics', 'Battery Testing', 'Alternator Service', 'Starter Repair', 'Wiring Repairs'],
      price: 'Diagnostics from $89.99',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: Gauge,
      title: 'Wheel Alignment',
      shortDescription: 'Precision alignment for better handling',
      description: 'Proper wheel alignment improves tire life, fuel efficiency, and vehicle handling. Our computerized alignment system ensures your wheels are perfectly aligned to manufacturer specifications.',
      items: ['4-Wheel Alignment', 'Front End Alignment', 'Camber Adjustment', 'Toe Adjustment', 'Steering Angle Reset'],
      price: 'Starting at $99.99',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: Shield,
      title: 'Undercoating',
      shortDescription: 'Protect your investment from rust',
      description: 'Protect your vehicle from Ontario\'s harsh winters with our professional undercoating service. We apply premium rust protection to prevent corrosion and extend your vehicle\'s life.',
      items: ['Rust Protection', 'Undercarriage Coating', 'Wheel Well Treatment', 'Frame Protection', 'Annual Touch-ups'],
      price: 'Starting at $149.99',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Services',
      shortDescription: '24/7 roadside assistance available',
      description: 'When you need help most, we\'re here for you. Our emergency services include towing, jump starts, lockout assistance, and emergency repairs to get you back on the road quickly.',
      items: ['24/7 Towing', 'Jump Start Service', 'Lockout Assistance', 'Emergency Repairs', 'Roadside Support'],
      price: 'Call for rates',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-50 to-rose-100'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Wrench className="h-4 w-4 mr-2" />
            Our Professional Services
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 mb-4">
            Comprehensive <span className="text-primary-500 font-medium">Auto Care</span>
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Global Auto Repair provides comprehensive automotive services to keep your vehicle running smoothly. 
            From routine maintenance to complex repairs, our certified technicians have you covered.
          </p>
        </motion.div>

        {/* Services Grid - All services displayed as squares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br ${service.bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div 
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4 shadow-md`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-6 w-6 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-navy-600 mb-4 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Price */}
              <div className="text-sm font-semibold text-primary-600 mb-4">
                {service.price}
              </div>

              {/* Hover Details */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                <motion.div 
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4 shadow-md`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-navy-700 mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-navy-600">{item}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full mt-4 bg-gradient-to-r ${service.color} text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Book This Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Save time and money with our service packages. Contact us to discuss your vehicle's needs 
              and get a customized service plan with special package pricing.
            </p>
            <motion.button
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get Custom Package Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 