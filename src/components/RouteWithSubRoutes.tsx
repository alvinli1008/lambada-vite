import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import pick from 'lodash/pick';

interface IRoute {
  path?: string | string[];
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  location?: RouteComponentProps['location'];
  routes?: RouteProps;
  component: React.ElementType;
}

const RouteWithSubRoutes = (route: IRoute): JSX.Element => (
  <Route
    {...pick(route, ['path', 'exact', 'strict', 'sensitive', 'location'])}
    render={(props) => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes || []} />
    )}
  />
);
RouteWithSubRoutes.displayName = 'RouteWithSubRoutes';
export default RouteWithSubRoutes;
