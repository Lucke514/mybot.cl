import { Mail, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id="contact" className="bg-white py-16">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Necesitas Ayuda?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nuestro equipo está listo para responder tus preguntas
          </p>
        </motion.div>
        <motion.div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3" variants={staggerContainer}>
          {[
            { icon: Mail, title: 'Email', content: 'soporte@mybot.cl' },
            { icon: Phone, title: 'Teléfono', content: '+56 9 5555 5555' },
            { icon: MessageSquare, title: 'Chat en Vivo', content: 'Disponible 24/7' }
          ].map((item) => (
            <motion.div key={item.title} className="text-center" variants={fadeInUp}>
              <div className="flex justify-center">
                <item.icon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-base text-gray-500">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}