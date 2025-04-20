
import React from 'react';
import { Globe, MessageCircle, Users } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function ComunicacionMultilingue() {
  const features = [
    {
      icon: Globe,
      title: "Traducción Instantánea",
      description: "Comunicación fluida en múltiples idiomas sin esperas ni retrasos."
    },
    {
      icon: MessageCircle,
      title: "Precisión Lingüística",
      description: "Traducciones precisas que mantienen el contexto y significado original."
    },
    {
      icon: Users,
      title: "Conexión Global",
      description: "Interactúa naturalmente con personas de diferentes culturas e idiomas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comunicación Multilingüe - Conexión Global | VokaFlow</title>
        <meta 
          name="description" 
          content="Descubre la comunicación multilingüe con VokaFlow. Conecta con personas de todo el mundo sin barreras lingüísticas."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Comunicación Multilingüe con VokaFlow"
        subtitle="Rompe las barreras del idioma y conecta globalmente"
        description="Experimenta una comunicación verdaderamente global con VokaFlow. Nuestra tecnología de traducción instantánea te permite conectar con personas de cualquier parte del mundo, manteniendo conversaciones naturales y fluidas en múltiples idiomas."
        caseTitle="Conexión Sin Fronteras"
        caseDescription="Facilitamos la comunicación efectiva entre personas de diferentes idiomas y culturas, permitiendo interacciones naturales y significativas sin barreras lingüísticas."
        testimonialQuote="VokaFlow ha revolucionado nuestra forma de comunicarnos internacionalmente. La precisión y naturalidad de las traducciones son excepcionales."
        testimonialAuthor="Laura M."
        testimonialLocation="Gerente de Relaciones Internacionales"
        features={features}
        ctaText="¿Listo para comunicarte en cualquier idioma?"
        ctaButtonText="Explora todos los Beneficios"
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        imageAlt="Personas comunicándose en diferentes idiomas usando VokaFlow"
      />
    </>
  );
}
