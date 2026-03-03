"use client"; // Necessário para usar hooks como useState [cite: 2026-01-13]

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  gallery: string[];
  title: string;
}

export default function PropertyGallery({ gallery, title }: GalleryProps) {
  // Estados para controlar o modal e a foto ativa [cite: 2026-01-13]
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // if (não tiver fotos) >>> mostra um bloco cinza elegante [cite: 2026-01-13]
  if (!gallery || gallery.length === 0) {
    return <div className="h-[300px] md:h-[400px] bg-gray-100 rounded-[2.5rem] animate-pulse" />;
  }

  // Funções para navegar no carrossel [cite: 2026-01-13]
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };
  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      
      <div className="flex flex-col md:flex-row gap-4 h-[300px] md:h-[450px] cursor-pointer">
        
      
        <div 
          className="relative flex-1 md:flex-[2.5] rounded-[2.5rem] overflow-hidden group shadow-lg"
          onClick={() => openModal(0)}
        >
          <Image
            src={gallery[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        
        <div className="flex flex-row md:flex-col gap-4 flex-1">
          <div 
            className="relative flex-1 rounded-[2rem] overflow-hidden shadow-md"
            onClick={() => openModal(1 % gallery.length)}
          >
            <Image
              src={gallery[1] || gallery[0]}
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>

          <div 
            className="relative flex-1 rounded-[2rem] overflow-hidden shadow-md"
            onClick={() => openModal(2 % gallery.length)}
          >
            <Image
              src={gallery[2] || gallery[0]}
              alt="Details"
              fill
              className="object-cover brightness-75"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <span className="text-white text-3xl font-bold">
                {gallery.length > 3 ? `+${gallery.length - 2}` : "+"}
              </span>
            </div>
          </div>
        </div>
      </div>

      
      {isOpen && (
        
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 h-screen w-screen overflow-hidden" 
          onClick={closeModal} 
        >
          
         
          <div 
            className="relative w-full max-w-7xl h-[65vh] mb-8"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={gallery[currentIndex]}
              alt={`${title} - Foto ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

         
          <div 
            className="flex items-center justify-center gap-6 bg-black/60 px-6 py-3 rounded-full flex-shrink-0"
            onClick={(e) => e.stopPropagation()} 
          >
            
           
            <button 
              onClick={prevPhoto} 
              className="text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform overflow-hidden flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
           
            <div className="flex gap-2 items-center">
              {gallery.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            
            <button 
              onClick={nextPhoto} 
              className="text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform overflow-hidden flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}