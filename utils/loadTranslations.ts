import { deT, enT, esT } from '@/locales';

export default function loadTranslations(locale: string) {
  if (locale === 'en') {
    return enT;
  } else if (locale === 'es') {
    return esT;
  } else if (locale === 'de') {
    return deT;
  } else {
    return enT;
  }
}
