import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Crawl4AI Web App</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/batch-crawl" className="text-gray-600 hover:text-blue-600">Batch Crawl</Link></li>
            <li><Link to="/results" className="text-gray-600 hover:text-blue-600">Results</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;