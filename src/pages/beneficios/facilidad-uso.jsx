
import React from 'react';
import { Smartphone, Laptop, Settings } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function FacilidadUso() {
  const features = [
    {
      icon: Smartphone,
      title: "Interfaz Intuitiva",
      description: "Diseñada para ser clara y fácil de utilizar desde el primer momento."
    },
    {
      icon: Settings,
      title: "Sin Complicaciones",
      description: "Accede a traducciones instantáneas sin configuraciones complejas."
    },
    {
      icon: Laptop,
      title: "Compatibilidad Universal",
      description: "Disponible y optimizada para cualquier dispositivo y plataforma."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Facilidad de Uso – Comunicación Intuitiva | VokaFlow</title>
        <meta 
          name="description" 
          content="Disfruta de una experiencia de usuario sencilla e intuitiva con VokaFlow. Diseñada para facilitar la comunicación global desde cualquier dispositivo."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Facilidad de Uso con VokaFlow"
        subtitle="Comunicación global simple e intuitiva"
        description="Con VokaFlow, la comunicación global es tan simple como hablar naturalmente. Nuestra interfaz intuitiva y diseño centrado en el usuario hacen que conectar con el mundo sea más fácil que nunca."
        caseTitle="Simplicidad en Acción"
        caseDescription="Hemos diseñado cada aspecto de VokaFlow pensando en la facilidad de uso, permitiendo que cualquier persona pueda comunicarse globalmente sin complicaciones técnicas."
        testimonialQuote="La simplicidad de VokaFlow es increíble. Desde el primer día, pudimos comunicarnos internacionalmente sin ninguna curva de aprendizaje."
        testimonialAuthor="Pedro R."
        testimonialLocation="Director de Innovación Digital"
        features={features}
        ctaText="¿Listo para experimentar la comunicación más simple?"
        ctaButtonText="Explora todos los Beneficios"
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692"
        imageAlt="Interfaz intuitiva de VokaFlow en diferentes dispositivos"
      />
    </>
  );
}
