import React from 'react';
import AnimatedSection from './AnimatedSection';

const technologies = ['C', 'C++', 'HTML', 'JavaScript', 'GitHub', 'VS Code'];

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
            I'm a motivated and passionate aspiring software developer with a strong foundation in programming and a hunger for learning. A proactive problem-solver with experience in building web applications and a proven ability to collaborate effectively in team environments.
          </p>
          <p>
            I'm seeking to apply my technical skills and an eagerness to grow to contribute to meaningful projects. Here are a few technologies I'm proficient with:
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