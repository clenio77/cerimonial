import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaCalendarCheck, FaUserTie, FaBuilding, FaBirthdayCake, FaAward, FaHandshake } from 'react-icons/fa';
import Seo from '../components/Seo';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Valores para o efeito 3D
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transformar movimento do mouse em rotação 3D
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  // Atualizar posição do mouse
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const xPos = clientX - left - width / 2;
    const yPos = clientY - top - height / 2;
    
    x.set(xPos);
    y.set(yPos);
    setMousePosition({ x: xPos, y: yPos });
  };

  // Resetar posição quando o mouse sai
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('home_title')} description={t('home_description')} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Transformando Momentos em <span className="text-blue-300">Memórias Inesquecíveis</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Cerimonialista profissional com mais de 10 anos de experiência em planejamento e organização de eventos exclusivos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/servicos" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 font-medium">
                    Meus Serviços
                  </Link>
                  <Link href="/contato" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 font-medium">
                    Fale Comigo
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  perspective: 1000
                }}
              >
                <motion.div 
                  className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Usando a imagem com object-fit: cover para garantir que preencha o contêiner */}
                  <Image 
                    src="/images/perfil.jpg" 
                    alt="Helton Oliveira - Cerimonialista" 
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      objectPosition: "center center"
                    }}
                    priority
                  />
                  
                  {/* Overlay com texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex flex-col items-center justify-end text-white p-12">
                    <h2 className="text-4xl font-bold mb-4 text-center">Helton Oliveira</h2>
                    <p className="text-xl text-center mb-6">Cerimonialista e Organizador de Eventos</p>
                    <p className="text-center max-w-md mb-8">Transformando momentos especiais em memórias inesquecíveis</p>
                    <Link href="/servicos">
                      <motion.button
                        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Conheça nossos serviços
                      </motion.button>
                    </Link>
                  </div>
                  
                  {/* Efeito de brilho 3D */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
                    style={{
                      backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                      transformStyle: "preserve-3d",
                      transform: "translateZ(20px)"
                    }}
                  />
                </motion.div>
                
                {/* Floating Elements com efeito 3D */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(40px)"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaCalendarCheck className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Eventos Realizados</p>
                      <p className="text-xl font-bold">200+</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(60px)"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaAward className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Anos de Experiência</p>
                      <p className="text-xl font-bold">10+</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Serviços Especializados</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofereço soluções personalizadas para cada tipo de evento, garantindo que cada detalhe seja perfeito.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaUserTie />,
                  title: "Casamentos",
                  description: "Do planejamento à execução, cuido de todos os detalhes para tornar seu grande dia perfeito.",
                  link: "/servicos#casamentos"
                },
                {
                  icon: <FaBuilding />,
                  title: "Eventos Corporativos",
                  description: "Conferências, lançamentos e eventos empresariais organizados com profissionalismo e eficiência.",
                  link: "/servicos#corporativos"
                },
                {
                  icon: <FaBirthdayCake />,
                  title: "Festas Temáticas",
                  description: "Aniversários, formaturas e celebrações especiais com conceitos criativos e personalizados.",
                  link: "/servicos#tematicas"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  variants={fadeInUp}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="p-8">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Link href={service.link} className="text-blue-500 font-medium hover:underline">
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Portfólio de Eventos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Portfolio Item 1 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Casamento Jardim</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Casamento de Marina e João</h3>
                  <p className="text-gray-600 text-sm mb-2">Cerimônia ao ar livre com 150 convidados</p>
                </div>
              </div>
              
              {/* Portfolio Item 2 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Evento Corporativo</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Lançamento Empresa XYZ</h3>
                  <p className="text-gray-600 text-sm mb-2">Evento para 200 pessoas com coquetel</p>
                </div>
              </div>
              
              {/* Portfolio Item 3 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Aniversário 15 Anos</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">15 Anos de Juliana</h3>
                  <p className="text-gray-600 text-sm mb-2">Festa temática com 100 convidados</p>
                </div>
              </div>
              
              {/* Portfolio Item 4 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Casamento Praia</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Casamento de Ana e Pedro</h3>
                  <p className="text-gray-600 text-sm mb-2">Cerimônia à beira-mar com 80 convidados</p>
                </div>
              </div>
              
              {/* Portfolio Item 5 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Formatura</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Formatura Medicina 2022</h3>
                  <p className="text-gray-600 text-sm mb-2">Cerimônia e festa para 300 pessoas</p>
                </div>
              </div>
              
              {/* Portfolio Item 6 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-bold">Bodas de Prata</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">25 Anos de Casamento</h3>
                  <p className="text-gray-600 text-sm mb-2">Celebração íntima para 50 convidados</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                Ver Portfólio Completo
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">O Que Dizem Meus Clientes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Marina Silva</h3>
                    <p className="text-gray-600 text-sm">Noiva - Casamento Dez/2022</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Helton foi simplesmente incrível! Desde o primeiro contato até o grande dia, ele cuidou de cada detalhe com atenção e profissionalismo. Nosso casamento foi exatamente como sonhamos, graças à sua dedicação."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-bold">R</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Ricardo Oliveira</h3>
                    <p className="text-gray-600 text-sm">Diretor - Empresa XYZ</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Contratamos o Helton para organizar o lançamento do nosso novo produto e o resultado superou todas as expectativas. Sua organização e capacidade de resolver problemas foram fundamentais para o sucesso do evento."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-500 font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Carla Mendes</h3>
                    <p className="text-gray-600 text-sm">Mãe da Debutante</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "A festa de 15 anos da minha filha foi um sonho realizado! Helton entendeu perfeitamente o que queríamos e transformou nossas ideias em uma celebração mágica. Recomendo de olhos fechados!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato para uma consulta gratuita e descubra como posso ajudar a tornar seu evento inesquecível!
            </p>
            <Link href="/contato" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Agendar Consulta
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
