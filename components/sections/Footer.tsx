// components/sections/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* LOGO E INSTITUCIONAL */}
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-bold text-white">
            UrbanNest
          </Link>

          <p className="mt-6 text-sm text-gray-400 max-w-sm leading-relaxed">
            Conectando pessoas aos melhores imóveis com segurança, 
            transparência e excelência no atendimento.
          </p>

          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>Av. Brigadeiro Faria Lima, 3477</p>
            <p>Itaim Bibi – São Paulo, SP</p>
            <p>CEP 04538-133 – Brasil</p>
          </div>

          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>contato@urbannest.com</p>
            <p>+55 (11) 99999-9999</p>
            <p>CNPJ 00.000.000/0001-00</p>
            <p>CRECI-SP 000000</p>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="/#destaques" className="hover:text-white transition">
                Imóveis em Destaque
              </Link>
            </li>
            <li>
              <Link href="/#diferencial" className="hover:text-white transition">
                Nossos Diferenciais
              </Link>
            </li>
            <li>
              <Link href="/#depoimentos" className="hover:text-white transition">
                Depoimentos
              </Link>
            </li>
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Redes Sociais
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Informações Legais
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UrbanNest Imobiliária Ltda. 
        Todos os direitos reservados.
      </div>
    </footer>
  );
}