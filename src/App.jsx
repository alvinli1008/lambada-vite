import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '~/components/RouteWithSubRoutes';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import models from '~/models';
import routes from '~/routes';
import './App.css';

function App() {
  return (
    <ConfigProvider prefixCls="lambada-vite">
      <Provider {...models}>
        Header
        <Router>
          <div>
            <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen ">loading...</div>}>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={`router-${i}`} {...route} />
                ))}
              </Switch>
            </Suspense>
          </div>
        </Router>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
