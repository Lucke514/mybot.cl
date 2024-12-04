import { Brain, Gauge, Lock, MessageSquare, Settings, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const features = [
  {
    name: 'IA Avanzada',
    description: 'Procesamiento de lenguaje natural de última generación para respuestas precisas y contextuales.',
    icon: Brain
  },
  {
    name: 'Personalización Total',
    description: 'Adapta el chatbot a tu marca y necesidades específicas.',
    icon: Settings
  },
  {
    name: 'Alta Disponibilidad',
    description: 'Servicio 24/7 con respuestas instantáneas y sin tiempo de inactividad.',
    icon: Gauge
  },
  {
    name: 'Seguridad Garantizada',
    description: 'Encriptación de extremo a extremo y cumplimiento con estándares de seguridad.',
    icon: Lock
  },
  {
    name: 'Multicanal',
    description: 'Integración con múltiples plataformas y canales de comunicación.',
    icon: MessageSquare
  },
  {
    name: 'Soporte Multiusuario',
    description: 'Maneja múltiples conversaciones simultáneas sin perder calidad.',
    icon: Users
  }
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id="features" className="py-16 bg-white">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Características Principales
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Todo lo que necesitas para ofrecer una experiencia excepcional a tus usuarios
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                variants={scaleIn}
                className="pt-6"
              >
                <div className="flow-root bg-primary-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}