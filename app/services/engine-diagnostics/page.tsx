import ServicePageTemplate from '../../../components/ServicePageTemplate'

export default function EngineDiagnosticsPage() {
  const serviceData = {
    serviceName: "Engine Diagnostics",
    iconName: "settings",
    price: "$89.99",
    duration: "45-90 minutes",
    warranty: "6 months",
    description: "Advanced computer diagnostics to identify engine issues quickly and accurately. Our state-of-the-art diagnostic equipment pinpoints problems to save you time and money.",
    heroImage: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 156,
    
    features: [
      {
        title: "OBD-II Scanning",
        description: "Advanced OBD-II diagnostic scanning to read all engine error codes and data."
      },
      {
        title: "Live Data Analysis",
        description: "Real-time engine parameter monitoring and analysis for accurate diagnosis."
      },
      {
        title: "Emissions Testing",
        description: "Comprehensive emissions system diagnostics and troubleshooting."
      },
      {
        title: "Sensor Diagnostics",
        description: "Complete testing of oxygen sensors, MAF, MAP, and other critical sensors."
      },
      {
        title: "Performance Analysis",
        description: "Engine performance evaluation and optimization recommendations."
      },
      {
        title: "Detailed Reporting",
        description: "Comprehensive diagnostic report with findings and repair recommendations."
      }
    ],
    
    included: [
      { item: "Complete engine diagnostic scan" },
      { item: "Error code reading and interpretation" },
      { item: "Live data stream analysis" },
      { item: "Sensor functionality testing" },
      { item: "Emissions system check" },
      { item: "Detailed diagnostic report" }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
} 