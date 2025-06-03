(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class d{constructor(){this.searchIndex=[],this.init()}init(){this.setupEventListeners(),this.initializeTheme(),this.hideLoadingScreen(),this.showComingSoonModal(),this.populateSearchIndex()}setupEventListeners(){const e=document.getElementById("theme-toggle"),t=document.getElementById("search-input"),r=document.querySelectorAll(".nav-item"),s=document.querySelectorAll(".attack-link"),i=document.querySelectorAll("#collaborate-btn, #footer-collaborate-btn"),n=document.getElementById("close-modal");e==null||e.addEventListener("click",()=>this.toggleTheme()),t==null||t.addEventListener("input",a=>this.handleSearch(a.target.value)),t==null||t.addEventListener("focus",()=>this.showSearchResults()),document.addEventListener("click",a=>this.handleOutsideClick(a)),r.forEach(a=>{a.addEventListener("click",o=>this.handleNavigation(o))}),s.forEach(a=>{a.addEventListener("click",o=>this.handleAttackLink(o))}),i.forEach(a=>{a.addEventListener("click",()=>this.openCollaborationDialog())}),n==null||n.addEventListener("click",()=>this.hideComingSoonModal())}initializeTheme(){const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t)&&document.documentElement.classList.add("dark")}toggleTheme(){const e=document.documentElement.classList.toggle("dark");localStorage.setItem("theme",e?"dark":"light")}hideLoadingScreen(){setTimeout(()=>{const e=document.getElementById("loading-screen");e&&(e.classList.add("opacity-0"),setTimeout(()=>e.remove(),300))},1e3)}showComingSoonModal(){setTimeout(()=>{const e=document.getElementById("coming-soon-modal");e==null||e.classList.remove("hidden")},2e3)}hideComingSoonModal(){const e=document.getElementById("coming-soon-modal");e==null||e.classList.add("hidden")}populateSearchIndex(){this.searchIndex=[{id:"mitm",title:"Man in the Middle Attack",category:"Networking",excerpt:"Intercepting communications between two parties"},{id:"sql-injection",title:"SQL Injection",category:"Web Security",excerpt:"Database attacks through malicious SQL queries"},{id:"buffer-overflow",title:"Buffer Overflow",category:"System Security",excerpt:"Memory corruption leading to code execution"},{id:"xss",title:"Cross-Site Scripting",category:"Web Security",excerpt:"Client-side code injection attacks"},{id:"dns-spoofing",title:"DNS Spoofing",category:"Networking",excerpt:"Redirecting domain name resolution"},{id:"privilege-escalation",title:"Privilege Escalation",category:"System Security",excerpt:"Gaining higher system privileges"},{id:"virus-intro",title:"Virus Introduction",category:"Malware Research",excerpt:"Understanding computer virus fundamentals"},{id:"c-fundamentals",title:"C Programming",category:"Malware Research",excerpt:"C programming for security research"},{id:"assembly-basics",title:"Assembly Language",category:"Malware Research",excerpt:"Low-level programming for security"},{id:"metamorphic-techniques",title:"Metamorphic Viruses",category:"Malware Research",excerpt:"Advanced virus mutation techniques"},{id:"binary-analysis",title:"Binary Analysis",category:"Reverse Engineering",excerpt:"Analyzing compiled software"}]}handleSearch(e){if(!document.getElementById("search-results"))return;if(e.length<2){this.hideSearchResults();return}const r=this.searchIndex.filter(s=>s.title.toLowerCase().includes(e.toLowerCase())||s.category.toLowerCase().includes(e.toLowerCase())||s.excerpt.toLowerCase().includes(e.toLowerCase()));this.displaySearchResults(r)}displaySearchResults(e){const t=document.getElementById("search-results");t&&(e.length===0?t.innerHTML='<div class="p-4 text-gray-500 dark:text-gray-400">No results found</div>':t.innerHTML=e.map(r=>`
        <div class="p-4 hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer border-b border-gray-100 dark:border-dark-600 last:border-b-0" 
             onclick="app.selectSearchResult('${r.id}')">
          <div class="font-semibold text-gray-900 dark:text-gray-100">${r.title}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">${r.category}</div>
          <div class="text-sm text-gray-500 dark:text-gray-500 mt-1">${r.excerpt}</div>
        </div>
      `).join(""),this.showSearchResults())}showSearchResults(){const e=document.getElementById("search-results");e==null||e.classList.remove("hidden")}hideSearchResults(){const e=document.getElementById("search-results");e==null||e.classList.add("hidden")}handleOutsideClick(e){const t=document.querySelector(".relative"),r=e.target;t&&!t.contains(r)&&this.hideSearchResults()}selectSearchResult(e){this.hideSearchResults(),this.showAttackContent(e);const t=document.getElementById("search-input");t&&(t.value="")}handleNavigation(e){e.preventDefault();const t=e.target,r=t.getAttribute("data-section");if(r)if(document.querySelectorAll(".nav-item").forEach(s=>{s.classList.remove("active")}),t.classList.add("active"),r==="home")this.showHomeContent();else{const s=t.closest(".nav-section");if(s){document.querySelectorAll(".nav-section").forEach(n=>{n.classList.remove("active");const a=n.querySelector(".sub-menu");a==null||a.classList.add("hidden")}),s.classList.add("active");const i=s.querySelector(".sub-menu");i==null||i.classList.remove("hidden")}}}handleAttackLink(e){e.preventDefault();const r=e.target.getAttribute("data-attack");r&&this.showAttackContent(r)}showHomeContent(){const e=document.getElementById("home-content"),t=document.getElementById("attack-content");e==null||e.classList.remove("hidden"),e==null||e.classList.add("active"),t==null||t.classList.add("hidden"),t==null||t.classList.remove("active")}showAttackContent(e){const t=document.getElementById("home-content"),r=document.getElementById("attack-content"),s=document.getElementById("attack-details");s&&(t==null||t.classList.add("hidden"),t==null||t.classList.remove("active"),r==null||r.classList.remove("hidden"),r==null||r.classList.add("active"),s.innerHTML=this.getAttackContent(e),s.scrollIntoView({behavior:"smooth"}))}getAttackContent(e){return{mitm:`
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Man in the Middle (MITM) Attack
          </h1>
          
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
            <p class="text-yellow-800 dark:text-yellow-200">
              <strong>Educational Purpose:</strong> This content is for defensive security education only.
            </p>
          </div>

          <h2>🎯 Attack Overview</h2>
          <p>A Man in the Middle attack occurs when an attacker secretly intercepts and relays communications between two parties who believe they are communicating directly with each other.</p>
          
          <h2>🔧 Attack Methodology</h2>
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">1. ARP Spoofing</h3>
              <p class="text-sm">Poisoning ARP tables to redirect traffic</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">2. DNS Spoofing</h3>
              <p class="text-sm">Redirecting domain name queries</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">3. Rogue Access Points</h3>
              <p class="text-sm">Creating fake Wi-Fi networks</p>
            </div>
            <div class="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">4. SSL/TLS Manipulation</h3>
              <p class="text-sm">Certificate spoofing and downgrade attacks</p>
            </div>
          </div>

          <h2>🛡️ Defense Mechanisms</h2>
          <ul>
            <li><strong>HTTPS Everywhere:</strong> Always verify SSL certificates</li>
            <li><strong>Certificate Pinning:</strong> Implement in mobile applications</li>
            <li><strong>VPN Usage:</strong> Encrypt all network traffic</li>
            <li><strong>Network Monitoring:</strong> Detect suspicious ARP activities</li>
          </ul>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mt-6">
            <p class="text-red-800 dark:text-red-200">
              <strong>Legal Notice:</strong> Performing MITM attacks without explicit permission is illegal in most jurisdictions.
            </p>
          </div>
        </div>
      `,"sql-injection":`
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            SQL Injection Attacks
          </h1>
          
          <h2>📊 Attack Classification</h2>
          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200">In-band SQLi</h3>
              <ul class="text-sm mt-2 space-y-1">
                <li>• Error-based</li>
                <li>• Union-based</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 class="font-semibold text-green-800 dark:text-green-200">Inferential SQLi</h3>
              <ul class="text-sm mt-2 space-y-1">
                <li>• Boolean-based blind</li>
                <li>• Time-based blind</li>
              </ul>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 class="font-semibold text-purple-800 dark:text-purple-200">Out-of-band SQLi</h3>
              <ul class="text-sm mt-2 space-y-1">
                <li>• DNS exfiltration</li>
                <li>• HTTP requests</li>
              </ul>
            </div>
          </div>

          <h2>💻 Example Payload</h2>
          <pre class="bg-dark-800 text-green-400 p-4 rounded-lg overflow-x-auto"><code>-- Original query
SELECT * FROM users WHERE username = 'admin' AND password = 'password'

-- Malicious input: ' OR '1'='1' --
SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1' --'</code></pre>

          <h2>🔒 Prevention Strategies</h2>
          <div class="space-y-4">
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 dark:text-green-200 mb-2">Parameterized Queries</h3>
              <pre class="text-sm bg-dark-800 text-green-400 p-2 rounded"><code>PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setInt(1, userId);</code></pre>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200">Additional Defenses</h3>
              <ul class="mt-2 space-y-1">
                <li>• Input validation and sanitization</li>
                <li>• Least privilege database accounts</li>
                <li>• Web Application Firewalls (WAF)</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>
      `,"advanced-resources":`
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            🎓 Advanced Virus Research Resources
          </h1>
          
          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
            <h2 class="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">🎉 Congratulations!</h2>
            <p class="text-green-700 dark:text-green-300">
              If you've made it this far, you've successfully completed the fundamental concepts needed for advanced virus research and malware development.
            </p>
          </div>

          <h2>📚 Your Learning Journey</h2>
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 dark:text-blue-200">✅ Completed Modules</h3>
              <ul class="mt-2 space-y-2 text-sm">
                <li>🔹 C Programming Fundamentals</li>
                <li>🔹 Assembly Language Basics</li>
                <li>🔹 Virus Architecture & Design</li>
                <li>🔹 Metamorphic Techniques</li>
                <li>🔹 Anti-Analysis Methods</li>
              </ul>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-800 dark:text-purple-200">🚀 Advanced Topics Await</h3>
              <ul class="mt-2 space-y-2 text-sm">
                <li>🔸 Advanced Metamorphic Engines</li>
                <li>🔸 State-of-the-art Evasion</li>
                <li>🔸 Real-world Case Studies</li>
                <li>🔸 Custom Frameworks & Tools</li>
                <li>🔸 Exclusive Research Papers</li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-xl text-center my-8">
            <h2 class="text-3xl font-bold mb-4">📱 Ready for the Next Level?</h2>
            <p class="text-xl mb-6">Get access to exclusive advanced resources and personalized guidance</p>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-bold mb-2">WhatsApp Contact</h3>
              <p class="text-3xl font-mono font-bold tracking-wider">+212 625 218 307</p>
              <p class="mt-2 text-red-100">Mention: "TH3F.TECH Advanced Research Access"</p>
            </div>

            <a href="https://wa.me/212625218307?text=Hi,%20I%20completed%20the%20TH3F.TECH%20virus%20research%20fundamentals%20and%20I'm%20interested%20in%20accessing%20advanced%20resources." 
               target="_blank" 
               class="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contact on WhatsApp
            </a>
          </div>

          <div class="bg-gray-50 dark:bg-dark-700 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">📋 What You'll Receive</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>Advanced metamorphic engine blueprints</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>Cutting-edge evasion techniques</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>Exclusive research papers</span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>Real-world case studies</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>Custom development tools</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">✓</span>
                  <span>One-on-one mentoring sessions</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-6">
            <p class="text-yellow-800 dark:text-yellow-200">
              <strong>Professional Verification:</strong> These resources are provided strictly for academic research, penetration testing, and defensive security purposes. Professional verification may be required.
            </p>
          </div>
        </div>
      `,"c-fundamentals":`
        <div class="prose prose-lg max-w-none dark:prose-invert">
          <h1 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            C Programming Fundamentals for Security Research
          </h1>
          
          <h2>🎯 Why C for Cybersecurity?</h2>
          <p>C provides low-level memory access and system control, making it essential for understanding system vulnerabilities and creating security tools.</p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 class="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📚 Essential Learning Resources</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-2">Books</h4>
                <ul class="space-y-1 text-sm">
                  <li>• "The C Programming Language" - Kernighan & Ritchie</li>
                  <li>• "Expert C Programming" - Peter van der Linden</li>
                  <li>• "Attacking the Core" - Advanced System Exploitation</li>
                  <li>• "C Primer Plus" - Stephen Prata</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">Online Courses</h4>
                <ul class="space-y-1 text-sm">
                  <li>• CS50's Introduction to Computer Science</li>
                  <li>• C Programming on Coursera</li>
                  <li>• HackerRank C challenges</li>
                  <li>• LeetCode C problems</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>🔧 Security-Focused C Concepts</h2>
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h3 class="font-semibold text-red-800 dark:text-red-200">Memory Management</h3>
              <ul class="text-sm mt-2 space-y-1">
                <li>• malloc() and free()</li>
                <li>• Buffer overflow prevention</li>
                <li>• Memory leaks detection</li>
                <li>• Stack vs Heap allocation</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 class="font-semibold text-green-800 dark:text-green-200">System Interaction</h3>
              <ul class="text-sm mt-2 space-y-1">
                <li>• System calls and APIs</li>
                <li>• File I/O operations</li>
                <li>• Process management</li>
                <li>• Inter-process communication</li>
              </ul>
            </div>
          </div>

          <h2>💻 Example: Buffer Overflow Demonstration</h2>
          <pre class="bg-dark-800 text-green-400 p-4 rounded-lg overflow-x-auto"><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

// Vulnerable function - DO NOT USE IN PRODUCTION
void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // Dangerous! No bounds checking
    printf("Buffer content: %s\\n", buffer);
}

// Secure alternative
void secure_function(char *input) {
    char buffer[64];
    strncpy(buffer, input, sizeof(buffer) - 1);
    buffer[sizeof(buffer) - 1] = '\\0';  // Ensure null termination
    printf("Buffer content: %s\\n", buffer);
}</code></pre>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6">
            <p class="text-yellow-800 dark:text-yellow-200">
              <strong>Educational Purpose:</strong> The vulnerable code above is for educational purposes only. Always use secure coding practices in production environments.
            </p>
          </div>
        </div>
      `}[e]||`
      <div class="text-center py-12">
        <div class="text-6xl mb-4">🚧</div>
        <h1 class="text-3xl font-bold mb-4">Content Coming Soon</h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          This section is under active development. Check back soon for comprehensive content!
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-md mx-auto">
          <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Want to contribute?</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300 mb-4">
            Help us build this content by contributing to our open-source repository.
          </p>
          <a href="https://github.com/wmbolles/th3f.tech" target="_blank" 
             class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Contribute on GitHub
          </a>
        </div>
      </div>
    `}openCollaborationDialog(){const t=`https://wa.me/212625218307?text=${encodeURIComponent("Hi! I'm interested in collaborating on TH3F.TECH. I'd love to contribute to the cybersecurity education platform.")}`;window.open(t,"_blank")}}const c=new d;window.app=c;
