import * as React from 'react';
import Home from './components/Home';

const homeRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <div />
  }
];

export default ({ routes }: IModuleProps): void => {
  routes.push(
    ...[
      {
        path: '/',
        component: Home,
        routes: homeRoutes
      }
    ]
  );
};
