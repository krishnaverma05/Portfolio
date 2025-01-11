import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col md:flex-row">
            <img
              src="https://github.com/krishnaverma05/Portfolio/blob/main/project/image.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-16"
            />
            <div className="md:ml-6 mt-6 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">Krishna Verma</h1>
              <p className="text-lg text-gray-600 mt-1">Computer Science Engineering Student</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="mailto:krishnaverma1205@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Mail className="w-4 h-4 mr-2" />
                  krishnaverma1205@gmail.com
                </a>
                <a href="tel:+916284685425" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 6284685425
                </a>
                <a href="https://linkedin.com/in/krishna-verma05" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-4 h-4 mr-2" />
                  krishna-verma05
                </a>
                <span className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Patiala, India
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">
              Passionate Computer Science Engineering student at Thapar Institute of Engineering and Technology with strong foundation in software development, algorithms, and system design. Experienced in building web applications and automated systems, with a focus on creating efficient and user-friendly solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
