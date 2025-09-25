import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#hero" className="text-accent text-3xl font-bold font-mono group" onClick={(e) => handleLinkClick(e, '#hero')}>
          <span className="group-hover:text-accent-secondary transition-colors duration-300">L</span>
          <span className="group-hover:text-light transition-colors duration-300">S</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-light hover:text-accent transition-colors duration-300 font-mono text-sm" style={{ animation: `fadeInUp ${0.1 * (index + 1)}s ease-out forwards`, opacity: 0 }}>
              {link.name}
            </a>
          ))}
          <button onClick={handleResumeClick} className="border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono text-sm" style={{ animation: `fadeInUp ${0.1 * (navLinks.length + 1)}s ease-out forwards`, opacity: 0 }}>
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent z-50 relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-secondary w-3/4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl text-light hover:text-accent transition-colors duration-300 font-mono">
              {link.name}
            </a>
          ))}
          <button onClick={handleResumeClick} className="border border-accent text-accent px-6 py-3 rounded-md text-lg hover:bg-accent/10 transition-colors duration-300 mt-4 font-mono">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;