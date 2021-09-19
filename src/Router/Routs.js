import { lazy } from 'react';
import { routs } from '../Constant/Routing';

const MainPage = lazy(() => import('../Components/MainPage/MainPage'));
const Shows = lazy(() => import('../Components/Shows/Shows'));
const People = lazy(() => import('../Components/People/People'));
const Networks = lazy(() => import('../Components/Networks/Networks'));
const WebChannels = lazy(() => import('../Components/WebChannels/WebChannels'));
const Articles = lazy(() => import('../Components/Articles/Articles'));
const Page404 = lazy(() => import('../Components/Page404/Page404'));

export const routerConfig = [
  {
    path: routs.main.path,
    key: routs.main.key,
    exact: true,
    component: MainPage,
  },
  {
    path: routs.show.path,
    key: routs.show.key,
    exact: true,
    component: Shows,
  },
  {
    path: routs.people.path,
    key: routs.people.key,
    exact: true,
    component: People,
  },
  {
    path: routs.networks.path,
    key: routs.networks.key,
    exact: true,
    component: Networks,
  },
  {
    path: routs.webChannels.path,
    key: routs.webChannels.key,
    exact: true,
    component: WebChannels,
  },
  {
    path: routs.articles.path,
    key: routs.articles.key,
    exact: true,
    component: Articles,
  },
  {
    path: routs.showId.path,
    key: routs.showId.key,
    exact: true,
    component: Articles,
  },
  {
    path: routs.error404.path,
    key: routs.error404.key,
    component: Page404,
  },
];
