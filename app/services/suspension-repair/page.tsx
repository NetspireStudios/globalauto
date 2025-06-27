import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function SuspensionRepairPage() {
  const serviceData = {
    serviceName: "Suspension Repair",
    iconName: "car",
    price: "$299.99",
    duration: "2-4 hours",
    warranty: "12 months",
    description: "Restore your vehicle's smooth ride and handling with our comprehensive suspension repair services. From shocks and struts to springs and bushings, we fix all suspension components.",
    heroImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewCount: 98,
    
    features: [
      {
        title: "Shock Absorber Service",
        description: "Complete shock absorber inspection, repair, and replacement for smooth rides."
      },
      {
        title: "Strut Replacement",
        description: "MacPherson strut and coil spring assembly service and replacement."
      },
      {
        title: "Spring Repair",
        description: "Coil spring and leaf spring inspection, repair, and replacement services."
      },
      {
        title: "Bushing Replacement",
        description: "Control arm, sway bar, and suspension bushing replacement and repair."
      },
      {
        title: "Ball Joint Service",
        description: "Upper and lower ball joint inspection, lubrication, and replacement."
      },
      {
        title: "Ride Height Adjustment",
        description: "Suspension geometry correction and ride height adjustment services."
      }
    ],
    
    included: [
      { item: "Complete suspension system inspection" },
      { item: "Shock and strut testing and replacement" },
      { item: "Spring and bushing examination" },
      { item: "Ball joint and control arm check" },
      { item: "Suspension alignment verification" },
      { item: "Road test and quality assurance" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 