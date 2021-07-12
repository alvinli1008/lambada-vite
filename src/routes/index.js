import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('~/views/Home'))
  },
  {
    path: '/test',
    exact: true,
    component: React.lazy(() => import('../views/Test'))
  },
];

export default routes;
