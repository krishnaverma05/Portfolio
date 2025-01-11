import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SecureCrypt',
      description: 'A secure web application for real-time password encryption and decryption using public/private key cryptography.',
      technologies: ['React.js', 'JavaScript', 'C++', 'HTML', 'CSS'],
      highlights: [
        'Aiming for 90% encryption accuracy',
        'Reducing data vulnerability by 85%',
        'Advanced cryptographic implementation'
      ]
    },
    {
      title: 'Fins&Ferns',
      description: 'Interactive web interface for an automated aquaponics system with real-time monitoring capabilities.',
      technologies: ['React.js', 'JavaScript', 'IoT', 'Data Visualization'],
      highlights: [
        '25% improvement in data accuracy',
        '20% reduction in system response time',
        'Remote monitoring and control'
      ]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
