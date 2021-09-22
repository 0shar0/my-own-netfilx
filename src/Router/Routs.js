import { lazy } from 'react';
import { routs } from '../Constant/Routing';

const MainPage = lazy(() => import('../Components/MainPage/MainPage'));
const Shows = lazy(() => import('../Components/Shows/Shows'));
const ShowsPage = lazy(() => import('../Components/Shows/ShowPage/ShowPage'));
const People = lazy(() => import('../Components/People/People'));
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
    path: routs.showId.path,
    key: routs.showId.key,
    component: ShowsPage,
  },
  {
    path: routs.error404.path,
    key: routs.error404.key,
    component: Page404,
  },
];
