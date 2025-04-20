
import React from 'react';
import { IntlProvider } from 'react-intl';
import es from '@/translations/es.json';
import en from '@/translations/en.json';

const messages = { es, en };
const defaultLocale = 'es';

export const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = React.useState(defaultLocale);

  React.useEffect(() => {
    // Detectar idioma por ubicación usando la API de geolocalización
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const countryCode = data.country_code.toLowerCase();
        // Mapear países a idiomas (simplificado para ejemplo)
        const languageMap = {
          es: 'es', // España y países hispanohablantes
          mx: 'es',
          ar: 'es',
          co: 'es',
          pe: 'es',
          // Países anglófonos
          us: 'en',
          gb: 'en',
          au: 'en',
          ca: 'en',
        };
        
        const detectedLanguage = languageMap[countryCode] || defaultLocale;
        setLocale(detectedLanguage);
      })
      .catch(() => {
        // En caso de error, usar el idioma predeterminado
        setLocale(defaultLocale);
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={defaultLocale}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
