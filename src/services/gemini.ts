import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  userInfo?: {
    name?: string;
    email?: string;
    serviceInterest?: string;
    previousConversations?: number;
  };
}

export class GeminiChatService {
  private model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  private conversationHistory: ChatMessage[] = [];
  private userContext: any = {};

  private ownerData = {
    name: "Niyonsenga DieuMerci",
    location: "Gihundwe Cell, Kamembe Sector, Rusizi District, Western Province, Rwanda",
    phone: "+250 782 663 447",
    email: "Niyonsengadieumercimiracle@gmail.com",
    education: "Student at Saint Martin Hanika College in Nyamasheke District, studying software development",
    certification: "Certificate of Completion from Saltel Technical Training & Innovation Center for Networking and Internet Technology internship (April-May 2025)",
    skills: ["software development", "web design", "HTML", "CSS", "JavaScript", "network configuration", "software installation", "IT support", "digital infrastructure"],
    services: ["software installation", "network configuration", "web design", "software development", "IT support", "digital infrastructure building", "innovative solutions"],
    experience: "Freelance IT professional providing comprehensive services, completed networking internship with outstanding performance",
    pricing: {
      "web design": "$300-800",
      "software development": "$500-2000",
      "network configuration": "$200-500",
      "IT support": "$50-100/hour"
    }
  };

  setUserContext(context: any) {
    this.userContext = { ...this.userContext, ...context };
  }

  getUserContext() {
    return this.userContext;
  }

  private buildSystemPrompt(): string {
    return `You are DieuMerci's AI assistant representing ${this.ownerData.name}. You help clients understand his services and facilitate business discussions.

OWNER INFORMATION (Use ONLY this data):
- Name: ${this.ownerData.name}
- Location: ${this.ownerData.location}  
- Phone: ${this.ownerData.phone}
- Email: ${this.ownerData.email}
- Education: ${this.ownerData.education}
- Certification: ${this.ownerData.certification}
- Skills: ${this.ownerData.skills.join(', ')}
- Services: ${this.ownerData.services.join(', ')}
- Experience: ${this.ownerData.experience}

PRICING GUIDANCE:
- Web Design: $300-800 (simple to complex sites)
- Software Development: $500-2000 (depending on complexity)
- Network Configuration: $200-500 (small to medium setups)
- IT Support: $50-100/hour

USER CONTEXT: ${JSON.stringify(this.userContext)}

INSTRUCTIONS:
1. Act as DieuMerci's professional representative
2. Help clients understand services and pricing
3. Collect client requirements for quotes
4. Facilitate deal-making and project discussions
5. Remember user information for personalized service
6. Encourage direct contact for detailed consultations
7. Stay within provided owner data - do not invent information
8. Be professional but friendly
9. Focus on solving client needs with DieuMerci's skills

If users inquire about services beyond the listed capabilities, politely redirect to DieuMerci's core services or suggest contacting him directly.`;
  }

  async sendMessage(message: string, userInfo?: any): Promise<string> {
    try {
      // Update user context if provided
      if (userInfo) {
        this.setUserContext(userInfo);
      }

      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: message,
        timestamp: new Date(),
        userInfo: this.userContext
      });

      // Build conversation context
      const conversationContext = this.conversationHistory
        .slice(-10) // Keep last 10 messages for context
        .map(msg => `${msg.role}: ${msg.content}`)
        .join('\n');

      const prompt = `${this.buildSystemPrompt()}

CONVERSATION HISTORY:
${conversationContext}

Current user message: ${message}

Respond as DieuMerci's assistant, helping the client with their inquiry.`;

      const result = await this.model.generateContent(prompt);
      const response = result.response.text();

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: response,
        timestamp: new Date()
      });

      return response;
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Sorry, I\'m having trouble responding right now. Please try again or contact DieuMerci directly at +250 782 663 447.');
    }
  }

  getConversationHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  clearHistory() {
    this.conversationHistory = [];
    this.userContext = {};
  }
}

export const geminiChatService = new GeminiChatService();