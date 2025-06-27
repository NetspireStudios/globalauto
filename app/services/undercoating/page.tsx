import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function UndercoatingPage() {
  const serviceData = {
    serviceName: "Undercoating",
    iconName: "shield",
    price: "$149.99",
    duration: "2-3 hours",
    warranty: "12 months",
    description: "Protect your vehicle from rust and corrosion with our professional undercoating service. Our high-quality protective coating shields your vehicle's undercarriage from salt, moisture, and road debris.",
    heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviewCount: 67,
    
    features: [
      {
        title: "Rust Prevention",
        description: "Advanced protective coating that prevents rust and corrosion formation."
      },
      {
        title: "Salt Protection",
        description: "Shields your vehicle from road salt damage during winter months."
      },
      {
        title: "Professional Application",
        description: "Expert application using specialized equipment for complete coverage."
      },
      {
        title: "High-Quality Materials",
        description: "Premium undercoating materials designed for long-lasting protection."
      },
      {
        title: "Thorough Preparation",
        description: "Complete undercarriage cleaning and preparation before application."
      },
      {
        title: "Extended Vehicle Life",
        description: "Significantly extends vehicle lifespan by preventing structural damage."
      }
    ],
    
    included: [
      { item: "Complete undercarriage cleaning and inspection" },
      { item: "Professional undercoating application" },
      { item: "Wheel well and rocker panel protection" },
      { item: "Frame and suspension component coating" },
      { item: "Quality assurance inspection" },
      { item: "Annual reapplication recommendations" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 