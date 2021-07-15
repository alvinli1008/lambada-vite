interface IModuleProps {
  routes: RouteProps[];
  models: Record<string, unknown>;
}

interface IApp {
  loading: boolean;
  app: IModuleProps;
}
