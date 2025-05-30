import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, AlertTriangle, Github } from 'lucide-react';
import CollaboratorCard from '../components/CollaboratorCard';

const HomePage: React.FC = () => {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to th3f.tech</h1>
      <p className="text-xl mb-8">Cybersecurity knowledge should be free and accessible to everyone.</p>
      
      <div className="border-l-4 border-primary-500 pl-4 py-2 mb-8 bg-primary-50 dark:bg-primary-900/20">
        <p className="italic">
          "Information wants to be free. Information also wants to be expensive... That tension will not go away."
          <span className="block mt-2 text-right">— Stewart Brand</span>
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <a
          href="https://github.com/wmbolles/th3f.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          <Github className="h-5 w-5" />
          Contribute on GitHub
        </a>
      </div>

      <h2>Our Philosophy</h2>
      <p>
        At th3f.tech, we believe that knowledge about cybersecurity should be freely available to everyone. 
        Understanding how systems can be compromised is essential for building better defenses. 
        Our mission is to provide comprehensive, accessible information about various cybersecurity attacks, 
        techniques, and countermeasures.
      </p>
      
      <p>
        This documentation site is designed to help security professionals, students, and curious minds 
        understand the technical aspects of cybersecurity threats. By making this knowledge accessible, 
        we empower individuals to protect themselves and contribute to a more secure digital world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary-500" />
            <h3 className="text-xl font-bold mt-0">Comprehensive Coverage</h3>
          </div>
          <p className="mb-0">
            Explore detailed documentation on various types of cybersecurity attacks,
            from network vulnerabilities to application exploits.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-primary-500" />
            <h3 className="text-xl font-bold mt-0">Educational Focus</h3>
          </div>
          <p className="mb-0">
            All content is presented with an educational perspective, helping you
            understand not just how attacks work, but why they work.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary-500" />
            <h3 className="text-xl font-bold mt-0">Community Resource</h3>
          </div>
          <p className="mb-0">
            This knowledge base is maintained as a resource for the cybersecurity community,
            promoting better understanding and security practices.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-virus-500" />
            <h3 className="text-xl font-bold mt-0">Special Sections</h3>
          </div>
          <p className="mb-0">
            Explore our <Link to="/virus-creation">advanced guide on virus creation</Link> for educational purposes,
            with comprehensive resources for understanding malware development.
          </p>
        </div>
      </div>

      <h2>Our Collaborators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <CollaboratorCard
          name="Wassim Bolles"
          role="Project Creator & Lead Developer"
          image="https://avatars.githubusercontent.com/u/106280014?v=4"
          github="https://github.com/wmbolles"
          website="https://wmbolles.com"
        />
        <CollaboratorCard
          name="Bolt"
          role="AI Assistant & Technical Writer"
          image="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
          github="https://github.com/stackblitz"
          website="https://stackblitz.com"
        />
        <CollaboratorCard
          name="alphaben"
          role="Full stack developer"
          image="https://avatars.githubusercontent.com/u/107180422?v=4"
          github="https://github.com/bennamrouche"
          website="https://github.com/bennamrouche"
        />
        <CollaboratorCard
          name="Amine boukour"
          role="Full stack developer"
          image="https://avatars.githubusercontent.com/u/133964099?v=4"
          github="https://github.com/mboukour"
          website="https://github.com/mboukour"
        />
      </div>

      <h2>How to Use This Site</h2>
      <p>
        Navigate through the different categories of attacks using the sidebar menu. Each category contains
        detailed information about specific attack vectors, techniques, and potential countermeasures.
      </p>
      
      <p>
        For those interested in deeper technical knowledge, our special section on 
        <Link to="/virus-creation"> virus creation </Link> 
        provides educational resources on understanding malware from the ground up.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Open Source</h3>
        <p className="mb-4">
          This project is open source and welcomes contributions from the community. Whether you want to add new attack vectors,
          improve existing documentation, or fix bugs, your help is appreciated.
        </p>
        <a
          href="https://github.com/wmbolles/th3f.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline"
        >
          <Github className="h-5 w-5" />
          View on GitHub
        </a>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
        <p className="mb-0">
          The information provided on this website is for educational purposes only.
          The techniques described should be used responsibly and legally, with proper authorization.
          Unauthorized use of these techniques against systems you do not own may be illegal and unethical.
        </p>
      </div>
    </div>
  );
};

export default HomePage;