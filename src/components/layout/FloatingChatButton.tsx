import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingChatButton = () => {
  const location = useLocation();

  // Don't show on chat page
  if (location.pathname === '/chat') {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/250782663447?text=Hello%20DieuMerci%2C%20I%27m%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full shadow-lg animate-pulse-glow hover:scale-110 transition-transform duration-200 bg-[#25D366] hover:bg-[#128C7E] border-none text-white"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </a>
    </motion.div>
  );
};

export default FloatingChatButton;