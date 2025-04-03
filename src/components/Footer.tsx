
import { Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-portfolio-900/30 py-8 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-portfolio-500 font-bold text-xl">Bharath</Link>
            <p className="text-sm text-muted-foreground mt-1">Frontend Developer | WordPress Expert</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:contact@bharath.dev" 
              className="text-muted-foreground hover:text-portfolio-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/bharath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-portfolio-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/bharath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-portfolio-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-900/30 mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Bharath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
