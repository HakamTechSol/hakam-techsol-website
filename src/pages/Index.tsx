// Hakam TechSoul Home Page
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Users, CheckCircle, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";
import logo from "@/assets/logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  },
};

const circuitLines = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut" as const,
      delay: 0.3
    }
  },
};

const Index = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      image: webDevImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional experiences.",
      image: mobileDevImage,
    },
    {
      icon: Users,
      title: "Freelancing",
      description: "Expert freelance developers ready to bring your vision to life.",
      image: freelanceImage,
    },
  ];

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Shield, text: "Secure Solutions" },
    { icon: Star, text: "Quality First" },
    { icon: CheckCircle, text: "24/7 Support" },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Technology innovation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary text-accent font-medium text-sm">
                  🚀 Welcome to the Future of Tech
                </span>
              </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            >
              Transforming Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              At Hakam TechSoul, we craft innovative technology solutions that empower
              businesses to thrive in the digital age. Your vision, our expertise.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 hover:scale-105 transition-all gap-2">
                  Start Your Project <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Quick Features */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border"
            >
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-muted-foreground">
                  <Icon size={18} className="text-accent" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

            {/* Right side - Animated Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Animated circuit lines background */}
                <motion.svg
                  className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)]"
                  viewBox="0 0 400 400"
                  initial="hidden"
                  animate="visible"
                >
                  {/* Left circuit lines */}
                  <motion.path
                    d="M50 200 H120 L140 180 H160"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    fill="none"
                    variants={circuitLines}
                  />
                  <motion.path
                    d="M30 220 H100 L120 200 H150"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    fill="none"
                    variants={circuitLines}
                    style={{ transitionDelay: "0.2s" }}
                  />
                  <motion.path
                    d="M60 180 H110 L130 160 H155"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                    variants={circuitLines}
                  />
                  
                  {/* Right circuit lines */}
                  <motion.path
                    d="M350 200 H280 L260 180 H240"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    fill="none"
                    variants={circuitLines}
                  />
                  <motion.path
                    d="M370 220 H300 L280 200 H250"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    fill="none"
                    variants={circuitLines}
                  />
                  <motion.path
                    d="M340 180 H290 L270 160 H245"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.6"
                    variants={circuitLines}
                  />

                  {/* Nodes/dots at line ends */}
                  <motion.circle
                    cx="50"
                    cy="200"
                    r="4"
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                  <motion.circle
                    cx="350"
                    cy="200"
                    r="4"
                    fill="hsl(var(--accent))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                  <motion.circle
                    cx="30"
                    cy="220"
                    r="3"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                  />
                  <motion.circle
                    cx="370"
                    cy="220"
                    r="3"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                  />
                </motion.svg>

                {/* Glowing background */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent/20 blur-3xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3], 
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Logo container with reveal animation */}
                <motion.div
                  variants={logoReveal}
                  className="relative z-10 p-8"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/20"
                  >
                    <motion.img
                      src={logo}
                      alt="Hakam TechSol Logo"
                      className="w-64 h-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${10 + (i % 3) * 30}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1.2, 0.8],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2 + (i * 0.3),
                      repeat: Infinity,
                      delay: 1 + (i * 0.15),
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We deliver comprehensive technology solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                Technology That Drives{" "}
                <span className="text-gradient">Success</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative thinking to deliver
                solutions that not only meet but exceed your expectations. Our
                commitment to quality and innovation sets us apart.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with years of industry experience",
                  "Cutting-edge technologies and best practices",
                  "Transparent communication throughout projects",
                  "Ongoing support and maintenance services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-8">
                <Button className="bg-hero-gradient hover:opacity-90 gap-2">
                  About Our Company <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={webDevImage}
                  alt="Professional workspace"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Zap className="text-accent-foreground" size={24} />
                    </div>
                    <div>
                      <p className="font-display font-semibold">100+ Projects Delivered</p>
                      <p className="text-sm text-muted-foreground">Across multiple industries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-hero-gradient rounded-2xl -z-10 opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10 opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your ideas to life. Get in touch with us today
              and start your digital transformation journey.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 gap-2"
              >
                Get Started Today <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
