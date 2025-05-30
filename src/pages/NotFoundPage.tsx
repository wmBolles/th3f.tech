import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AlertCircle className="h-16 w-16 text-gray-400 mb-6" />
      
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to="/"
        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;