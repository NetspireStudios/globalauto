'use client'

import React from 'react'
import { Droplets } from 'lucide-react'
import ServicePageTemplate from '../../../components/ServicePageTemplate'

const OilChangePage = () => {
  const features = [
    {
      title: 'Premium Synthetic Oil',
      description: 'We use only the highest quality synthetic oils that provide maximum engine protection and performance in all weather conditions.'
    },
    {
      title: 'Extended Engine Life',
      description: 'Regular oil changes with quality synthetic oil significantly extend your engine life and improve overall vehicle reliability.'
    },
    {
      title: 'Better Fuel Efficiency',
      description: 'Clean oil reduces engine friction, resulting in improved fuel economy and smoother operation of your vehicle.'
    },
    {
      title: 'Free Multi-Point Inspection',
      description: 'Every oil change includes a comprehensive inspection of your vehicle to catch potential issues before they become major problems.'
    },
    {
      title: '24-Month Warranty',
      description: 'We stand behind our work with a comprehensive 24-month warranty on all synthetic oil change services.'
    },
    {
      title: 'Express Service',
      description: 'Get back on the road quickly with our efficient 30-minute or less oil change service without compromising quality.'
    }
  ]

  const included = [
    { item: 'Up to 5 quarts of premium synthetic oil' },
    { item: 'New oil filter installation' },
    { item: 'Comprehensive fluid level check' },
    { item: 'Battery and charging system test' },
    { item: 'Tire pressure inspection' },
    { item: 'Visual brake inspection' },
    { item: 'Belts and hoses inspection' },
    { item: 'Air filter condition check' },
    { item: 'Windshield washer fluid top-up' },
    { item: 'Service reminder sticker' },
    { item: 'Digital service report' },
    { item: 'Environmental disposal of old oil' }
  ]

  return (
    <ServicePageTemplate
      serviceName="Synthetic Oil Change"
      icon={Droplets}
      price="$79.99"
      duration="30 min"
      warranty="24 mo"
      description="Keep your engine running smoothly with our premium synthetic oil change service. Our expert technicians use only the highest quality synthetic oils and filters to ensure maximum engine protection and performance. More than just an oil change, we provide a comprehensive vehicle health check."
      heroImage="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90"
      rating={4.9}
      reviewCount={324}
      features={features}
      included={included}
      ctaTitle="Ready to Book Your Oil Change?"
      ctaDescription="Don't wait until it's too late. Schedule your synthetic oil change today and keep your engine running like new. Fast, reliable service you can trust."
    />
  )
}

export default OilChangePage 