import { useState, useEffect } from 'react';

const translations = {
  en: {
    welcome: "Welcome to Enzonic",
    explore: "Explore",
    discover: "Discover",
    latest: "Latest News",
    mcTools: "MC Tools",
  },
  es: {
    welcome: "Bienvenido a Enzonic",
    explore: "Explorar",
    discover: "Descubrir",
    latest: "Últimas Noticias",
    mcTools: "Herramientas MC",
  },
  // Add more languages as needed
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const userLanguage = navigator.language.split('-')[0];
    if (translations[userLanguage]) {
      setLanguage(userLanguage);
    }
  }, []);

  const t = (key) => translations[language][key] || key;

  return { language, setLanguage, t };
};