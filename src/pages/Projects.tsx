import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Websites', 'Networking', 'Software', 'Released'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern responsive e-commerce website built with HTML, CSS, and JavaScript",
      category: "Websites",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Released",
      github: "#",
      live: "#"
    },
    {
      title: "Network Infrastructure Setup",
      description: "Complete network configuration for small business with 50+ devices",
      category: "Networking",
      image: "/placeholder.svg",
      technologies: ["Networking", "Router Config", "Security"],
      status: "Completed"
    },
    {
      title: "Inventory Management System",
      description: "Custom software solution for inventory tracking and management",
      category: "Software",
      image: "/placeholder.svg",
      technologies: ["Software Development", "Database"],
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "Professional portfolio website with modern design and animations",
      category: "Websites",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Released",
      github: "#",
      live: "#"
    },
    {
      title: "Campus Network Design",
      description: "Network architecture design and implementation for educational institution",
      category: "Networking",
      image: "/placeholder.svg",
      technologies: ["Network Design", "Infrastructure"],
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "Web-based task management application for team collaboration",
      category: "Software",
      image: "/placeholder.svg",
      technologies: ["Web Development", "JavaScript"],
      status: "Released",
      github: "#",
      live: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in web design, software development, networking solutions, 
              and innovative technology implementations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === 'Released' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to bring your technology ideas to life with innovative solutions 
              tailored to your specific needs.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;