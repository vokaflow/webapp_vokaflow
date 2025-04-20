
import { useIntl } from 'react-intl';

export function useMenuItems() {
  const intl = useIntl();

  const menuItems = [
    {
      label: intl.formatMessage({ id: 'nav.home' }),
      path: '/'
    },
    {
      label: intl.formatMessage({ id: 'nav.features' }),
      path: '/caracteristicas',
      submenu: [
        { label: 'Comunicación Instantánea', path: '/caracteristicas/comunicacion-instantanea' },
        { label: 'Accesibilidad Total', path: '/caracteristicas/accesibilidad-total' },
        { label: 'Impacto Global', path: '/caracteristicas/impacto-global' }
      ]
    },
    {
      label: intl.formatMessage({ id: 'nav.benefits' }),
      path: '/beneficios',
      submenu: [
        { label: 'Comunicación Multilingüe', path: '/beneficios/comunicacion-multilingue' },
        { label: 'Facilidad de Uso', path: '/beneficios/facilidad-uso' },
        { label: 'Seguridad Garantizada', path: '/beneficios/seguridad-garantizada' }
      ]
    },
    {
      label: intl.formatMessage({ id: 'nav.success' }),
      path: '/casos-exito',
      submenu: [
        { label: 'Negocios Globales', path: '/casos-exito/negocios-globales' },
        { label: 'Educación Internacional', path: '/casos-exito/educacion-internacional' },
        { label: 'Viajes Sin Estrés', path: '/casos-exito/viajes-sin-estres' }
      ]
    },
    { 
      label: intl.formatMessage({ id: 'nav.pricing' }), 
      path: '/precios' 
    },
    { 
      label: intl.formatMessage({ id: 'nav.contact' }), 
      path: '/contacto' 
    }
  ];

  return menuItems;
}
