

export const properties = [
  {
    id: "1",
    title: "Parkview Heights",
    price: "$850,000",
    location: "New York, USA",
   
    description: "Interiores modernos e brilhantes com espaços generosos. " +
                 "Localizado no coração da cidade com vista panorâmica para o parque. " +
                 "Acabamentos de alto padrão e marcenaria planejada.",
    mainImage: "/images/hero-section.jpg",
    gallery: [
      "/images/sala-de-estar-hero-section.jpg",
      "/images/hero-section-banheiro.jpg",
      "/images/area-lazer-hero-section.jpg"
    ],
    
    amenities: [
      { name: "Beds", value: "4", icon: "🛏️" },
      { name: "Baths", value: "3", icon: "🚿" },
      { name: "Sq Ft", value: "2,800", icon: "📐" },
      { name: "Smoking Area", value: "No", icon: "🚬" },
      { name: "Kitchen", value: "Full", icon: "🍳" },
      { name: "Balcony", value: "Yes", icon: "🌳" },
      { name: "Wifi", value: "High Speed", icon: "📡" },
      { name: "Parking Area", value: "2 Spots", icon: "🚗" },
    ],
    
    broker: {
      name: "Katherine Bloom",
      image: "/images/corretores/corretora-katherine.jpg",
      email: "katherine@realnest.com"
    }
  },
  {
    id: "2",
    title: "Skyline Loft",
    price: "$550,000",
    location: "Miami, USA",
    
    description: "Loft industrial chic com janelas do chão ao teto. " +
                 "Possui paredes de tijolos expostos e tetos altos. " +
                 "Perfeitamente situado para vistas do horizonte e vida urbana.",
    mainImage: "/images/herosection.jpg",
    gallery: [
      "/images/herosection-sala.jpg",
      "/images/herosection-banheiro.jpg",
      "/images/area-lazer-herosection.jpg"
    ],
   
    amenities: [
      { name: "Beds", value: "2", icon: "🛏️" },
      { name: "Baths", value: "2", icon: "🚿" },
      { name: "Sq Ft", value: "1,500", icon: "📐" },
      { name: "Smoking Area", value: "No", icon: "🚬" },
      { name: "Kitchen", value: "Full", icon: "🍳" },
      { name: "Balcony", value: "No", icon: "🌳" },
      { name: "Wifi", value: "High Speed", icon: "📡" },
      { name: "Parking Area", value: "1 Spot", icon: "🚗" },
    ],
    
    broker: {
      name: "Stefan Salvatore",
      image: "/images/corretores/corretor-stefan.jpg",
      email: "stefan@realnest.com"
    }
  },
  {
    id: "3",
    title: "Ocean Whisper Villa",
    price: "$1,250,000",
    location: "Dubai, UAE",
    
    description: "Deslumbrante villa à beira-mar com uma piscina infinita privada. " +
                 "Design impecável com piso de mármore e acesso direto à praia. " +
                 "Terraços espaçosos com vista para o oceano para assistir ao pôr do sol.",
    mainImage: "/images/herosection1.jpg",
    gallery: [
      "/images/herosection1-maisdetalhes.jpg",
      "/images/herosection1-banheiro.jpg",
      "/images/area-lazer-herosection1.jpg" 
    ],

    amenities: [
      { name: "Beds", value: "5", icon: "🛏️" },
      { name: "Baths", value: "4", icon: "🚿" },
      { name: "Sq Ft", value: "4,200", icon: "📐" },
      { name: "Smoking Area", value: "Yes", icon: "🚬" },
      { name: "Kitchen", value: "Full", icon: "🍳" },
      { name: "Balcony", value: "Yes", icon: "🌳" },
      { name: "Wifi", value: "High Speed", icon: "📡" },
      { name: "Parking Area", value: "3 Spots", icon: "🚗" },
    ],
    // -------------------------------------------------
    broker: {
      name: "Dean Winchester",
      image: "/images/corretores/corretor-dean.jpg",
      email: "dean@realnest.com"
    }
  },
  {
    id: "4",
    title: "Luxury Mansion",
    price: "$5,000,000",
    location: "Monaco, MC",
    
    description: "Uma mansão clássica com detalhes em mármore e acabamento de luxo. " +
                 "Área externa com paisagismo exuberante e piscina olímpica. " +
                 "Segurança 24h em um dos bairros mais exclusivos do mundo.",
    mainImage: "/images/casa-de-luxo.jpg",
    gallery: [
      "/images/sala-de-estar-casa-de-luxo.jpg", 
      "/images/banheiro-casa-de-luxo.jpg",
      "/images/cozinha-casa-luxo.jpg",
      "/images/parte-externa-casa-luxo.jpg"
    ],
  
    amenities: [
      { name: "Beds", value: "6", icon: "🛏️" },
      { name: "Baths", value: "5", icon: "🚿" },
      { name: "Sq Ft", value: "8,500", icon: "📐" },
      { name: "Smoking Area", value: "No", icon: "🚬" },
      { name: "Kitchen", value: "Gourmet", icon: "🍳" },
      { name: "Balcony", value: "Yes", icon: "🌳" },
      { name: "Wifi", value: "High Speed", icon: "📡" },
      { name: "Parking Area", value: "4 Spots", icon: "🚗" },
    ],
    // -------------------------------------------------
    broker: {
      name: "Nicklaus Mikaelson",
      image: "/images/corretores/corretor-nicklaus.jpg",
      email: "nick@realnest.com"
    }
  },
  {
    id: "5",
    title: "Country House Escape",
    price: "$350,000",
    location: "Swiss Alps, Switzerland",
   
    description: "O refúgio perfeito no campo com design rústico e aconchegante. " +
                 "Ideal para quem busca tranquilidade com vista para as montanhas. " +
                 "Lareira central e acabamentos em madeira nobre.",
    mainImage: "/images/casa-campo.jpg",
    gallery: [
      "/images/parte-de-dentro-casa-campo.jpg",
      "/images/banheiro-casa-campo.jpg",
      "/images/casa-campo2.jpg"
    ],

    amenities: [
      { name: "Beds", value: "3", icon: "🛏️" },
      { name: "Baths", value: "2", icon: "🚿" },
      { name: "Sq Ft", value: "2,100", icon: "📐" },
      { name: "Smoking Area", value: "No", icon: "🚬" },
      { name: "Kitchen", value: "Country", icon: "🍳" },
      { name: "Balcony", value: "Yes", icon: "🌳" },
      { name: "Wifi", value: "Stable", icon: "📡" },
      { name: "Parking Area", value: "2 Spots", icon: "🚗" },
    ],
   
    broker: {
      name: "Sarah Jenkins",
      image: "/images/corretores/corretora-katherine.jpg",
      email: "sarah@realnest.com"
    }
  }
];