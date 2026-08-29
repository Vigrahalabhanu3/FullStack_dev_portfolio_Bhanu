import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Vigrahalabhanu3',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhanu-prasad-848003289',
    icon: Linkedin,
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/bhanu7671988410',
    icon: Twitter,
  },
  {
    label: 'Email',
    href: 'mailto:banuvigrahala@gmail.com',
    icon: Mail,
  },
];

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {/* Branding */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-slate-900">Bhanu Prasad</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              MERN Stack Developer building full-stack web applications with clean code and
              thoughtful design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-1.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect
            </p>
            <div className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Bhanu Prasad Vigrahala. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
