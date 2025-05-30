import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Globe, PenTool as Tool, Shield, Terminal, BookOpen } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="py-6">
      <h1>Cybersecurity Resources</h1>
      <p className="text-xl mb-8">
        A curated collection of valuable resources for learning about cybersecurity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Book className="h-6 w-6 text-primary-500" />
            <h2 className="text-xl font-bold mt-0 mb-0">Books</h2>
          </div>
          
          <ul className="space-y-4 mt-4">
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">The Art of Exploitation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                A comprehensive guide to understanding security vulnerabilities through practical examples.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Practical Malware Analysis</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Learn to analyze and understand malicious software to improve defense mechanisms.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">The Web Application Hacker's Handbook</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Detailed guide to finding and exploiting security flaws in web applications.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Black Hat Python</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Python programming for penetration testers and security professionals.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-medium mb-1">Attacking the Core</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Advanced techniques for exploiting kernel vulnerabilities and system internals.
              </p>
            </li>
          </ul>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-primary-500" />
            <h2 className="text-xl font-bold mt-0 mb-0">Online Courses</h2>
          </div>
          
          <ul className="space-y-4 mt-4">
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Offensive Security Certified Professional (OSCP)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Hands-on penetration testing certification with practical lab work.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Web Security Academy by PortSwigger</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Free, online web security training with interactive labs.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Cybrary</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Free and premium cybersecurity courses covering various topics.
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium mb-1">HackTheBox</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Platform for practicing penetration testing skills on vulnerable machines.
              </p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Tool className="h-6 w-6 text-primary-500" />
            <h2 className="text-xl font-bold mt-0 mb-0">Tools</h2>
          </div>
          
          <ul className="space-y-4 mt-4">
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Metasploit Framework</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Comprehensive penetration testing framework with exploits and tools.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Wireshark</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Network protocol analyzer for monitoring and troubleshooting network issues.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Burp Suite</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Integrated platform for performing security testing of web applications.
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium mb-1">Ghidra</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Software reverse engineering framework developed by NSA.
              </p>
            </li>
          </ul>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary-500" />
            <h2 className="text-xl font-bold mt-0 mb-0">Practice Platforms</h2>
          </div>
          
          <ul className="space-y-4 mt-4">
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">OWASP WebGoat</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Deliberately insecure web application for learning web security concepts.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">Damn Vulnerable Web App (DVWA)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                PHP/MySQL web application that is intentionally vulnerable to practice attacks.
              </p>
            </li>
            
            <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-1">TryHackMe</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Online platform with guided cybersecurity learning paths and challenges.
              </p>
            </li>
            
            <li>
              <h3 className="text-lg font-medium mb-1">VulnHub</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Provides vulnerable virtual machines for practical security training.
              </p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="h-6 w-6 text-primary-500" />
          <h2 className="text-xl font-bold mt-0 mb-0">Programming Resources</h2>
        </div>
        
        <p>
          Understanding programming fundamentals is essential for cybersecurity. Here are resources
          to help you build the necessary programming skills:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Python</h3>
            <ul className="list-disc pl-5 mb-0">
              <li><a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">Official Documentation</a></li>
              <li><a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer">Automate the Boring Stuff</a></li>
              <li><a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">Codecademy Python Course</a></li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            
            <h3 className="text-lg font-medium mb-2">C/C++</h3>
            <ul className="list-disc pl-5 mb-0">
              <li><a href="https://www.learn-c.org/" target="_blank" rel="noopener noreferrer">Learn C Interactive</a></li>
              <li><a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer">Learn C++</a></li>
              <li><a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">C Programming</a></li>
            </ul>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Assembly</h3>
            <ul className="list-disc pl-5 mb-0">
              <li><a href="https://www.tutorialspoint.com/assembly_programming/" target="_blank" rel="noopener noreferrer">Assembly Programming Tutorial</a></li>
              <li><a href="https://beginners.re/" target="_blank" rel="noopener noreferrer">RE for Beginners</a></li>
              <li><a href="https://godbolt.org/" target="_blank" rel="noopener noreferrer">Compiler Explorer</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="virus-section">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-virus-600 dark:text-virus-400" />
          <h2 className="text-2xl font-bold text-virus-700 dark:text-virus-400 mt-0 mb-0">Virus Creation Resources</h2>
        </div>
        
        <p className="mb-4">
          For those interested in the educational aspects of virus creation and understanding malware
          development for research purposes, visit our dedicated section:
        </p>
        
        <Link 
          to="/virus-creation" 
          className="inline-block px-6 py-3 bg-virus-600 hover:bg-virus-700 text-white rounded-md transition-colors"
        >
          Virus Creation Guide
        </Link>
      </div>
    </div>
  );
};

export default ResourcesPage;