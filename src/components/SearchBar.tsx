import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navData } from '../data/navigation';

interface SearchResult {
  type: 'category' | 'attack';
  id: string;
  categoryId?: string;
  name: string;
  description: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const searchContent = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const normalizedQuery = searchQuery.toLowerCase();

    navData.forEach(category => {
      // Search in categories
      if (
        category.name.toLowerCase().includes(normalizedQuery) ||
        category.description.toLowerCase().includes(normalizedQuery)
      ) {
        searchResults.push({
          type: 'category',
          id: category.id,
          name: category.name,
          description: category.description
        });
      }

      // Search in attacks
      category.attacks.forEach(attack => {
        if (
          attack.name.toLowerCase().includes(normalizedQuery) ||
          attack.description.toLowerCase().includes(normalizedQuery)
        ) {
          searchResults.push({
            type: 'attack',
            id: attack.id,
            categoryId: category.id,
            name: attack.name,
            description: attack.description
          });
        }
      });
    });

    setResults(searchResults);
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'category') {
      navigate(`/category/${result.id}`);
    } else {
      navigate(`/attack/${result.categoryId}/${result.id}`);
    }
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            searchContent(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search attacks and categories..."
          className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {isOpen && results.length > 0 && (
        <div 
          className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto"
        >
          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.id}-${index}`}
              onClick={() => handleResultClick(result)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b last:border-b-0 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{result.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{result.type}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                {result.description}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;