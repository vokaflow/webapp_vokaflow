
import React from 'react';
import { Shield, Lock, FileCheck } from 'lucide-react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { Helmet } from 'react-helmet';

export function SeguridadGarantizada() {
  const features = [
    {
      icon: Shield,
      title: "Cifrado Avanzado",
      description: "Protección total mediante cifrado extremo a extremo en todas tus comunicaciones."
    },
    {
      icon: Lock,
      title: "Privacidad Absoluta",
      description: "Tus datos permanecen protegidos y privados en todo momento."
    },
    {
      icon: FileCheck,
      title: "Cumplimiento Normativo",
      description: "Cumplimos con los estándares internacionales más estrictos en seguridad digital."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Seguridad Garantizada – Comunicación Protegida | VokaFlow</title>
        <meta 
          name="description" 
          content="Descubre la seguridad garantizada con VokaFlow. Comunicación global protegida con cifrado avanzado y privacidad absoluta."
        />
      </Helmet>

      <CaseStudyTemplate
        title="Seguridad Garantizada con VokaFlow"
        subtitle="Comunicación global segura y protegida"
        description="En VokaFlow, tu seguridad es nuestra prioridad. Implementamos las más avanzadas tecnologías de cifrado y protección de datos para garantizar que tus comunicaciones globales sean siempre seguras y privadas."
        caseTitle="Protección Total"
        caseDescription="Nuestro sistema de seguridad multicapa garantiza la confidencialidad y privacidad de todas tus comunicaciones, permitiéndote conectar globalmente con total confianza."
        testimonialQuote="La seguridad que ofrece VokaFlow nos da la tranquilidad necesaria para manejar comunicaciones sensibles a nivel internacional."
        testimonialAuthor="Ana P."
        testimonialLocation="Directora de Seguridad Digital"
        features={features}
        ctaText="¿Listo para comunicarte con total seguridad?"
        ctaButtonText="Explora todos los Beneficios"
        imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3"
        imageAlt="Representación de la seguridad y protección en VokaFlow"
      />
    </>
  );
}
