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
      const routes = [];
      const models = {};
      const context = import.meta.globEager('./views/**/index.jsx');
      Object.keys(context)
        .sort((a, b) => (a == './views/frame/index.jsx' ? -1 : 1))
        .map((key) => context[key].default({ routes, models }));
      setApp({ routes, models, loading: false });
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
