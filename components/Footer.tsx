import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON, TWITTER_ICON } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent transition-transform duration-300 hover:-translate-y-1">
                    {GITHUB_ICON}
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent transition-transform duration-300 hover:-translate-y-1">
                    {LINKEDIN_ICON}
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-accent transition-transform duration-300 hover:-translate-y-1">
                    {TWITTER_ICON}
                </a>
            </div>
            <p className="text-dark font-mono text-xs">
                Coded with ☕ & vibes by Lalitha Subramanyam
            </p>
        </div>
    </footer>
  );
};

export default Footer;