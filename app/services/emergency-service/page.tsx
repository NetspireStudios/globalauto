import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function EmergencyServicePage() {
  const serviceData = {
    serviceName: "Emergency Services",
    iconName: "alert-triangle",
    price: "Call for rates",
    duration: "30-120 minutes",
    warranty: "3 months",
    description: "24/7 emergency automotive services when you need help most. From roadside assistance to urgent repairs, we're here to get you back on the road safely and quickly.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 89,
    
    features: [
      {
        title: "24/7 Availability",
        description: "Round-the-clock emergency service available 365 days a year."
      },
      {
        title: "Roadside Assistance",
        description: "On-location emergency repairs and assistance wherever you are."
      },
      {
        title: "Battery Service",
        description: "Emergency battery testing, charging, and replacement services."
      },
      {
        title: "Lockout Service",
        description: "Professional vehicle lockout assistance without damage to your vehicle."
      },
      {
        title: "Towing Service",
        description: "Safe and reliable towing to our facility or location of your choice."
      },
      {
        title: "Rapid Response",
        description: "Fast response times to minimize your wait and get you moving."
      }
    ],
    
    included: [
      { item: "Emergency diagnostic assessment" },
      { item: "On-site basic repairs when possible" },
      { item: "Battery jump-start and testing" },
      { item: "Flat tire assistance and replacement" },
      { item: "Emergency towing if required" },
      { item: "24/7 phone support and dispatch" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 