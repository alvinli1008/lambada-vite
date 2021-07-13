import React from 'react';
import test from './models/test';
export default {
  routes: [
    {
      path: '/test',
      exact: true,
      component: React.lazy(() => import('./components/Test'))
    }
  ],
  models: { test }
};
