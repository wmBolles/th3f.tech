import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, BookOpen, Code, Terminal, FileCode, Phone } from 'lucide-react';

const VirusCreationPage: React.FC = () => {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-6 w-6 text-virus-500" />
        <h1 className="text-3xl font-bold text-virus-700 dark:text-virus-400 mb-0">Virus Creation Guide</h1>
      </div>
      
      <div className="virus-section">
        <p className="text-lg mb-6">
          This comprehensive educational guide will walk you through understanding metamorphic viruses from first principles.
          All information is provided for educational purposes only to understand cybersecurity threats and defense mechanisms.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-virus-300 dark:border-virus-800 rounded-lg p-4 mb-6">
          <p className="font-bold text-virus-700 dark:text-virus-400 mb-2">Disclaimer:</p>
          <p className="mb-0">
            Creating malicious software for use against systems without explicit permission is illegal and unethical.
            This guide is purely for academic understanding of how these threats work to better defend against them.
            Use this knowledge responsibly and legally.
          </p>
        </div>
        
        <h2>Understanding Metamorphic Viruses</h2>
        
        <p>
          Metamorphic viruses represent one of the most sophisticated forms of malware. Unlike regular viruses,
          metamorphic viruses can completely rewrite their code each time they propagate, making them extremely
          difficult to detect with traditional signature-based antivirus solutions.
        </p>
        
        <h2>Prerequisites</h2>
        
        <p>Before beginning this guide, you should have knowledge of:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-5 w-5 text-primary-500" />
              <h3 className="text-lg font-medium mb-0">C Programming</h3>
            </div>
            <p className="mb-2">Solid understanding of C programming language fundamentals and memory management</p>
            <a 
              href="https://www.learn-c.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Learn C Programming →
            </a>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-5 w-5 text-primary-500" />
              <h3 className="text-lg font-medium mb-0">Assembly Language</h3>
            </div>
            <p className="mb-2">Familiarity with x86/x64 assembly language and CPU architecture</p>
            <a 
              href="https://www.tutorialspoint.com/assembly_programming/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Learn Assembly →
            </a>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileCode className="h-5 w-5 text-primary-500" />
              <h3 className="text-lg font-medium mb-0">Operating Systems</h3>
            </div>
            <p className="mb-2">Knowledge of operating system internals, processes, and system calls</p>
            <a 
              href="https://pages.cs.wisc.edu/~remzi/OSTEP/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Operating Systems: Three Easy Pieces →
            </a>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary-500" />
              <h3 className="text-lg font-medium mb-0">File Formats</h3>
            </div>
            <p className="mb-2">Understanding of executable file formats (ELF, PE) and their structures</p>
            <a 
              href="https://github.com/corkami/pics/blob/master/binary/PE101.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              PE File Format →
            </a>
          </div>
        </div>
        
        <h2>Learning Path Overview</h2>
        
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">Basic virus construction techniques</li>
          <li className="mb-2">Code analysis and modification algorithms</li>
          <li className="mb-2">Metamorphic engine design principles</li>
          <li className="mb-2">Obfuscation and anti-detection techniques</li>
          <li className="mb-2">Execution environment awareness</li>
        </ol>
        
        <h2>Basic Virus Construction</h2>
        
        <p>
          The foundation of any virus is understanding how code can replicate itself. This involves:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li>Accessing the virus's own code</li>
          <li>Finding suitable files to infect</li>
          <li>Injecting code while preserving functionality</li>
          <li>Implementing triggering mechanisms</li>
        </ul>
        
        <h2>Metamorphic Engine Components</h2>
        
        <p>A metamorphic engine typically consists of the following components:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Disassembler</h3>
            <p className="mb-0">
              Converts machine code into an intermediate representation that can be analyzed and modified
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Code Analyzer</h3>
            <p className="mb-0">
              Identifies code patterns, control flow, and potential transformation opportunities
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Transformation Engine</h3>
            <p className="mb-0">
              Applies various transformations to change the code structure while preserving functionality
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Assembler</h3>
            <p className="mb-0">
              Converts the transformed intermediate representation back into executable machine code
            </p>
          </div>
        </div>
        
        <h2>Code Transformation Techniques</h2>
        
        <p>Metamorphic viruses use various techniques to change their appearance:</p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Register swapping (using different registers for the same operations)</li>
          <li>Instruction substitution (replacing instructions with equivalent ones)</li>
          <li>Code reordering (changing the sequence of independent instructions)</li>
          <li>Insertion of junk or dead code (adding instructions that don't affect execution)</li>
          <li>Control flow alterations (changing how the program flows while preserving logic)</li>
        </ul>
        
        <h2>Advanced Topics</h2>
        
        <div className="mb-8">
          <h3>Anti-Analysis Techniques</h3>
          <p>
            Advanced metamorphic viruses implement techniques to resist analysis:
          </p>
          <ul className="list-disc pl-6">
            <li>Anti-debugging techniques</li>
            <li>Virtual machine detection</li>
            <li>Timing-based detection of analysis environments</li>
            <li>Encrypted and self-modifying code</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3>Polymorphic vs. Metamorphic</h3>
          <p>
            While polymorphic viruses use encryption with varying decryptors to hide their payload,
            metamorphic viruses completely transform their entire codebase. Understanding the
            distinction is crucial for comprehending advanced malware.
          </p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Ethical Considerations</h3>
          <p>
            Knowledge of virus creation comes with significant ethical responsibility. This information
            should only be used for:
          </p>
          <ul className="list-disc pl-6">
            <li>Academic research and understanding</li>
            <li>Development of better security solutions</li>
            <li>Educational purposes in controlled environments</li>
          </ul>
        </div>
        
        <h2>Further Learning Resources</h2>
        
        <p>To deepen your understanding, consider these resources:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a 
            href="https://nostarch.com/malware" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Practical Malware Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              An essential book for understanding how to dissect malicious software
            </p>
          </a>
          
          <a 
            href="https://beginners.re/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Reverse Engineering for Beginners</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              Free book to help you understand the fundamentals of reverse engineering
            </p>
          </a>
        </div>
        
        <div className="bg-virus-100 dark:bg-virus-900/30 border border-virus-300 dark:border-virus-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Contact for Advanced Resources</h3>
          <p>
            For advanced learning materials and guided education in secure virus research,
            contact Wassim Bolles via WhatsApp at:
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Phone className="h-5 w-5 text-virus-600 dark:text-virus-400" />
            <span className="font-mono text-lg">0625218307</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirusCreationPage;