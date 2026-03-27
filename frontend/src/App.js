import "@/App.css";
import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  History, 
  Scissors, 
  BarChart3, 
  Package,
  MessageCircle,
  Mail,
  Clock,
  Smartphone,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Button } from "./components/ui/button";

// Configuration
const CONFIG = {
  whatsapp: "https://app.barberoscontrol.com/register",
  login: "https://app.barberoscontrol.com/",
};

// Screenshots data
const SCREENSHOTS = [
  {
    id: 1,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/t0xdw5yh_Captura%20de%20pantalla%202026-03-24%20162652.png",
    title: "Dashboard",
    description: "Resumen completo de tu barbería en tiempo real"
  },
  {
    id: 2,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/zgnzh3jb_Captura%20de%20pantalla%202026-03-24%20162719.png",
    title: "Nuevo Servicio",
    description: "Registra servicios en segundos con un flujo intuitivo"
  },
  {
    id: 3,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/guya8x7i_Captura%20de%20pantalla%202026-03-24%20162742.png",
    title: "Historial",
    description: "Accede al historial completo de servicios y ventas"
  },
  {
    id: 4,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/c0emrepk_Captura%20de%20pantalla%202026-03-24%20162805.png",
    title: "Clientes",
    description: "Base de datos de clientes con métricas detalladas"
  },
  {
    id: 5,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/ib3z3fc8_Captura%20de%20pantalla%202026-03-24%20162922.png",
    title: "Turnos",
    description: "Agenda visual por barbero, día y semana"
  },
  {
    id: 6,
    image: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/pfbhe45t_Captura%20de%20pantalla%202026-03-24%20162954.png",
    title: "Caja",
    description: "Control de caja y liquidación por barbero"
  },
];

// Features data
const FEATURES = [
  {
    icon: Calendar,
    title: "Reservas Online 24/7",
    description: "Tus clientes reservan cuando quieran. Vos recibís el turno confirmado.",
    span: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    icon: Users,
    title: "Gestión de Clientes",
    description: "Base de datos completa con historial de visitas, gastos y preferencias.",
    span: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    icon: History,
    title: "Historial Completo",
    description: "Consultá todos los servicios y ventas realizados con filtros avanzados.",
    span: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    icon: Scissors,
    title: "Control de Servicios",
    description: "Administrá los servicios que ofrecés con precios y duraciones.",
    span: "col-span-12 md:col-span-6 lg:col-span-6"
  },
  {
    icon: Package,
    title: "Inventario y Ventas",
    description: "Llevá el control de productos y registrá ventas fácilmente.",
    span: "col-span-12 md:col-span-6 lg:col-span-6"
  },
  {
    icon: BarChart3,
    title: "Métricas del Negocio",
    description: "Estadísticas de ingresos, servicios por barbero y rendimiento general.",
    span: "col-span-12"
  },
];

// Benefits data
const BENEFITS = [
  {
    icon: MessageCircle,
    title: "Avisos por WhatsApp",
    description: "Recordatorios automáticos el día anterior del turno"
  },
  {
    icon: Mail,
    title: "Emails de Confirmación",
    description: "Confirmación instantánea de reservas por email"
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Reservas online mientras vos descansás"
  },
  {
    icon: Smartphone,
    title: "Desde Cualquier Dispositivo",
    description: "Accedé desde tu celular, tablet o computadora"
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Logo Component
const Logo = ({ size = "default" }) => {
  const textSize = size === "large" ? "text-4xl sm:text-5xl lg:text-6xl" : size === "small" ? "text-lg sm:text-xl" : "text-xl sm:text-2xl";
  return (
    <span className={`font-black tracking-tight ${textSize} whitespace-nowrap`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      Barberos<span className="text-orange-500">Control</span>
    </span>
  );
};

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 px-4' 
          : 'py-4 px-6'
      }`}
    >
      <div className={`transition-all duration-500 ${
        scrolled 
          ? 'max-w-fit mx-auto bg-white border border-zinc-200 rounded-full px-4 sm:px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]' 
          : 'max-w-7xl mx-auto glass rounded-none sm:rounded-2xl px-4 sm:px-6 py-3'
      }`}>
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo with color inversion */}
          <span className={`font-black tracking-tight whitespace-nowrap transition-colors duration-500 ${scrolled ? 'text-lg sm:text-xl text-zinc-900' : 'text-xl sm:text-2xl text-white'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
            Barberos<span className="text-orange-500">Control</span>
          </span>
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href={CONFIG.login}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-login-link"
              className={`font-medium hidden sm:block transition-colors duration-500 ${
                scrolled 
                  ? 'text-zinc-600 hover:text-zinc-900 text-xs' 
                  : 'text-zinc-400 hover:text-white text-sm'
              }`}
            >
              Iniciar Sesión
            </a>
            <a 
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-button"
            >
              <Button className={`rounded-full font-semibold transition-all hover:scale-105 ${
                scrolled 
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 text-xs shadow-lg' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2 text-sm glow-orange'
              }`}>
                Probar Gratis
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero images
const HERO_IMAGES = {
  phone: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/839n6bm8_image.png",
  desktop: "https://customer-assets.emergentagent.com/job_saas-barbers/artifacts/ma2wzelk_image.png"
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-orange-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs mb-4 sm:mb-6"
            >
              Sistema de Gestión para Barberías
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Control total de tu barbería.{" "}
              <span className="text-orange-500">En piloto automático.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              El sistema premium para barberos que buscan escalar. Automatiza reservas, gestiona clientes y domina tus métricas.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a 
                href={CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-button"
                className="w-full sm:w-auto"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold glow-orange transition-transform hover:scale-105 w-full">
                  Probar Gratis
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
              <a 
                href={CONFIG.login}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-login-button"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  className="border-zinc-700 text-white hover:bg-zinc-800 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold transition-transform hover:scale-105 w-full"
                >
                  Iniciar Sesión
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side - iPhone + Desktop Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0 flex justify-center items-center min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-orange-500/15 blur-[100px] rounded-full scale-75" />
            
            {/* Desktop/Laptop mockup - Behind */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10 ml-16 sm:ml-20 lg:ml-24"
            >
              {/* Laptop frame */}
              <div className="relative">
                {/* Screen */}
                <div className="bg-zinc-800 rounded-t-lg sm:rounded-t-xl p-0.5 sm:p-1 shadow-2xl">
                  <div className="bg-zinc-900 rounded-md sm:rounded-lg overflow-hidden">
                    {/* Browser bar */}
                    <div className="bg-zinc-800 px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1 sm:gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 bg-zinc-700 rounded px-2 py-0.5 text-center">
                        <span className="text-[8px] sm:text-[10px] text-zinc-400">app.barberoscontrol.com</span>
                      </div>
                    </div>
                    <img 
                      src={HERO_IMAGES.desktop}
                      alt="BarberosControl Login"
                      className="w-[200px] sm:w-[280px] lg:w-[380px] aspect-[4/3] object-cover object-center"
                      data-testid="hero-desktop-image"
                    />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="bg-zinc-700 h-2 sm:h-3 rounded-b-lg sm:rounded-b-xl mx-4 sm:mx-8" />
                <div className="bg-zinc-600 h-0.5 sm:h-1 rounded-b-md sm:rounded-b-lg mx-8 sm:mx-16" />
              </div>
            </motion.div>
            
            {/* iPhone mockup - Front/Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute left-0 sm:left-4 lg:left-8 bottom-0 z-20"
            >
              {/* iPhone frame */}
              <div className="relative">
                {/* Phone body */}
                <div className="bg-zinc-900 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-1 sm:p-1.5 lg:p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 left-1/2 -translate-x-1/2 w-14 sm:w-20 lg:w-24 h-4 sm:h-5 lg:h-6 bg-black rounded-full z-30" />
                  {/* Screen */}
                  <div className="bg-black rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                    <img 
                      src={HERO_IMAGES.phone}
                      alt="Turno Confirmado"
                      className="w-[120px] sm:w-[150px] lg:w-[180px] aspect-[9/19] object-cover object-top"
                      data-testid="hero-phone-image"
                    />
                  </div>
                </div>
                {/* Side buttons - hidden on small screens */}
                <div className="hidden sm:block absolute right-[-2px] top-16 lg:top-24 w-0.5 lg:w-1 h-6 lg:h-8 bg-zinc-700 rounded-l" />
                <div className="hidden sm:block absolute left-[-2px] top-14 lg:top-20 w-0.5 lg:w-1 h-4 lg:h-6 bg-zinc-700 rounded-r" />
                <div className="hidden sm:block absolute left-[-2px] top-20 lg:top-28 w-0.5 lg:w-1 h-8 lg:h-10 bg-zinc-700 rounded-r" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Carousel Section - Showcase Style
const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [direction, setDirection] = React.useState(1); // 1 = forward, -1 = backward

  // Auto-rotate - 2 seconds when not hovered
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((activeIndex + SCREENSHOTS.length - 1) % SCREENSHOTS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((activeIndex + 1) % SCREENSHOTS.length);
  };

  // Animation variants for slide effect
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
    }),
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-orange-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 px-4 sm:px-6"
      >
        <p className="text-orange-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4">
          Interfaz Premium
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Diseñado para la eficiencia
        </h2>
      </motion.div>
      
      {/* Main showcase */}
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop: 3 screens display */}
        <div className="hidden lg:flex items-center justify-center gap-6" style={{ perspective: "1500px" }}>
          {/* Left screen */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[280px] flex-shrink-0 cursor-pointer"
            onClick={handlePrev}
            style={{ transform: "rotateY(15deg)" }}
          >
            <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl opacity-60 hover:opacity-80 transition-opacity">
              <div className="bg-zinc-800 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-[10px] text-zinc-500 truncate">
                  app.barberoscontrol.com
                </div>
              </div>
              <img 
                src={SCREENSHOTS[(activeIndex + SCREENSHOTS.length - 1) % SCREENSHOTS.length].image}
                alt="Previous"
                className="w-full aspect-[4/3] object-cover object-top"
              />
            </div>
          </motion.div>
          
          {/* Center screen - Main with animation */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[600px] flex-shrink-0 z-10"
          >
            <div className="bg-zinc-900 rounded-3xl border-2 border-orange-500/30 overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.2)]">
              <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-zinc-700 rounded-lg px-4 py-1.5 text-center">
                  <span className="text-xs text-zinc-400">app.barberoscontrol.com</span>
                </div>
              </div>
              <div className="relative overflow-hidden aspect-[16/10]">
                <motion.img 
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                  }}
                  src={SCREENSHOTS[activeIndex].image}
                  alt={SCREENSHOTS[activeIndex].title}
                  className="w-full h-full object-cover object-top absolute inset-0"
                  data-testid="main-showcase-image"
                />
              </div>
            </div>
            <motion.div 
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mt-6"
            >
              <h3 className="text-2xl font-bold mb-2 text-orange-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {SCREENSHOTS[activeIndex].title}
              </h3>
              <p className="text-zinc-400">
                {SCREENSHOTS[activeIndex].description}
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right screen */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[280px] flex-shrink-0 cursor-pointer"
            onClick={handleNext}
            style={{ transform: "rotateY(-15deg)" }}
          >
            <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl opacity-60 hover:opacity-80 transition-opacity">
              <div className="bg-zinc-800 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-[10px] text-zinc-500 truncate">
                  app.barberoscontrol.com
                </div>
              </div>
              <img 
                src={SCREENSHOTS[(activeIndex + 1) % SCREENSHOTS.length].image}
                alt="Next"
                className="w-full aspect-[4/3] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Mobile/Tablet: Single screen with swipe */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[500px] mx-auto"
          >
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl border border-orange-500/30 overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.15)]">
              <div className="bg-zinc-800 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-zinc-700 rounded-md px-2 py-1 text-center">
                  <span className="text-[10px] text-zinc-400">app.barberoscontrol.com</span>
                </div>
              </div>
              <div className="relative overflow-hidden aspect-[16/10]">
                <motion.img 
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                  }}
                  src={SCREENSHOTS[activeIndex].image}
                  alt={SCREENSHOTS[activeIndex].title}
                  className="w-full h-full object-cover object-top absolute inset-0"
                />
              </div>
            </div>
            <motion.div 
              key={`mobile-text-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-4 sm:mt-6"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-orange-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {SCREENSHOTS[activeIndex].title}
              </h3>
              <p className="text-zinc-400 text-sm">
                {SCREENSHOTS[activeIndex].description}
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {SCREENSHOTS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              data-testid={`carousel-dot-${index}`}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-orange-500 w-6 sm:w-8' 
                  : 'bg-zinc-600 hover:bg-zinc-500 w-2 sm:w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section (Bento Grid)
const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-orange-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4">
            Funcionalidades
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Todo lo que necesitas, sin la complejidad
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Herramientas diseñadas específicamente para barberías que quieren crecer
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-zinc-900/40 rounded-2xl border border-white/5 p-6 sm:p-8 hover:border-orange-500/30 transition-colors group ${index === 5 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
              data-testid={`feature-card-${index}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500/20 transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-orange-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4">
            Beneficios
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Diseñado para hacerte crecer
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Automatiza las tareas repetitivas y enfocate en lo que mejor sabés hacer
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 sm:p-8 text-center hover:border-orange-500/30 transition-colors"
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {benefit.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional info cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="bg-zinc-900/60 rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Más organización, menos caos
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Todo en un solo lugar. Dejá de usar agendas de papel, grupos de WhatsApp y planillas de Excel.
              </p>
            </div>
          </div>
          
          <div className="bg-zinc-900/60 rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Decisiones basadas en datos
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Conocé tus números reales: ingresos, servicios más pedidos, barberos más productivos y más.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-orange-500/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs mb-4 sm:mb-6">
            Empezá Ahora
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Lleva tu barbería al{" "}
            <span className="text-orange-500">siguiente nivel</span>
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Únete a los barberos que ya digitalizaron su negocio. Probá BarberosControl gratis y descubrí lo fácil que es tener el control total.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-button"
              className="w-full sm:w-auto"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold glow-orange transition-transform hover:scale-105 w-full">
                <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Contactar por WhatsApp
              </Button>
            </a>
            <a 
              href={CONFIG.login}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-login-button"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                className="border-zinc-700 text-white hover:bg-zinc-800 rounded-full px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-transform hover:scale-105 w-full"
              >
                Iniciar Sesión
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <Logo />
          <p className="text-zinc-500 text-xs sm:text-sm order-3 md:order-2">
            © {new Date().getFullYear()} BarberosControl. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 order-2 md:order-3">
            <a 
              href={CONFIG.login}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm"
              data-testid="footer-login-link"
            >
              Iniciar Sesión
            </a>
            <a 
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm"
              data-testid="footer-contact-link"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <CarouselSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
