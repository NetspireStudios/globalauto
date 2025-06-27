# Hensall Auto - Modern Automotive Website

A stunning, modern automotive repair website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, responsive design, and professional UI components inspired by Kokonut UI.

## 🚀 Features

### Modern Design
- **Clean White/Blue/Navy Color Scheme**: Professional automotive branding with `#536DE2` primary blue
- **Kokonut UI Inspired Components**: Advanced glassmorphism effects and modern card designs
- **Grid Pattern Backgrounds**: Subtle dot grid patterns for visual depth
- **Responsive Design**: Mobile-first approach with seamless responsive layouts

### Advanced Animations
- **Framer Motion Integration**: Buttery smooth animations throughout
- **Scroll-triggered Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive hover states on cards, buttons, and icons
- **Smooth Scrolling**: Navigation with smooth scroll behavior

### Professional Navigation
- **Fixed Header**: Sticky navigation with blur backdrop effect
- **Icon Navigation**: Each navigation item includes relevant Lucide React icons
- **Mobile-Responsive**: Collapsible mobile menu with smooth animations
- **Smooth Scrolling**: Click navigation items to smoothly scroll to sections

## 📁 Project Structure

```
carglobal/
├── app/
│   ├── globals.css          # Global styles with Tailwind and custom CSS
│   ├── layout.tsx           # Root layout with metadata and HTML structure
│   └── page.tsx             # Main page combining all components
├── components/
│   ├── Header.tsx           # Fixed navigation header with icons
│   ├── Hero.tsx             # Stunning hero section with stats
│   ├── About.tsx            # Company information and credentials
│   ├── Services.tsx         # Comprehensive service listings
│   ├── WhyChooseUs.tsx      # Key benefits and differentiators
│   ├── Testimonials.tsx     # Customer reviews and ratings
│   ├── Contact.tsx          # Contact form and business information
│   └── Footer.tsx           # Site footer with service links
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration with custom colors
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration for Tailwind
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#536DE2` - Main brand color for buttons, highlights, and accents
- **Navy Variants**: Multiple shades from `#f8fafc` to `#020617` for text and backgrounds
- **White Base**: Clean white backgrounds for professional appearance
- **Gray Accents**: Subtle grays for borders, secondary text, and hover states

### Typography
- **Font**: Inter - Modern, clean, and highly readable
- **Weight Hierarchy**: Light (300) for headings, Regular (400) for body, Semibold (600) for emphasis
- **Responsive Sizing**: Scales from mobile to desktop with proper line heights

### Animation System
- **Duration**: 0.3s to 0.8s for most animations
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, professional motion
- **Delays**: Staggered animations (0.1s increments) for sequential reveals
- **Viewport Triggers**: Animations trigger once when elements enter viewport

## 🔧 Components Deep Dive

### Header Component (`components/Header.tsx`)
**Lines 1-156**: Complete navigation system with responsive design

Key Features:
- **Fixed Positioning**: Stays at top with blur backdrop when scrolled
- **Logo with Icon**: Wrench icon in branded blue container
- **Navigation Items**: Home, About, Services, Why Choose Us, Contact - all with icons
- **Contact Info**: Phone number and "Book Now" CTA button
- **Mobile Menu**: Collapsible menu with smooth animations
- **Scroll Detection**: Header style changes based on scroll position

Navigation Structure:
```typescript
const navigation = [
  { name: 'Home', href: '#home', icon: Car },
  { name: 'About', href: '#about', icon: Users },
  { name: 'Services', href: '#services', icon: Settings },
  { name: 'Why Choose Us', href: '#why-choose-us', icon: Shield },
  { name: 'Contact', href: '#contact', icon: Phone },
]
```

### Hero Section (`components/Hero.tsx`)
**Lines 1-81**: Stunning landing section with animated statistics

Key Features:
- **Gradient Background**: Light blue to indigo gradient with dot pattern overlay
- **Large Typography**: Thin font weights with "We Care About Your Car" messaging
- **Statistics Grid**: 60+ Years Experience, 5000+ Cars Serviced, 4.8 Rating, 100% Satisfaction
- **Hero Image**: Professional automotive repair image with gradient overlay
- **CTA Buttons**: "Book Appointment" and "View Services" with hover animations

Statistics Display:
```typescript
const stats = [
  { number: '60+', label: 'Years Experience', icon: Clock },
  { number: '5000+', label: 'Cars Serviced', icon: Car },
  { number: '4.8', label: 'Average Rating', icon: Star },
  { number: '100%', label: 'Satisfaction', icon: Shield },
]
```

### Services Section (`components/Services.tsx`)
**Lines 1-182**: Comprehensive automotive service listings

**This is the CORE section as requested** - clearly lists all services so customers know exactly what's available:

Service Categories:
1. **Oil Change & Fluids** (Blue gradient)
   - Synthetic Oil Change
   - Brake Fluid Flush
   - Coolant Flush
   - Transmission Fluid
   - Power Steering Fluid

2. **Brake Services** (Red gradient)
   - Brake Repair
   - Brake Inspection
   - Brake Pad Replacement
   - Brake Rotor Service
   - Brake Line Repair

3. **Tires & Wheels** (Gray gradient)
   - Tire Repair
   - Tire Rotation
   - Tire Balancing
   - Tire Mount & Balance
   - Wheel Alignment

4. **Engine & Performance** (Orange gradient)
   - Engine Diagnostics
   - Performance Tuning
   - Electrical Diagnostics
   - Computer Diagnostics
   - Check Engine Light

5. **Suspension & Exhaust** (Purple gradient)
   - Suspension Repair
   - Exhaust Repair
   - Shock Absorbers
   - Strut Replacement
   - Undercoating

6. **Safety & Inspection** (Green gradient)
   - MTO Safety Inspection
   - Pre-Purchase Inspection
   - Annual Safety Check
   - Emission Testing
   - Vehicle Certification

7. **AC & Climate** (Cyan gradient)
   - AC Diagnostics
   - AC Repair
   - Climate Control
   - Refrigerant Service
   - Heater Repair

8. **Emergency Services** (Yellow gradient)
   - Emergency Repair
   - Roadside Assistance
   - Towing Service
   - Battery Jump Start
   - 24/7 Support

### About Section (`components/About.tsx`)
**Lines 1-67**: Company background and credentials

Features:
- **Two-column Layout**: Text content with professional image
- **Company Stats**: 60+ Years Experience, Expert Team, Quality Service, Customer Care
- **Professional Image**: Auto repair shop interior

### Why Choose Us (`components/WhyChooseUs.tsx`)
**Lines 1-70**: Key differentiators on dark navy background

Four Main Benefits:
1. **Expert Professionals**: Licensed technicians with experience
2. **Experience & Skills**: Latest tools and equipment
3. **Guaranteed Service**: Quality and honest service promise
4. **Affordable Pricing**: Access to original and aftermarket parts

### Testimonials (`components/Testimonials.tsx`)
**Lines 1-73**: Real customer reviews with ratings

Customer Reviews:
- **Howard Chavez** (Entrepreneur): "Always a relaxing feeling knowing my car is in good hands..."
- **Lucas Elliot** (Realtor): "Nice staff - low pressure. Doesn't feel like they are trying to get more money..."
- **Dr. Shripal Shah** (Doctor): "Prompt and efficient service... completed within 30 minutes as promised"

### Contact Section (`components/Contact.tsx`)
**Lines 1-125**: Contact information and form

Contact Methods:
- **Phone**: (905) 281-9054 with emergency availability
- **Address**: 469 Hensall Cir, Mississauga, ON L5A 3P4, Canada
- **Hours**: Mon-Fri 9AM-7PM, Sat 9AM-6PM, Sun Closed
- **Email**: info@hensallauto.com
- **Contact Form**: Name, email, phone, message with validation styling

### Footer (`components/Footer.tsx`)
**Lines 1-85**: Comprehensive site footer

Footer Sections:
- **Brand Info**: Logo and company description
- **Service Lists**: Two columns of popular services
- **Contact Info**: Address, phone, email with icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- NPM or Yarn package manager

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) to view the website

## 🛠 Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations and transitions
- **Lucide React**: Beautiful SVG icons
- **Inter Font**: Modern typography

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grids**: Responsive grid layouts that adapt to screen size
- **Touch-Friendly**: Large touch targets for mobile interaction

## 🎯 Key Business Benefits

1. **Clear Service Visibility**: Customers can immediately see all available services
2. **Professional Appearance**: Modern design builds trust and credibility
3. **Mobile Optimized**: Captures mobile traffic effectively
4. **Fast Loading**: Optimized images and code for quick load times
5. **SEO Ready**: Proper meta tags and semantic HTML structure
6. **Contact Conversion**: Multiple clear paths to contact the business

## 🔄 Future Enhancements

- Online booking system integration
- Service pricing calculator
- Customer portal for service history
- Google Maps integration
- Live chat functionality
- Blog section for automotive tips

---

**Built with modern web technologies for Hensall Auto - Your trusted automotive repair center in Mississauga since 1964.** 