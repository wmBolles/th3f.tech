import React from 'react';
import { Github } from 'lucide-react';

interface CollaboratorProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  website?: string;
}

const CollaboratorCard: React.FC<CollaboratorProps> = ({
  name,
  role,
  image,
  github,
  website
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">{role}</p>
      <div className="flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default CollaboratorCard;