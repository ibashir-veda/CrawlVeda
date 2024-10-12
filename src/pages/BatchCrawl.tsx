import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Upload, Settings, Play, Pause, X, Download, ChevronDown, ChevronUp } from 'lucide-react';

const BatchCrawl: React.FC = () => {
  const [urls, setUrls] = useState<string>('');
  const [crawlingMode, setCrawlingMode] = useState<string>('static');
  const [concurrentRequests, setConcurrentRequests] = useState<number>(5);
  const [timeout, setTimeout] = useState<number>(30);
  const [chunkingStrategy, setChunkingStrategy] = useState<string>('none');
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<boolean>(false);
  const [cssSelectors, setCssSelectors] = useState<string>('');
  const [jsCommands, setJsCommands] = useState<string>('');
  const [proxySettings, setProxySettings] = useState<string>('');

  const handleStartCrawl = () => {
    // Implement crawling logic here
    toast.success('Batch crawling started successfully!');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setUrls(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Batch Web Crawling</h1>
      
      <div className="mb-4">
        <label className="block mb-2 font-semibold">URLs to Crawl</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={5}
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder="Enter URLs, one per line"
        ></textarea>
        <div className="mt-2">
          <label className="inline-flex items-center cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <Upload className="mr-2" />
            Upload CSV
            <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Crawling Mode</label>
        <select
          className="w-full p-2 border rounded"
          value={crawlingMode}
          onChange={(e) => setCrawlingMode(e.target.value)}
        >
          <option value="static">Static</option>
          <option value="dynamic">Dynamic</option>
          <option value="llm">LLM-based</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Concurrent Requests</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={concurrentRequests}
          onChange={(e) => setConcurrentRequests(Number(e.target.value))}
          min={1}
          max={100}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Timeout (seconds)</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={timeout}
          onChange={(e) => setTimeout(Number(e.target.value))}
          min={1}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Chunking Strategy</label>
        <select
          className="w-full p-2 border rounded"
          value={chunkingStrategy}
          onChange={(e) => setChunkingStrategy(e.target.value)}
        >
          <option value="none">None</option>
          <option value="fixed">Fixed Size</option>
          <option value="adaptive">Adaptive</option>
        </select>
      </div>

      <div className="mb-4">
        <button
          className="flex items-center text-blue-600 hover:text-blue-800"
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          {showAdvancedOptions ? <ChevronUp className="mr-1" /> : <ChevronDown className="mr-1" />}
          Advanced Options
        </button>
        {showAdvancedOptions && (
          <div className="mt-2 p-4 border rounded">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">CSS Selectors</label>
              <textarea
                className="w-full p-2 border rounded"
                value={cssSelectors}
                onChange={(e) => setCssSelectors(e.target.value)}
                placeholder="Enter CSS selectors"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">JavaScript Commands</label>
              <textarea
                className="w-full p-2 border rounded"
                value={jsCommands}
                onChange={(e) => setJsCommands(e.target.value)}
                placeholder="Enter JavaScript commands"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Proxy Settings</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={proxySettings}
                onChange={(e) => setProxySettings(e.target.value)}
                placeholder="Enter proxy settings"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center hover:bg-green-700"
          onClick={handleStartCrawl}
        >
          <Play className="mr-2" /> Start
        </button>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded flex items-center hover:bg-yellow-700">
          <Pause className="mr-2" /> Pause
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center hover:bg-red-700">
          <X className="mr-2" /> Cancel
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700">
          <Download className="mr-2" /> Download
        </button>
      </div>

      {/* Placeholder for status table and progress bar */}
      <div className="mb-4 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">Crawling Status</h2>
        <p>Status table and progress bar will be displayed here</p>
      </div>
    </div>
  );
};

export default BatchCrawl;