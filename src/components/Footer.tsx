import React from 'react';
import { Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Created with</span>
            <Heart className="h-4 w-4 text-virus-500 fill-virus-500" />
            <span>by <a href="https://wmbolles.com" target="_blank" rel="noopener noreferrer">Wassim Bolles</a></span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/wmbolles" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://github.com/wmbolles/th3f.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400"
            >
              <span>Contribute</span>
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center">
            Disclaimer: The information on this website is provided for educational purposes only. 
            The techniques and resources described are intended to enhance understanding of cybersecurity concepts.
            Using these techniques against systems without explicit permission is illegal and unethical.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;