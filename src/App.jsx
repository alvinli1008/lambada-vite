import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { RouteWithSubRoutes, util } from '~/components';
import { ConfigProvider, Spin } from 'antd';
import { Provider } from 'mobx-react';
import './App.css';

const App = () => {
  const [app, setApp] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setApp(util.getMergeApp());
    setLoading(false);
  }, []);

  return (
    !loading && (
      <ConfigProvider prefixCls="lambada-vite">
        <Provider {...app.models}>
          <Router>
            <Suspense
              fallback={
                <div className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-w-screen ">
                  <Spin />
                </div>
              }
            >
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
