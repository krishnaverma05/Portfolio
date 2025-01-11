import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-6xl">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
      </main>
      <footer className="bg-white shadow-inner py-8 mt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 Krishna Verma. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/krishna-verma05" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:krishnaverma1205@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+916284685425" className="text-gray-600 hover:text-gray-900">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;