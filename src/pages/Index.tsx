import { useState } from "react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m your virtual assistant. How can I help you hire your dream AI team today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = { type: 'user', text: inputMessage };
    setChatMessages([...chatMessages, newMessage]);
    setInputMessage('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = { 
        type: 'bot', 
        text: 'Thank you for your message! Our team will get back to you shortly with a customized solution for your business needs.' 
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00FF88] to-[#00FFB3] bg-clip-text text-transparent font-mono tracking-wide">
                My Virtual Employee
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#agents" className="text-gray-400 hover:text-white transition">Agents</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a>
              <a href="#contact" className="bg-[#00FF88] text-black font-semibold px-6 py-2 rounded-full hover:shadow-[0_0_30px_#00FF88] transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF88] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FFB3] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Hire Your Dream <span className="bg-gradient-to-r from-[#00FF88] to-[#00FFB3] bg-clip-text text-transparent">Team</span> with one click
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                What if your best employees could clone themselves and work around the clock? Our AI workforce handles the workload of 15+ full-time employees for the cost of 1, delivering superhuman productivity without the human limitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#00FF88] text-black font-bold rounded-full hover:shadow-[0_0_40px_#00FF88] transition-all duration-300">
                  Start Free Consultation
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#00FF88] text-[#00FF88] font-semibold rounded-full hover:bg-[#00FF88] hover:text-black transition-all duration-300">
                  See Pricing
                </a>
              </div>
            </div>
            
            {/* Virtual Employee Animation */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="relative">
                {/* Central Hub */}
                <div className="w-20 h-20 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-black font-bold">HQ</span>
                </div>
                
                {/* Surrounding Agents */}
                <div className="absolute -top-16 -left-16 w-12 h-12 bg-[#00FF88] rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s'}}>
                  <span className="text-black text-xs font-bold">JA</span>
                </div>
                <div className="absolute -top-16 -right-16 w-12 h-12 bg-[#00FFB3] rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                  <span className="text-black text-xs font-bold">AL</span>
                </div>
                <div className="absolute -bottom-16 -left-16 w-12 h-12 bg-[#00FFB3] rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="text-black text-xs font-bold">IA</span>
                </div>
                <div className="absolute -bottom-16 -right-16 w-12 h-12 bg-[#00FF88] rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s'}}>
                  <span className="text-black text-xs font-bold">TI</span>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <line x1="100" y1="100" x2="50" y2="50" stroke="#00FF88" strokeWidth="2" className="animate-pulse" />
                    <line x1="100" y1="100" x2="150" y2="50" stroke="#00FFB3" strokeWidth="2" className="animate-pulse" />
                    <line x1="100" y1="100" x2="50" y2="150" stroke="#00FFB3" strokeWidth="2" className="animate-pulse" />
                    <line x1="100" y1="100" x2="150" y2="150" stroke="#00FF88" strokeWidth="2" className="animate-pulse" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="agents" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] bg-clip-text text-transparent">
            Meet Your Virtual Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* James - Research Agent */}
            <div className="bg-black/50 border border-[#00FF88]/20 rounded-2xl p-6 hover:border-[#00FF88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-bold text-xl">JA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00FF88]">James</h3>
              <p className="text-gray-400 mb-4">Research Specialist</p>
              <p className="text-gray-300">Advanced research capabilities, data analysis, and comprehensive market intelligence gathering.</p>
            </div>

            {/* Alex - Sales Agent */}
            <div className="bg-black/50 border border-[#00FFB3]/20 rounded-2xl p-6 hover:border-[#00FFB3] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,179,0.3)]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FFB3] to-[#00FF88] rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-bold text-xl">AL</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00FFB3]">Alex</h3>
              <p className="text-gray-400 mb-4">Sales Specialist</p>
              <p className="text-gray-300">Lead generation, customer engagement, and automated sales funnel management.</p>
            </div>

            {/* Maya - Central Hub */}
            <div className="bg-black/50 border border-[#00FF88]/20 rounded-2xl p-6 hover:border-[#00FF88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-bold text-xl">HQ</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00FF88]">Maya</h3>
              <p className="text-gray-400 mb-4">Central Coordinator</p>
              <p className="text-gray-300">Project management, workflow coordination, and team synchronization.</p>
            </div>

            {/* Ian - Data Analyst */}
            <div className="bg-black/50 border border-[#00FFB3]/20 rounded-2xl p-6 hover:border-[#00FFB3] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,179,0.3)]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FFB3] to-[#00FF88] rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-bold text-xl">IA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00FFB3]">Ian</h3>
              <p className="text-gray-400 mb-4">Data Analyst</p>
              <p className="text-gray-300">Business intelligence, analytics reporting, and data-driven insights.</p>
            </div>

            {/* Tiffany - Support */}
            <div className="bg-black/50 border border-[#00FF88]/20 rounded-2xl p-6 hover:border-[#00FF88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-bold text-xl">TI</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#00FF88]">Tiffany</h3>
              <p className="text-gray-400 mb-4">Support Specialist</p>
              <p className="text-gray-300">Customer support, troubleshooting, and user experience optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00FF88] to-[#00FFB3] bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#00FF88]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> 2 Virtual Employees</li>
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> Basic Integration</li>
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> Email Support</li>
              </ul>
              <button className="w-full bg-[#00FF88] text-black font-bold py-3 rounded-full hover:shadow-[0_0_20px_#00FF88] transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#111111] border-2 border-[#00FF88] rounded-2xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00FF88] text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$2,499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> 5 Virtual Employees</li>
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> Advanced Integration</li>
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> Priority Support</li>
                <li className="flex items-center"><span className="text-[#00FF88] mr-2">✓</span> Custom Workflows</li>
              </ul>
              <button className="w-full bg-[#00FF88] text-black font-bold py-3 rounded-full hover:shadow-[0_0_20px_#00FF88] transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#00FFB3]/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom<span className="text-lg text-gray-400"> pricing</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-[#00FFB3] mr-2">✓</span> Unlimited Employees</li>
                <li className="flex items-center"><span className="text-[#00FFB3] mr-2">✓</span> Full Customization</li>
                <li className="flex items-center"><span className="text-[#00FFB3] mr-2">✓</span> 24/7 Support</li>
                <li className="flex items-center"><span className="text-[#00FFB3] mr-2">✓</span> On-premise Option</li>
              </ul>
              <button className="w-full bg-[#00FFB3] text-black font-bold py-3 rounded-full hover:shadow-[0_0_20px_#00FFB3] transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        {!isChatOpen ? (
          <div 
            onClick={toggleChat}
            className="w-16 h-16 bg-[#00FF88] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,136,0.5)]"
          >
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
        ) : (
          <div className="w-80 h-96 bg-[#111111] border border-[#00FF88]/30 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_40px_rgba(0,255,136,0.2)]">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#00FF88] to-[#00FFB3] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-[#00FF88] text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-black font-bold">Virtual Assistant</div>
                  <div className="text-black/70 text-xs">Online</div>
                </div>
              </div>
              <button onClick={toggleChat} className="text-black hover:opacity-70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message, index) => (
                <div key={index} className={`max-w-[70%] p-3 rounded-2xl ${
                  message.type === 'bot' 
                    ? 'bg-[#00FF88]/10 border border-[#00FF88]/20 self-start' 
                    : 'bg-white/10 border border-white/20 self-end ml-auto'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}
              {isTyping && (
                <div className="max-w-[70%] p-3 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#00FF88] transition-colors"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 bg-[#00FF88] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
