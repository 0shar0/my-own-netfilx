import { useTranslation } from 'react-i18next';
import { langTokens } from '../Locales/localization';

export const useNavbar = () => {
  const { t } = useTranslation();

  return [
    {
      id: 'shows',
      label: t(langTokens.nav.shows),
      url: '/shows',
    },
    {
      id: 'people',
      label: t(langTokens.nav.people),
      url: '/people',
    },
    {
      id: 'networks',
      label: t(langTokens.nav.networks),
      url: '/networks',
    },
    {
      id: 'web',
      label: t(langTokens.nav.web),
      url: '/webchannels',
    },
    {
      id: 'articles',
      label: t(langTokens.nav.article),
      url: '/articles',
    },
    {
      id: 'about',
      label: t(langTokens.nav.about),
      url: '/about',
    },
  ];
};
