// components/sections/DifferentialSection.tsx
import { Target, Zap, ShieldCheck, Home, Banknote, Search } from 'lucide-react'; // Ícones adicionados [cite: 2026-03-02]

const differentials = [
  {
    icon: Target,
    title: "Especialistas no Mercado Local",
    description: "Conhecimento aprofundado dos bairros, valorização imobiliária e tendências do mercado regional."
  },
  {
    icon: Zap,
    title: "Transações Ágeis e Seguras",
    description: "Processos otimizados para garantir mais rapidez, transparência e segurança em cada etapa."
  },
  {
    icon: ShieldCheck,
    title: "Equipe Certificada e Confiável",
    description: "Profissionais qualificados, comprometidos com ética, excelência e satisfação do cliente."
  },
  {
    icon: Home,
    title: "Portfólio Exclusivo de Imóveis",
    description: "Seleção criteriosa de propriedades com alto potencial e oportunidades diferenciadas."
  },
  {
    icon: Banknote,
    title: "Suporte Completo em Financiamento",
    description: "Parcerias estratégicas com instituições financeiras para facilitar a aprovação de crédito."
  },
  {
    icon: Search,
    title: "Busca Personalizada",
    description: "Ferramentas inteligentes para encontrar imóveis alinhados ao seu perfil e objetivos."
  },
];

export default function DifferentialSection() {
  return (
    <section className="py-20 bg-white" id="diferencial"> 
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 tracking-tight">
          Por que escolher a UrbanNest
        </h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
             
              className="group p-8 rounded-[2.5rem] border border-gray-100 bg-white 
                         hover:border-gray-900 hover:bg-gray-900 hover:shadow-2xl 
                         transition-all duration-500 ease-out"
            >
              <item.icon className="w-10 h-10 text-green-500 mb-6 transition-colors duration-500 group-hover:text-white" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}