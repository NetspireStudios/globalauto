import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function ACServicePage() {
  const serviceData = {
    serviceName: "AC Diagnostics & Repair",
    iconName: "zap",
    price: "Free Diagnostic",
    duration: "1-3 hours",
    warranty: "12 months",
    description: "Stay cool and comfortable with our comprehensive air conditioning diagnostic and repair services. From refrigerant leaks to compressor issues, we diagnose and fix all AC problems.",
    heroImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewCount: 89,
    
    features: [
      {
        title: "Free AC Diagnostics",
        description: "Comprehensive diagnostic testing to identify AC system issues at no charge."
      },
      {
        title: "Refrigerant Service",
        description: "R-134a and R-1234yf refrigerant recharge and leak detection services."
      },
      {
        title: "Compressor Repair",
        description: "Expert compressor diagnosis, repair, and replacement for optimal cooling."
      },
      {
        title: "Evaporator Service",
        description: "Evaporator coil cleaning and replacement for maximum efficiency."
      },
      {
        title: "Condenser Maintenance",
        description: "Condenser cleaning and repair to ensure proper heat dissipation."
      },
      {
        title: "Climate Control",
        description: "Electronic climate control system diagnosis and calibration."
      }
    ],
    
    included: [
      { item: "Complete AC system diagnostic scan" },
      { item: "Refrigerant level check and top-up" },
      { item: "Compressor and clutch inspection" },
      { item: "Evaporator and condenser examination" },
      { item: "Cabin air filter replacement" },
      { item: "System pressure and leak testing" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 