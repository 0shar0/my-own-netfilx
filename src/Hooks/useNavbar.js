import { useTranslation } from 'react-i18next';
import { langTokens } from '../Locales/localization';
import { routs } from '../Constant/Routing';

export const useNavbar = () => {
  const { t } = useTranslation();

  return [
    {
      id: routs.show.key,
      label: t(langTokens.nav.shows),
      url: routs.show.path,
    },
    {
      id: routs.people.key,
      label: t(langTokens.nav.people),
      url: routs.people.path,
    },
    {
      id: routs.networks.key,
      label: t(langTokens.nav.networks),
      url: routs.networks.path,
    },
    {
      id: routs.webChannels.key,
      label: t(langTokens.nav.web),
      url: routs.webChannels.path,
    },
    {
      id: routs.articles.key,
      label: t(langTokens.nav.article),
      url: routs.articles.path,
    },
    {
      id: routs.about.key,
      label: t(langTokens.nav.about),
      url: routs.about.path,
    },
  ];
};
