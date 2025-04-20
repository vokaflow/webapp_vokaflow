
import React from 'react';
import { Clock, Target, MessageCircle } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function ComunicacionInstantanea() {
  const features = [
    {
      icon: Clock,
      title: "Traducción sin Retrasos",
      description: "Traducción instantánea en tiempo real, eliminando esperas y asegurando fluidez."
    },
    {
      icon: Target,
      title: "Precisión Máxima",
      description: "Tecnología avanzada de inteligencia artificial para garantizar traducciones exactas."
    },
    {
      icon: MessageCircle,
      title: "Conversación Natural",
      description: "Interacciones claras y naturales, como si hablaras en tu propio idioma."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comunicación Instantánea con Traducción Simultánea | VokaFlow</title>
        <meta 
          name="description" 
          content="Comunícate instantáneamente en cualquier idioma con la traducción simultánea precisa y fluida de VokaFlow, superando cualquier barrera idiomática."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Comunicación Instantánea con VokaFlow"
        subtitle="Traducción simultánea precisa y natural en tiempo real"
        description="Disfruta comunicación en tiempo real, sin límites ni barreras idiomáticas, gracias a la traducción simultánea instantánea que ofrece VokaFlow. Habla en cualquier idioma, conecta con el mundo."
        caseTitle="Comunicación Sin Barreras"
        caseDescription="Nuestra tecnología de traducción instantánea permite una comunicación fluida y natural en cualquier idioma, eliminando las barreras lingüísticas en tiempo real."
        testimonialQuote="La comunicación instantánea de VokaFlow ha transformado completamente nuestra forma de interactuar globalmente. La precisión y naturalidad son excepcionales."
        testimonialAuthor="Roberto M."
        testimonialLocation="Director de Comunicaciones Internacionales"
        features={features}
        ctaText="¿Listo para comunicarte sin barreras?"
        ctaButtonText="Explora todas las Características"
        imageSrc="https://images.unsplash.com/photo-1686191128863-2c62e254512d"
        imageAlt="Personas interactuando con dispositivos tecnológicos"
      />
    </>
  );
}
