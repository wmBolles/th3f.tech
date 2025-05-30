import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, Book } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:hidden"
            >
              <Menu size={24} />
              <span className="sr-only">Open sidebar</span>
            </button>
            
            <Link to="/" className="flex items-center gap-2 text-gray-900 dark:text-white hover:no-underline">
              <Book className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold">th3f.tech</span>
            </Link>
          </div>
          
          <div className="hidden md:block flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link 
              to="/virus-creation" 
              className="hidden sm:block px-4 py-2 bg-virus-600 hover:bg-virus-700 text-white rounded-md transition-colors"
            >
              Virus Creation Guide
            </Link>
          </div>
        </div>
        
        <div className="md:hidden py-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;