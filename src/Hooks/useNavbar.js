import { useTranslation } from 'react-i18next';
import { langTokens } from '../Locales/localization';
import { routs } from '../Constant/Routing';

export const useNavbar = () => {
  const { t } = useTranslation();

  return [
    {
      id: routs.main.key,
      label: t(langTokens.nav.home),
      url: routs.main.path,
    },
    {
      id: routs.show.key,
      label: t(langTokens.nav.shows),
      url: routs.show.path,
    },
    {
      id: routs.profile.key,
      label: t(langTokens.nav.profile),
      url: routs.profile.path,
      protected: true,
    },
    {
      id: routs.people.key,
      label: t(langTokens.nav.people),
      url: routs.people.path,
    },
    {
      id: routs.about.key,
      label: t(langTokens.nav.about),
      url: routs.about.path,
    },
  ];
};
