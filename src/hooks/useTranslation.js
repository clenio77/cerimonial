import { useRouter } from 'next/router';
import ptBR from '../locales/pt-BR/common.json';
import enUS from '../locales/en-US/common.json';

const translations = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export default function useTranslation() {
  const { locale } = useRouter();
  const t = (key) => translations[locale]?.[key] || key;
  return { t, locale };
} 