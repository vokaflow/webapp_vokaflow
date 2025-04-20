
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d7736bd0-0d27-42e9-93a8-56641bfcc987/3abef47c5f736d5cc02cd02dc8a89871.png"
              alt="VokaFlow Logo"
              className="h-8 w-auto block mb-6"
            />
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              Transformando la comunicación global con tecnología de traducción instantánea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/caracteristicas" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Características
                </NavLink>
              </li>
              <li>
                <NavLink to="/beneficios" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink to="/casos-exito" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Casos de Éxito
                </NavLink>
              </li>
              <li>
                <NavLink to="/precios" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Precios
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@vokaflow.com" className="hover:text-[#D8409F] transition-colors duration-300">
                  info@vokaflow.com
                </a>
              </li>
              <li>
                <NavLink to="/contacto" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Formulario de Contacto
                </NavLink>
              </li>
              <li>
                <NavLink to="/soporte" className="text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                  Soporte Técnico
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} VokaFlow. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <NavLink to="/privacidad" className="text-sm text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                Política de Privacidad
              </NavLink>
              <NavLink to="/terminos" className="text-sm text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                Términos y Condiciones
              </NavLink>
              <NavLink to="/cookies" className="text-sm text-gray-400 hover:text-[#D8409F] transition-colors duration-300">
                Política de Cookies
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
