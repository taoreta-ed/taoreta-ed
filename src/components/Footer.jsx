import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-zinc-100/90 py-6 text-center">
            <p className="text-lg font-semibold">Taoreta</p>
            <a 
                href="https://github.com/taoreta-ed/taoreta-ed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-400/90 hover:underline"
            >
                GitHub del Proyecto
            </a>
        </footer>
    );
};

export default Footer;
