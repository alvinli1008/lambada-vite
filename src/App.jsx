import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import RouteWithSubRoutes from "~/components/RouteWithSubRoutes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider prefixCls="lambada-vite">
      Header
      <Router>
        <div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen w-screen ">
                loading...
              </div>
            }
          >
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={`router-${i}`} {...route} />
              ))}
            </Switch>
          </Suspense>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
