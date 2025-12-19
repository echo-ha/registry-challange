import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect
} from '@tanstack/react-router';

import { HomePage } from 'src/pages/home';
import { RepositoryPage } from 'src/pages/repository';

const rootRoute = createRootRoute({
  component: Outlet
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const repositoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/repository',
  component: RepositoryPage
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '$',
  beforeLoad: () => {
    throw redirect({ to: '/' });
  }
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, repositoryRoute, catchAllRoute])
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
