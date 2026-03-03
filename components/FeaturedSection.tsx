"use client";
import { useState, useEffect } from 'react';

import PropertyCard from "@/components/sections/ui/PropertyCard";

interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  beds: number;
  baths: number;
  sqft: string;
  mainImage: string;
}

export default function FeaturedSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const buscarCasas = async () => {
      try {
        const resposta = await fetch('/api/properties');
        const dados = await resposta.json();
        setProperties(dados);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao carregar propriedades:", error);
        setIsLoading(false);
      }
    };

    buscarCasas();
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold animate-pulse text-gray-400">
          Carregando casas incríveis...
        </h2>
      </section>
    );
  }

  return (
    
    <section className="pt-20 pb-10 px-6 md:px-16 bg-white">
      
      <div className="mb-10"> 
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"> 
          Seleção exclusiva
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg mt-6"> 
          Uma coleção de imóveis que se destacam pela arquitetura, localização e qualidade de vida que proporcionam.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((item, index) => (
          
          <PropertyCard 
            key={item.id} 
            property={{
              ...item,
              id: item.id.toString() 
            }} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}