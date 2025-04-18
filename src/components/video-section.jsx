
import React from 'react';
import { motion } from 'framer-motion';

export function VideoSection() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Descubre cómo funciona VokaFlow</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              width="1280"
              height="720"
              autoPlay
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Demostración de VokaFlow"
            >
              <source src="/assets/videoWeb.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </motion.div>
          <p className="text-lg text-muted-foreground mt-6">
            Explora cómo VokaFlow facilita la comunicación global instantánea.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
