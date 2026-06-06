export const company = {
  name: 'Codewave Solutions',
  tagline: 'Odoo ERP · POS · LMS',
  domain: 'codewavesolutions.lk',
  email: 'info@codewavesolutions.lk',
  phone: '+94 77 123 4567',
  whatsapp: '+94771234567',
  address: 'Colombo, Sri Lanka',
  facebook: 'https://www.facebook.com/share/14gdQ51X1BX/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/company/103806581',
  description:
    'We deliver fully customized Odoo ERP, Nexus Retail POS, and E- ඉස්කෝලේ LMS — built for retail shops, schools, tuition centres, and organizations across Sri Lanka.',
}

/** Nexus Retail POS — matches logo: lavender/violet → royal blue */
export const nexusBrand = {
  gradient: 'from-[#C4B5FD] via-[#8B5CF6] to-[#2563EB]',
  gradientBg: 'bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#2563EB]',
  gradientSoft: 'from-violet-400/20 via-violet-600/15 to-blue-600/20',
  text: 'text-violet-600',
  textHover: 'hover:text-blue-700',
  border: 'border-violet-300/40',
  glow: 'shadow-violet-500/25',
}

export const products = {
  pos: {
    id: 'nexus-retail',
    name: 'Nexus Retail',
    shortName: 'Nexus',
    tagline: 'Point of Sale',
    category: 'Retail POS Product',
    badge: 'Flagship POS',
    description:
      'Our signature retail POS — lightning-fast checkout, offline-ready billing, inventory sync, and a polished interface your cashiers will love.',
    logo: '/images/nexus-retail-logo.png',
    logoType: 'image',
    path: '/odoo-erp',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    accentGradient: 'from-[#A78BFA] via-[#7C3AED] to-[#2563EB]',
    logoBg: 'bg-white border border-violet-200/70 shadow-inner shadow-violet-200/40 min-w-[200px]',
    badgeClass: 'bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800',
    labelClass: 'bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent',
    linkClass: 'text-violet-700 hover:text-blue-800',
    dotClass: 'bg-gradient-to-r from-violet-500 to-blue-600',
    imageOverlay: 'from-violet-100/80 via-white/20 to-transparent',
    highlights: [
      'Ultra-fast checkout UI',
      'Offline POS with auto-sync',
      'Barcode, discounts & receipts',
      'Multi-branch retail ready',
    ],
  },
  lms: {
    id: 'e-iskole',
    name: 'E- ඉස්කෝලේ',
    shortName: 'E- ඉස්කෝලේ',
    tagline: 'Learning Management System',
    category: 'Education Product',
    badge: 'Flagship LMS',
    description:
      'Sri Lanka\'s modern digital school platform — courses, online exams, attendance, fees, and parent portals in Sinhala, Tamil, and English.',
    logo: '/images/e-iskole-logo.svg',
    logoType: 'svg',
    path: '/lms',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    accentGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    logoBg: 'bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 min-w-[200px]',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    labelClass: 'text-emerald-600',
    linkClass: 'text-emerald-700 hover:text-emerald-900',
    dotClass: 'bg-emerald-500',
    imageOverlay: 'from-emerald-100/70 via-white/20 to-transparent',
    highlights: [
      'School & tuition ready',
      'Online exams & grading',
      'Parent & student portals',
      'Sinhala / Tamil / English',
    ],
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Nexus Retail', path: '/odoo-erp' },
  { label: 'E- ඉස්කෝලේ', path: '/lms' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
]

export const services = [
  {
    id: 'odoo-erp',
    title: 'Custom Odoo ERP',
    product: 'Powered by Nexus Retail',
    description:
      'End-to-end Odoo implementation with our Nexus Retail POS — inventory, accounting, HR, and multi-branch management in one platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    path: '/odoo-erp',
    features: ['Nexus POS', 'Inventory & Accounting', 'Multi-branch Support', 'Custom Workflows'],
  },
  {
    id: 'custom-ui',
    title: 'Fast Process UI',
    product: 'Nexus Retail Interface',
    description:
      'Purpose-built retail interfaces — fewer clicks, faster checkout, and role-based dashboards designed for real shop floor speed.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    path: '/odoo-erp',
    features: ['Mobile-First Design', 'Role-Based Dashboards', 'Quick Actions', 'Offline-Ready POS'],
  },
  {
    id: 'lms',
    title: 'E- ඉස්කෝලේ LMS',
    product: 'Digital School Platform',
    description:
      'Our flagship LMS for schools, tuition classes, and organizations — courses, exams, attendance, fees, and parent communication.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    path: '/lms',
    features: ['Course Management', 'Online Exams', 'Student Portal', 'Progress Tracking'],
  },
]

export const odooModules = [
  {
    title: 'Nexus Point of Sale',
    description: 'Our branded POS — fast checkout with barcode scanning, discounts, and receipt printing.',
    icon: 'ShoppingCart',
  },
  {
    title: 'Inventory Management',
    description: 'Real-time stock tracking, reorder alerts, and multi-warehouse support.',
    icon: 'Package',
  },
  {
    title: 'Accounting',
    description: 'Automated invoicing, tax compliance, and financial reporting.',
    icon: 'Calculator',
  },
  {
    title: 'Purchase & Sales',
    description: 'Supplier management, purchase orders, and sales pipeline tracking.',
    icon: 'TrendingUp',
  },
  {
    title: 'HR & Payroll',
    description: 'Employee records, attendance, leave management, and payroll processing.',
    icon: 'Users',
  },
  {
    title: 'CRM',
    description: 'Customer relationship management with follow-ups and loyalty programs.',
    icon: 'Heart',
  },
]

export const retailTypes = [
  {
    title: 'Small Retail Shops',
    description:
      'Affordable Nexus Retail setups for single-store retailers — POS, inventory, and basic accounting without complexity.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
  {
    title: 'Large Scale Retail',
    description:
      'Multi-branch retail chains with Nexus POS, centralized inventory, consolidated reporting, and franchise management.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912a92285c6?w=600&h=400&fit=crop',
  },
  {
    title: 'Organizations',
    description:
      'Custom ERP workflows for NGOs, manufacturers, distributors, and service companies of any size.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
]

export const lmsFeatures = [
  {
    title: 'Course & Content Management',
    description: 'Upload videos, PDFs, and assignments. Organize by grade, subject, or batch.',
    icon: 'BookOpen',
  },
  {
    title: 'Online Examinations',
    description: 'MCQ, short answer, and timed exams with auto-grading and result analytics.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Student & Parent Portals',
    description: 'Students access lessons anywhere; parents track attendance and grades in real time.',
    icon: 'GraduationCap',
  },
  {
    title: 'Attendance & Scheduling',
    description: 'Class timetables, attendance marking, and automated absent notifications.',
    icon: 'Calendar',
  },
  {
    title: 'Fee Management',
    description: 'Track tuition fees, send reminders, and generate payment receipts.',
    icon: 'CreditCard',
  },
  {
    title: 'Reports & Analytics',
    description: 'Performance dashboards, progress reports, and exportable data for management.',
    icon: 'BarChart3',
  },
]

export const lmsClients = [
  {
    title: 'Schools',
    description: 'Full academic management from primary to secondary — grades, subjects, and term reports via E- ඉස්කෝලේ.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
  },
  {
    title: 'Tuition Classes',
    description: 'Batch management, revision schedules, and mock exam platforms for tuition centres.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  },
  {
    title: 'Corporate Training',
    description: 'Onboarding programs, compliance training, and certification tracking for organizations.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description: 'We understand your business processes, pain points, and goals through detailed consultation.',
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Custom architecture, module selection, and UI wireframes tailored to your workflow.',
  },
  {
    step: '03',
    title: 'Development & Customization',
    description: 'Agile development with regular demos — Odoo modules, Nexus UI, and LMS features.',
  },
  {
    step: '04',
    title: 'Training & Go-Live',
    description: 'Staff training, data migration, and smooth launch with ongoing support.',
  },
]

export const whyChooseUs = [
  {
    title: 'Odoo Specialists',
    description: 'Deep expertise in Odoo ERP — not generic developers learning on your project.',
    icon: 'Award',
  },
  {
    title: 'Nexus Retail POS',
    description: 'Our own retail POS product — built for speed, offline use, and daily shop operations.',
    icon: 'Store',
  },
  {
    title: 'E- ඉස්කෝලේ LMS',
    description: 'A dedicated education platform designed for Sri Lankan schools and tuition centres.',
    icon: 'GraduationCap',
  },
  {
    title: 'Local Support',
    description: 'Based in Sri Lanka with responsive support in Sinhala, Tamil, and English.',
    icon: 'Headphones',
  },
  {
    title: 'Affordable Pricing',
    description: 'Enterprise-grade solutions at prices suited for small and medium businesses.',
    icon: 'Wallet',
  },
  {
    title: 'End-to-End Service',
    description: 'From consultation to deployment, training, and long-term maintenance.',
    icon: 'Layers',
  },
]

export const testimonials = [
  {
    name: 'Kamal Perera',
    role: 'Owner, Perera Supermarket',
    quote:
      'Nexus Retail changed our shop completely. Checkout is fast, inventory stays accurate, and daily reports take seconds.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Dr. Nirmala Fernando',
    role: 'Principal, Bright Future Academy',
    quote:
      'E- ඉස්කෝලේ handles our entire school — attendance, exams, parent communication. Teachers love how easy it is.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Ravi Silva',
    role: 'Director, Silva Retail Chain',
    quote:
      'Managing 8 branches was chaos before Codewave. Nexus Retail gives us one dashboard for sales, stock, and staff.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
]

export const faqs = [
  {
    question: 'What is Nexus Retail?',
    answer:
      'Nexus Retail is Codewave Solutions\' flagship Point of Sale product — a fast, modern retail interface built on Odoo ERP. It includes offline billing, inventory sync, barcode scanning, multi-branch support, and reporting tailored for Sri Lankan retailers.',
  },
  {
    question: 'What is E- ඉස්කෝලේ?',
    answer:
      'E- ඉස්කෝලේ (E-Iskole) is our Learning Management System for schools, tuition classes, and training organizations. It covers courses, online exams, attendance, fee management, and parent portals — with full Sinhala, Tamil, and English support.',
  },
  {
    question: 'How long does an Odoo + Nexus implementation take?',
    answer:
      'A small retail setup typically takes 2–4 weeks. Larger multi-branch or organization projects may take 6–12 weeks depending on customization scope. We provide a clear timeline after the discovery phase.',
  },
  {
    question: 'Can you customize Odoo for our specific workflow?',
    answer:
      'Absolutely. Custom workflows, reports, dashboards, and UI are our specialty. We build around how your team actually works — not force you into generic templates.',
  },
  {
    question: 'Is E- ඉස්කෝලේ suitable for small tuition classes?',
    answer:
      'Yes. E- ඉස්කෝලේ scales from a single tuition teacher with one batch to large schools with hundreds of students. Pricing is flexible based on your needs.',
  },
]
