export interface Attack {
  id: string;
  name: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  attacks: Attack[];
}

export const navData: Category[] = [
  {
    id: 'networking',
    name: 'Network Attacks',
    description: 'Attacks that target network infrastructure and protocols.',
    attacks: [
      {
        id: 'mitm',
        name: 'Man in the Middle',
        description: 'An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.'
      },
      {
        id: 'dos',
        name: 'Denial of Service',
        description: 'An attack aimed at shutting down a machine or network, making it inaccessible to its intended users.'
      },
      {
        id: 'packet-sniffing',
        name: 'Packet Sniffing',
        description: 'The practice of capturing and inspecting data packets as they travel across a network.'
      },
      {
        id: 'arp-spoofing',
        name: 'ARP Spoofing',
        description: 'A technique by which an attacker sends falsified ARP messages over a local area network.'
      }
    ]
  },
  {
    id: 'web',
    name: 'Web Attacks',
    description: 'Attacks that target web applications and services.',
    attacks: [
      {
        id: 'sql-injection',
        name: 'SQL Injection',
        description: 'A code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields.'
      },
      {
        id: 'xss',
        name: 'Cross-Site Scripting (XSS)',
        description: 'A type of security vulnerability typically found in web applications that allows attackers to inject client-side scripts into web pages viewed by other users.'
      },
      {
        id: 'csrf',
        name: 'Cross-Site Request Forgery',
        description: 'An attack that forces an end user to execute unwanted actions on a web application in which they are currently authenticated.'
      },
      {
        id: 'clickjacking',
        name: 'Clickjacking',
        description: 'A malicious technique of tricking a user into clicking on something different from what the user perceives, thus potentially revealing confidential information or allowing others to take control of their computer.'
      }
    ]
  },
  {
    id: 'kernel',
    name: 'Kernel Attacks',
    description: 'Attacks that target operating system kernels.',
    attacks: [
      {
        id: 'privilege-escalation',
        name: 'Privilege Escalation',
        description: 'The act of exploiting a bug, design flaw or configuration oversight in an operating system or software application to gain elevated access to resources that are normally protected.'
      },
      {
        id: 'buffer-overflow',
        name: 'Buffer Overflow',
        description: 'An anomaly that occurs when a program writes data beyond the boundaries of allocated memory buffers.'
      },
      {
        id: 'rootkits',
        name: 'Rootkits',
        description: 'A collection of computer software, typically malicious, designed to enable access to a computer or an area of its software that is not otherwise allowed.'
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Attacks',
    description: 'Attacks that target mobile devices and applications.',
    attacks: [
      {
        id: 'app-repackaging',
        name: 'App Repackaging',
        description: 'The process of decompiling a legitimate mobile app, adding malicious code, and then recompiling it for distribution.'
      },
      {
        id: 'fake-apps',
        name: 'Fake Apps',
        description: 'Malicious applications designed to look like legitimate ones but containing malware or spyware.'
      },
      {
        id: 'mobile-phishing',
        name: 'Mobile Phishing',
        description: 'Phishing attacks specifically targeting mobile device users, often via SMS, messaging apps, or social media.'
      }
    ]
  },
  {
    id: 'reverse-engineering',
    name: 'Reverse Engineering',
    description: 'Techniques to analyze and understand how software works.',
    attacks: [
      {
        id: 'binary-analysis',
        name: 'Binary Analysis',
        description: 'The process of analyzing compiled binaries to understand their functionality without access to source code.'
      },
      {
        id: 'disassembly',
        name: 'Disassembly',
        description: 'Converting machine code into assembly language to understand program behavior.'
      },
      {
        id: 'debugging',
        name: 'Debugging Techniques',
        description: 'Methods used to examine program execution for analyzing behavior or identifying vulnerabilities.'
      }
    ]
  }
];