import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceSearch = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().toLowerCase() === 'benz') {
      navigate('/services/list');
    }
    // Add additional conditions if needed
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-12 text-black dark:text-white">Find Your Service</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter car brand or service"
          className="border p-2 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ServiceSearch;
