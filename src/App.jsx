
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/navigation';
import { Home } from '@/pages/home';
import { Caracteristicas } from '@/pages/caracteristicas';
import { Beneficios } from '@/pages/beneficios';
import { CasosExito } from '@/pages/casos-exito';
import { Contacto } from '@/pages/contacto';
import { Soporte } from '@/pages/soporte';
import { TraduccionMultilingue } from '@/pages/traduccion-multilingue';
import { Seguridad } from '@/pages/seguridad';
import { TraduccionTexto } from '@/pages/traduccion-texto';
import { TraduccionAudio } from '@/pages/traduccion-audio';
import { Precios } from '@/pages/precios';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

// Beneficios individuales
import { ComunicacionInstantanea } from '@/pages/beneficios/comunicacion-instantanea';
import { AccesibilidadTotal } from '@/pages/beneficios/accesibilidad-total';
import { ImpactoGlobal } from '@/pages/beneficios/impacto-global';

// Casos de éxito individuales
import { NegociosGlobales } from '@/pages/casos-exito/negocios-globales';
import { EducacionInternacional } from '@/pages/casos-exito/educacion-internacional';
import { ViajesSinEstres } from '@/pages/casos-exito/viajes-sin-estres';

// Funcionalidades
import { TraduccionTiempoReal } from '@/pages/funcionalidades/traduccion-tiempo-real';
import { ConversacionInteligente } from '@/pages/funcionalidades/conversacion-inteligente';
import { TranscripcionAutomatica } from '@/pages/funcionalidades/transcripcion-automatica';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/beneficios/comunicacion-instantanea" element={<ComunicacionInstantanea />} />
          <Route path="/beneficios/accesibilidad-total" element={<AccesibilidadTotal />} />
          <Route path="/beneficios/impacto-global" element={<ImpactoGlobal />} />
          <Route path="/casos-exito" element={<CasosExito />} />
          <Route path="/casos-exito/negocios-globales" element={<NegociosGlobales />} />
          <Route path="/casos-exito/educacion-internacional" element={<EducacionInternacional />} />
          <Route path="/casos-exito/viajes-sin-estres" element={<ViajesSinEstres />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/traduccion-multilingue" element={<TraduccionMultilingue />} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/traduccion-texto" element={<TraduccionTexto />} />
          <Route path="/traduccion-audio" element={<TraduccionAudio />} />
          <Route path="/precios" element={<Precios />} />
          
          {/* Nuevas rutas de funcionalidades */}
          <Route path="/funcionalidades/traduccion-tiempo-real" element={<TraduccionTiempoReal />} />
          <Route path="/funcionalidades/conversacion-inteligente" element={<ConversacionInteligente />} />
          <Route path="/funcionalidades/transcripcion-automatica" element={<TranscripcionAutomatica />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
