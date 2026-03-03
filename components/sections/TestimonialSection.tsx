// components/sections/TestimonialSection.tsx
import { Quote } from 'lucide-react'; // Ícone de aspas [cite: 2026-03-02]

const testimonials = [
  {
    quote: "Encontrei a casa dos meus sonhos em menos de uma semana! O corretor foi super atencioso, experiente e realmente se preocupou em entender o que a gente precisava. Fez toda a diferença no processo.",
    name: "Daniel Silva",
    title: "Proprietário",
    // --- NOVA FOTO PROFISSIONAL [cite: 2026-03-02] ---
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "Experiência incrível! Tudo foi muito rápido, recebi orientações sinceras e transparentes, e o resultado superou nossas expectativas. Conseguimos vender acima do valor pedido!",
    name: "Elena Vieceli",
    title: "Proprietária",
    // --- NOVA FOTO PROFISSIONAL [cite: 2026-03-02] ---
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
];

export default function TestimonialSection() {
  return (
    // --- FUNDO COM EFEITO DE BLUR [cite: 2026-03-02] ---
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
          O que dizem nossos compradores
        </h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-green-500 mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}