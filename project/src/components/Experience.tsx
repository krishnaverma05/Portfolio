import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">Project Intern</h3>
          <p className="text-gray-600">Experiential Learning Centre, Thapar University</p>
          <p className="text-gray-500 text-sm">June 2024 - July 2024</p>
          
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Developed an automated aquaponics system with remote monitoring capabilities, optimizing plant and fish production through innovative technology integration.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Co-developed a responsive web platform using HTML, CSS, JavaScript, and React.js, resulting in a 25% improvement in user engagement through optimized UI/UX.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Engineered a modular network architecture using ESP32, achieving a 20% reduction in latency and maintaining 99.9% system uptime.</p>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Created comprehensive labeled plant image datasets for training computer vision models, enhancing system monitoring capabilities.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;