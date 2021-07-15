import { RouteComponentProps, RouteProps } from 'react-router-dom';

export interface IHome {
  routes?: RouteProps[];
  history: RouteComponentProps['history'];
}
