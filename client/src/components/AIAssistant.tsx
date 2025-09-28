import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

// TODO: Replace with actual OpenAI integration for production
const AI_RESPONSES = {
  greeting: "Hello! I'm Muhammad's AI assistant. I can help answer questions about his GoHighLevel services, experience, and how he can help your business. What would you like to know?",
  services: "Muhammad offers comprehensive GoHighLevel services including:\n\n• Custom GHL setup and configuration\n• Marketing automation workflows\n• Custom coding and API integrations\n• Lead generation systems\n• Business process optimization\n• Front-end development\n\nWhich service interests you most?",
  pricing: "Muhammad's hourly rate is $40/hr. Project pricing varies based on complexity:\n\n• Basic GHL setup: Starting at $500\n• Custom development: Starting at $800\n• Marketing automation: Starting at $400\n• Full business optimization: Starting at $700\n\nWould you like a custom quote for your specific needs?",
  experience: "Muhammad has 4+ years of GoHighLevel expertise with:\n\n• 50+ successful projects completed\n• 95% client retention rate\n• Expertise in custom coding, automation, and optimization\n• Based in Pakistan, working with global clients\n• Specializes in results-driven solutions\n\nWhat specific experience would you like to know about?",
  contact: "Ready to get started? Here are the best ways to reach Muhammad:\n\n• Fill out the contact form on this page for detailed project discussions\n• Email: daud@ghlexpert.com\n• Response time: Usually within 12-24 hours\n\nFor urgent projects, mention it in your message. Would you like me to help you with anything else?",
  default: "I'd be happy to help you learn more about Muhammad's GoHighLevel services. You can ask me about:\n\n• His services and expertise\n• Pricing and project timelines\n• Previous client results\n• How to get started\n\nWhat would you like to know?"
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat is first opened
      const welcomeMessage: Message = {
        id: "welcome",
        content: AI_RESPONSES.greeting,
        sender: "assistant",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("service") || message.includes("what do") || message.includes("help")) {
      return AI_RESPONSES.services;
    }
    if (message.includes("price") || message.includes("cost") || message.includes("rate") || message.includes("budget")) {
      return AI_RESPONSES.pricing;
    }
    if (message.includes("experience") || message.includes("expert") || message.includes("years") || message.includes("portfolio")) {
      return AI_RESPONSES.experience;
    }
    if (message.includes("contact") || message.includes("reach") || message.includes("hire") || message.includes("get started")) {
      return AI_RESPONSES.contact;
    }
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return AI_RESPONSES.greeting;
    }
    
    return AI_RESPONSES.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          data-testid="button-open-chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -left-2 w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
        >
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-80 shadow-xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
        <CardHeader className="p-4 border-b border-card-border flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="AI Assistant" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-chart-2 rounded-full border-2 border-background"></div>
            </div>
            <div>
              <CardTitle className="text-sm">AI Assistant</CardTitle>
              <p className="text-xs text-muted-foreground">Ask about GHL services</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6"
              data-testid="button-minimize-chat"
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
              data-testid="button-close-chat"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "assistant" && (
                    <Avatar className="h-6 w-6 mt-1">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-xs p-2 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground ml-4"
                        : "bg-muted text-muted-foreground mr-4"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="h-6 w-6 mt-1">
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <Avatar className="h-6 w-6 mt-1">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      <Bot className="h-3 w-3" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted text-muted-foreground p-2 rounded-lg text-sm max-w-xs mr-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-card-border p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about GoHighLevel services..."
                  className="flex-1 text-sm"
                  data-testid="input-chat-message"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="h-9 w-9"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}