import React from 'react';
import AnimatedSection from './AnimatedSection';

const technologies = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'Figma'];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold mb-8 text-light flex items-center">
        <span className="text-accent-secondary font-mono mr-3 text-2xl">01.</span> About Me
        <span className="flex-grow h-px bg-dark/30 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-dark space-y-4">
          <p>
            Hey! I'm Lalitha, a frontend engineer who's basically a professional pixel-pusher. My web dev journey started way back, customizing Tumblr themes (if you know, you know). Turns out that obsession with making things look cool was actually a career path.
          </p>
          <p>
            Today, I've leveled up from blog themes to building complex apps. I’ve worked with startups, huge corporations, and everything in between. My goal is always the same: build accessible, performant, and visually dope digital experiences.
          </p>
          <p>
            Here's the tech I've been vibing with recently:
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span key={tech} className="bg-secondary text-accent-secondary font-mono text-sm px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
          <div className="relative w-64 h-64 group">
             <div className="absolute w-full h-full border-2 border-accent rounded-md transform transition-transform duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <img 
              src="https://picsum.photos/seed/profile/300/300" 
              alt="Lalitha Subramanyam" 
              className="absolute w-full h-full object-cover rounded-md z-10 transform transition-transform duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;