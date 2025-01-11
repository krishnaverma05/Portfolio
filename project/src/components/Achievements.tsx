import React from 'react';
import { Trophy, Award, Users, FileText } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hackathon Success',
      description: 'First runner-up in Android Security problem statement at Cython 2024 Hackathon hosted by IIT Delhi, FITT, and NTRO.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'CTF Achievement',
      description: 'Ranked 163rd in Capture The Flag (CTF) event hosted jointly by IIT Jammu and DRDO.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership Role',
      description: 'Team leader in MLSC Hackathon and Publicity Head of Mudra Society (a cultural society).'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Patent Publication',
      description: 'Successfully published a patent, demonstrating innovation and technical expertise.'
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {achievement.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;