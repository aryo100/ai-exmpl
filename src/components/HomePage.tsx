import React from 'react';
import { 
  Brain, 
  Mic, 
  Eye, 
  MessageSquare, 
  Image, 
  FileText, 
  Video, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigateToTTS: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToTTS }) => {
  const aiFeatures = [
    {
      icon: Mic,
      title: 'Text-to-Speech',
      description: 'Convert text to natural-sounding speech with multiple voice models and languages',
      status: 'available',
      onClick: onNavigateToTTS
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Advanced chatbots and virtual assistants powered by large language models',
      status: 'coming-soon'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis capabilities',
      status: 'coming-soon'
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning images from text descriptions using state-of-the-art AI models',
      status: 'coming-soon'
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Extract, analyze, and process information from documents and PDFs',
      status: 'coming-soon'
    },
    {
      icon: Video,
      title: 'Video Analysis',
      description: 'Analyze video content, extract insights, and generate summaries',
      status: 'coming-soon'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven predictions using machine learning',
      status: 'coming-soon'
    },
    {
      icon: Shield,
      title: 'AI Safety & Security',
      description: 'Ensure responsible AI deployment with safety monitoring and bias detection',
      status: 'coming-soon'
    }
  ];

  const stats = [
    { label: 'AI Models', value: '50+', icon: Brain },
    { label: 'Languages Supported', value: '25+', icon: Globe },
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Accuracy Rate', value: '99.9%', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NeuralForge AI
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <button onClick={onNavigateToTTS} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              The Future of
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of AI with our comprehensive suite of intelligent tools. 
              From natural language processing to computer vision, we provide cutting-edge 
              solutions for every AI need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onNavigateToTTS}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Try Text-to-Speech
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a complete ecosystem of AI tools designed to transform 
              how you work, create, and innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                  feature.status === 'available' ? 'cursor-pointer' : ''
                }`}
                onClick={feature.onClick}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      feature.status === 'available' 
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100' 
                        : 'bg-gray-100'
                    }`}>
                      <feature.icon className={`h-6 w-6 ${
                        feature.status === 'available' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                    {feature.status === 'available' ? (
                      <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        <CheckCircle className="h-3 w-3" />
                        Available
                      </div>
                    ) : (
                      <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {feature.status === 'available' && (
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      Try Now
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading the AI Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At NeuralForge AI, we're building the most comprehensive artificial intelligence 
                platform that empowers businesses and individuals to harness the full potential 
                of AI technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">State-of-the-art AI models</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">24/7 support and monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Scalable cloud infrastructure</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Powered by Innovation</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Our AI platform combines cutting-edge research with practical applications, 
                  delivering solutions that are both powerful and accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">NeuralForge AI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming the future with intelligent AI solutions that empower 
                businesses and individuals to achieve more.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">TW</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">LI</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">GH</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Text-to-Speech</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conversational AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Computer Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Image Generation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NeuralForge AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;