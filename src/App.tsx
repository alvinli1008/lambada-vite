import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import './App.css';

interface IApp {
  loading: boolean;
  app: IModuleProps;
}

class App extends Component<never, IApp> {
  state = {
    loading: true,
    app: {
      routes: [],
      models: {}
    }
  };

  componentDidMount(): void {
    const { app } = this.state;
    const mergeFunc = (app: IModuleProps) => {
      // 合并各模块 routes models
      const context = import.meta.globEager('./views/**/index.tsx');
      return Object.keys(context)
        .sort((a) => (a == './views/frame/index.tsx' ? -1 : 1))
        .map((key) => context[key].default(app));
    };
    mergeFunc(app);
    this.setState({ app, loading: false });
  }

  render(): false | JSX.Element {
    const { app, loading } = this.state;
    return (
      !loading && (
        <ConfigProvider prefixCls="lambada-vite">
          <Provider {...app.models}>
            <Router>
              <Suspense
                fallback={<div className="flex justify-center items-center h-screen w-screen ">loading...</div>}
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
  }
}

export default App;
