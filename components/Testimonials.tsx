'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Howard Chavez',
      role: 'Entrepreneur',
      content: 'Always a relaxing feeling knowing my car is in good hands. Never feel any pressure, anxiety or worries with Hensall Auto',
      rating: 5
    },
    {
      name: 'Lucas Elliot',
      role: 'Realtor',
      content: 'Nice staff - low pressure. Doesn\'t feel like they are trying to get more money out of me which is rare these days. Thank you Hensall Auto',
      rating: 5
    },
    {
      name: 'Dr. Shripal Shah',
      role: 'Doctor',
      content: 'Prompt and efficient service was provided during my recent visit for a vehicle safety inspection for my Toyota. I was able to complete the process within 30 minutes as promised.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-navy-900 mb-4">
            What Our <span className="text-primary-500 font-medium">Customers Say</span>
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            See what our customers have to say about their experiences with us! 
            Read real reviews from satisfied drivers who trust our expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
            >
              <Quote className="h-8 w-8 text-primary-500 mb-4" />
              
              <p className="text-navy-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div>
                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                <p className="text-sm text-navy-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 