'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, DollarSign, Users, Award, Wrench, CheckCircle, Star, Phone, MapPin, Calendar, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  const mainFeatures = [
    {
      icon: Users,
      title: 'Expert Professionals',
      description: 'Our ASE-certified technicians have over 60 years of combined experience and undergo continuous training to stay current with the latest automotive technologies.',
      highlight: '60+ Years Experience'
    },
    {
      icon: Shield,
      title: 'Guaranteed Service',
      description: 'We stand behind our work with comprehensive warranties and guarantee all repairs. Your satisfaction is our top priority, and we ensure quality service every time.',
      highlight: '100% Satisfaction Guarantee'
    },
    {
      icon: Wrench,
      title: 'State-of-the-Art Equipment',
      description: 'Our facility features the latest diagnostic tools and equipment to service all makes and models, from classic cars to the newest hybrid and electric vehicles.',
      highlight: 'Latest Technology'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. We provide detailed estimates upfront and offer competitive pricing with access to both OEM and quality aftermarket parts.',
      highlight: 'No Hidden Fees'
    }
  ]

  const additionalBenefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most repairs completed same day or next day'
    },
    {
      icon: CheckCircle,
      title: 'Quality Parts',
      description: 'OEM and premium aftermarket parts with warranties'
    },
    {
      icon: Star,
      title: '4.8/5 Rating',
      description: 'Consistently rated excellent by our customers'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Emergency roadside assistance available'
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Easy access with ample parking in Toronto'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Online booking and extended hours available'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Global Auto Repair saved me hundreds on my brake repair. Honest, reliable, and professional service!',
      rating: 5,
      service: 'Brake Repair'
    },
    {
      name: 'Mike Chen',
      text: 'Been coming here for 5 years. They always explain everything clearly and never try to upsell unnecessary services.',
      rating: 5,
      service: 'Regular Maintenance'
    },
    {
      name: 'Jennifer Davis',
      text: 'Fast, fair, and friendly. They diagnosed my car issue quickly and had me back on the road the same day.',
      rating: 5,
      service: 'Engine Diagnostics'
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(83, 109, 226, 0.15) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-400/10 to-primary-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/20"
          >
            <Award className="h-4 w-4 mr-2" />
            Trusted by 5000+ Customers Since 1964
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Why Choose <span className="text-primary-400 font-medium">Global Auto Repair</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For over six decades, we've been Toronto's trusted automotive repair center. 
            Our commitment to excellence, honest service, and customer satisfaction has made us 
            the go-to choice for thousands of satisfied customers.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <span className="text-primary-400 text-sm font-medium bg-primary-500/10 px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Additional Benefits You'll <span className="text-primary-400 font-medium">Love</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <benefit.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-light text-white text-center mb-12">
            What Our <span className="text-primary-400 font-medium">Customers Say</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-primary-400 text-sm">{testimonial.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600/20 to-primary-500/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Global Auto Repair for all their automotive needs. 
            Book your appointment today and discover why we're Toronto's #1 choice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (416) 533-3433
            </motion.button>
            
            <motion.button
              className="border-2 border-primary-400 text-primary-300 px-8 py-3 rounded-xl font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="h-5 w-5 mr-2 inline" />
              Schedule Online
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 