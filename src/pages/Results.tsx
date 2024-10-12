import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('markdown');
  const [results, setResults] = useState<string>('# Sample Results\n\nThis is a placeholder for crawling results.');

  const renderContent = () => {
    switch (activeTab) {
      case 'markdown':
        return <ReactMarkdown>{results}</ReactMarkdown>;
      case 'json':
        try {
          const jsonData = JSON.parse(results);
          return (
            <SyntaxHighlighter language="json" style={tomorrow}>
              {JSON.stringify(jsonData, null, 2)}
            </SyntaxHighlighter>
          );
        } catch (error) {
          return <p>Invalid JSON data</p>;
        }
      case 'html':
        return (
          <SyntaxHighlighter language="html" style={tomorrow}>
            {results}
          </SyntaxHighlighter>
        );
      default:
        return <p>No content to display</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Crawling Results</h1>
      
      <div className="mb-4">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 ${activeTab === 'markdown' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('markdown')}
          >
            Markdown
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'json' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('json')}
          >
            JSON
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'html' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow">
        {renderContent()}
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Download Results
        </button>
      </div>
    </div>
  );
};

export default Results;