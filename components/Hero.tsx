import React from 'react';
import ParticleCanvas from './ParticleCanvas';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-start">
      <ParticleCanvas />
      <div className="relative z-10 p-4">
        <p className="text-accent text-lg font-mono mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Yo, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Lalitha Subramanyam.</h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-dark mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>I turn caffeine into code.</h2>
        <p className="max-w-xl text-dark mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I'm a frontend engineer who loves building (and occasionally breaking) things for the web. My focus is on creating slick, intuitive digital experiences that people actually enjoy using.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
           <a href="#contact"
             onClick={(e) => {
               e.preventDefault();
               document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="text-accent border-2 border-accent rounded-md px-8 py-4 font-mono hover:bg-accent/10 transition-all duration-300 text-lg"
           >
            Let's Collab
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;