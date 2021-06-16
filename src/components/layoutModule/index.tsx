import React, { FC } from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../configs/routes.config";

const { Content } = Layout;

const LayoutModule: FC = () => {
  return (
    <Content>
      <Switch>
        {routes.map((val, index) => {
          const { path, isExact, module } = val;
          return (
            <Route key={index} path={path} exact={isExact} component={module} />
          );
        })}
      </Switch>
    </Content>
  );
};

export default LayoutModule;
