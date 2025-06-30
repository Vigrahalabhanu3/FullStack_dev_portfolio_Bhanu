import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tr fixed-bottom from-gray-900 via-black to-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Bhanu Prasad</h3>
            <p className="text-gray-400 mt-2">🚀 Full-Stack Developer</p>
            <p className="text-gray-500 text-sm mt-1">
              Building responsive web apps & creative digital experiences.
            </p>
          </div>

          {/* Socials */}
          <div className="flex md:justify-end space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="group"
            >
              <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition duration-300" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition duration-300" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="group"
            >
              <Twitter className="h-6 w-6 text-gray-400 group-hover:text-white transition duration-300" />
            </a>
            <a
              href="mailto:you@example.com"
              title="Mail"
              className="group"
            >
              <Mail className="h-6 w-6 text-gray-400 group-hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Bhanu Prasad</span> — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
