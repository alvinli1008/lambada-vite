import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '~/components/RouteWithSubRoutes';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import './App.css';

const App = () => {
  const [app, setApp] = useState({
    routes: [],
    models: {},
    loading: true
  });

  useEffect(() => {
    const mergeFunc = () => {
      //
      const context = import.meta.globEager('./views/**/index.jsx');
      const views = Object.keys(context);
      const merge = views.reduce(
        (a, b) => {
          const view = context[b].default;
          return {
            routes: a.routes.concat(view.routes),
            models: Object.assign(a.models, view.models)
          };
        },
        { routes: [], models: {} }
      );
      setApp({ ...merge, loading: false });
    };

    mergeFunc();
  }, []);

  return (
    !app.loading && (
      <ConfigProvider prefixCls="lambada-vite">
        <Provider {...app.models}>
          <Router>
            <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen ">loading...</div>}>
              <Switch>
                {app.routes.map((route, i) => (
                  <RouteWithSubRoutes key={`router-${i}`} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  );
};

export default App;
