export interface Project {
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'NxtMock',
    tagline: 'AI-Powered Interview Preparation Platform',
    description:
      'A full-stack interview preparation platform that leverages OpenAI to generate personalized technical, HR, and behavioral interview questions. Tracks user scores and progress over time with secure JWT authentication.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'Tailwind CSS'],
    features: [
      'AI-generated technical, HR and behavioral questions',
      'Personalized question sets based on user profile',
      'AI-powered feedback on answers',
      'Score tracking and progress analytics',
      'Secure user authentication with JWT',
      'RESTful API backend with Express',
    ],
    image:
      'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787982140/Screenshot_2026-08-29_at_10.51.53_AM_y7kaxs.png',
    github: 'https://github.com/Vigrahalabhanu3/AI-Mock-Interview-client',
    live: 'https://aimockinterview.banuvigrahala.workers.dev/',
  },
  {
    number: '02',
    title: 'AI Resume Builder',
    tagline: 'Intelligent Resume Generation with AI',
    description:
      'A full-stack resume builder that uses OpenAI to help users craft professional, role-tailored resumes. Supports multiple templates, real-time editing, and one-click PDF export.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'JWT', 'Tailwind CSS'],
    features: [
      'AI-assisted content generation for each resume section',
      'Multiple professional resume templates',
      'Real-time resume customization and preview',
      'One-click PDF export',
      'Resume management dashboard',
      'Secure auth with JWT',
    ],
    image:
      'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787982140/Screenshot_2026-08-29_at_10.57.18_AM_uyfdcd.png',
    github: 'https://github.com/Vigrahalabhanu3/ai-resume-builder-client',
    live: 'https://client-rho-steel-21.vercel.app/',
  },
  {
    number: '03',
    title: 'Taskify',
    tagline: 'Clean and Focused Task Management',
    description:
      'A task management application designed for individuals who want a distraction-free way to organize their work. Built with a clean React frontend and a Node/MongoDB backend.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Create, update, and delete tasks with ease',
      'Organize tasks by status and priority',
      'Responsive and accessible UI',
      'Persistent data storage with MongoDB',
      'Clean, minimal user interface',
    ],
    image:
      'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787982140/Screenshot_2026-08-29_at_11.00.24_AM_e6ibkg.png',
    github: 'https://github.com/Vigrahalabhanu3/taskify',
    live: 'https://taskify-ochre-phi.vercel.app/dashboard',
  },
  {
    number: '04',
    title: 'TravelBounds',
    tagline: 'Discover and Plan Your Next Journey',
    description:
      'A travel discovery website with destination search, filtering, and visual exploration. Built with a focus on UI quality, responsive layouts, and smooth user experience.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Destination search and filtering',
      'Visually rich travel cards and layouts',
      'Fully responsive across all devices',
      'Clean navigation and intuitive UI',
      'Travel-focused content presentation',
    ],
    image:
      'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787982141/Screenshot_2026-08-29_at_11.03.32_AM_genqjq.png',
    github: 'https://github.com/Vigrahalabhanu3/TravelUnbounded',
    live: 'https://travelunbounded.vercel.app/',
  },
  {
    number: '05',
    title: 'AI Code Translator',
    tagline: 'Translate Code Across Languages Instantly',
    description:
      'An AI-powered developer tool that translates code snippets between programming languages using OpenAI. Designed for developers switching tech stacks or learning new languages.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'OpenAI API', 'Tailwind CSS'],
    features: [
      'Translate code between multiple languages',
      'Powered by OpenAI GPT models',
      'Clean input/output split-panel UI',
      'Copy translated code with one click',
      'Error handling for invalid input',
    ],
    image:
      'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787982140/Screenshot_2026-08-29_at_11.10.43_AM_drmvcu.png',
    github: 'https://github.com/Vigrahalabhanu3/code-translater-client-main',
    live: 'https://code-translater-client-main.vercel.app/login',
  },
];
