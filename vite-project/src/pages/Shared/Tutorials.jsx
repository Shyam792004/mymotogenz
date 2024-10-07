import React, { useState } from 'react';

// Sample data for tutorials
const videoData = [
  { title: 'Engine Maintenance 101', description: 'Learn how to maintain your engine', category: 'engine' },
  { title: 'Brake System Repair', description: 'Fixing common brake issues', category: 'brake' },
  { title: 'How to Change Tires', description: 'Step-by-step tire change guide', category: 'tire' },
  { title: 'Steering System Troubleshooting', description: 'Diagnose and fix steering problems', category: 'steering' },
  { title: 'Advanced Engine Tuning', description: 'Enhance your engine performance', category: 'engine' },
  { title: 'Brake Fluid Replacement', description: 'Keep your brake system healthy', category: 'brake' },
  // Add more videos as needed
];

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter videos based on search term
  const filteredVideos = videoData.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tutorials</h1>
      <input
        type="text"
        placeholder="Search for tutorials..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map((video, index) => (
          <div key={index} className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <p className="text-gray-600 mb-4">{video.description}</p>
            <video controls className="w-full h-48 bg-gray-200">
              <source src={`path/to/${video.title.replace(/\s+/g, '_').toLowerCase()}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
