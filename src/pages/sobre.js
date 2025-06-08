import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Sobre Nós</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Conheça nossa história, nossa equipe e nossa paixão por criar eventos memoráveis.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  A Elegance Eventos nasceu da paixão por transformar momentos especiais em memórias inesquecíveis. 
                  Fundada em 2015 por Ana Oliveira, após anos de experiência no mercado de eventos, a empresa 
                  rapidamente se destacou pela atenção aos detalhes e pelo atendimento personalizado.
                </p>
                <p className="text-gray-600 mb-4">
                  O que começou como um sonho individual se transformou em uma equipe de profissionais dedicados, 
                  unidos pelo mesmo propósito: criar experiências únicas que refletem a personalidade e os desejos 
                  de cada cliente.
                </p>
                <p className="text-gray-600">
                  Hoje, com mais de 200 eventos realizados, continuamos com o mesmo entusiasmo e compromisso do 
                  primeiro dia, sempre buscando inovar e superar expectativas.
                </p>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                {/* Usando a tag img padrão em vez do componente Image */}
                <img 
                  src="/images/about-story.jpg" 
                  alt="Nossa história" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Missão</h3>
              <p className="text-gray-600">
                Transformar sonhos em realidade através de eventos personalizados que superem as expectativas 
                dos nossos clientes, criando momentos inesquecíveis com profissionalismo e dedicação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em organização de eventos, reconhecida pela excelência, 
                criatividade e capacidade de inovação, mantendo sempre o compromisso com a satisfação dos clientes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excelência em cada detalhe</li>
                <li>• Compromisso com a satisfação do cliente</li>
                <li>• Ética e transparência</li>
                <li>• Criatividade e inovação</li>
                <li>• Trabalho em equipe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Ana Oliveira"
              role="Fundadora e Cerimonialista Principal"
              bio="Com mais de 10 anos de experiência no mercado de eventos, Ana é apaixonada por criar momentos inesquecíveis."
              image="/images/team-1.jpg"
            />
            <TeamMember 
              name="Carlos Santos"
              role="Coordenador de Eventos"
              bio="Especialista em logística e organização, Carlos garante que cada evento aconteça sem imprevistos."
              image="/images/team-2.jpg"
            />
            <TeamMember 
              name="Mariana Costa"
              role="Designer de Eventos"
              bio="Com olhar criativo e atento às tendências, Mariana transforma conceitos em decorações deslumbrantes."
              image="/images/team-3.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Team Member Component
const TeamMember = ({ name, role, bio, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
      {/* Usando a tag img padrão em vez do componente Image */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-blue-600 mb-3">{role}</p>
    <p className="text-gray-600">{bio}</p>
  </div>
);
