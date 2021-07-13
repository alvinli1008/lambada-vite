import React from 'react';
import demo from './models/demo';
export default {
  routes: [
    {
      path: '/demo',
      exact: true,
      component: React.lazy(() => import('./components/Demo'))
    }
  ],
  models: { demo }
};
