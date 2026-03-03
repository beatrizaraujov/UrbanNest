// components/sections/ui/PropertyCard.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation"; 

interface Property {
  id: string;
  title: string;
  price: string;
  description: string;
  beds: number;
  baths: number;
  sqft: string;
  mainImage: string;
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const router = useRouter();

  const handleRevealNavigation = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
    document.documentElement.classList.add('is-animating');

    setTimeout(() => {
      router.push(`/property/${property.id}`);
      
      setTimeout(() => {
        document.documentElement.classList.remove('is-animating');
      }, 400); 
    }, 500);
  };

  return (
    <div 
      className="group cursor-pointer relative" 
      onClick={handleRevealNavigation}
    >
      {/* CONTAINER DA IMAGEM [cite: 2026-03-02] */}
      <div className="relative rounded-[2rem] overflow-hidden bg-gray-100"> 
        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-sm font-bold text-gray-900">For Sale</span>
        </div>

        {property.mainImage ? (
          <Image
            src={property.mainImage}
            alt={property.title}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
            className="transition-transform duration-500 group-hover:scale-110 w-full h-[250px] md:h-[300px] object-cover"
          />
        ) : (
          <div className="w-full h-[250px] md:h-[300px] bg-gray-200 animate-pulse flex items-center justify-center">
             <span className="text-gray-400 font-medium">Carregando...</span>
          </div>
        )}

        {/* BOTÃO VERDE COM RECORTE NA IMAGEM [cite: 2026-03-02] */}
        {/* AJUSTE: Ajustado para criar o recorte branco curvo [cite: 2026-03-02] */}
        <div className="absolute bottom-0 right-0 z-20 w-[4.5rem] h-[4.5rem]">
          {/* Este div é o fundo branco que cria a curva fluida [cite: 2026-03-02] */}
          <div className="absolute bottom-0 right-0 w-[4.5rem] h-[4.5rem] bg-white rounded-tl-[2rem]"></div>
          
          {/* O círculo verde posicionado sobre o recorte branco [cite: 2026-03-02] */}
          {/* AJUSTE: Centralizado dentro da nova estrutura [cite: 2026-03-02] */}
          <div className="absolute bottom-1 right-1 w-14 h-14 rounded-full bg-[#00ff41] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 active:scale-95">
            <ArrowUpRight
              size={24}
              className="text-black transition-transform duration-300 group-hover:rotate-45"
            />
          </div>
        </div>
      </div>

      {/* ÁREA DE TEXTO [cite: 2026-03-02] */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
          <span>{property.beds} Beds</span>
          <span className="text-gray-300">•</span>
          <span>{property.baths} Baths</span>
          <span className="text-gray-300">•</span>
          <span>{property.sqft} sq.ft</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-2 tracking-tight line-clamp-1">
          {property.title}
        </h3>

        <p className="text-gray-500 mt-1 text-sm leading-relaxed line-clamp-2">
          {property.description}
        </p>

        <p className="mt-3 text-gray-900 font-bold text-lg">
          <span className="text-gray-400 font-medium text-sm">Price: </span>
          {property.price}
        </p>
      </div>
    </div>
  );
}