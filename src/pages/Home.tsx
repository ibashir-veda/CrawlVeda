import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Crawl4AI Web App</h1>
      <p className="text-xl mb-8">Powerful batch web crawling and scraping at your fingertips</p>
      <Link
        to="/batch-crawl"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-blue-700 transition duration-300"
      >
        Start Crawling
        <ArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

export default Home;