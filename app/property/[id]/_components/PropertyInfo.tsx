// _components/PropertyInfo.tsx

// Interface atualizada para ler a estrutura de tabela de comodidades [cite: 2026-02-26]
interface Amenity {
  name: string;
  value: string;
  icon: string;
}

interface PropertyInfoProps {
  title: string;
  location: string;
  price: string;
  description: string;
  amenities: Amenity[]; 
}

export default function PropertyInfo({ title, location, price, description, amenities }: PropertyInfoProps) {
  return (
    <div className="space-y-12">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          {title}
        </h1>
        <div className="text-3xl md:text-4xl font-bold text-gray-900 md:text-right">
          {price} <span className="text-lg text-gray-400 font-normal">USD</span>
        </div>
      </div>
      
      
      <div className="flex items-center gap-4 text-gray-500 text-lg -mt-6">
        <span>📍 {location}</span>
        <span className="text-gray-300">|</span>
        <span className="text-yellow-500 font-bold">⭐ 5.0</span>
      </div>

      <hr className="border-gray-100" />

      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Descrição:</h3>
        <p className="text-gray-500 leading-relaxed text-lg">
          {description}
        </p>
      </div>

     
      <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-8">Comodidades:</h3>
        
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-4 text-gray-600">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-2xl">
                {amenity.icon}
              </div>
              <div>
                <p className="text-sm text-gray-400">{amenity.name}</p>
                <p className="font-semibold text-gray-900">{amenity.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}