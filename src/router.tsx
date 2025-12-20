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
  validateSearch: (search: Record<string, unknown>) => {
    return {
      name: (search.name as string) || undefined
    };
  },
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

// this is needed for autocomplete and type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
