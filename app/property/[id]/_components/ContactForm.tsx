
import Image from "next/image";

interface ContactFormProps {
  broker: {
    name: string;
    email: string;
    image: string;
  };
}

export default function ContactForm({ broker }: ContactFormProps) {
  return (
    <div className="sticky top-32 bg-white border border-gray-100 p-8 rounded-[3rem] shadow-2xl shadow-gray-200/40">
      
      
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-14 h-14 bg-gray-100 rounded-full overflow-hidden">
          <Image 
            src={broker.image} 
            alt={broker.name} 
            fill 
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-lg">{broker.name}</p>
          <p className="text-sm text-gray-400 font-medium">{broker.email}</p>
        </div>
      </div>
      
      
      <div className="space-y-4">
        <input placeholder="Name" className="w-full h-14 bg-gray-50 rounded-2xl px-5 border border-transparent focus:border-black outline-none transition-all text-black" />
        <input placeholder="Email" className="w-full h-14 bg-gray-50 rounded-2xl px-5 border border-transparent focus:border-black outline-none transition-all text-black" />
        <textarea placeholder="Message" className="w-full h-32 bg-gray-50 rounded-2xl p-5 border border-transparent focus:border-black outline-none transition-all resize-none text-black"></textarea>
        
        
        <button className="w-full h-16 bg-black text-white rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
          Submit Request
        </button>
      </div>
    </div>
  );
}