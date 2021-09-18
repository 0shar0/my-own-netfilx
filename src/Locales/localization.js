import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {english} from './en/english';

const langResources = {
  en: { translation: english },
};

i18n.use(initReactI18next).init({
  resources: langResources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const isLanguagesTokensSame = Object.entries(langResources).every((locale) => {
  return langEqualityCheck(locale[1].translation, langResources.en.translation);
});

if (!isLanguagesTokensSame)
  throw new Error('The tokens of the languages used do not match.');

export const langTokens = getLangTokens(langResources.en.translation);

function getLangTokens(lang, prevKey = '') {
  if (typeof lang === 'object') {
    const tmp = {};
    Object.keys(lang).forEach((key) => {
      const currKey = prevKey ? `${prevKey}.${key}` : key;
      if (typeof lang[key] === 'object') {
        tmp[key] = getLangTokens(lang[key], currKey);
      } else {
        tmp[key] = `${currKey}`;
      }
    });
    return tmp;
  }
  return prevKey ? `${prevKey}.${String(lang)}` : lang;
}

function langEqualityCheck(lang1, lang2) {
  let isSame = true;
  try {
    if (typeof lang1 === 'object' && typeof lang2 === 'object') {
      Object.keys(lang1).forEach((key) => {
        if (typeof lang1[key] === 'object') {
          isSame = isSame && langEqualityCheck(lang1[key], lang2[key]);
        } else if (!key.includes('_') && lang1[key] !== lang2[key]) {
          isSame = false;
        }
      });
    } else if (typeof lang1 === 'string' && typeof lang2 === 'string') {
      if (!lang1.includes('_') && lang1 !== lang2) isSame = false;
    } else isSame = false;
  } catch (e) {
    isSame = false;
  }
  return isSame;
}
