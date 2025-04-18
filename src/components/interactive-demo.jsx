
import React from 'react';
import { motion } from 'framer-motion';

const avatarVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  }
};

export function InteractiveDemo() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">VokaFlow en Acción</h2>
          <p className="text-muted-foreground">
            Observa cómo VokaFlow transforma la comunicación global
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Avatar 1 */}
          <motion.div
            className="flex flex-col items-center"
            variants={avatarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/111c0a44f090b126b1d8fc849e47f9a6.png"
                alt="Avatar de comunicación multilingüe"
                className="w-32 h-32 rounded-full shadow-xl mb-6"
              />
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-center text-lg font-medium text-foreground"
            >
              Comunicación instantánea en múltiples idiomas.
            </motion.p>
          </motion.div>

          {/* Avatar 2 */}
          <motion.div
            className="flex flex-col items-center"
            variants={avatarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/44656263269b77cf0101aeeadd791a7d.png"
                alt="Avatar de traducción simultánea"
                className="w-32 h-32 rounded-full shadow-xl mb-6"
              />
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-center text-lg font-medium text-foreground"
            >
              Traducción simultánea de textos y audios.
            </motion.p>
          </motion.div>

          {/* Avatar 3 */}
          <motion.div
            className="flex flex-col items-center"
            variants={avatarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/636a9c423047ec69f0cdd118c482debc.png"
                alt="Avatar de seguridad"
                className="w-32 h-32 rounded-full shadow-xl mb-6"
              />
            </motion.div>
            <motion.p
              variants={textVariants}
              className="text-center text-lg font-medium text-foreground"
            >
              Seguridad y privacidad garantizadas.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
