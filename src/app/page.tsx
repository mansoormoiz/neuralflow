'use client';

import { motion, useMotionValue, useTransform, useScroll, useSpring, useInView } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: any;
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { CodeBracketIcon, CpuChipIcon, PaintBrushIcon, SparklesIcon, UserGroupIcon, RocketLaunchIcon, CommandLineIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import HomeLaptopCard from './components/HomeLaptopCard';
import { AnimatePresence } from 'framer-motion';
console.log({
  CodeBracketIcon, CpuChipIcon, PaintBrushIcon, SparklesIcon, 
  UserGroupIcon, RocketLaunchIcon, CommandLineIcon, BeakerIcon
});

const stats = [
  { number: '37+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '2+', label: 'Years Experience' },
];

const services = [
  {
    title: 'Web Development',
    description: 'Custom, scalable web solutions that drive business growth',
    icon: CodeBracketIcon,
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline operations with intelligent automation',
    icon: CpuChipIcon,
  },
  {
    title: 'AI Integration',
    description: 'Cutting-edge AI solutions for modern businesses',
    icon: CpuChipIcon,
  },
  {
    title: 'Branding',
    description: 'Create a lasting impression with strategic branding',
    icon: PaintBrushIcon,
  },
];

function getServiceDetails(serviceTitle: string) {
  switch (serviceTitle) {
    case 'Web Development':
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-500">98%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-500">2-4</div>
              <div className="text-xs text-gray-600">Days Delivery</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-medium text-gray-700 mb-1">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">Next.js</span>
              <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">TypeScript</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">Process</div>
            <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
              <li>Planning & Design</li>
              <li>Development</li>
              <li>Testing & Launch</li>
            </ul>
          </div>
        </>
      );
    case 'Workflow Automation':
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-emerald-500">70%</div>
              <div className="text-xs text-gray-600">Time Saved</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-emerald-500">24/7</div>
              <div className="text-xs text-gray-600">Automation</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-medium text-gray-700 mb-1">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Docker</span>
              <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">AWS</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">Process</div>
            <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
              <li>Analysis</li>
              <li>Development</li>
              <li>Deployment</li>
            </ul>
          </div>
        </>
      );
    case 'AI Integration':
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-500">95%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-500">10x</div>
              <div className="text-xs text-gray-600">Faster Processing</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-medium text-gray-700 mb-1">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">TensorFlow</span>
              <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">PyTorch</span>
              <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">AWS AI</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">Process</div>
            <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
              <li>Data Analysis</li>
              <li>Model Training</li>
              <li>Integration</li>
            </ul>
          </div>
        </>
      );
    case 'Branding':
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-amber-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-amber-500">15+</div>
              <div className="text-xs text-gray-600">Brands Created</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-amber-500">4-6</div>
              <div className="text-xs text-gray-600">Days Delivery</div>
            </div>
          </div>
          <div className="mb-2">
            <div className="text-xs font-medium text-gray-700 mb-1">Tools</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Figma</span>
              <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Adobe</span>
              <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Canva</span>
              <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Procreate</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">Process</div>
            <ul className="text-xs text-gray-600 space-y-1 pl-4 list-disc">
              <li>Research</li>
              <li>Design</li>
              <li>Implementation</li>
            </ul>
          </div>
        </>
      );
    default:
      return null;
  }
}

function getCardColor(service: Service) {
  const colors: {[key: string]: string} = {
    'Web Development': 'blue',
    'AI Integration': 'purple',
    'Workflow Automation': 'blue',
    'Branding': 'orange'
  };
  return colors[service.title] || "gray";
}

export default function Home() {
  const router = useRouter();
  const [hasSlidToContact, setHasSlidToContact] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [0, 240], ["#E5E7EB", "#9CA3AF"]);

  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Contact toast state
  const [showContactToast, setShowContactToast] = useState(false);
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    setContactFormStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setContactFormStatus('success');
        form.reset();
      } else {
        setContactFormStatus('error');
      }
    } catch {
      setContactFormStatus('error');
    }
  };

  useEffect(() => {
    if (hasSlidToContact) {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setHasSlidToContact(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hasSlidToContact, router]);

  useEffect(() => {
    if (contactFormStatus === 'success' || contactFormStatus === 'error') {
      const timer = setTimeout(() => {
        setContactFormStatus('idle');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [contactFormStatus]);

  const handleScheduleClick = (service: string) => {
    setSelectedService(service);
    setIsScheduleModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, service: selectedService });
    // For now, we'll just close the modal
    setIsScheduleModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const toggleCardExpansion = (serviceTitle: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  const projects = [
    {
      title: "Business Website",
      description: "A fast, responsive, and SEO-optimized website for a growing business.",
      category: "Web Development",
      image: "/projects/webdev.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      color: "blue"
    },
    {
      title: "Store Automation ",
      description: "Automated order processing, inventory sync, and customer notifications for an online store.",
      category: "Workflow Automation",
      image: "/projects/automation.jpg",
      technologies: ["Node.js", "Zapier", "Shopify API", "AWS"],
      color: "emerald"
    },
    {
      title: "AI Chatbot Integration",
      description: "Conversational AI chatbot integrated into a customer support portal.",
      category: "AI Integration",
      image: "/projects/aichatbot.jpg",
      technologies: ["Python", "OpenAI API", "React", "FastAPI"],
      color: "purple"
    },
    {
      title: "Brand Identity & Logo Design",
      description: "Complete branding package including logo, color palette, and brand guidelines.",
      category: "Branding",
      image: "/projects/branding.jpg",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      color: "pink"
    },
    {
      title: "Booking Webapp",
      description: "A web application for appointment scheduling and management.",
      category: "Web Development",
      image: "/projects/bookingapp.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      color: "cyan"
    },
    {
      title: "Workflow Dashboard",
      description: "A dashboard to automate and visualize internal business processes.",
      category: "Workflow Automation",
      image: "/projects/dashboard.jpg",
      technologies: ["Vue.js", "Firebase", "Python"],
      color: "amber"
    },
    // Additional projects for 'Show More'
    {
      title: "Hospital Website",
      description: "Personalized healthcare website for infirmary.",
      category: "Web Development",
      image: "/projects/health.jpg",
      technologies: ["Python", "TensorFlow", "React", "Firebase"],
      color: "pink"
    },
    {
      title: "SmartInvoice Sync",
      description: "Automated invoicing system that syncs client data, generates PDFs, and sends follow-ups.",
      category: "Workflow Automation",
      image: "/projects/smarthome.jpg",
      technologies: ["Make.com", "React", "Vue.js", "Python"],
      color: "cyan"
    },
    {
      title: "Remote Job Board",
      description: "AI-focused job listing platform with filters and search.",
      category: "Web Development",
      image: "/projects/vr.jpg",
      technologies: ["React", "Node.js", "MongoDB", "CSS"],
      color: "violet"
    },
    {
      title: "AI Music Bot",
      description: "AI-powered music composition and arrangement platform.",
      category: "AI Integration",
      image: "/projects/music.jpg",
      technologies: ["Python", "TensorFlow", "React", "Make.com"],
      color: "rose"
    },
    {
      title: "Analytics Bot",
      description: "Conversational assistant trained on company FAQs and stats.",
      category: "AI Integration",
      image: "/projects/retail.jpg",
      technologies: ["Python", "TensorFlow", "React",],
      color: "orange"
    },
    {
      title: "Social Media Branding Pack",
      description: "Designed post templates, banners, and ad creatives for brand consistency.",
      category: "Branding",
      image: "/projects/drone.jpg",
      technologies: ["Adobe", "Photoshop", "Illustrator"],
      color: "teal"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  // Particle effect configuration
  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      opacity: { value: 0.1 },
      size: { value: 3 },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    }
  };

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <main id="home" className="pt-16 sm:pt-0 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-2 sm:px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg">
          <div className="flex justify-between items-center h-16 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Neural Flow</span>
            </div>
            {/* Hamburger for mobile */}
            <div className="flex md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShowMobileNav(v => !v)}>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#home" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="#services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="#portfolio" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
                <Link href="#pricing-calculator" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Pricing Calculator</Link>
                <Link href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {showMobileNav && (
          <div className="md:hidden mt-2" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-2xl bg-white/90 shadow border border-gray-200">
              <Link href="#home" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="#about" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link href="#services" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Services</Link>
              <Link href="#portfolio" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
              <Link href="#pricing-calculator" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Pricing Calculator</Link>
              <Link href="#contact" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-2 sm:px-4 lg:px-8 min-h-[80vh] flex flex-col lg:flex-row items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Neural Flow</h1>
                <p className="tagline text-base sm:text-lg md:text-xl mt-2 sm:mt-4">Transforming ideas into digital excellence</p>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-lg sm:text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              {/* CTA button with green color scheme */}
              <button
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg mx-auto block"
      style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </button>
            </motion.div>
            {/* Right Side - Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center pt-8 sm:pt-24"
            >
              <motion.div 
                className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[500px] lg:h-[500px] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Laptop Screen */}
                <div className="absolute inset-x-0 top-0 h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px] bg-gradient-to-b from-gray-900 to-black rounded-t-lg rounded-b-sm border-4 sm:border-8 border-gray-800 shadow-xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 sm:h-8 bg-black/5 flex items-center justify-between px-3 sm:px-6 border-b border-gray-100">
                      <div className="text-xs sm:text-sm font-medium text-gray-600">Neural Flow</div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                    {/* Services Display */}
                    <div className="h-[calc(100%-2rem)] p-2 sm:p-4">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full">
                        {services.map((service, index) => (
                          <HomeLaptopCard key={index} service={service} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Hinge */}
                <div className="absolute top-[178px] sm:top-[258px] md:top-[338px] lg:top-[418px] left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] h-[3px] sm:h-[4px] bg-gray-700 rounded-full"></div>
                {/* Laptop Base */}
                <div className="absolute top-[182px] sm:top-[262px] md:top-[342px] lg:top-[422px] left-1/2 transform -translate-x-1/2 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[540px] h-[6px] sm:h-[12px] bg-gray-800 rounded-b-xl shadow-xl flex items-center justify-center">
                  <div className="w-[180px] sm:w-[260px] md:w-[340px] lg:w-[500px] h-[5px] sm:h-[10px] bg-gray-900 rounded-md relative flex flex-col items-center justify-end pb-0.5">
                    {/* Keyboard Area */}
                    <div className="w-[95%] h-[3px] sm:h-[6px] bg-gray-700 rounded-sm mb-0.5"></div>
                    {/* Trackpad */}
                    <div className="w-[40px] sm:w-[100px] h-[1px] sm:h-[2px] bg-gray-600 rounded-sm"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen flex flex-col justify-center py-12 sm:py-20 px-2 sm:px-4 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Neural Flow</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Where innovation meets expertise in the digital realm
              </p>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Side - Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[220px] sm:h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl group perspective-1000 mb-8 lg:mb-0"
            >
              <motion.div 
                className="relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileInView={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
                <Image
                  src="/asset/about-us.png"
                  alt="Neural Flow Team"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Interactive Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-base text-white/90 leading-relaxed">
                    Transforming ideas into digital excellence through innovation and expertise
                  </p>
                </motion.div>
              </div>
              {/* Interactive Hotspots */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-2.5 sm:w-4 h-2.5 sm:h-4 bg-primary/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-secondary/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
            {/* Right Side - Interactive Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              >
                {[
                  {
                    icon: SparklesIcon,
                    title: "Innovation",
                    description: "Pushing boundaries with cutting-edge solutions"
                  },
                  {
                    icon: UserGroupIcon,
                    title: "Collaboration",
                    description: "Working together to achieve excellence"
                  },
                  {
                    icon: RocketLaunchIcon,
                    title: "Growth",
                    description: "Continuous learning and improvement"
                  },
                  {
                    icon: CpuChipIcon,
                    title: "Technology",
                    description: "Leveraging the latest tech for success"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 h-full group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2.5 bg-primary/5 rounded-lg flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Company Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Neural Flow, we're not just developers we're digital architects crafting the future of technology. 
                  Our team combines deep technical expertise with creative problem-solving to deliver solutions that drive 
                  real business value. We believe in the power of innovation and the importance of building lasting 
                  partnerships with our clients.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-10 sm:py-20 px-2 sm:px-4 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative service-card-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="service-card hover:border-blue-500/20 relative flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-blue-500/5 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
                    <CommandLineIcon className="w-8 h-8 text-blue-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                      Web Development
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Create stunning, high-performance websites and web applications
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CommandLineIcon className="w-4 h-4 text-blue-500" />
                    <span>React, Next.js, Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SparklesIcon className="w-4 h-4 text-blue-500" />
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <RocketLaunchIcon className="w-4 h-4 text-blue-500" />
                    <span>Performance Optimized</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setExpandedCards(prev => ({
                      ...prev,
                      'web-development': !prev['web-development']
                    }))}
                    className="w-full px-4 py-2 bg-blue-500/5 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span>{expandedCards['web-development'] ? 'Collapse' : 'Expand'}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                        expandedCards['web-development'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className={`service-details ${expandedCards['web-development'] ? 'expanded-details' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-500">98%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-500">2-4</div>
                      <div className="text-xs text-gray-600">Days Delivery</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Node.js', 'TypeScript'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Process</div>
                    <div className="space-y-2">
                      {['Planning & Design', 'Development', 'Testing & Launch'].map(step => (
                        <div key={step} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <div className="text-xs text-gray-600">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative service-card-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="service-card hover:border-emerald-500/20 relative flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-emerald-500/5 rounded-xl group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <CommandLineIcon className="w-8 h-8 text-emerald-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-500 transition-colors duration-300">
                      Workflow Automation
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Streamline operations with intelligent automation
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CpuChipIcon className="w-4 h-4 text-emerald-500" />
                    <span>Custom Scripts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SparklesIcon className="w-4 h-4 text-emerald-500" />
                    <span>Process Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <RocketLaunchIcon className="w-4 h-4 text-emerald-500" />
                    <span>Efficiency Boost</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button                    onClick={() => toggleCardExpansion('workflow-automation')}
                    className="w-full px-4 py-2 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span>{expandedCards['workflow-automation'] ? 'Collapse' : 'Expand'}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                        expandedCards['workflow-automation'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>                {/* Detailed Information */}
                <div className={`service-details ${expandedCards['workflow-automation'] ? 'expanded-details' : ''}`}>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-emerald-500">60%</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-emerald-500">24/7</div>
                      <div className="text-xs text-gray-600">Automation</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Node.js</span>
                      <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">Docker</span>
                      <span className="px-2 py-1 bg-emerald-500/5 text-emerald-500 text-xs rounded-full">AWS</span>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Process</div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Analysis</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Development</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative service-card-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="service-card hover:border-purple-500/20 relative flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-purple-500/5 rounded-xl group-hover:bg-purple-500/10 transition-colors duration-300">
                    <BeakerIcon className="w-8 h-8 text-purple-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors duration-300">
                      AI Integration
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Cut through complexity with intelligent automation solutions
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CpuChipIcon className="w-4 h-4 text-purple-500" />
                    <span>Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SparklesIcon className="w-4 h-4 text-purple-500" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <RocketLaunchIcon className="w-4 h-4 text-purple-500" />
                    <span>Smart Solutions</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button                    onClick={() => toggleCardExpansion('ai-integration')}
                    className="w-full px-4 py-2 bg-purple-500/5 hover:bg-purple-500/10 text-purple-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span>{expandedCards['ai-integration'] ? 'Collapse' : 'Expand'}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                        expandedCards['ai-integration'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}                <div className={`service-details ${expandedCards['ai-integration'] ? 'expanded-details' : ''}`}>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-500">95%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-500">10x</div>
                      <div className="text-xs text-gray-600">Faster Processing</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">TensorFlow</span>
                      <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">PyTorch</span>
                      <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">Python</span>
                      <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-xs rounded-full">AWS AI</span>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Process</div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Data Analysis</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Model Training</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Integration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative service-card-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="service-card hover:border-amber-500/20 relative flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-amber-500/5 rounded-xl group-hover:bg-amber-500/10 transition-colors duration-300">
                    <PaintBrushIcon className="w-8 h-8 text-amber-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                      Branding
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Create a lasting impression with strategic branding
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <PaintBrushIcon className="w-4 h-4 text-amber-500" />
                    <span>Visual Identity</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <SparklesIcon className="w-4 h-4 text-amber-500" />
                    <span>Brand Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <RocketLaunchIcon className="w-4 h-4 text-amber-500" />
                    <span>Market Positioning</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button                    onClick={() => toggleCardExpansion('branding')}
                    className="w-full px-4 py-2 bg-amber-500/5 hover:bg-amber-500/10 text-amber-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span>{expandedCards['branding'] ? 'Collapse' : 'Expand'}</span>
                    <svg
                      className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
                        expandedCards['branding'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}                <div className={`service-details ${expandedCards['branding'] ? 'expanded-details' : ''}`}>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-amber-500">15+</div>
                      <div className="text-xs text-gray-600">Brands Created</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-amber-500">4-6</div>
                      <div className="text-xs text-gray-600">Days Delivery</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Figma</span>
                      <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Adobe</span>
                      <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Canva</span>
                      <span className="px-2 py-1 bg-amber-500/5 text-amber-500 text-xs rounded-full">Procreate</span>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Process</div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Research</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Design</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Implementation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform and grow
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout="position"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ 
                    layout: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.4 },
                    y: { duration: 0.4 }
                  }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/60 border border-gray-100 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-md"
                >
                  <div className="p-7 flex flex-col gap-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900 tracking-tight flex-1 truncate">{project.title}</h3>
                      <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}-100 text-${project.color}-700 border border-${project.color}-200 shadow-sm`}>{project.category}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-full text-xs font-medium bg-${project.color}-50 text-${project.color}-600 border border-${project.color}-100`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-6 sm:mt-8 mb-10 sm:mb-16">
            <AnimatePresence mode="wait">
              <motion.button
                key={showAllProjects ? 'less' : 'more'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                {showAllProjects ? 'Show Less' : 'Show More Projects'}
              </motion.button>
            </AnimatePresence>
          </div>

          {/* Testimonials Slider */}
          <div className="mt-10 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Client <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimonials</span>
            </h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="testimonials-slider py-2 sm:py-4"
            >
              {/* Modern Business Website */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("Sarah Williams")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Business Website</h4>
                      <p className="text-gray-600">Sarah Williams</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Our new website is fast, beautiful, and brings in more leads than ever. The team made the process effortless!"</p>
                </div>
              </SwiperSlide>
              {/* E-commerce Automation Suite */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("Amit Patel")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Store Automation</h4>
                      <p className="text-gray-600">Amit Patel</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Order processing and inventory are now fully automated. We save hours every week and our customers are happier!"</p>
                </div>
              </SwiperSlide>
              {/* AI Chatbot Integration */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("Linda Zhao")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">AI Chatbot Integration</h4>
                      <p className="text-gray-600">Linda Zhao</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"The AI chatbot has transformed our support. Customers get instant answers, and our team can focus on complex issues."</p>
                </div>
              </SwiperSlide>
              {/* Brand Identity & Logo Design */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("Elena Garcia")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Brand Identity & Logo Design</h4>
                      <p className="text-gray-600">Elena Garcia</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Our new brand identity is stunning and memorable. The logo and guidelines gave us a real edge in our market."</p>
                </div>
              </SwiperSlide>
              {/* Custom Web App for Bookings */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("David Kim")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Webapp Bookings</h4>
                      <p className="text-gray-600">David Kim</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Booking appointments is now a breeze for our clients and staff. The app is intuitive and reliable."</p>
                </div>
              </SwiperSlide>
              {/* Internal Workflow Dashboard */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {getInitials("Fatima Al-Farsi")}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg">Workflow Dashboard</h4>
                      <p className="text-gray-600">Fatima Al-Farsi</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Our internal processes are now visualized and automated. We spot bottlenecks instantly and keep projects on track."</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section id="pricing-calculator" className="py-8 sm:py-12 flex flex-col items-center min-h-[70vh] sm:min-h-[90vh] pb-10 sm:pb-16 bg-transparent">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Pricing <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Calculator</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-2 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Instantly estimate your project cost by selecting services below
          </p>
        </div>
        <div className="relative w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto rounded-2xl shadow-xl bg-white/80 flex flex-col lg:flex-row overflow-hidden border border-blue-100">
          <PricingCalculator />
        </div>
      </section>

      {/* Schedule Call Modal */}
      <Dialog
        open={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-2xl font-bold text-gray-900">
                Schedule a Call - {selectedService}
              </Dialog.Title>
              <button
                onClick={() => setIsScheduleModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div className="flex justify-end space-x-4">                <button
                  type="button"
                  onClick={() => setIsScheduleModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-[80vh] w-full flex items-center justify-center py-12 sm:py-24 bg-gray-50 overflow-hidden">
        {/* SVG Gradient Waves */}
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[100px] sm:h-[180px]">
            <defs>
              <linearGradient id="wave-gradient1" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <path fill="url(#wave-gradient1)" fillOpacity="0.18">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,80 Q360,140 720,80 T1440,80 V180 H0 Z;
                        M0,100 Q360,40 720,100 T1440,100 V180 H0 Z;
                        M0,80 Q360,140 720,80 T1440,80 V180 H0 Z" />
              M0,80 Q360,140 720,80 T1440,80 V180 H0 Z
            </path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none select-none rotate-180">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[100px] sm:h-[180px]">
            <defs>
              <linearGradient id="wave-gradient2" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <path fill="url(#wave-gradient2)" fillOpacity="0.13">
              <animate attributeName="d" dur="14s" repeatCount="indefinite"
                values="M0,100 Q360,40 720,100 T1440,100 V180 H0 Z;
                        M0,80 Q360,140 720,80 T1440,80 V180 H0 Z;
                        M0,100 Q360,40 720,100 T1440,100 V180 H0 Z" />
              M0,100 Q360,40 720,100 T1440,100 V180 H0 Z
            </path>
          </svg>
        </div>
        {/* Animated Radial Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute left-1/2 top-1/2 w-[400px] sm:w-[900px] h-[400px] sm:h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-white/0 to-transparent opacity-40 animate-radialfade" />
        </div>
        {/* Glowing Blobs */}
        <div className="absolute z-0 pointer-events-none select-none">
          <div className="absolute top-12 sm:top-24 left-4 sm:left-12 w-36 sm:w-72 h-36 sm:h-72 bg-emerald-300 opacity-30 rounded-full blur-2xl sm:blur-3xl animate-blob1" />
          <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-24 w-40 sm:w-80 h-40 sm:h-80 bg-indigo-300 opacity-20 rounded-full blur-2xl sm:blur-3xl animate-blob2" />
          <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-28 sm:w-60 h-28 sm:h-60 bg-blue-400 opacity-20 rounded-full blur-xl sm:blur-2xl animate-blob3" />
        </div>
        {/* Premium Glass Card Contact Section */}
        <div className="relative z-10 w-full max-w-lg sm:max-w-3xl mx-auto rounded-2xl sm:rounded-4xl overflow-hidden bg-white/80 backdrop-blur-xl shadow-2xl border-2 border-blue-200 bg-clip-padding p-0 flex flex-col md:flex-row items-stretch group transition-transform duration-300 hover:scale-[1.025] hover:shadow-blue-200/80 hover:shadow-2xl" style={{ boxShadow: '0 8px 40px 0 rgba(30,58,138,0.18)' }}>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6 sm:gap-8 p-6 sm:p-12">
            <span className="inline-block mb-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl font-extrabold rounded-full shadow-lg animate-bounce-slow tracking-wide">Let's Connect</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-700 mb-2 tracking-tight font-[Poppins,Inter,sans-serif] animate-fadein">Contact Us</h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg">
              <div className="flex items-center gap-4 group/contact-icon">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 border border-blue-300 shadow-md transition-transform duration-300 group-hover/contact-icon:scale-110 group-hover/contact-icon:rotate-6">
                  {/* Gmail Icon with gradient */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gmail-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1e3a8a" />
                        <stop offset="1" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="url(#gmail-gradient)" strokeWidth="2" fill="none"/>
                    <path d="M4 6l8 7 8-7" stroke="url(#gmail-gradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <a href="mailto:mansoor@neuralflow.services" className="hover:underline hover:text-blue-700 transition font-semibold">mansoor@neuralflow.services</a>
              </div>
              <div className="flex items-center gap-4 group/contact-icon">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 border border-blue-300 shadow-md transition-transform duration-300 group-hover/contact-icon:scale-110 group-hover/contact-icon:-rotate-6">
                  {/* Phone Icon with gradient */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="phone-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1e3a8a" />
                        <stop offset="1" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <path d="M3 5.75a2 2 0 0 1 2-2h2.2a2 2 0 0 1 2 1.7l.3 2a2 2 0 0 1-.55 1.8l-1.1 1.1a16 16 0 0 0 7.1 7.1l1.1-1.1a2 2 0 0 1 1.8-.55l2 0.3a2 2 0 0 1 1.7 2v2.2a2 2 0 0 1-2 2A17 17 0 0 1 3 5.75z" stroke="url(#phone-gradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <a href="tel:+923357555253" className="hover:underline hover:text-blue-700 transition font-semibold">+923357555253</a>
              </div>
              <div className="flex items-center gap-4 group/contact-icon">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 border border-blue-300 shadow-md transition-transform duration-300 group-hover/contact-icon:scale-110 group-hover/contact-icon:rotate-3">
                  {/* Instagram Icon with gradient */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1e3a8a" />
                        <stop offset="1" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="4" width="16" height="16" rx="5" stroke="url(#ig-gradient)" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="url(#ig-gradient)" strokeWidth="2" fill="none"/>
                    <circle cx="17" cy="7" r="1.2" fill="#1e3a8a" />
                  </svg>
                </span>
                <a href="https://instagram.com/neuralflow.services" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-700 transition font-semibold">neuralflow.services</a>
              </div>
            </div>
            <div className="mt-2 sm:mt-4 text-blue-900/70 text-sm sm:text-base italic">We usually respond within 24 hours.</div>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 my-8 mx-0" />
          {/* Contact Form */}
          <form className="flex-1 flex flex-col gap-4 sm:gap-6 p-6 sm:p-12 animate-fadein" autoComplete="off" onSubmit={handleContactSubmit}>
            <label className="font-semibold text-blue-900 text-base sm:text-lg">Name
              <input id="name" name="name" type="text" required className="mt-2 w-full rounded-xl border border-blue-200 px-4 py-2 sm:py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-300" placeholder="Your Name" />
            </label>
            <label className="font-semibold text-blue-900 text-base sm:text-lg">Email
              <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-blue-200 px-4 py-2 sm:py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-300" placeholder="you@email.com" />
            </label>
            <label className="font-semibold text-blue-900 text-base sm:text-lg">Message
              <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-xl border border-blue-200 px-4 py-2 sm:py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder:text-blue-300 resize-none" placeholder="How can we help you?" />
            </label>
            <button type="submit" className="mt-2 sm:mt-4 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow">Send Message</button>
          </form>
        </div>
        {/* Success Toast */}
        {contactFormStatus === 'success' && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-toast-in">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="font-semibold">Message sent! We'll be in touch soon.</span>
          </div>
        )}
        {contactFormStatus === 'error' && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-toast-in">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            <span className="font-semibold">Failed to send message. Please try again later.</span>
          </div>
        )}
      </section>

      {/* Footer */}
              <footer className="w-full bg-gradient-to-br from-gray-100 to-gray-200 border-t border-blue-200/40 shadow-inner mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center">
            &copy; {new Date().getFullYear()} Neural Flow. All rights reserved.
          </div>
          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 justify-center">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition">Portfolio</a>
            <a href="#pricing-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 font-medium transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 font-medium transition">Terms</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<{[key: string]: boolean}>({});
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  // Sync categories and options with main services section
  const services = {
    "Web Development": {
      "Basic Website": { price: 400, description: "Simple responsive website" },
      "E-commerce Site": { price: 750, description: "Full online store with payment" },
      "Custom Web App": { price: 1100, description: "Complex web application" },
      "Website Design": { price: 100, description: "RESTful API services" },
      "Monthly Maintenance": { price: 20, description: "Monthly maintenance" }
    },
    "Workflow Automation": {
      "Database Syncing": { price: 150, description: "Automate repetitive tasks" },
      "Process Automation": { price: 200, description: "Streamline business processes" },
      "Custom Automation": { price: 300, description: "Connect your tools and platforms" },
      "Automation Support": { price: 100, description: "Ongoing automation support" }
    },
    "AI Integration": {
      "AI Chatbot": { price: 350, description: "Intelligent chatbot system" },
      "Monthly AI Analytics": { price: 30, description: "Custom ML models" },
      "AI Integration": { price: 400, description: "AI into existing systems" }
    },
    "Branding": {
      "Logo Design": { price: 100, description: "Professional logo creation" },
      "Brand Strategy": { price: 150, description: "Brand positioning and messaging" },
      "Visual Identity": { price: 100, description: "Complete brand package" },
      "Marketing Materials": { price: 100, description: "Brochures, flyers, etc." }
    }
  };

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
    if (!selectedServices[serviceName]) {
      setQuantities(prev => ({
        ...prev,
        [serviceName]: 1
      }));
    }
  };

  const updateQuantity = (serviceName: string, quantity: number) => {
    if (quantity > 0) {
      setQuantities(prev => ({
        ...prev,
        [serviceName]: quantity
      }));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(selectedServices).forEach(serviceName => {
      if (selectedServices[serviceName]) {
        const quantity = quantities[serviceName] || 1;
        const service = Object.values(services).flat().find(s => Object.keys(s).includes(serviceName));
        if (service) {
          total += (service as any)[serviceName]?.price * quantity;
        }
      }
    });
    return total;
  };

  const getSelectedServicesList = () => {
    return Object.keys(selectedServices).filter(serviceName => selectedServices[serviceName]);
  };

  return (
    <>
      {/* Left: Service Selection */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col gap-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-[500px]">
        {/* Large label area */}
        <div className="mb-4">
          <div className="w-full rounded-xl bg-white/80 shadow-lg border border-blue-100 px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-semibold text-blue-900">Choose your service</span>
          </div>
        </div>
        {/* Scrollable service blocks with improved custom scrollbar */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-blue" style={{ maxHeight: '380px' }}>
          <div className="flex flex-col gap-6">
            {Object.entries(services).map(([category, categoryServices], idx) => (
              <div
                key={category}
                className={`rounded-2xl px-6 py-5 flex flex-col gap-3 border-2 shadow-md transition-all duration-200
                  ${category === 'Web Development' ? 'bg-blue-50 border-blue-200' :
                    category === 'Workflow Automation' ? 'bg-emerald-50 border-emerald-200' :
                    category === 'AI Integration' ? 'bg-purple-50 border-purple-200' :
                    category === 'Branding' ? 'bg-pink-50 border-pink-200' :
                    'bg-white border-gray-200'}
                `}
              >
                <h3 className={`text-lg font-semibold mb-1
                  ${category === 'Web Development' ? 'text-blue-700' :
                    category === 'Workflow Automation' ? 'text-emerald-700' :
                    category === 'AI Integration' ? 'text-purple-700' :
                    category === 'Branding' ? 'text-pink-700' :
                    'text-gray-800'}
                `}>{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(categoryServices).map(([serviceName, service]) => (
                    <button
                      key={serviceName}
                      onClick={() => toggleService(serviceName)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 shadow-sm
                        ${selectedServices[serviceName] ?
                          (category === 'Web Development' ? 'bg-blue-500 text-white border-blue-500 shadow' :
                            category === 'Workflow Automation' ? 'bg-emerald-500 text-white border-emerald-500 shadow' :
                            category === 'AI Integration' ? 'bg-purple-500 text-white border-purple-500 shadow' :
                            category === 'Branding' ? 'bg-pink-500 text-white border-pink-500 shadow' :
                            'bg-blue-500 text-white border-blue-500 shadow')
                          :
                          (category === 'Web Development' ? 'bg-white/70 text-blue-700 border-blue-200 hover:bg-blue-100' :
                            category === 'Workflow Automation' ? 'bg-white/70 text-emerald-700 border-emerald-200 hover:bg-emerald-100' :
                            category === 'AI Integration' ? 'bg-white/70 text-purple-700 border-purple-200 hover:bg-purple-100' :
                            category === 'Branding' ? 'bg-white/70 text-pink-700 border-pink-200 hover:bg-pink-100' :
                            'bg-white/70 text-gray-700 border-gray-300 hover:bg-blue-100')
                        }`}
                    >
                      {serviceName}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Invoice */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col bg-white/60">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 text-center border border-gray-300 rounded-xl py-2 w-full bg-white/80 shadow">INVOICE</h2>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="custom-scrollbar-purple" style={{ maxHeight: '180px', overflowY: 'auto' }}>
            {getSelectedServicesList().length === 0 ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Select services to see your quote</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getSelectedServicesList().map((serviceName, index) => {
                  const service = Object.values(services).flat().find(s => Object.keys(s).includes(serviceName));
                  const quantity = quantities[serviceName] || 1;
                  const price = service ? (service as any)[serviceName]?.price : 0;
                  const total = price * quantity;
                  return (
                    <div key={serviceName} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex-1">
                        <span className="font-medium text-gray-900 text-base">{serviceName}</span>
                        {quantity > 1 && <span className="ml-2 text-xs text-gray-500">× {quantity}</span>}
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900 text-lg">${total}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* Static Total Row */}
          <div className="border-t border-gray-300 pt-2 mt-3 flex items-center justify-between text-lg font-bold text-gray-900 bg-white/80 rounded-xl shadow px-4 py-2">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="mt-4 flex gap-3 pt-4 border-t border-gray-200">
          <button 
            onClick={() => { setSelectedServices({}); setQuantities({}); }} 
            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 text-base shadow"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

// Add this utility function at the end of your file, before the last export
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
