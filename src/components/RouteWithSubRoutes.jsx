import React from 'react';
import { Route } from 'react-router-dom';
import pick from 'lodash/pick';

const RouteWithSubRoutes = (route) => (
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
