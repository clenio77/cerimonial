import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Modificando os itens do portfólio para usar os caminhos de imagem corretos
  const portfolioItems = [
    {
      id: 1,
      title: "Casamento de Marina e João",
      category: "Casamento",
      date: "Dezembro 2022",
      location: "Espaço Jardim das Flores",
      guests: 150,
      description: "Um elegante casamento ao ar livre com decoração em tons de azul e branco.",
      imageUrl: "/images/baloes.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 2,
      title: "Lançamento Empresa XYZ",
      category: "Corporativo",
      date: "Outubro 2022",
      location: "Hotel Premium",
      guests: 200,
      description: "Evento de lançamento de produto com coquetel e apresentação multimídia.",
      imageUrl: "/images/executiva.jpg" // Substituir por uma imagem que existe
    },
    {
      id: 3,
      title: "15 Anos de Juliana",
      category: "Festa Temática",
      date: "Agosto 2022",
      location: "Buffet Estrela",
      guests: 100,
      description: "Festa temática de 15 anos inspirada em Paris com decoração sofisticada.",
      imageUrl: "/images/15-anos.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 4,
      title: "Casamento de Ana e Pedro",
      category: "Casamento",
      date: "Julho 2022",
      location: "Praia do Sol",
      guests: 80,
      description: "Cerimônia à beira-mar com decoração em tons de azul e elementos marinhos.",
      imageUrl: "/images/aliança.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 5,
      title: "Formatura Medicina 2022",
      category: "Formatura",
      date: "Junho 2022",
      location: "Centro de Convenções",
      guests: 300,
      description: "Cerimônia de formatura seguida de festa com jantar e banda ao vivo.",
      imageUrl: "/images/aliança.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 6,
      title: "Bodas de Prata - Família Oliveira",
      category: "Celebração",
      date: "Maio 2022",
      location: "Restaurante Le Bistro",
      guests: 50,
      description: "Celebração íntima de 25 anos de casamento com jantar e música ao vivo.",
      imageUrl: "/images/baloes.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 7,
      title: "Conferência Tech 2022",
      category: "Corporativo",
      date: "Abril 2022",
      location: "Centro Empresarial",
      guests: 250,
      description: "Conferência de tecnologia com palestras, workshops e networking.",
      imageUrl: "/images/executiva.jpg" // Substituir por uma imagem que existe
    },
    {
      id: 8,
      title: "Casamento de Carla e Roberto",
      category: "Casamento",
      date: "Março 2022",
      location: "Fazenda Santa Clara",
      guests: 120,
      description: "Casamento rústico-chique em fazenda com decoração em tons terrosos.",
      imageUrl: "/images/aliança.jpg" // Usando imagem que sabemos que existe
    },
    {
      id: 9,
      title: "Aniversário 50 Anos - Sr. Rodrigues",
      category: "Aniversário",
      date: "Fevereiro 2022",
      location: "Clube Náutico",
      guests: 70,
      description: "Festa surpresa com tema náutico e jantar especial.",
      imageUrl: "/images/15-anos.jpg" // Usando imagem que sabemos que existe
    }
  ];

  const categories = ["Todos", "Casamento", "Corporativo", "Festa Temática", "Formatura", "Aniversário", "Celebração"];
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [filteredItems, setFilteredItems] = React.useState(portfolioItems);
  
  // Estado para controlar qual card está sendo hover
  const [hoveredCard, setHoveredCard] = useState(null);

  React.useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Função para criar valores de movimento para cada card
  const createCardMotionValues = () => {
    return {
      x: useMotionValue(0),
      y: useMotionValue(0),
      rotateX: useMotionValue(0),
      rotateY: useMotionValue(0)
    };
  };
  
  // Criar valores de movimento para cada item do portfólio
  const cardMotionValues = portfolioItems.map(() => createCardMotionValues());
  
  // Função para lidar com movimento do mouse nos cards
  const handleMouseMove = (e, index) => {
    if (hoveredCard !== index) return;
    
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calcular posição relativa do mouse (valores de -0.5 a 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    // Aplicar rotação baseada na posição do mouse
    cardMotionValues[index].rotateX.set(-y * 10); // Inverter para movimento natural
    cardMotionValues[index].rotateY.set(x * 10);
  };
  
  // Função para resetar a rotação quando o mouse sai
  const handleMouseLeave = (index) => {
    cardMotionValues[index].rotateX.set(0);
    cardMotionValues[index].rotateY.set(0);
    setHoveredCard(null);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfólio de Eventos</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Conheça alguns dos eventos que tive o prazer de organizar e fazer parte
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Categories - com efeito de flutuação */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Grid - com efeito 3D nos cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  rotateX: cardMotionValues[index].rotateX,
                  rotateY: cardMotionValues[index].rotateY
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{
                  z: 20,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <motion.div 
                  className="h-64 relative"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Usando a tag img padrão em vez do componente Image do Next.js */}
                  <img 
                    src={item.imageUrl || "/images/executiva.jpg"} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <span className="text-white font-medium p-4">{item.category}</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="p-6"
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-blue-500" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-blue-500" />
                      {item.guests} convidados
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      {item.location}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - com efeito de flutuação */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos criar seu evento inesquecível?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Entre em contato para uma consulta personalizada e descubra como posso ajudar a transformar seu evento em uma experiência única.
          </p>
          <motion.a
            href="/contato"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Agendar Consulta
          </motion.a>
        </div>
      </div>
    </Layout>
  );
}
