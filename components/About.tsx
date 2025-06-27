'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award, Heart } from 'lucide-react'

const About = () => {
  const features = [
    { icon: Clock, title: '60+ Years', subtitle: 'Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Expert Team', subtitle: 'Certified Technicians', color: 'from-primary-500 to-primary-600' },
    { icon: Award, title: 'Quality Service', subtitle: 'Guaranteed Work', color: 'from-primary-400 to-primary-500' },
    { icon: Heart, title: 'Customer Care', subtitle: 'Family Business', color: 'from-primary-600 to-primary-700' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              About Our Company
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 mb-6">
              About <span className="text-primary-500 font-medium">Global Auto Repair</span>
            </h2>

            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              For over 60 years, Global Auto Repair has been Mississauga's trusted automotive repair center. 
              We pride ourselves on honest service, a friendly environment, and unmatched expertise 
              in automotive care. Our commitment to excellence has made us a cornerstone of the community.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                  className="flex items-center space-x-3 bg-gradient-to-r from-slate-50 to-primary-50 p-4 rounded-xl shadow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} shadow-sm`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="text-sm text-navy-600">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Auto Repair Shop"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="h-6 w-6 text-primary-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Heart className="h-6 w-6 text-primary-500" />
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-4 right-4 w-48 h-48 bg-gradient-to-br from-primary-100/20 to-primary-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-br from-primary-50/20 to-primary-100/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-10 text-white shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Trusted by Thousands of Customers
            </h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of the Mississauga community for over six decades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '15,000+', label: 'Cars Serviced' },
              { number: '99%', label: 'Customer Satisfaction' },
              { number: '25+', label: 'Expert Technicians' },
              { number: '60+', label: 'Years in Business' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-primary-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 