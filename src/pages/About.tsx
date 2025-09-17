import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award } from 'lucide-react';
import techWorkspace from '@/assets/tech-workspace.jpg';
import rwandaLandscape from '@/assets/rwanda-landscape.jpg';
import certificate from '@/assets/certificate.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Sub-Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate IT professional dedicated to creating innovative technology solutions 
              and building digital infrastructures in Rwanda's Western Province.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Images */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Large image */}
              <div className="relative">
                <img
                  src={rwandaLandscape}
                  alt="Rwanda Landscape"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Two smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={techWorkspace}
                  alt="Tech Environment"
                  className="w-full h-32 object-cover rounded-xl shadow-md"
                />
                <img
                  src={certificate}
                  alt="Professional Achievement"
                  className="w-full h-32 object-cover rounded-xl shadow-md"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm Niyonsenga DieuMerci, a dedicated web designer and software developer based in 
                    Gihundwe Cell, Kamembe Sector, Rusizi District, Western Province, Rwanda. I bring a 
                    robust skill set to the table, including expertise in software installation, network 
                    configuration, and a wide range of IT know-how, making me a versatile professional 
                    in the tech field.
                  </p>
                  
                  <p>
                    Currently, I'm enhancing my abilities as a student at Saint Martin Hanika College in 
                    Nyamasheke District, where I'm diving deep into software development. This ongoing 
                    education allows me to stay current with the latest technologies and methodologies 
                    in the rapidly evolving tech landscape.
                  </p>
                  
                  <p>
                    My hands-on experience is backed by a prestigious Certificate of Completion from 
                    Saltel Technical Training & Innovation Center, earned for completing an internship 
                    program in Networking and Internet Technology from April to May 2025. This achievement 
                    highlights my outstanding performance and practical knowledge in building and maintaining 
                    digital infrastructures.
                  </p>
                  
                  <p>
                    Whether it's designing responsive websites with HTML, CSS, and JavaScript or configuring 
                    networks, I'm passionate about creating innovative solutions tailored to community needs. 
                    Rooted in Rwanda's Western Province, I draw inspiration from my local environment to 
                    deliver impactful projects.
                  </p>
                </div>
              </div>

              {/* Key Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-secondary/50 border">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Location</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gihundwe Cell, Kamembe Sector<br />
                    Rusizi District, Western Province<br />
                    Rwanda
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary/50 border">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Education</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Student at Saint Martin Hanika College<br />
                    Nyamasheke District<br />
                    Software Development
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-secondary/50 border md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Certification</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Certificate of Completion - Saltel Technical Training & Innovation Center<br />
                    Networking and Internet Technology Internship Program<br />
                    April - May 2025 | Outstanding Performance
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">My Vision</h3>
                <p className="text-muted-foreground">
                  My technical prowess, combined with my ongoing education and internship experience, 
                  positions me as an emerging talent ready to tackle complex challenges. I'm passionate 
                  about leveraging technology to create meaningful impact in my community and beyond.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;