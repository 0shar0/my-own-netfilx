import { lazy } from 'react';
import { routs } from '../Constant/Routing';

const MainPage = lazy(() => import('../Components/MainPage/MainPage'));
const Shows = lazy(() => import('../Components/Shows/Shows'));
const ShowsPage = lazy(() => import('../Components/Shows/ShowPage/ShowPage'));
const People = lazy(() => import('../Components/People/People'));
const Page404 = lazy(() => import('../Components/Page404/Page404'));
const SearchPage = lazy(() => import('../Components/SearchPage/SearchPage'));
const AboutPage = lazy(() => import('../Components/AboutPage/AboutPage'));
const ProfilePage = lazy(() => import('../Components/ProfilePage/ProfilePage'));
const SearchFriends = lazy(() =>
  import('../Components/SearchFriends/SearchFriends'),
);
const PeoplePage = lazy(() =>
  import('../Components/People/PeoplePage/PeoplePage'),
);

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
  {
    path: routs.peopleId.path,
    key: routs.peopleId.key,
    exact: true,
    component: PeoplePage,
  },
  {
    path: routs.search.path,
    key: routs.search.key,
    exact: true,
    component: SearchPage,
  },
  {
    path: routs.about.path,
    key: routs.about.key,
    exact: true,
    component: AboutPage,
  },
  {
    path: routs.profile.path,
    key: routs.profile.key,
    exact: true,
    private: true,
    component: ProfilePage,
  },
  {
    path: routs.friends.path,
    key: routs.friends.key,
    exact: true,
    private: true,
    component: SearchFriends,
  },
];
