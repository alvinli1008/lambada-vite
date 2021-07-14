import React from 'react';
import { Route } from 'react-router-dom';
import pick from 'lodash/pick';

/**
 * wrap <Route> and use this everywhere instead, then when
 *  sub routes are added to any route it'll work
 * @param {Route} route with subroutes
 */
const RouteWithSubRoutes = (route: any) => (
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
