import React from 'react';
import type { SkillCategory, Project, ExperienceItem } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5' },
      { name: 'CSS3 / SCSS' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'Express.js' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Figma' },
      { name: 'Docker' },
      { name: 'Git & GitHub' },
      { name: 'Vercel' },
      { name: 'GraphQL' },
    ],
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge e-commerce platform with a focus on user experience and performance, built with a modern tech stack.',
    tags: ['React', 'Next.js', 'Stripe', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/alpha/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Beta',
    description: 'An interactive data visualization dashboard for analyzing market trends, providing real-time insights.',
    tags: ['D3.js', 'React', 'WebSocket'],
    imageUrl: 'https://picsum.photos/seed/beta/400/300',
    liveUrl: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first social networking app designed to connect like-minded individuals through shared interests and events.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/gamma/400/300',
    sourceUrl: '#',
  },
    {
    title: 'Project Delta',
    description: 'A content management system with a powerful markdown editor and a serverless architecture for scalability.',
    tags: ['Vue.js', 'Serverless', 'AWS Lambda'],
    imageUrl: 'https://picsum.photos/seed/delta/400/300',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: [
      'Led the development of a new client-facing dashboard, improving user engagement by 25%.',
      'Mentored junior developers and established best practices for code reviews and testing.',
      'Architected and implemented a reusable component library, reducing development time by 40%.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Innovate Co.',
    period: '2018 - 2020',
    description: [
      'Developed and maintained web applications using React and Redux.',
      'Collaborated with UI/UX designers to translate wireframes into high-quality code.',
      'Optimized application performance, resulting in a 50% reduction in load times.',
    ],
  },
];

export const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const TWITTER_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>Twitter</title>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);


export const EXTERNAL_LINK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <title>External Link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);