import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on homepage, scroll to section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage with hash
      navigate(`/${hash}`);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NeuralForge AI
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleAnchorClick(e, '#features')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleAnchorClick(e, '#about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

