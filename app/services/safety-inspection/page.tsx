import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function SafetyInspectionPage() {
  const serviceData = {
    serviceName: "MTO Safety Inspection",
    iconName: "check-circle",
    price: "$109.99",
    duration: "45-75 minutes",
    warranty: "N/A",
    description: "Get your official MTO safety certificate with our comprehensive inspection service. We check all safety-critical components to ensure your vehicle meets Ontario safety standards.",
    heroImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 234,
    
    features: [
      {
        title: "Official MTO Certification",
        description: "Licensed facility providing official Ministry of Transportation safety certificates."
      },
      {
        title: "Comprehensive Inspection",
        description: "Complete 36-point safety inspection covering all critical vehicle systems."
      },
      {
        title: "Brake System Check",
        description: "Thorough brake inspection including pads, rotors, lines, and fluid levels."
      },
      {
        title: "Lighting Inspection",
        description: "Complete lighting system check including headlights, taillights, and signals."
      },
      {
        title: "Steering & Suspension",
        description: "Detailed steering and suspension component inspection for safety compliance."
      },
      {
        title: "Same-Day Service",
        description: "Fast turnaround with most inspections completed within the same day."
      }
    ],
    
    included: [
      { item: "Complete 36-point safety inspection" },
      { item: "Brake system examination" },
      { item: "Steering and suspension check" },
      { item: "Lighting and electrical testing" },
      { item: "Tire and wheel inspection" },
      { item: "Official MTO safety certificate" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 