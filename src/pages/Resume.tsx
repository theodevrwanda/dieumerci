import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import certificate from '@/assets/certificate.jpg';

const Resume = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    "Software Development", "Web Design", "HTML", "CSS", "JavaScript",
    "Network Configuration", "Software Installation", "IT Support",
    "Digital Infrastructure", "System Setup", "Technical Training"
  ];

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">My Resume</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive overview of my education, experience, and achievements
              in the technology and software development field.
            </p>
            <Button size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download PDF
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Resume Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Professional Summary */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Professional Summary
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dedicated web designer and software developer with comprehensive IT expertise,
                  based in Rwanda's Western Province. Skilled in software installation, network
                  configuration, and creating innovative technology solutions. Currently pursuing
                  advanced software development education while building practical experience
                  through professional internships and hands-on projects.
                </p>
              </Card>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Experience
                </h2>

                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Networking & Internet Technology Intern</h3>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        April - May 2025
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      Saltel Technical Training & Innovation Center
                    </p>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        Completed intensive internship program in Networking and Internet Technology,
                        earning Certificate of Completion for outstanding performance and practical
                        knowledge demonstration.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Gained hands-on experience in building and maintaining digital infrastructures</li>
                        <li>Developed expertise in network configuration and optimization</li>
                        <li>Demonstrated exceptional technical skills and problem-solving abilities</li>
                        <li>Applied theoretical knowledge to real-world networking scenarios</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/60 rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Freelance IT Professional</h3>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        Ongoing
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      Independent Practice
                    </p>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        Providing comprehensive IT services including software installation,
                        web design, and technical support to local community and businesses.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Design responsive websites using HTML, CSS, and JavaScript</li>
                        <li>Perform software installation and system configuration</li>
                        <li>Provide network setup and configuration services</li>
                        <li>Create innovative solutions tailored to community needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </h2>

                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Software Development Studies</h3>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        Current
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      Saint Martin Hanika College, Nyamasheke District
                    </p>
                    <p className="text-muted-foreground">
                      Currently enhancing abilities in software development, diving deep into
                      modern programming methodologies, software engineering principles, and
                      emerging technologies in the rapidly evolving tech landscape.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  Certifications
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          Certificate of Completion
                        </h3>
                        <p className="font-medium mb-2">
                          Saltel Technical Training & Innovation Center
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p><strong>Program:</strong> Networking and Internet Technology Internship</p>
                          <p><strong>Duration:</strong> April - May 2025</p>
                          <p><strong>Achievement:</strong> Outstanding Performance</p>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          This certification highlights exceptional practical knowledge in building
                          and maintaining digital infrastructures, demonstrating technical expertise
                          and professional competency in networking technologies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      src={certificate}
                      alt="Certificate of Completion"
                      className="w-full h-auto rounded-lg shadow-lg border"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="p-2 text-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">Let's Connect</h2>
                  <p className="text-muted-foreground">
                    Ready to tackle complex challenges and bring innovative ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <a href="tel:+250782663447">Call: +250 782 663 447</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/contact">Send Message</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;