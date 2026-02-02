import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Phone, Video, Info, Image, Mic, Camera, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { geminiChatService } from '@/services/gemini';
import profileHero from '@/assets/profile-hero.jpg';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! 👋 I'm DieuMerci's AI assistant. Ask me anything about his software development skills, prices, or experience!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Owner data for AI responses (Keeping logic same, just UI update)
  const ownerData = {
    name: "Niyonsenga DieuMerci",
    location: "Kigali, Rwanda",
    phone: "+250 737 667 277",
    skills: ["software development", "web design", "networking"],
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      // Basic context passing
      const userInfo: any = {};
      return await geminiChatService.sendMessage(userMessage, userInfo);
    } catch (error) {
      console.error('Gemini API Error:', error);
      return `I'm having trouble connecting right now. Please call DieuMerci directly at ${ownerData.phone}.`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Creating 'thinking' delay
      const aiResponse = await generateAIResponse(userMessage.content);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      {/* Instagram Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-black/95 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <Link to="/">
            <ArrowLeft className="h-6 w-6 text-white cursor-pointer" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profileHero}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-neutral-700"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
            </div>
            <div>
              <h1 className="font-semibold text-sm">DieuMerci</h1>
              <p className="text-xs text-neutral-400">Active now</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white">
          <a href="https://wa.me/250737667277" target="_blank" rel="noopener noreferrer">
            <Phone className="h-6 w-6 cursor-pointer hover:text-neutral-300 transition-colors" />
          </a>
          <a href="https://wa.me/250737667277" target="_blank" rel="noopener noreferrer">
            <Video className="h-6 w-6 cursor-pointer hover:text-neutral-300 transition-colors" />
          </a>
          <Info className="h-6 w-6 cursor-pointer hover:text-neutral-300 transition-colors" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-black">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center py-8 space-y-2 text-center opacity-50">
          <img
            src={profileHero}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
          <h3 className="font-bold text-lg">Niyonsenga DieuMerci</h3>
          <p className="text-sm">Software Developer • Rwanda</p>
          <p className="text-xs text-neutral-500">You're chatting with an AI assistant.</p>
        </div>

        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-1`}
          >
            {!message.isUser && (
              <img
                src={profileHero}
                alt="Bot"
                className="w-7 h-7 rounded-full object-cover mr-2 self-end mb-1"
              />
            )}

            <div className={`max-w-[75%] px-4 py-2 text-[15px] leading-snug break-words ${message.isUser
              ? 'bg-blue-600 text-white rounded-[22px] rounded-br-[4px]' // User Bubble
              : 'bg-neutral-800 text-white rounded-[22px] rounded-bl-[4px]' // Bot Bubble
              }`}>
              {message.content}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex justify-start items-end gap-2 mb-2">
            <img
              src={profileHero}
              alt="Bot"
              className="w-7 h-7 rounded-full object-cover mb-1"
            />
            <div className="bg-neutral-800 rounded-[22px] px-4 py-3 rounded-bl-[4px]">
              <div className="flex space-x-1 h-2 items-center">
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Instagram Input */}
      <div className="p-4 bg-black">
        <div className="flex items-center gap-3 bg-neutral-900 rounded-full px-2 py-1.5 border border-neutral-800">
          <div className="p-2 bg-blue-600 rounded-full cursor-pointer hover:opacity-90 transition-opacity ml-1">
            <Camera className="h-5 w-5 text-white" />
          </div>

          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message..."
            className="flex-1 bg-transparent border-none text-white placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
            disabled={isTyping}
          />

          {!inputMessage.trim() ? (
            <div className="flex items-center gap-3 mr-3 text-white">
              <Mic className="h-6 w-6 cursor-pointer hover:text-neutral-300" />
              <Image className="h-6 w-6 cursor-pointer hover:text-neutral-300" />
              <Heart className="h-6 w-6 cursor-pointer hover:text-neutral-300" />
            </div>
          ) : (
            <Button
              onClick={handleSendMessage}
              variant="ghost"
              className="text-blue-500 font-semibold hover:text-white hover:bg-transparent mr-2"
            >
              Send
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;