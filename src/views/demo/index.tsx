import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import demo from './models/demo';

export default ({ routes, models }: IModuleProps): void => {
  routes
    .filter((r: RouteProps) => r.path === '/')[0]
    .routes.push(
      ...[
        {
          path: '/demo',
          exact: true,
          component: React.lazy(() => import('./components/Demo'))
        }
      ]
    );

  Object.assign(models, { demo });
};
