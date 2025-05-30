import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { navData } from '../data/navigation';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId);
  
  const isActiveLink = (path: string) => location.pathname === path;
  
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:transform-none ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800 md:hidden">
          <h2 className="text-lg font-bold">Navigation</h2>
          <button 
            onClick={() => setOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <X size={20} />
            <span className="sr-only">Close sidebar</span>
          </button>
        </div>
        
        <nav className="p-4 h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            
            {navData.map((category) => (
              <li key={category.id}>
                <button
                  className="nav-category"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isExpanded(category.id)}
                >
                  <span>{category.name}</span>
                  {isExpanded(category.id) ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                
                {isExpanded(category.id) && (
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <Link
                        to={`/category/${category.id}`}
                        className={`nav-link ${isActiveLink(`/category/${category.id}`) ? 'active' : ''}`}
                        onClick={() => setOpen(false)}
                      >
                        Overview
                      </Link>
                    </li>
                    
                    {category.attacks.map((attack) => (
                      <li key={attack.id}>
                        <Link
                          to={`/attack/${category.id}/${attack.id}`}
                          className={`nav-link ${isActiveLink(`/attack/${category.id}/${attack.id}`) ? 'active' : ''}`}
                          onClick={() => setOpen(false)}
                        >
                          {attack.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
            <li className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <Link 
                to="/virus-creation" 
                className={`nav-link text-virus-600 dark:text-virus-500 font-medium ${isActiveLink('/virus-creation') ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                Virus Creation Guide
              </Link>
            </li>
            
            <li>
              <Link 
                to="/resources" 
                className={`nav-link ${isActiveLink('/resources') ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                Resources
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;