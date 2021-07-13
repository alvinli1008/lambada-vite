import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '~/components';
import PropTypes from 'prop-types';

function Home({ routes, history }) {
  return (
    <div>
      {routes.map((item) => (
        <a
          key={item.path}
          onClick={() => {
            history.push(item.path);
          }}
        >
          {item.path}
        </a>
      ))}
      <Suspense fallback={<div>loading....</div>}>
        <Switch>
          {(routes || [])
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </Suspense>
    </div>
  );
}

Home.propTypes = {
  routes: PropTypes.array,
  history: PropTypes.object
};

export default Home;
