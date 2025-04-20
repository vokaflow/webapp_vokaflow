
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/navigation';
import { Home } from '@/pages/home';
import { Caracteristicas } from '@/pages/caracteristicas';
import { Beneficios } from '@/pages/beneficios';
import { CasosExito } from '@/pages/casos-exito';
import { Contacto } from '@/pages/contacto';
import { Precios } from '@/pages/precios';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ErrorBoundary } from '@/components/error-boundary';
import { LanguageProvider } from '@/contexts/language-context';
import { AuthProvider } from '@/contexts/auth-context';
import { Login } from '@/pages/auth/login';
import { Register } from '@/pages/auth/register';

// Características individuales
import { ComunicacionInstantanea } from '@/pages/caracteristicas/comunicacion-instantanea';
import { AccesibilidadTotal } from '@/pages/caracteristicas/accesibilidad-total';
import { ImpactoGlobal } from '@/pages/caracteristicas/impacto-global';

// Beneficios individuales
import { ComunicacionMultilingue } from '@/pages/beneficios/comunicacion-multilingue';
import { FacilidadUso } from '@/pages/beneficios/facilidad-uso';
import { SeguridadGarantizada } from '@/pages/beneficios/seguridad-garantizada';

// Casos de éxito individuales
import { NegociosGlobales } from '@/pages/casos-exito/negocios-globales';
import { EducacionInternacional } from '@/pages/casos-exito/educacion-internacional';
import { ViajesSinEstres } from '@/pages/casos-exito/viajes-sin-estres';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LanguageProvider>
          <Router>
            <div className="min-h-screen bg-background font-sans antialiased">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Auth Routes */}
                <Route path="/acceso" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                
                {/* Características */}
                <Route path="/caracteristicas" element={<Caracteristicas />} />
                <Route path="/caracteristicas/comunicacion-instantanea" element={<ComunicacionInstantanea />} />
                <Route path="/caracteristicas/accesibilidad-total" element={<AccesibilidadTotal />} />
                <Route path="/caracteristicas/impacto-global" element={<ImpactoGlobal />} />
                
                {/* Beneficios */}
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/beneficios/comunicacion-multilingue" element={<ComunicacionMultilingue />} />
                <Route path="/beneficios/facilidad-uso" element={<FacilidadUso />} />
                <Route path="/beneficios/seguridad-garantizada" element={<SeguridadGarantizada />} />
                
                {/* Casos de Éxito */}
                <Route path="/casos-exito" element={<CasosExito />} />
                <Route path="/casos-exito/negocios-globales" element={<NegociosGlobales />} />
                <Route path="/casos-exito/educacion-internacional" element={<EducacionInternacional />} />
                <Route path="/casos-exito/viajes-sin-estres" element={<ViajesSinEstres />} />
                
                {/* Páginas únicas */}
                <Route path="/precios" element={<Precios />} />
                <Route path="/contacto" element={<Contacto />} />
              </Routes>
              <Footer />
              <Toaster />
            </div>
          </Router>
        </LanguageProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
