"use client";

import { useState, useEffect, Suspense } from "react";
// LOGICA: Mantendo o caminho que você confirmou
import PropertyCard from "../../components/sections/ui/PropertyCard";

interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

function SearchResults() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/properties");
        const data = await res.json();
        setProperties(data);
        // MILIMÉTRICO: Pequeno fôlego para garantir que a cortina já ganhou velocidade
        setTimeout(() => setIsReady(true), 100);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${
      isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {properties.map((item, i) => (
        <PropertyCard key={item.id} property={item} index={i} />
      ))}
    </div>
  );
}

export default function SearchPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRenderList, setShouldRenderList] = useState(false);

  useEffect(() => {
   
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

   
    const timer = setTimeout(() => {
      setShouldRenderList(true);
    }, 100);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      
      <div 
        style={{ 
          transform: isVisible ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
        
        className="fixed inset-0 z-[999] bg-[#1C1C1C] transition-transform duration-[500ms] ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
      />

      
      <div className={`pt-32 pb-20 px-6 md:px-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter">
              Resultados
            </h1>
            <p className="text-gray-500 mt-4 text-xl font-medium">Imóveis selecionados para você</p>
          </div>
          <button 
            onClick={() => window.history.back()} 
            className="px-8 py-4 border-2 border-gray-100 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all active:scale-95"
          >
            ← Voltar
          </button>
        </div>

        
        {shouldRenderList && (
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 rounded-3xl" />}>
            <SearchResults />
          </Suspense>
        )}
      </div>
    </main>
  );
}