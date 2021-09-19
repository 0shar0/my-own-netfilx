import { lazy } from 'react';

const MainPage = lazy(() => import('../Components/MainPage/MainPage'));
const Shows = lazy(() => import('../Components/Shows/Shows'));
const People = lazy(() => import('../Components/People/People'));
const Networks = lazy(() => import('../Components/Networks/Networks'));
const WebChannels = lazy(() => import('../Components/WebChannels/WebChannels'));
const Articles = lazy(() => import('../Components/Articles/Articles'));
const Page404 = lazy(() => import('../Components/Page404/Page404'));

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
