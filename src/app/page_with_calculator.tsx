'use client';

import { motion, useMotionValue, useTransform, useScroll, useSpring, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CodeBracketIcon, CpuChipIcon, PaintBrushIcon, SparklesIcon, UserGroupIcon, RocketLaunchIcon, CommandLineIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import HomeLaptopCard from './components/HomeLaptopCard';
import { AnimatePresence } from 'framer-motion';

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
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
              <div className="text-xs text-gray-600">Weeks Delivery</div>
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
              <div className="text-2xl font-bold text-emerald-500">60%</div>
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
              <div className="text-2xl font-bold text-amber-500">100+</div>
              <div className="text-xs text-gray-600">Brands Created</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-amber-500">4-6</div>
              <div className="text-xs text-gray-600">Weeks Delivery</div>
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

export default function Home() {
  // --- This is the calculator route ---
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

  // Add missing state hooks for project grid/modal logic
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (hasSlidToContact) {
      const timer = setTimeout(() => {
        router.push('/contact');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hasSlidToContact, router]);

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
      title: "NeuralFlow AI Platform",
      description: "An advanced AI platform for real-time data processing and predictive analytics",
      category: "AI/ML",
      image: "/projects/neuralflow.jpg",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      color: "blue"
    },
    {
      title: "Smart City Dashboard",
      description: "Real-time monitoring and analytics platform for urban infrastructure",
      category: "IoT",
      image: "/projects/smartcity.jpg",
      technologies: ["React", "D3.js", "Python", "MongoDB"],
      color: "emerald"
    },
    {
      title: "Quantum Finance",
      description: "Next-gen financial platform using quantum computing for market predictions",
      category: "FinTech",
      image: "/projects/quantum.jpg",
      technologies: ["Q#", "Python", "React", "Azure"],
      color: "purple"
    },
    {
      title: "EcoTrack",
      description: "Environmental monitoring system with AI-powered analytics",
      category: "Sustainability",
      image: "/projects/ecotrack.jpg",
      technologies: ["Python", "React", "TensorFlow", "AWS"],
      color: "green"
    },
    {
      title: "AR Learning Platform",
      description: "Immersive educational platform using augmented reality",
      category: "EdTech",
      image: "/projects/arlearn.jpg",
      technologies: ["Unity", "C#", "React", "WebGL"],
      color: "amber"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent and secure supply chain management system",
      category: "Blockchain",
      image: "/projects/blockchain.jpg",
      technologies: ["Solidity", "React", "Node.js", "Web3"],
      color: "indigo"
    },
    {
      title: "AI Health Assistant",
      description: "Personalized healthcare recommendations using machine learning",
      category: "Healthcare",
      image: "/projects/health.jpg",
      technologies: ["Python", "TensorFlow", "React", "Firebase"],
      color: "pink"
    },
    {
      title: "Smart Home Hub",
      description: "Centralized control system for smart home devices",
      category: "IoT",
      image: "/projects/smarthome.jpg",
      technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
      color: "cyan"
    },
    {
      title: "VR Training Simulator",
      description: "Immersive training platform for industrial workers",
      category: "VR/AR",
      image: "/projects/vr.jpg",
      technologies: ["Unity", "C#", "Oculus SDK", "Blender"],
      color: "violet"
    },
    {
      title: "AI Music Composer",
      description: "AI-powered music composition and arrangement platform",
      category: "Creative AI",
      image: "/projects/music.jpg",
      technologies: ["Python", "TensorFlow", "React", "Web Audio API"],
      color: "rose"
    },
    {
      title: "Smart Retail Analytics",
      description: "AI-powered retail analytics and customer behavior prediction",
      category: "Retail Tech",
      image: "/projects/retail.jpg",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      color: "orange"
    },
    {
      title: "Autonomous Drone System",
      description: "AI-powered drone navigation and object detection system",
      category: "Robotics",
      image: "/projects/drone.jpg",
      technologies: ["Python", "OpenCV", "ROS", "TensorFlow"],
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

  // Helper function to get category colors
  const getCategoryColor = (category: string) => {
    const colors: {[key: string]: string} = {
      "Web Development": "blue",
      "Mobile Development": "green",
      "AI & Machine Learning": "purple",
      "Design & Branding": "pink"
    };
    return colors[category] || "gray";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
        style={{ scaleX }}
      />
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Neural Flow</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#home" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="#about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                <Link href="#services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl">Neural Flow</h1>
                <p className="tagline text-lg md:text-xl mt-4">Transforming ideas into digital excellence</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Minimalist Slider for Contact */}
              <motion.div
                className="w-[300px] h-12 bg-gray-200 rounded-full flex items-center p-1 relative shadow-inner mx-auto overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ backgroundColor }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full cursor-grab flex items-center justify-center text-white shadow-lg"
                  drag="x"
                  dragConstraints={{ left: 0, right: 240 }}
                  dragElastic={0.05}
                  dragMomentum={false}
                  onDragEnd={(event, info) => {
                    try {
                      if (!event.currentTarget) {
                        x.set(0);
                        return;
                      }

                      const dragThreshold = 220;

                      if (info.offset.x >= dragThreshold) {
                        setHasSlidToContact(true);
                      }
                      
                      x.set(0);
                    } catch (error) {
                      console.error('Error in drag end handler:', error);
                      x.set(0);
                    }
                  }}
                  style={{ x }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </motion.div>
                <span className="absolute left-1/2 transform -translate-x-1/2 text-gray-700 font-medium text-sm">Slide to Contact</span>
              </motion.div>
            </motion.div>

            {/* Right Side - Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center pt-24"
            >
              <motion.div 
                className="relative w-[500px] h-[500px]"
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
                <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-gray-900 to-black rounded-t-lg rounded-b-sm border-8 border-gray-800 shadow-xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-black/5 flex items-center justify-between px-6 border-b border-gray-100">
                      <div className="text-sm font-medium text-gray-600">Neural Flow</div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                    
                    {/* Services Display */}
                    <div className="h-[calc(100%-2rem)] p-4">
                      <div className="grid grid-cols-2 gap-3 h-full">
                        {services.map((service, index) => (
                          <HomeLaptopCard key={index} service={service} index={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Hinge */}
                <div className="absolute top-[418px] left-1/2 transform -translate-x-1/2 w-[420px] h-[4px] bg-gray-700 rounded-full"></div>

                {/* Laptop Base */}
                <div className="absolute top-[422px] left-1/2 transform -translate-x-1/2 w-[540px] h-[12px] bg-gray-800 rounded-b-xl shadow-xl flex items-center justify-center">
                  <div className="w-[500px] h-[10px] bg-gray-900 rounded-md relative flex flex-col items-center justify-end pb-0.5">
                    {/* Keyboard Area */}
                    <div className="w-[95%] h-[6px] bg-gray-700 rounded-sm mb-0.5"></div>
                    {/* Trackpad */}
                    <div className="w-[100px] h-[2px] bg-gray-600 rounded-sm"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Neural Flow</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Where innovation meets expertise in the digital realm
              </p>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group perspective-1000"
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
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Transforming ideas into digital excellence through innovation and expertise
                  </p>
                </motion.div>
              </div>

              {/* Interactive Hotspots */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full"
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
                  className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full"
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
            <div className="space-y-8">
              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
                  At Neural Flow, we're not just developers – we're digital architects crafting the future of technology. 
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
      <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative service-card-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="service-card hover:border-blue-500/20 relative h-[420px] flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-blue-500/5 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
                    <CommandLineIcon className="w-8 h-8 text-blue-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                      Web Development
                    </h3>
                    <p className="text-gray-600 mt-2 h-12 leading-relaxed">
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

                {/* Buttons Container */}
                <div className="mt-6 flex justify-center">
                  {/* Expand Button */}
                  <button 
                    onClick={() => {
                      const details = document.getElementById('web-dev-details');
                      const buttonText = document.getElementById('web-dev-expand-button-text');
                      const arrow = document.getElementById('web-dev-arrow');
                      if (details && buttonText && arrow) {
                        if (details.classList.contains('expanded-details')) {
                          details.classList.remove('expanded-details');
                          buttonText.textContent = 'Expand';
                          arrow.classList.remove('rotate-180');
                        } else {
                          details.classList.add('expanded-details');
                          buttonText.textContent = 'Collapse';
                          arrow.classList.add('rotate-180');
                        }
                      }
                    }}
                    id="web-dev-expand-button"
                    className="w-full px-4 py-2 bg-blue-500/5 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span id="web-dev-expand-button-text">Expand</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300" 
                      id="web-dev-arrow"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}
                <div id="web-dev-details" className="space-y-4 pt-4 border-t border-gray-100 mt-6 overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-500">98%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-500">2-4</div>
                      <div className="text-xs text-gray-600">Weeks Delivery</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">React</span>
                      <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">Next.js</span>
                      <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">Node.js</span>
                      <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-xs rounded-full">TypeScript</span>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Process</div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Planning & Design</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Development</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-600">Testing & Launch</div>
                      </div>
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
              <div className="service-card hover:border-emerald-500/20 relative h-[420px] flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-emerald-500/5 rounded-xl group-hover:bg-emerald-500/10 transition-colors duration-300">
                    <CommandLineIcon className="w-8 h-8 text-emerald-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-500 transition-colors duration-300">
                      Workflow Automation
                    </h3>
                    <p className="text-gray-600 mt-2 h-12 leading-relaxed">
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

                {/* Buttons Container */}
                <div className="mt-6 flex justify-center">
                  {/* Expand Button */}
                  <button 
                    onClick={() => {
                      const details = document.getElementById('workflow-details');
                      const buttonText = document.getElementById('workflow-expand-button-text');
                      const arrow = document.getElementById('workflow-arrow');
                      if (details && buttonText && arrow) {
                        if (details.classList.contains('expanded-details')) {
                          details.classList.remove('expanded-details');
                          buttonText.textContent = 'Expand';
                          arrow.classList.remove('rotate-180');
                        } else {
                          details.classList.add('expanded-details');
                          buttonText.textContent = 'Collapse';
                          arrow.classList.add('rotate-180');
                        }
                      }
                    }}
                    id="workflow-expand-button"
                    className="w-full px-4 py-2 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span id="workflow-expand-button-text">Expand</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300" 
                      id="workflow-arrow"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}
                <div id="workflow-details" className="space-y-4 pt-4 border-t border-gray-100 mt-6 overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0">
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
              <div className="service-card hover:border-purple-500/20 relative h-[420px] flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-purple-500/5 rounded-xl group-hover:bg-purple-500/10 transition-colors duration-300">
                    <BeakerIcon className="w-8 h-8 text-purple-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors duration-300">
                      AI Integration
                    </h3>
                    <p className="text-gray-600 mt-2 h-12 leading-relaxed">
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

                {/* Buttons Container */}
                <div className="mt-6 flex justify-center">
                  {/* Expand Button */}
                  <button 
                    onClick={() => {
                      const details = document.getElementById('ai-details');
                      const buttonText = document.getElementById('ai-expand-button-text');
                      const arrow = document.getElementById('ai-arrow');
                      if (details && buttonText && arrow) {
                        if (details.classList.contains('expanded-details')) {
                          details.classList.remove('expanded-details');
                          buttonText.textContent = 'Expand';
                          arrow.classList.remove('rotate-180');
                        } else {
                          details.classList.add('expanded-details');
                          buttonText.textContent = 'Collapse';
                          arrow.classList.add('rotate-180');
                        }
                      }
                    }}
                    id="ai-expand-button"
                    className="w-full px-4 py-2 bg-purple-500/5 hover:bg-purple-500/10 text-purple-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span id="ai-expand-button-text">Expand</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300" 
                      id="ai-arrow"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}
                <div id="ai-details" className="space-y-4 pt-4 border-t border-gray-100 mt-6 overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0">
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
              <div className="service-card hover:border-amber-500/20 relative h-[420px] flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-amber-500/5 rounded-xl group-hover:bg-amber-500/10 transition-colors duration-300">
                    <PaintBrushIcon className="w-8 h-8 text-amber-500 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                      Branding
                    </h3>
                    <p className="text-gray-600 mt-2 h-12 leading-relaxed">
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

                {/* Buttons Container */}
                <div className="mt-6 flex justify-center">
                  {/* Expand Button */}
                  <button 
                    onClick={() => {
                      const details = document.getElementById('branding-details');
                      const buttonText = document.getElementById('branding-expand-button-text');
                      const arrow = document.getElementById('branding-arrow');
                      if (details && buttonText && arrow) {
                        if (details.classList.contains('expanded-details')) {
                          details.classList.remove('expanded-details');
                          buttonText.textContent = 'Expand';
                          arrow.classList.remove('rotate-180');
                        } else {
                          details.classList.add('expanded-details');
                          buttonText.textContent = 'Collapse';
                          arrow.classList.add('rotate-180');
                        }
                      }
                    }}
                    id="branding-expand-button"
                    className="w-full px-4 py-2 bg-amber-500/5 hover:bg-amber-500/10 text-amber-500 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center justify-center"
                  >
                    <span id="branding-expand-button-text">Expand</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300" 
                      id="branding-arrow"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Detailed Information */}
                <div id="branding-details" className="space-y-4 pt-4 border-t border-gray-100 mt-6 overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-amber-500">100+</div>
                      <div className="text-xs text-gray-600">Brands Created</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-amber-500">4-6</div>
                      <div className="text-xs text-gray-600">Weeks Delivery</div>
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
      <section id="portfolio" className="py-20 relative overflow-hidden">
        {/* Particle Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/5" />
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of projects showcasing our expertise in web development, mobile apps, and AI solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout="position"
            transition={{
              layout: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
            }}
          >
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout="position"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ 
                    layout: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.3 },
                    y: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{
                      scale: hoveredProject === index ? 1.02 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-t-2xl overflow-hidden relative">
                      <motion.div 
                        className="w-full h-full relative"
                        animate={{
                          scale: hoveredProject === index ? 1.05 : 1,
                          y: hoveredProject === index ? -10 : 0,
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: [0.32, 0.72, 0, 1]
                        }}
                      >
                        {/* Dynamic Gradient Overlay */}
                        <motion.div 
                          className="absolute inset-0 opacity-60"
                          style={{
                            background: `linear-gradient(45deg, var(--${project.color}-500), var(--${project.color}-600))`,
                          }}
                          animate={{
                            opacity: hoveredProject === index ? 0.8 : 0.6
                          }}
                        />
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-${project.color}-500`}>
                            {project.category}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedProject(index)}
                            className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-gray-900 hover:bg-white transition-colors duration-300"
                          >
                            View Details
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-2"
                        animate={{
                          color: hoveredProject === index ? `rgb(var(--${project.color}-500))` : 'rgb(17, 24, 39)'
                        }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3,
                              delay: techIndex * 0.02,
                              ease: [0.32, 0.72, 0, 1]
                            }}
                            className={`px-2 py-1 rounded-md text-xs font-medium bg-${project.color}-500/10 text-${project.color}-500`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {projects[selectedProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-${projects[selectedProject].color}-500/10 text-${projects[selectedProject].color}-500`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              delay: 0.2,
              ease: [0.32, 0.72, 0, 1]
            }}
          >
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {showAllProjects ? 'Show Less' : 'View More Projects'}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: showAllProjects ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* DEBUG MARKER */}
      <div style={{ background: '#fbbf24', color: '#1e293b', padding: '16px', textAlign: 'center', fontWeight: 'bold', fontSize: '20px', borderRadius: '12px', margin: '32px 0' }}>
        DEBUG: Calculator Section Below
      </div>

      {/* Pricing Calculator Section */}
      <section className="py-16 flex flex-col items-center min-h-[80vh] bg-transparent">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 mt-2 tracking-tight underline decoration-blue-400/40 underline-offset-8">Calculate Your Price</h2>
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/80 flex flex-col lg:flex-row overflow-hidden border border-blue-100">
          {/* Left: Service Selection */}
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

              <div className="flex justify-end space-x-4">
                <button
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
    </main>
  );
}

function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<{[key: string]: boolean}>({});
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  const services = {
    "Web Development": {
      "Basic Website": { price: 100, description: "Simple responsive website" },
      "E-commerce Site": { price: 350, description: "Full online store with payment" },
      "Custom Web App": { price: 500, description: "Complex web application" },
      "Website design": { price: 50, description: "RESTful API services" },
      "Monthly Maintenance": { price: 15, description: "Monthly maintenance" }
    },
    "Mobile Development": {
      "iOS App": { price: 850, description: "Native iOS application" },
      "Android App": { price: 750, description: "Native Android application" },
      "Cross-platform App": { price: 900, description: "React Native/Flutter app" },
      "App Maintenance": { price: 100, description: "Monthly app maintenance" }
    },
    "AI & Machine Learning": {
      "AI Chatbot": { price: 80, description: "Intelligent chatbot system" },
      "Data Analysis": { price: 50, description: "Advanced data analytics" },
      "ML Model Development": { price: 850, description: "Custom ML models" },
      "AI Integration": { price: 75, description: "AI into existing systems" }
    },
    "Design & Branding": {
      "Logo Design": { price: 20, description: "Professional logo creation" },
      "UI/UX Design": { price: 50, description: "User interface design" },
      "Brand Identity": { price: 100, description: "Complete brand package" },
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
      <div className="w-full lg:w-1/2 p-10 flex flex-col gap-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-[600px]">
        {/* Large label area */}
        <div className="mb-6">
          <div className="w-full rounded-2xl bg-white/80 shadow-lg border border-blue-100 px-8 py-6 flex items-center justify-between">
            <span className="text-2xl font-semibold text-blue-900">Choose your service</span>
          </div>
        </div>
        {/* Scrollable service blocks */}
        <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: '420px' }}>
          <div className="flex flex-col gap-6">
            {Object.entries(services).map(([category, categoryServices], idx) => (
              <div
                key={category}
                className={`rounded-2xl px-6 py-5 flex flex-col gap-3 border-2 shadow-md transition-all duration-200
                  ${category === 'Web Development' ? 'bg-blue-50 border-blue-200' :
                    category === 'Mobile Development' ? 'bg-green-50 border-green-200' :
                    category === 'AI & Machine Learning' ? 'bg-purple-50 border-purple-200' :
                    category === 'Design & Branding' ? 'bg-pink-50 border-pink-200' :
                    'bg-white border-gray-200'}
                `}
              >
                <h3 className={`text-lg font-semibold mb-1
                  ${category === 'Web Development' ? 'text-blue-700' :
                    category === 'Mobile Development' ? 'text-green-700' :
                    category === 'AI & Machine Learning' ? 'text-purple-700' :
                    category === 'Design & Branding' ? 'text-pink-700' :
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
                            category === 'Mobile Development' ? 'bg-green-500 text-white border-green-500 shadow' :
                            category === 'AI & Machine Learning' ? 'bg-purple-500 text-white border-purple-500 shadow' :
                            category === 'Design & Branding' ? 'bg-pink-500 text-white border-pink-500 shadow' :
                            'bg-blue-500 text-white border-blue-500 shadow')
                          :
                          (category === 'Web Development' ? 'bg-white/70 text-blue-700 border-blue-200 hover:bg-blue-100' :
                            category === 'Mobile Development' ? 'bg-white/70 text-green-700 border-green-200 hover:bg-green-100' :
                            category === 'AI & Machine Learning' ? 'bg-white/70 text-purple-700 border-purple-200 hover:bg-purple-100' :
                            category === 'Design & Branding' ? 'bg-white/70 text-pink-700 border-pink-200 hover:bg-pink-100' :
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
      <div className="w-full lg:w-1/2 p-10 flex flex-col bg-white/90 border-l border-blue-100 min-h-[600px] justify-between">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 text-center border border-gray-300 rounded-xl py-3 w-full bg-white/80 shadow">INVOICE</h2>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
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
                  <div className="border-t border-gray-300 pt-3 mt-4 flex items-center justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        {getSelectedServicesList().length > 0 && (
          <div className="mt-8 flex gap-4 pt-6 border-t border-gray-200">
            <button 
              onClick={() => { setSelectedServices({}); setQuantities({}); }} 
              className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 text-lg shadow"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
} 
