import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor of Engineering in Computer Science</h3>
              <p className="text-gray-600">Thapar Institute of Engineering and Technology</p>
              <p className="text-gray-500">September 2021 - Present</p>
              <p className="text-gray-600 mt-2">CGPA: 7.00</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Relevant Domains:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Object-Oriented Programming',
                    'Computer Networks',
                    'Data Structures and Algorithms',
                    'Database Management Systems',
                    'Operating Systems'
                  ].map((domain, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <School className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">12th Grade - CBSE</h3>
                <p className="text-gray-600">DAV International School, Amritsar</p>
                <p className="text-gray-600 mt-2">Percentage: 93.80%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <School className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">10th Grade - CBSE</h3>
                <p className="text-gray-600">DAV International School, Amritsar</p>
                <p className="text-gray-600 mt-2">Percentage: 92.40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;