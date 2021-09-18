import { MainPage } from '../Components/MainPage/MainPage';
import { Shows } from '../Components/Shows/Shows';
import { People } from '../Components/People/People';
import { Networks } from '../Components/Networks/Networks';
import { WebChannels } from '../Components/WebChannels/WebChannels';
import { Articles } from '../Components/Articles/Articles';
import { Page404 } from '../Components/Page404/Page404';

export const routs = [
  {
    path: '/',
    key: 'main',
    exact: true,
    component: MainPage,
  },
  {
    path: '/shows',
    key: 'shows',
    exact: true,
    component: Shows,
  },
  {
    path: '/people',
    key: 'people',
    exact: true,
    component: People,
  },
  {
    path: '/networks',
    key: 'networks',
    exact: true,
    component: Networks,
  },
  {
    path: '/webchannels',
    key: 'webchannels',
    exact: true,
    component: WebChannels,
  },
  {
    path: '/articles',
    key: 'articles',
    exact: true,
    component: Articles,
  },
  {
    path: '/error_404',
    key: 'page404',
    component: Page404,
  },
];
