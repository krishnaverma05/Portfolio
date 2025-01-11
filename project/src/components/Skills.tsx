import React from 'react';
import { Code2, Database, Terminal, Layout, Settings, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['C++', 'SQL', 'C', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Developer Tools',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['React.js', 'Figma', 'CISCO Packet Tracer']
    },
    {
      title: 'Technical Domains',
      icon: <Settings className="w-6 h-6" />,
      skills: ['OOPs', 'Computer Networks', 'DSA', 'DBMS', 'Operating Systems']
    }
  ];

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-3">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;