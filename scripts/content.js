function getAttackContent(attackType) {
    const content = {
        'mitm': `
            <h1>Man in the Middle (MITM) Attack</h1>
            <h2>Overview</h2>
            <p>A Man in the Middle attack occurs when an attacker secretly intercepts and relays communications between two parties who believe they are communicating directly with each other.</p>
            
            <h2>How it Works</h2>
            <p>The attacker positions themselves between the victim and the intended destination, intercepting all communications. This can be done through various methods:</p>
            <ul>
                <li>ARP spoofing to redirect traffic</li>
                <li>DNS spoofing to redirect domain requests</li>
                <li>Rogue Wi-Fi access points</li>
                <li>SSL/TLS certificate manipulation</li>
            </ul>
            
            <h2>Prevention Methods</h2>
            <p>To protect against MITM attacks:</p>
            <ul>
                <li>Use HTTPS and verify SSL certificates</li>
                <li>Implement certificate pinning</li>
                <li>Use VPN connections</li>
                <li>Monitor network traffic for anomalies</li>
            </ul>
        `,
        
        'sql-injection': `
            <h1>SQL Injection Attack</h1>
            <h2>Overview</h2>
            <p>SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.</p>
            
            <h2>Types of SQL Injection</h2>
            <ul>
                <li><strong>In-band SQLi:</strong> Error-based and Union-based</li>
                <li><strong>Inferential SQLi:</strong> Boolean-based and Time-based</li>
                <li><strong>Out-of-band SQLi:</strong> DNS and HTTP requests</li>
            </ul>
            
            <h2>Example</h2>
            <pre><code>SELECT * FROM users WHERE username = 'admin' AND password = 'password'</code></pre>
            <p>An attacker might input: <code>' OR '1'='1' --</code></p>
            
            <h2>Prevention</h2>
            <ul>
                <li>Use parameterized queries</li>
                <li>Input validation and sanitization</li>
                <li>Least privilege principle</li>
                <li>Regular security audits</li>
            </ul>
        `,
        
        'buffer-overflow': `
            <h1>Buffer Overflow Attack</h1>
            <h2>Overview</h2>
            <p>A buffer overflow occurs when data written to a buffer exceeds its allocated memory, potentially overwriting adjacent memory locations.</p>
            
            <h2>Types</h2>
            <ul>
                <li><strong>Stack-based:</strong> Overflow occurs in the stack memory</li>
                <li><strong>Heap-based:</strong> Overflow occurs in the heap memory</li>
            </ul>
            
            <h2>Exploitation Techniques</h2>
            <ul>
                <li>Return address overwriting</li>
                <li>Function pointer overwriting</li>
                <li>Structured Exception Handler (SEH) overwriting</li>
            </ul>
            
            <h2>Mitigation</h2>
            <ul>
                <li>Address Space Layout Randomization (ASLR)</li>
                <li>Data Execution Prevention (DEP)</li>
                <li>Stack canaries</li>
                <li>Safe programming practices</li>
            </ul>
        `,
        
        'virus-intro': `
            <h1>Introduction to Computer Viruses</h1>
            <h2>What is a Computer Virus?</h2>
            <p>A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code.</p>
            
            <h2>Virus Components</h2>
            <ul>
                <li><strong>Infection Vector:</strong> How the virus spreads</li>
                <li><strong>Trigger:</strong> Conditions that activate the virus</li>
                <li><strong>Payload:</strong> The malicious actions performed</li>
                <li><strong>Replication Engine:</strong> Code responsible for spreading</li>
            </ul>
            
            <h2>Types of Viruses</h2>
            <ul>
                <li>File Infectors</li>
                <li>Boot Sector Viruses</li>
                <li>Macro Viruses</li>
                <li>Polymorphic Viruses</li>
                <li>Metamorphic Viruses</li>
            </ul>
            
            <p><strong>Note:</strong> This information is provided for educational and defensive purposes only.</p>
        `,
        
        'c-fundamentals': `
            <h1>C Programming Fundamentals for Security Research</h1>
            <h2>Why C for Security?</h2>
            <p>C provides low-level memory access and system control, making it essential for understanding system vulnerabilities and creating security tools.</p>
            
            <h2>Essential C Concepts</h2>
            <ul>
                <li>Memory management (malloc, free)</li>
                <li>Pointers and pointer arithmetic</li>
                <li>System calls and API interactions</li>
                <li>File I/O operations</li>
                <li>Process and thread management</li>
            </ul>
            
            <h2>Recommended Learning Resources</h2>
            <ul>
                <li><strong>Books:</strong> "The C Programming Language" by Kernighan & Ritchie</li>
                <li><strong>Online:</strong> CS50's Introduction to Computer Science</li>
                <li><strong>Practice:</strong> LeetCode, HackerRank C challenges</li>
                <li><strong>Advanced:</strong> "Expert C Programming" by Peter van der Linden</li>
            </ul>
            
            <h2>Security-Focused C Topics</h2>
            <ul>
                <li>Buffer management and bounds checking</li>
                <li>Format string vulnerabilities</li>
                <li>Integer overflow/underflow</li>
                <li>Memory corruption techniques</li>
            </ul>
        `,
        
        'assembly-basics': `
            <h1>Assembly Language Basics for Security</h1>
            <h2>Why Assembly?</h2>
            <p>Assembly language provides direct hardware control and is essential for reverse engineering, exploit development, and understanding low-level system behavior.</p>
            
            <h2>Key Assembly Concepts</h2>
            <ul>
                <li>CPU registers and their purposes</li>
                <li>Memory addressing modes</li>
                <li>Instruction sets (x86, x64, ARM)</li>
                <li>Stack operations and calling conventions</li>
                <li>System calls and interrupts</li>
            </ul>
            
            <h2>Learning Resources</h2>
            <ul>
                <li><strong>Books:</strong> "Programming from the Ground Up" by Jonathan Bartlett</li>
                <li><strong>Online:</strong> "Assembly Language Step-by-Step" course</li>
                <li><strong>Tools:</strong> NASM, GAS, MASM assemblers</li>
                <li><strong>Debuggers:</strong> GDB, x64dbg, WinDbg</li>
            </ul>
            
            <h2>Security Applications</h2>
            <ul>
                <li>Shellcode development</li>
                <li>Return-oriented programming (ROP)</li>
                <li>Binary exploitation</li>
                <li>Malware analysis</li>
            </ul>
        `,
        
        'metamorphic-techniques': `
            <h1>Metamorphic Virus Techniques</h1>
            <h2>What is Metamorphism?</h2>
            <p>Metamorphic viruses can rewrite their own code while maintaining the same functionality, making detection extremely difficult.</p>
            
            <h2>Metamorphic Techniques</h2>
            <ul>
                <li><strong>Code Substitution:</strong> Replacing instructions with equivalent ones</li>
                <li><strong>Register Reassignment:</strong> Using different registers for same operations</li>
                <li><strong>Instruction Reordering:</strong> Changing order of independent instructions</li>
                <li><strong>Garbage Insertion:</strong> Adding meaningless instructions</li>
                <li><strong>Subroutine Permutation:</strong> Reordering function calls</li>
            </ul>
            
            <h2>Advanced Concepts</h2>
            <ul>
                <li>Code obfuscation algorithms</li>
                <li>Polymorphic engines</li>
                <li>Self-modifying code</li>
                <li>Anti-analysis techniques</li>
            </ul>
            
            <h2>Research Papers</h2>
            <ul>
                <li>"Metamorphic Viruses: Analysis and Detection" - Szor & Ferrie</li>
                <li>"Understanding and Detecting Metamorphic Viruses" - Walenstein et al.</li>
                <li>"The Evolution of Metamorphic Engines" - Orr</li>
            </ul>
            
            <p><strong>Disclaimer:</strong> This information is for academic research and defensive security purposes only.</p>
        `,
        
        'advanced-resources': `
            <h1>Advanced Virus Research Resources</h1>
            <h2>Congratulations!</h2>
            <p>If you've made it this far, you've covered the fundamental concepts needed for advanced virus research.</p>
            
            <h2>Next Steps</h2>
            <p>You now have the foundation in:</p>
            <ul>
                <li>C Programming fundamentals</li>
                <li>Assembly language basics</li>
                <li>Metamorphic techniques</li>
                <li>Virus architecture and design</li>
            </ul>
            
            <h2>Advanced Resources Available</h2>
            <p>For access to advanced PDFs, research papers, and specialized resources to take your knowledge to the next level, contact:</p>
            
            <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <h3>📱 WhatsApp Contact</h3>
                <p style="font-size: 18px; font-weight: bold; color: #2c3e50;">+212 625 218 307</p>
                <p>Mention that you completed the TH3F.TECH virus research fundamentals.</p>
            </div>
            
            <h2>What You'll Get</h2>
            <ul>
                <li>Advanced metamorphic engine blueprints</li>
                <li>State-of-the-art evasion techniques</li>
                <li>Real-world case studies</li>
                <li>Exclusive research papers</li>
                <li>Custom tools and frameworks</li>
            </ul>
            
            <p><strong>Note:</strong> These resources are provided strictly for academic research, penetration testing, and defensive security purposes. Professional verification may be required.</p>
        `,
        
        'binary-analysis': `
            <h1>Binary Analysis Techniques</h1>
            <h2>Overview</h2>
            <p>Binary analysis involves examining compiled software without access to source code to understand its functionality, find vulnerabilities, or detect malicious behavior.</p>
            
            <h2>Static Analysis</h2>
            <ul>
                <li>Disassembly and decompilation</li>
                <li>Control flow analysis</li>
                <li>String and resource analysis</li>
                <li>Import/export table examination</li>
            </ul>
            
            <h2>Dynamic Analysis</h2>
            <ul>
                <li>Runtime behavior monitoring</li>
                <li>API call tracing</li>
                <li>Memory dump analysis</li>
                <li>Network traffic analysis</li>
            </ul>
            
            <h2>Tools</h2>
            <ul>
                <li><strong>Disassemblers:</strong> IDA Pro, Ghidra, Radare2</li>
                <li><strong>Debuggers:</strong> x64dbg, GDB, OllyDbg</li>
                <li><strong>Hex Editors:</strong> HxD, 010 Editor</li>
                <li><strong>Sandboxes:</strong> Cuckoo, Any.run</li>
            </ul>
        `
    };
    
    return content[attackType] || '<h1>Content Coming Soon</h1><p>This section is under development.</p>';
}
