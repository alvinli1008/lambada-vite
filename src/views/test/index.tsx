import * as React from 'react';
import test from './models/test';

export default ({ routes, models }: IModuleProps): void => {
  routes
    .filter((r) => r.path === '/')[0]
    .routes.push(
      ...[
        {
          path: '/test',
          exact: true,
          component: React.lazy(() => import('./components/Test'))
        }
      ]
    );

  Object.assign(models, { test });
};
