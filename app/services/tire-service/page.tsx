import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function TireServicePage() {
  const serviceData = {
    serviceName: "Tires & Wheels",
    iconName: "circle",
    price: "$25/tire",
    duration: "30-60 minutes",
    warranty: "6 months",
    description: "Keep your vehicle safe and performing at its best with our comprehensive tire and wheel services. From new tire installation to wheel balancing and rotation, we ensure optimal performance and safety.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 127,
    
    features: [
      {
        title: "Professional Installation",
        description: "Expert mounting and balancing using state-of-the-art equipment for optimal performance."
      },
      {
        title: "Quality Tire Brands",
        description: "We carry major brands including Michelin, Bridgestone, and Goodyear for reliability."
      },
      {
        title: "TPMS Service",
        description: "Complete tire pressure monitoring system service and reset included."
      },
      {
        title: "Wheel Balancing",
        description: "Precision wheel balancing to eliminate vibration and ensure smooth driving."
      },
      {
        title: "Alignment Check",
        description: "Complimentary alignment check with every tire installation service."
      },
      {
        title: "Eco-Friendly Disposal",
        description: "Responsible tire disposal and recycling included in our service."
      }
    ],
    
    included: [
      { item: "New tire installation and mounting" },
      { item: "Wheel balancing and alignment check" },
      { item: "Tire rotation and pressure check" },
      { item: "Wheel rim inspection and cleaning" },
      { item: "TPMS sensor service and reset" },
      { item: "Old tire disposal and recycling" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 