import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function WheelAlignmentPage() {
  const serviceData = {
    serviceName: "Wheel Alignment",
    iconName: "gauge",
    price: "$99.99",
    duration: "60-90 minutes",
    warranty: "6 months",
    description: "Precision wheel alignment service to ensure optimal tire wear, fuel efficiency, and vehicle handling. Our computerized alignment equipment provides accurate adjustments for all vehicle types.",
    heroImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 142,
    
    features: [
      {
        title: "Computerized Alignment",
        description: "State-of-the-art computerized alignment equipment for precise measurements and adjustments."
      },
      {
        title: "Four-Wheel Alignment",
        description: "Complete four-wheel alignment service for optimal vehicle tracking and stability."
      },
      {
        title: "Suspension Inspection",
        description: "Comprehensive suspension component inspection before alignment adjustments."
      },
      {
        title: "Tire Wear Analysis",
        description: "Detailed tire wear pattern analysis to identify alignment and suspension issues."
      },
      {
        title: "Road Test Included",
        description: "Post-alignment road test to verify proper steering and handling characteristics."
      },
      {
        title: "Alignment Report",
        description: "Before and after alignment specifications report for your records."
      }
    ],
    
    included: [
      { item: "Pre-alignment suspension inspection" },
      { item: "Computerized wheel alignment measurement" },
      { item: "Camber, caster, and toe adjustments" },
      { item: "Steering wheel centering" },
      { item: "Post-alignment road test" },
      { item: "Detailed alignment specifications report" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 