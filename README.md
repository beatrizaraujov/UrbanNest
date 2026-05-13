# UrbanNest — Plataforma Imobiliária de Alta Performance

> **Status:** Concluído.
> 🚀 **Deploy:** [https://urbannest-imoveis.vercel.app/](https://urban-nestt.vercel.app/)

O **UrbanNest** é uma plataforma imobiliária desenvolvida para simular um ambiente real de mercado. O foco central do projeto foi a construção de uma interface resiliente ao consumo de dados externos, priorizando a performance do Next.js e uma experiência de usuário (UX) sem fricções.

## 🏗️ Engenharia de Front-end

Neste projeto, foquei em resolver problemas comuns de aplicações que dependem de APIs externas:

### 1. Consumo de Dados e Resiliência
Implementei uma estratégia de consumo de API (Mock) para validar:
- **Fluxo Assíncrono:** Tratamento completo de requisições.
- **Estados de Feedback:** `if (isLoading)` >>> O sistema exibe esqueletos de carregamento (Skeletons) para manter a percepção de performance do usuário.
- **Tratamento de Erros:** `if (error)` >>> Interface amigável para falhas na busca de dados, evitando o "quebramento" da aplicação.

### 2. Arquitetura de Componentes e Escalabilidade
Seguindo as melhores práticas de Clean Code:
- **Componentização Modular:** Interfaces divididas em unidades menores e reutilizáveis, facilitando a manutenção e testes.
- **Tailwind CSS + Responsividade:** Estratégia Mobile-first absoluta, garantindo fluidez em dispositivos móveis, tablets e desktops.

## 🛠️ Stack Técnica
- **Next.js:** Framework principal para otimização de rotas e SEO.
- **React:** Biblioteca base para a construção da interface declarativa.
- **Tailwind CSS:** Para um design sistêmico e consistente.
- **TypeScript:** Tipagem estrita de dados imobiliários para maior segurança no desenvolvimento.

## 💡 O que este projeto demonstra?
- Minha capacidade de integrar interfaces com camadas de dados complexas.
- Domínio de **Product Thinking**, entendendo que uma plataforma imobiliária precisa de carregamento rápido e confiança visual.
- Maturidade em **Engenharia de Software**, com código organizado para receber um backend real com o mínimo de refatoração.****
