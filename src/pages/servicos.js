import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaUserTie, FaBuilding, FaBirthdayCake, FaCalendarCheck, FaComments, FaClipboardCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Servicos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Definindo os serviços primeiro
  const services = [
    {
      id: "planejamento-completo",
      icon: <FaCalendarCheck className="text-4xl text-blue-500" />,
      title: "Planejamento Completo",
      description: "Acompanhamento desde o início até o dia do evento, incluindo seleção de fornecedores, gestão de orçamento, cronograma e coordenação completa.",
      features: [
        "Consultoria personalizada",
        "Seleção e gestão de fornecedores",
        "Planejamento de orçamento",
        "Cronograma detalhado",
        "Coordenação no dia do evento",
        "Acompanhamento pós-evento"
      ]
    },
    {
      id: "coordenacao-dia",
      icon: <FaClipboardCheck className="text-4xl text-blue-500" />,
      title: "Coordenação do Dia",
      description: "Coordenação profissional no dia do evento para garantir que tudo ocorra conforme planejado, permitindo que você e seus convidados aproveitem plenamente o momento.",
      features: [
        "Reuniões de alinhamento pré-evento",
        "Cronograma detalhado do dia",
        "Coordenação de fornecedores",
        "Supervisão da montagem e desmontagem",
        "Solução de imprevistos",
        "Assistência aos convidados"
      ]
    },
    {
      id: "consultoria",
      icon: <FaComments className="text-4xl text-blue-500" />,
      title: "Consultoria",
      description: "Orientação especializada para quem deseja planejar seu próprio evento, mas precisa de direcionamento profissional em aspectos específicos.",
      features: [
        "Análise de necessidades",
        "Recomendação de fornecedores",
        "Dicas de organização",
        "Revisão de contratos",
        "Consultoria de estilo e temática",
        "Suporte por e-mail"
      ]
    }
  ];

  const eventTypes = [
    {
      icon: <FaUserTie />,
      title: "Casamentos",
      description: "Do tradicional ao contemporâneo, crio experiências personalizadas que refletem a personalidade dos noivos."
    },
    {
      icon: <FaBuilding />,
      title: "Eventos Corporativos",
      description: "Conferências, lançamentos de produtos e eventos empresariais organizados com profissionalismo e eficiência."
    },
    {
      icon: <FaBirthdayCake />,
      title: "Festas Temáticas",
      description: "Aniversários, formaturas e celebrações especiais com conceitos criativos e personalizados."
    }
  ];

  // Configuração para efeito 3D nos cards
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Função para criar valores de movimento para cada card
  const createMotionValues = () => {
    return {
      x: useMotionValue(0),
      y: useMotionValue(0),
      rotateX: useMotionValue(0),
      rotateY: useMotionValue(0)
    };
  };
  
  // Agora podemos usar services porque já foi definido
  const serviceMotionValues = services.map(() => createMotionValues());
  
  // Função para lidar com movimento do mouse nos cards
  const handleMouseMove = (e, index) => {
    if (hoveredCard !== index) return;
    
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calcular posição relativa do mouse (valores de -0.5 a 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    // Aplicar rotação baseada na posição do mouse
    serviceMotionValues[index].rotateX.set(-y * 10); // Inverter para movimento natural
    serviceMotionValues[index].rotateY.set(x * 10);
  };
  
  // Função para resetar a rotação quando o mouse sai
  const handleMouseLeave = (index) => {
    serviceMotionValues[index].rotateX.set(0);
    serviceMotionValues[index].rotateY.set(0);
    setHoveredCard(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Serviços</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Soluções personalizadas para tornar seu evento único e inesquecível
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Como Posso Ajudar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofereço diferentes níveis de serviço para atender às suas necessidades específicas
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div 
                  className="relative rounded-xl overflow-hidden shadow-lg"
                  style={{
                    rotateX: serviceMotionValues[index].rotateX,
                    rotateY: serviceMotionValues[index].rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Usando imagens que sabemos que existem */}
                  <img 
                    src={
                      index === 0 ? "/images/full-planning.jpg" : 
                      index === 1 ? "/images/day-of.jpg" : 
                      "/images/consulting.jpg"
                    } 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay com conteúdo */}
                  <div className="relative z-10 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-bold ml-3">{service.title}</h3>
                    </div>
                    <p className="mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-300 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="mt-8 px-6 py-2 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Saiba mais
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types - com efeito 3D nos cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tipos de Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência em diversos tipos de celebrações e eventos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-blue-600 text-2xl">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">O Que Dizem Sobre Mim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos de clientes satisfeitos com meus serviços
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Silva",
                role: "Noiva",
                quote: "Carlos transformou nosso casamento em um sonho realizado. Cada detalhe foi cuidadosamente planejado e executado com perfeição.",
                image: "/placeholder.jpg"
              },
              {
                name: "João Mendes",
                role: "Diretor de Marketing",
                quote: "Contratamos para nosso evento corporativo e superou todas as expectativas. Profissionalismo e criatividade em cada etapa do processo.",
                image: "/placeholder.jpg"
              },
              {
                name: "Juliana Costa",
                role: "Debutante",
                quote: "Minha festa de 15 anos foi exatamente como eu sonhei, graças ao trabalho incrível do Carlos. Recomendo a todos!",
                image: "/placeholder.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <div className="mb-6">
                  <svg className="h-12 w-12 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4">
                    {/* <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full" /> */}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6">Pronto para criar um evento inesquecível?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Entre em contato para uma consulta personalizada e descubra como posso ajudar a transformar sua visão em realidade.
            </p>
            <motion.a
              href="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition shadow-lg font-medium"
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
