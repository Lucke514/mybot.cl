import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const plans = [
  {
    name: 'Básico',
    price: '29.990',
    description: 'Perfecto para pequeñas empresas que están comenzando',
    features: [
      'Hasta 1,000 conversaciones/mes',
      'Respuestas en tiempo real',
      'Integración con sitio web',
      'Personalización básica',
      'Soporte por email'
    ],
    featured: false
  },
  {
    name: 'Profesional',
    price: '79.990',
    description: 'Ideal para empresas en crecimiento con mayor demanda',
    features: [
      'Hasta 5,000 conversaciones/mes',
      'Respuestas en tiempo real',
      'Integración multicanal',
      'Personalización avanzada',
      'Análisis de conversaciones',
      'Soporte prioritario 24/7'
    ],
    featured: true
  },
  {
    name: 'Empresarial',
    price: '199.990',
    description: 'Para grandes empresas con necesidades específicas',
    features: [
      'Conversaciones ilimitadas',
      'API personalizada',
      'Integración total',
      'Personalización completa',
      'Análisis avanzado',
      'Soporte dedicado 24/7',
      'SLA garantizado'
    ],
    featured: false
  }
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id="pricing" className="bg-primary-50 py-16">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes y Precios
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.featured ? 'ring-2 ring-primary-600' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 -translate-y-1/2 transform">
                  <span className="inline-flex rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                    Más Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/mes</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-primary-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 block w-full py-3 px-6 border rounded-md text-center font-medium transition-colors ${
                  plan.featured
                    ? 'bg-primary-600 border-transparent text-white hover:bg-primary-700'
                    : 'bg-white border-primary-300 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Comenzar con {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}