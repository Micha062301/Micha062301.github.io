import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Bot, 
  Zap, 
  Users, 
  ArrowRight, 
  Code, 
  Database, 
  Workflow,
  MessageSquare,
  TrendingUp,
  Download,
  Play,
  Mail,
  Calendar,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle,
  Star,
  Activity,
  Target,
  Layers,
  BarChart3,
  Send,
  Eye,
  Clock,
  Sparkles
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [emailCapture, setEmailCapture] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentUseCase, setCurrentUseCase] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const agentOutputs = [
    { text: "Generated 3 viral hooks", icon: Sparkles, color: "from-orange-400 to-pink-400" },
    { text: "Scheduled 9 LinkedIn posts", icon: Calendar, color: "from-blue-400 to-cyan-400" },
    { text: "Scraped 247 leads", icon: Target, color: "from-green-400 to-teal-400" },
    { text: "Automated 12 workflows", icon: Workflow, color: "from-purple-400 to-indigo-400" }
  ];

  const buildingBlocks = [
    {
      title: "Multi-Agent Content Engines",
      description: "AI agents that research, write, and schedule content across platforms",
      icon: Bot,
      gradient: "from-orange-500 to-pink-500",
      metrics: "300% faster content creation"
    },
    {
      title: "LinkedIn Lead Workflows", 
      description: "Automated prospecting, personalized outreach, and follow-up sequences",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      metrics: "45% response rate average"
    },
    {
      title: "Scraping + Scheduling Tools",
      description: "Real-time data extraction with intelligent scheduling algorithms",
      icon: Activity,
      gradient: "from-green-500 to-teal-500",
      metrics: "10,000+ data points daily"
    },
    {
      title: "Realtime Analytics Dashboards",
      description: "Live performance tracking with AI-powered insights and recommendations",
      icon: BarChart3,
      gradient: "from-purple-500 to-indigo-500",
      metrics: "2x faster decision making"
    }
  ];

  const useCases = [
    {
      title: "Auto-DMs new followers with profile-aware messages",
      description: "AI analyzes follower profiles and crafts personalized welcome messages",
      visual: "🤖 → 👤 → 💬",
      results: "67% engagement rate"
    },
    {
      title: "Turns trending posts into carousels in 60s",
      description: "Scrapes viral content, extracts key points, and generates carousel designs",
      visual: "📈 → 🎨 → 📱",
      results: "5x content velocity"
    },
    {
      title: "Extracts viral LinkedIn hooks into Sheets",
      description: "Monitors top performers and builds a database of proven hooks",
      visual: "🔍 → 📊 → 💡",
      results: "1000+ hooks collected"
    },
    {
      title: "Generates weekly content calendars from trends",
      description: "AI monitors industry trends and creates strategic content plans",
      visual: "📊 → 🗓️ → 🚀",
      results: "90% time saved"
    }
  ];

  const linkedinPosts = [
    {
      content: "Most solopreneurs are building the wrong automations. Here's the 3-step framework I use to identify high-ROI agent workflows:",
      engagement: "127 likes • 23 comments • 8 reposts",
      topic: "AI Strategy",
      time: "2h"
    },
    {
      content: "I built an AI agent that handles my entire LinkedIn outreach. Result: 300% more qualified demos booked. The exact technical breakdown:",
      engagement: "89 likes • 31 comments • 12 reposts", 
      topic: "Automation",
      time: "1d"
    },
    {
      content: "CrewAI + LangGraph is the perfect combo for complex agent workflows. Here's why I chose this stack for my SaaS platform:",
      engagement: "156 likes • 18 comments • 15 reposts",
      topic: "Tech Stack",
      time: "2d"
    }
  ];

  const techStack = [
    { name: 'CrewAI', color: 'text-purple-400' },
    { name: 'LangGraph', color: 'text-blue-400' },
    { name: 'FastAPI', color: 'text-green-400' },
    { name: 'Supabase', color: 'text-cyan-400' },
    { name: 'n8n', color: 'text-orange-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUseCase((prev) => (prev + 1) % useCases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Mukund Swaroop
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#stack" className="text-gray-300 hover:text-white transition-colors">Stack</a>
            <a href="#cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
            <a href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm backdrop-blur-sm">
            <Bot className="mr-2 h-4 w-4" />
            AI Automation Architect & Technical Founder
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Helping Solopreneurs
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 bg-clip-text text-transparent">
              Automate Growth
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              with Modular AI Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Real-time workflows. Zero fluff. Built from code and battle-tested.
            <br />
            <span className="text-orange-300 font-medium">Engineering student → AI Agent SaaS founder</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              Explore the Blueprint
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              View My Stack
              <Code className="inline ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Floating Agent Outputs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {agentOutputs.map((output, index) => (
              <div 
                key={output.text}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-4 rounded-2xl border border-slate-600/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 10}px)`
                }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${output.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <output.icon className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {output.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Me - Founder Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm backdrop-blur-sm mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                The Founder Journey
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                From Engineering Student to AI Agent SaaS Founder
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Started as an engineering student obsessed with AI agents and automation. 
                  While others were building theoretical projects, I was shipping real workflows 
                  that solved actual problems for creators and solopreneurs.
                </p>
                <p>
                  <span className="text-orange-400 font-semibold">Built 40+ automations in 4 months.</span> 
                  <span className="text-green-400 font-semibold"> 100+ LinkedIn growth experiments.</span> 
                  Every failure taught me what actually works in production.
                </p>
                <p>
                  Now I'm building a productized AI Agent SaaS platform that turns complex 
                  automation into simple, modular workflows. Think of it as having a team 
                  of AI specialists working 24/7 on your growth.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <blockquote className="text-xl font-medium text-blue-300 mb-4">
                  "AI is not a tool. It's a teammate."
                </blockquote>
                <p className="text-gray-400 text-sm">
                  My philosophy on building agent-driven systems that actually scale
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Real Impact</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>500+ solopreneurs using my workflows</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>10M+ data points processed monthly</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Average 300% productivity increase</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Technical Depth</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deep expertise in CrewAI, LangGraph, FastAPI, and Supabase. 
                  I don't just use these tools—I architect systems that scale 
                  from prototype to production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section id="stack" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What I Build
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modular AI systems that transform how creators and businesses operate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {buildingBlocks.map((block, index) => (
              <div 
                key={block.title}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${block.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <block.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{block.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{block.description}</p>
                <div className="text-green-400 font-semibold">{block.metrics}</div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Built with Production-Ready Stack</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 px-6 py-3 rounded-full border border-slate-600/30 backdrop-blur-sm hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Use Cases Section */}
      <section id="cases" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Live Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real agent workflows running in production right now
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.title}
                className={`group bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${
                  index === currentUseCase 
                    ? 'border-orange-500/50 scale-105 shadow-2xl shadow-orange-500/20' 
                    : 'border-slate-600/30 hover:border-slate-500/50'
                }`}
              >
                <div className="text-4xl mb-6 text-center">{useCase.visual}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{useCase.results}</span>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentUseCase ? 'bg-orange-400 scale-125' : 'bg-gray-600'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Feed & Playbook Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* LinkedIn Feed */}
            <div>
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Daily LinkedIn Insights
                </h2>
                <p className="text-xl text-gray-300">
                  Tactical breakdowns and frameworks from the trenches
                </p>
              </div>
              
              <div className="space-y-6">
                {linkedinPosts.map((post, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white">Mukund Swaroop</h4>
                          <span className="text-gray-400 text-sm">{post.time}</span>
                        </div>
                        <span className="text-blue-400 text-sm">{post.topic}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.engagement}</span>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Playbook */}
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-12 rounded-3xl border border-green-500/30 backdrop-blur-sm w-full">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Download className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent text-center">
                  Free AI Agent Blueprint
                </h3>
                <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
                  The exact framework I use to identify, build, and deploy high-ROI AI agent workflows. 
                  Used by 500+ solopreneurs.
                </p>
                
                <form onSubmit={handleEmailSubmit} className="mb-6">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={emailCapture}
                      onChange={(e) => setEmailCapture(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-green-400 focus:outline-none text-white placeholder-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitted ? <CheckCircle className="h-5 w-5" /> : 'Get Blueprint'}
                    </button>
                  </div>
                </form>
                
                {isSubmitted && (
                  <div className="text-green-400 font-medium text-center">
                    ✨ Blueprint sent! Check your email in the next few minutes.
                  </div>
                )}
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mt-6">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    4.9/5 rating
                  </span>
                  <span>•</span>
                  <span>500+ downloads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me / Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Need help automating growth? Let's talk.
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            Ready to build AI agents that actually move the needle? I work with creators and 
            solopreneurs who are serious about scaling with automation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Book a Call</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                30-minute strategy session to discuss your automation needs and see if we're a fit.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-green-900/30 p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Linkedin className="h-12 w-12 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">DM me on LinkedIn</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Quick question or want to chat? Send me a direct message and I'll get back to you.
              </p>
              <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/30 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Download className="h-12 w-12 text-orange-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Agent Starter Kit</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get my complete templates, workflows, and setup guides to start building today.
              </p>
              <button className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Mukund Swaroop
              </div>
              <p className="text-gray-400">
                Building the future of AI agent automation
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#stack" className="text-gray-400 hover:text-white transition-colors">Stack</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-gray-400">
            <p>© 2024 Mukund Swaroop. Engineering the future, one agent at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;