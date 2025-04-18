
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/logo_vokaflow_white.png"
              alt="VokaFlow Logo"
              className="h-8 hidden dark:block"
            />
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/logo_vokaflow_dark.png"
              alt="VokaFlow Logo"
              className="h-8 dark:hidden"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Términos y Condiciones
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Contacto
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} VokaFlow. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
