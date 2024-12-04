import React from 'react';
import { Bot, Sparkles, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { scrollToElement } from '../utils/scroll';

const stats = [
  { icon: Sparkles, label: 'Precisión', value: '98%' },
  { icon: Zap, label: 'Tiempo de Respuesta', value: '<1s' },
  { icon: Globe, label: 'Idiomas', value: '20+' }
];

export function Hero() {
  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('features');
  };

  return (
    <div id="top" className="relative overflow-hidden">
      {/* Rest of the Hero component remains the same until the buttons */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100" />
      <div className="absolute inset-0 bg-grid-primary-100/[0.3] bg-[size:20px_20px]" />
      
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                variants={fadeInUp}
              >
                <span className="block xl:inline">Revoluciona tu</span>{' '}
                <span className="block text-primary-600 xl:inline">Atención al Cliente</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                variants={fadeInUp}
              >
                Potencia tu negocio con un asistente virtual inteligente que aprende y evoluciona. 
                Respuestas precisas, disponibilidad 24/7 y una experiencia personalizada para cada usuario.
              </motion.p>
              
              <motion.div 
                className="mt-8 sm:flex sm:justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <div className="rounded-md shadow">
                  <a
                    href="/register"
                    onClick={handleGetStarted}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Comenzar Ahora
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#demo"
                    onClick={handleDemoClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10"
                  >
                    Ver Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Rest of the Hero component remains the same */}
            <motion.div 
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
              variants={scaleIn}
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="w-full h-96 bg-primary-100 rounded-lg p-8 flex items-center justify-center">
                    <Bot className="w-48 h-48 text-primary-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16"
            variants={fadeInUp}
          >
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className={`flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 ${
                  index === 0 ? 'sm:border-r' : index === 1 ? 'sm:border-r' : ''
                }`}>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-primary-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}