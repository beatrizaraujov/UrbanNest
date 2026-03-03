"use client";

import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV_LINKS = [
  { id: 'inicio', label: 'Início', href: '/' },
  { id: 'destaques', label: 'Destaques', href: '/#destaques' },
  { id: 'diferencial', label: 'Diferencial', href: '/#diferencial' },
  { id: 'depoimentos', label: 'Depoimentos', href: '/#depoimentos' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio'); 
  const pathname = usePathname();

  const isSpecialPage = pathname === '/search' || pathname.startsWith('/property/');
  const isDarkTheme = scrolled || isSpecialPage;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    let currentId = 'inicio';
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight / 2) {
          currentId = id;
        }
      }
    });
    setActiveSection(currentId);
  }, []);

  useEffect(() => {
    
    handleScroll();
    
    
    window.addEventListener("scroll", handleScroll);
    
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activeIndex = NAV_LINKS.findIndex(l => l.id === activeSection);

  return (
    <>
      <nav className="fixed top-4 lg:top-8 left-0 w-full px-6 lg:px-12 flex justify-between items-center z-[70]">
        
        
        <Link href="/" className={`text-2xl lg:text-3xl font-black tracking-tighter transition-colors duration-500 ${
          isDarkTheme ? "text-gray-900" : "text-white"
        }`}>
          UrbanNest<span className="text-[#00ff41]">.</span>
        </Link>
        
        
        <div className={`hidden lg:flex relative text-[11px] uppercase tracking-widest font-bold border backdrop-blur-md rounded-full items-center p-1 transition-all duration-700 ${
          isDarkTheme 
            ? "bg-white/70 border-gray-200/50 text-gray-400 shadow-xl" 
            : "bg-black/10 border-white/10 text-white/50"
        }`}>
          
          <div 
            className={`absolute top-1 bottom-1 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full shadow-sm ${
              isDarkTheme ? "bg-gray-900" : "bg-white"
            }`}
            style={{
              width: `calc(100% / ${NAV_LINKS.length} - 8px)`,
              left: `calc(4px + (${activeIndex} * (100% / ${NAV_LINKS.length})))`,
            }}
          />

          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative z-10 px-6 py-2 w-32 text-center transition-all duration-300 ${
                activeSection === link.id 
                  ? (isDarkTheme ? "text-white" : "text-black")
                  : "hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        
        <button className={`hidden lg:block px-8 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ${
          isDarkTheme ? "bg-gray-900 text-white shadow-gray-200" : "bg-[#00ff41] text-black shadow-green-900/20"
        }`}>
          Sign In
        </button>

       
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative z-[80] backdrop-blur-lg border p-3 rounded-2xl transition-all duration-300 ${
            isDarkTheme ? "bg-white/80 border-gray-200 text-gray-900 shadow-sm" : "bg-black/20 border-white/20 text-white"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      <div className={`fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-10 lg:hidden transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {NAV_LINKS.map((link, idx) => (
          <Link 
            key={link.id}
            href={link.href}
            className={`text-white text-4xl font-black tracking-tighter hover:text-[#00ff41] transition-all duration-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <button className="mt-6 bg-[#00ff41] px-12 py-4 rounded-full font-black text-black text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform">
          Sign In
        </button>
      </div>
    </>
  );
}