import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return <Resume onBack={() => setShowResume(false)} />;
  }

  return (
    <div className="text-light font-sans">
      <Header onShowResume={() => setShowResume(true)} />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;