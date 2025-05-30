import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { navData } from '../data/navigation';
import { ChevronRight } from 'lucide-react';

const AttackPage: React.FC = () => {
  const { categoryId, attackId } = useParams<{ categoryId: string; attackId: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  useEffect(() => {
    const category = navData.find(cat => cat.id === categoryId);
    
    if (!category) {
      setTitle('Category Not Found');
      setContent('The requested category does not exist.');
      return;
    }
    
    if (!attackId) {
      setTitle(category.name);
      setContent(`
        <h1>${category.name}</h1>
        <p>${category.description}</p>
        
        <h2>Attacks in this Category</h2>
        <ul class="space-y-4 mt-6">
          ${category.attacks.map(attack => `
            <li class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 class="text-lg font-medium mb-2">${attack.name}</h3>
              <p class="mb-2">${attack.description}</p>
              <a href="/attack/${category.id}/${attack.id}" class="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </li>
          `).join('')}
        </ul>
      `);
      return;
    }
    
    const attack = category.attacks.find(a => a.id === attackId);
    
    if (!attack) {
      setTitle('Attack Not Found');
      setContent('The requested attack does not exist.');
      return;
    }
    
    setTitle(attack.name);
    
    // This would typically come from a real content management system
    // For demonstration, we're generating some placeholder content
    const attackContent = generateAttackContent(category.id, attack.id, attack.name);
    setContent(attackContent);
    
  }, [categoryId, attackId]);
  
  return (
    <div className="py-6">
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
          </li>
          
          {categoryId && (
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link 
                  to={`/category/${categoryId}`} 
                  className="ml-1 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {navData.find(cat => cat.id === categoryId)?.name || categoryId}
                </Link>
              </div>
            </li>
          )}
          
          {attackId && (
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                  {title}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

// Helper function to generate dummy content for demonstration
function generateAttackContent(categoryId: string, attackId: string, attackName: string): string {
  switch (`${categoryId}/${attackId}`) {
    case 'web/sql-injection':
      return `
        <h1>SQL Injection</h1>
        
        <p>SQL Injection is a code injection technique that exploits vulnerabilities in the interface between web applications and database servers. The vulnerability occurs when user input is incorrectly filtered and directly included in SQL statements.</p>
        
        <h2>How It Works</h2>
        
        <p>SQL injection attacks work by placing malicious code in SQL statements via web page input. A successful SQL injection exploit can:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li>Read sensitive data from the database</li>
          <li>Modify database data (insert/update/delete)</li>
          <li>Execute administration operations on the database</li>
          <li>Recover the content of a given file on the DBMS file system</li>
          <li>In some cases, issue commands to the operating system</li>
        </ul>
        
        <h2>Example</h2>
        
        <p>Consider a simple login form that uses the following SQL query:</p>
        
        <pre>SELECT * FROM users WHERE username = 'input_username' AND password = 'input_password'</pre>
        
        <p>If the application doesn't properly sanitize user input, an attacker could input something like:</p>
        
        <pre>Username: admin' --
Password: [anything]</pre>
        
        <p>This would make the SQL query:</p>
        
        <pre>SELECT * FROM users WHERE username = 'admin' --' AND password = '[anything]'</pre>
        
        <p>The <code>--</code> is a comment in SQL, which means the rest of the query is ignored. This allows the attacker to log in as 'admin' without knowing the password.</p>
        
        <h2>Prevention</h2>
        
        <ul class="list-disc pl-6 mb-4">
          <li>Use parameterized queries or prepared statements</li>
          <li>Implement input validation</li>
          <li>Escape special characters</li>
          <li>Apply the principle of least privilege to database accounts</li>
          <li>Use ORM (Object-Relational Mapping) libraries</li>
        </ul>
        
        <h2>Parameterized Query Example</h2>
        
        <pre>// Instead of concatenating strings
// BAD: "SELECT * FROM users WHERE username = '" + username + "'"

// Use parameterized queries
// GOOD (JavaScript example):
const query = "SELECT * FROM users WHERE username = ? AND password = ?";
connection.query(query, [username, password], function(error, results) {
  // Handle results
});</pre>
      `;
      
    case 'networking/mitm':
      return `
        <h1>Man in the Middle (MitM) Attack</h1>
        
        <p>A Man in the Middle (MitM) attack is a type of eavesdropping attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.</p>
        
        <h2>How It Works</h2>
        
        <p>In a typical MitM attack:</p>
        
        <ol class="list-decimal pl-6 mb-4">
          <li>The attacker positions themselves between the victim and a legitimate service</li>
          <li>The attacker intercepts all messages exchanged between the victim and the authentic service</li>
          <li>The victim believes they are communicating directly with the intended service</li>
          <li>The attacker can read, modify, or inject new data into the intercepted communications</li>
        </ol>
        
        <h2>Common Types of MitM Attacks</h2>
        
        <h3>ARP Spoofing</h3>
        <p>Associates the attacker's MAC address with the IP address of a legitimate network resource, causing traffic meant for that IP address to be sent to the attacker instead.</p>
        
        <h3>DNS Spoofing</h3>
        <p>Corrupts Domain Name System data to redirect traffic from legitimate servers to the attacker's servers.</p>
        
        <h3>HTTPS Spoofing</h3>
        <p>Uses a forged certificate to trick the victim's browser into thinking a malicious website is legitimate.</p>
        
        <h3>SSL Stripping</h3>
        <p>Downgrades an HTTPS connection to HTTP, allowing the attacker to observe the plain text communication.</p>
        
        <h2>Prevention</h2>
        
        <ul class="list-disc pl-6 mb-4">
          <li>Use strong encryption protocols like TLS</li>
          <li>Implement certificate pinning</li>
          <li>Use VPNs for sensitive communications</li>
          <li>Enable HTTPS Strict Transport Security (HSTS)</li>
          <li>Be cautious of public Wi-Fi networks</li>
          <li>Verify certificate warnings in browsers</li>
        </ul>
        
        <h2>Detection</h2>
        
        <p>MitM attacks can be detected through:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li>Unexpected certificate warnings</li>
          <li>Unusually slow connection speeds</li>
          <li>Examining the certificate details of HTTPS connections</li>
          <li>Network monitoring tools that can detect ARP spoofing</li>
        </ul>
      `;
      
    // Add more specific attack content as needed
      
    default:
      // Generic content for other attacks
      return `
        <h1>${attackName}</h1>
        
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-6">
          <p class="text-yellow-700 dark:text-yellow-400">
            Detailed content for this attack is coming soon. Check back later for comprehensive information.
          </p>
        </div>
        
        <p>This section will provide detailed information about ${attackName}, including:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li>How the attack works</li>
          <li>Common vectors and techniques</li>
          <li>Real-world examples and case studies</li>
          <li>Detection methods</li>
          <li>Prevention strategies</li>
          <li>Tools and resources for security professionals</li>
        </ul>
        
        <h2>Basic Overview</h2>
        
        <p>
          ${navData.find(cat => cat.id === categoryId)?.attacks.find(a => a.id === attackId)?.description || 
          'This attack is one of many techniques used in cybersecurity exploits.'}
        </p>
        
        <h2>Related Attacks</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          ${navData.find(cat => cat.id === categoryId)?.attacks
            .filter(a => a.id !== attackId)
            .slice(0, 2)
            .map(attack => `
              <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-medium mb-2">${attack.name}</h3>
                <p class="mb-2">${attack.description}</p>
                <a href="/attack/${categoryId}/${attack.id}" class="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              </div>
            `).join('')}
        </div>
      `;
  }
}

export default AttackPage;