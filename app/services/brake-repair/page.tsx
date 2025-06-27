'use client'

import React from 'react'
import ServicePageTemplate from '../../../components/ServicePageTemplate'

const BrakeRepairPage = () => {
  const features = [
    {
      title: 'Safety-First Approach',
      description: 'Your safety is our priority. We thoroughly inspect your entire brake system to ensure optimal stopping power and reliability.'
    },
    {
      title: 'Quality Parts & Materials',
      description: 'We use only premium brake pads, rotors, and fluid from trusted manufacturers to ensure long-lasting performance.'
    },
    {
      title: 'Expert Technicians',
      description: 'Our ASE-certified technicians have decades of experience with all brake system types and vehicle makes.'
    },
    {
      title: 'Comprehensive Inspection',
      description: 'Every brake service includes a complete inspection of pads, rotors, calipers, brake lines, and fluid condition.'
    },
    {
      title: 'Lifetime Warranty',
      description: 'We stand behind our brake work with a comprehensive lifetime warranty on parts and labor for your peace of mind.'
    },
    {
      title: 'Free Brake Check',
      description: 'Get a complimentary brake system inspection to catch potential issues before they become safety concerns.'
    }
  ]

  const included = [
    { item: 'Complete brake system inspection' },
    { item: 'Premium brake pad installation' },
    { item: 'Rotor resurfacing or replacement' },
    { item: 'Brake fluid replacement' },
    { item: 'Caliper inspection and service' },
    { item: 'Brake line inspection' },
    { item: 'Emergency brake adjustment' },
    { item: 'Road test for proper operation' },
    { item: 'Brake warning light diagnosis' },
    { item: 'Detailed service report' },
    { item: 'Safety certification' },
    { item: 'Post-service follow-up' }
  ]

  return (
    <ServicePageTemplate
      serviceName="Brake Repair & Service"
      iconName="shield"
      price="$149.99"
      duration="90 min"
      warranty="Lifetime"
      description="Your safety depends on reliable brakes. Our comprehensive brake service includes inspection, repair, and replacement of all brake system components. We use only the highest quality parts and our work is backed by our lifetime warranty. Don't compromise on safety - trust our experts."
      heroImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90"
      rating={4.8}
      reviewCount={289}
      features={features}
      included={included}
      ctaTitle="Ready to Ensure Your Safety?"
      ctaDescription="Don't take chances with your brakes. Schedule your brake inspection today and drive with confidence knowing your vehicle will stop when you need it to."
    />
  )
}

export default BrakeRepairPage 