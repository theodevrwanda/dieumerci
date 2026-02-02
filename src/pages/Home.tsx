import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowRight, Code, Network, Globe, Settings, Database, Shield, Lightbulb, Users,
  Layout, Palette, Code2, Terminal, Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SEOHead from '@/components/SEO/SEOHead';
import profileHero from '@/assets/profile-hero.jpg';
import techWorkspace from '@/assets/tech-workspace.jpg';

const Home = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Creating innovative software solutions tailored to community needs"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design",
      description: "Designing responsive websites with HTML, CSS, and JavaScript"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Configuration",
      description: "Expert network setup and configuration for optimal performance"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Software Installation",
      description: "Professional software installation and system setup services"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Digital Infrastructure",
      description: "Building and maintaining robust digital infrastructures"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "IT Know-how",
      description: "Comprehensive IT expertise and technical support"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovative Solutions",
      description: "Creating cutting-edge solutions for complex challenges"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tech Consultation",
      description: "Strategic technology consulting for businesses and individuals"
    }
  ];

  const skills = [
    { name: "HTML", icon: <Layout className="h-10 w-10 text-primary" /> },
    { name: "CSS", icon: <Palette className="h-10 w-10 text-primary" /> },
    { name: "JavaScript", icon: <Code2 className="h-10 w-10 text-primary" /> },
    { name: "Networking", icon: <Network className="h-10 w-10 text-primary" /> },
    { name: "Software Dev", icon: <Terminal className="h-10 w-10 text-primary" /> },
    { name: "IT Support", icon: <Wrench className="h-10 w-10 text-primary" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEOHead />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur-2xl opacity-20"></div>
                  <img
                    src={profileHero}
                    alt="Niyonsenga DieuMerci"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-muted-foreground">Hello there,</span>
                  <br />
                  <span className="text-primary">I'm DieuMerci</span>
                </h1>

                <div className="text-xl lg:text-2xl text-muted-foreground min-h-[60px]">
                  <TypeAnimation
                    sequence={[
                      'I am a software developer',
                      2000,
                      'I am an IT professional',
                      2000,
                      'I am a web designer',
                      2000,
                      'I am a network configurer',
                      2000,
                      'I am a versatile tech professional',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A dedicated web designer and software developer based in Rwanda, bringing innovative solutions
                  to life with expertise in software installation, network configuration, and comprehensive IT services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="group">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="lg">
                      View My Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <img
                  src={techWorkspace}
                  alt="Tech Workspace"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Niyonsenga DieuMerci, a dedicated web designer and software developer based in
                  Gihundwe Cell, Kamembe Sector, Rusizi District, Western Province, Rwanda. I bring a
                  robust skill set including expertise in software installation, network configuration,
                  and a wide range of IT know-how, making me a versatile professional in the tech field.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently enhancing my abilities as a student at Saint Martin Hanika College in
                  Nyamasheke District, diving deep into software development. My hands-on experience
                  is backed by a prestigious Certificate of Completion from Saltel Technical Training
                  & Innovation Center.
                </p>
                <Link to="/about">
                  <Button variant="outline">
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What Can I Do Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-4">
                What Can I Do
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I offer comprehensive IT services and solutions tailored to meet your technology needs
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-4">
                My Skills
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and expertise I work with
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group w-40"
                >
                  <Card className="p-6 text-center hover:bg-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3">
                    <div className="mb-2 p-3 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                      {skill.icon}
                    </div>
                    <p className="font-medium">{skill.name}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold">
                Let's Collaborate
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
                Ready to tackle complex challenges and bring your ideas to life.
                Let's work together to create innovative solutions for your technology needs.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;