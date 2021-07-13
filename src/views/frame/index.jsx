import React from 'react';
import Home from './components/Home';

const homeRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <div />
  }
];

export default ({ routes, models }) => {
  routes.push(
    ...[
      {
        path: '/',
        component: Home,
        routes: homeRoutes
      }
    ]
  );

  // Object.assign(models, {  });
};
