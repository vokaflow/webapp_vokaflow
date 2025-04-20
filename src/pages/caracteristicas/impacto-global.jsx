
import React from 'react';
import { Globe2, Users, Target } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function ImpactoGlobal() {
  const features = [
    {
      icon: Globe2,
      title: "Alcance Mundial",
      description: "Conecta instantáneamente con personas de cualquier parte del mundo."
    },
    {
      icon: Users,
      title: "Colaboración Global",
      description: "Facilita la colaboración entre equipos internacionales."
    },
    {
      icon: Target,
      title: "Expansión Internacional",
      description: "Amplía tu presencia global sin barreras lingüísticas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Impacto Global - Comunicación Internacional | VokaFlow</title>
        <meta 
          name="description" 
          content="Maximiza tu impacto global con VokaFlow. Conecta con personas y mercados internacionales sin barreras lingüísticas."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Impacto Global con VokaFlow"
        subtitle="Expande tu alcance internacional sin límites"
        description="Potencia tu presencia global con VokaFlow. Nuestra plataforma te permite conectar con personas y mercados internacionales, eliminando las barreras lingüísticas y culturales que limitan tu crecimiento."
        caseTitle="Expansión Internacional"
        caseDescription="Facilitamos la comunicación global efectiva, permitiendo a empresas y personas expandir su alcance internacional de manera natural y eficiente."
        testimonialQuote="Gracias a VokaFlow, hemos podido expandir nuestro negocio a nuevos mercados internacionales con total confianza."
        testimonialAuthor="Carlos M."
        testimonialLocation="Director de Expansión Internacional"
        features={features}
        ctaText="¿Listo para impactar globalmente?"
        ctaButtonText="Explora todas las Características"
        imageSrc="https://images.unsplash.com/photo-1603731955133-ca45bc6fec5f"
        imageAlt="Representación del impacto global y conexiones internacionales"
      />
    </>
  );
}
