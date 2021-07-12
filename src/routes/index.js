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
  {
    path: '/demo',
    exact: true,
    component: React.lazy(() => import('../views/Demo'))
  }
];

export default routes;
