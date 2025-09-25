import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROJECTS_DATA, GITHUB_ICON, EXTERNAL_LINK_ICON } from '../constants';

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold mb-8 text-light flex items-center">
        <span className="text-accent-secondary font-mono mr-3 text-2xl">03.</span> Stuff I've Built
        <span className="flex-grow h-px bg-dark/30 ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-secondary rounded-lg shadow-lg group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 flex flex-col">
            <div className="relative h-56 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-end items-center space-x-4 text-dark mb-2">
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                    {GITHUB_ICON}
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                    {EXTERNAL_LINK_ICON}
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <p className="text-dark text-sm flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary text-accent-secondary text-xs font-mono px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;