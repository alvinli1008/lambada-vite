import React from 'react';
import Home from './components/Home';

const homeRoutes = [
  {
    path: '/',
    exact: true,
    component: () => ''
  }
];

export default ({ routes }) => {
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
