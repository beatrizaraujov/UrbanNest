"use client";

import Image from "next/image";
import { Search, ChevronDown, MapPin, DollarSign, Home } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";


interface HeroOptions {
  locations: string[];
  propertyTypes: string[];
  prices: string[];
}

export default function HeroSection() {
  const router = useRouter();
  const [options, setOptions] = useState<HeroOptions | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const buscarOpcoes = async () => {
      try {
        const resposta = await fetch("/api/hero-options");
        const dados = await resposta.json();
        
        if (dados) {
          setOptions(dados);
          if (dados.locations?.length > 0) setSelectedLocation(dados.locations[0]);
          if (dados.propertyTypes?.length > 0) setSelectedType(dados.propertyTypes[0]);
          if (dados.prices?.length > 0) setSelectedPrice(dados.prices[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar opções:", error);
      } finally {
        setLoading(false);
      }
    };
    buscarOpcoes();
  }, []);

  const handleSearch = () => {
    if (loading || !selectedLocation || isExiting) return;
    setIsExiting(true);

    const params = new URLSearchParams({
      location: selectedLocation,
      type: selectedType,
      price: selectedPrice,
    });
    const nextRoute = `/search?${params.toString()}`;

    router.prefetch(nextRoute);

    setTimeout(() => {
      router.push(nextRoute);
    }, 300); 
  };

  const SlotChair = ({
    items,
    current,
    onSelect,
    label,
  }: {
    items: string[];
    current: string;
    onSelect: (val: string) => void;
    label: string;
  }) => {
    const isScrolling = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "up" | "down" | "first" | "last") => {
      if (isScrolling.current || !items.length) return;
      const currentIndex = items.indexOf(current);
      isScrolling.current = true;

      if (direction === "down" && currentIndex < items.length - 1) {
        onSelect(items[currentIndex + 1]);
      } else if (direction === "up" && currentIndex > 0) {
        onSelect(items[currentIndex - 1]);
      } else if (direction === "first") {
        onSelect(items[0]);
      } else if (direction === "last") {
        onSelect(items[items.length - 1]);
      }

      setTimeout(() => { isScrolling.current = false; }, 150);
    };

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.preventDefault();
        handleScroll(e.deltaY > 0 ? "down" : "up");
      };

      let touchStartY = 0;
      const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
      const onTouchMove = (e: TouchEvent) => {
        const delta = touchStartY - e.touches[0].clientY;
        if (Math.abs(delta) > 25) {
          e.preventDefault();
          handleScroll(delta > 0 ? "down" : "up");
          touchStartY = e.touches[0].clientY;
        }
      };

      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("touchstart", onTouchStart, { passive: true });
      el.addEventListener("touchmove", onTouchMove, { passive: false });

      return () => {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchmove", onTouchMove);
      };
    }, [current, items]);

    return (
      <div
        ref={containerRef}
        role="combobox"
        aria-label={label}
        tabIndex={0}
        style={{ touchAction: 'pan-x' }}
        className="relative h-[25px] md:h-[30px] flex items-center cursor-ns-resize group overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]/30 rounded"
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") handleScroll("up");
          if (e.key === "ArrowDown") handleScroll("down");
          if (e.key === "Home") handleScroll("first");
          if (e.key === "End") handleScroll("last");
        }}
      >
        <div key={current} className="animate-in slide-in-from-bottom-2 fade-in duration-200">
          {loading ? (
            <div className="w-24 h-5 bg-white/10 animate-pulse rounded" />
          ) : (
            <span className="text-[#00ff41] text-base md:text-lg lg:text-lg xl:text-xl font-bold tracking-tight whitespace-nowrap">
              {current || "---"}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-[999] bg-[#1C1C1C] transition-transform duration-700 ease-in-out pointer-events-none ${
          isExiting ? "translate-y-0" : "translate-y-full"
        }`}
      />

      <section className="relative w-[calc(100%-1rem)] h-[calc(100vh-1rem)] m-2 rounded-[20px] md:rounded-[40px] overflow-hidden bg-black">
        <Image src="/images/hero.jpg" alt="Hero Background" fill className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />

        
        <div className="absolute top-20 md:top-28 left-6 md:left-10 z-10 lg:top-auto lg:bottom-16 lg:left-16">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[60px] xl:text-[75px] leading-none tracking-tighter">
            Uma nova forma de<br />buscar imóveis
          </h1>
          <p className="text-neutral-300 text-xs md:text-sm lg:text-[16px] xl:text-[20px] mt-3 md:mt-5 leading-relaxed font-semibold max-w-[250px] md:max-w-xl lg:max-w-2xl">
            Filtros inteligentes e navegação intuitiva para encontrar seu lugar.
          </p>
        </div>

        
        <div className="absolute bottom-0 right-0 z-[50] w-full lg:w-auto">
          <div className="bg-transparent lg:bg-white pt-0 lg:pt-5 lg:pl-5 rounded-tl-[70px] relative">
            
            
            <div className="absolute -top-[59px] right-0 w-[60px] h-[60px] hidden lg:block">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M61 61V0C61 33.1371 33.1371 61 0 61H61Z" fill="white" /></svg>
            </div>

            
            <div className="bg-transparent lg:bg-[#050505] rounded-tl-none lg:rounded-tl-[50px] p-6 md:p-8 lg:p-[40px] xl:p-[47px] flex flex-col items-center">
              
              
              <div className="flex flex-col lg:hidden w-full gap-6 mb-8 px-2">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MapPin className="text-neutral-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Localização</span>
                    <SlotChair items={options?.locations || []} current={selectedLocation} onSelect={setSelectedLocation} label="Localização" />
                  </div>
                </div>
                
                 <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <DollarSign className="text-neutral-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Preço Máximo</span>
                    <SlotChair items={options?.prices || []} current={selectedPrice} onSelect={setSelectedPrice} label="Preço" />
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Home className="text-neutral-400 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Tipo de Imóvel</span>
                    <SlotChair items={options?.propertyTypes || []} current={selectedType} onSelect={setSelectedType} label="Tipo" />
                  </div>
                </div>

                <button 
                  onClick={handleSearch}
                  disabled={loading || isExiting}
                  className="w-full bg-[#00ff41] py-4 rounded-2xl text-black font-black uppercase tracking-tighter text-lg shadow-[0_0_30px_rgba(0,255,65,0.2)] active:scale-95 disabled:opacity-50 transition-all"
                >
                  {isExiting ? "Carregando..." : "FIND"}
                </button>
              </div>

              
              <div className="hidden lg:flex flex-row items-center divide-x divide-white/10">
                
                <div className="flex flex-col px-4 lg:px-6 xl:px-8 min-w-[150px] lg:min-w-[170px] xl:min-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-neutral-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Localização</span>
                    <ChevronDown className="w-3 h-3 text-[#00ff41]" />
                  </div>
                  <SlotChair items={options?.locations || []} current={selectedLocation} onSelect={setSelectedLocation} label="Localização" />
                </div>
                
                
                <div className="flex flex-col px-4 lg:px-6 xl:px-8 min-w-[120px] lg:min-w-[130px] xl:min-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-neutral-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Tipo</span>
                    <ChevronDown className="w-3 h-3 text-[#00ff41]" />
                  </div>
                  <SlotChair items={options?.propertyTypes || []} current={selectedType} onSelect={setSelectedType} label="Tipo" />
                </div>
                
          
                <div className="flex flex-col px-4 lg:px-6 xl:px-8 min-w-[110px] lg:min-w-[120px] xl:min-w-[160px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-neutral-500 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Preço</span>
                    <ChevronDown className="w-3 h-3 text-[#00ff41]" />
                  </div>
                  <SlotChair items={options?.prices || []} current={selectedPrice} onSelect={setSelectedPrice} label="Preço" />
                </div>

              
                <button 
                  onClick={handleSearch}
                  disabled={loading || isExiting}
                  className="ml-6 lg:ml-8 xl:ml-10 bg-[#00ff41] w-14 h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,255,65,0.3)] hover:scale-110 active:scale-95 disabled:opacity-50 transition-all"
                >
                  <Search className="text-black w-6 h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}