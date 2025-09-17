import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, User, Bot, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { geminiChatService } from '@/services/gemini';

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
      content: "Hello! I'm DieuMerci's AI assistant. I can help you learn about his skills, experience, and services. Feel free to ask me anything about his work in software development, web design, networking, or IT services!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [ownerStatus] = useState<'online' | 'offline'>('online'); // Simulated status
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Owner data for AI responses
  const ownerData = {
    name: "Niyonsenga DieuMerci",
    location: "Gihundwe Cell, Kamembe Sector, Rusizi District, Western Province, Rwanda",
    phone: "+250 737 667 277",
    education: "Student at Saint Martin Hanika College in Nyamasheke District, studying software development",
    certification: "Certificate of Completion from Saltel Technical Training & Innovation Center for Networking and Internet Technology internship (April-May 2025)",
    skills: ["software development", "web design", "HTML", "CSS", "JavaScript", "network configuration", "software installation", "IT support", "digital infrastructure"],
    services: ["software installation", "network configuration", "web design", "software development", "IT support", "digital infrastructure building", "innovative solutions"],
    experience: "Freelance IT professional providing comprehensive services, completed networking internship with outstanding performance"
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    try {
      // Extract user info if available (simple extraction)
      const userInfo: any = {};
      
      // Simple name extraction
      const nameMatch = userMessage.match(/my name is (\w+)|i'm (\w+)|i am (\w+)/i);
      if (nameMatch) {
        userInfo.name = nameMatch[1] || nameMatch[2] || nameMatch[3];
      }
      
      // Simple email extraction  
      const emailMatch = userMessage.match(/[\w\.-]+@[\w\.-]+\.\w+/);
      if (emailMatch) {
        userInfo.email = emailMatch[0];
      }
      
      // Service interest detection
      if (userMessage.toLowerCase().includes('web') || userMessage.toLowerCase().includes('website')) {
        userInfo.serviceInterest = 'web design';
      } else if (userMessage.toLowerCase().includes('network')) {
        userInfo.serviceInterest = 'network configuration';
      } else if (userMessage.toLowerCase().includes('software')) {
        userInfo.serviceInterest = 'software development';
      }
      
      const response = await geminiChatService.sendMessage(userMessage, userInfo);
      return response;
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Fallback to simple responses if Gemini fails
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('skill') || lowerMessage.includes('what can you do')) {
        return `DieuMerci has expertise in ${ownerData.skills.join(', ')}. He's particularly skilled in building digital infrastructures and creating innovative solutions tailored to community needs.`;
      }
      
      if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
        return `You can reach DieuMerci at ${ownerData.phone} or email him at Niyonsengadieumercimiracle@gmail.com. He's based in ${ownerData.location}.`;
      }
      
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
        return `For pricing information, please contact DieuMerci directly at ${ownerData.phone} or Niyonsengadieumercimiracle@gmail.com. He'll provide a custom quote based on your specific project requirements.`;
      }
      
      // Default fallback
      return `I'm having trouble connecting to the AI service right now. Please contact DieuMerci directly at ${ownerData.phone} or Niyonsengadieumercimiracle@gmail.com for immediate assistance with your ${userMessage.toLowerCase().includes('web') ? 'web design' : userMessage.toLowerCase().includes('network') ? 'network' : 'IT'} needs.`;
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
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiResponse = await generateAIResponse(inputMessage);
      
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
        description: "Sorry, I'm having trouble responding right now. Please try again.",
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
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">DieuMerci's Assistant</h2>
                <div className="flex items-center gap-2">
                  <Badge variant={ownerStatus === 'online' ? 'default' : 'secondary'} className="text-xs">
                    Owner {ownerStatus}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <a href="tel:+250737667277">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call DieuMerci
            </Button>
          </a>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.isUser ? 'bg-primary' : 'bg-secondary'
              }`}>
                {message.isUser ? (
                  <User className="h-4 w-4 text-primary-foreground" />
                ) : (
                  <Bot className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              
              <Card className={`p-3 ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.isUser 
                    ? 'text-primary-foreground/70' 
                    : 'text-muted-foreground'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </Card>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-muted-foreground" />
              </div>
              <Card className="p-3 bg-card">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about DieuMerci's skills, services, or experience..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputMessage.trim() || isTyping}
            className="px-3"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This AI assistant provides information about DieuMerci's services and expertise. 
          For direct consultation, call +250 737 667 277.
        </p>
      </div>
    </div>
  );
};

export default Chat;