import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Niyonsengadieumercimiracle@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+250 782 663 447",
      action: "tel:+250782663447"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Gihundwe Cell, Kamembe Sector\nRusizi District, Western Province\nRwanda"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "Niyonsengadieumercimiracle@gmail.com",
      action: "mailto:Niyonsengadieumercimiracle@gmail.com"
    }
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next project? I'm here to help bring your
              technology ideas to life. Let's discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Feel free to reach out through any of the following channels. I'm always
                  excited to discuss new opportunities and innovative projects.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="text-xl font-semibold mb-3">Why Work With Me?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive IT expertise and technical knowledge</li>
                  <li>• Experience in software development and web design</li>
                  <li>• Proven network configuration and infrastructure skills</li>
                  <li>• Innovative solutions tailored to community needs</li>
                  <li>• Local expertise in Rwanda's technology landscape</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or how I can help you..."
                        rows={6}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For immediate responses, please call directly at +250 782 663 447.
                    I typically respond to messages within 24 hours during business days.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;