
import React from 'react';
import { Computer, Globe, Smartphone } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function AccesibilidadTotal() {
  const features = [
    {
      icon: Computer,
      title: "Multiplataforma",
      description: "Acceso desde cualquier dispositivo, en cualquier momento y lugar."
    },
    {
      icon: Globe,
      title: "Interfaz Universal",
      description: "Diseño intuitivo y amigable para todos los usuarios."
    },
    {
      icon: Smartphone,
      title: "Acceso Móvil",
      description: "Experiencia optimizada para dispositivos móviles y tablets."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accesibilidad Total - Comunicación Sin Límites | VokaFlow</title>
        <meta 
          name="description" 
          content="Descubre la accesibilidad total de VokaFlow. Comunícate desde cualquier dispositivo, en cualquier momento y lugar, sin restricciones técnicas."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Accesibilidad Total con VokaFlow"
        subtitle="Comunicación sin límites desde cualquier dispositivo"
        description="Experimenta la libertad de comunicarte desde cualquier dispositivo y lugar. VokaFlow te ofrece acceso total y constante a todas sus funcionalidades, eliminando barreras técnicas y físicas."
        caseTitle="Acceso Universal"
        caseDescription="Nuestra plataforma está diseñada para ser accesible desde cualquier dispositivo, permitiendo una comunicación fluida y sin interrupciones, sin importar dónde te encuentres."
        testimonialQuote="VokaFlow ha transformado nuestra forma de trabajar. Podemos comunicarnos eficientemente desde cualquier dispositivo, en cualquier momento."
        testimonialAuthor="María R."
        testimonialLocation="Directora de Operaciones Digitales"
        features={features}
        ctaText="¿Listo para experimentar la accesibilidad total?"
        ctaButtonText="Explora todas las Características"
        imageSrc="https://images.unsplash.com/photo-1572982408141-5444f29ca3ca"
        imageAlt="Dispositivos múltiples mostrando la accesibilidad de VokaFlow"
      />
    </>
  );
}
