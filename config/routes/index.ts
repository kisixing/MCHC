import { IRoute } from 'umi-types';
import loginRoutes from './general-routes/login';
import system from './general-routes/system';
import exception from './general-routes/exception';
import businessRoutes from './business-routes';

// 路由
export const routes: IRoute[] = [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      loginRoutes,
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            component: './Welcome',
          },
          exception,
          system,
          ...businessRoutes,
        ],
      },
    ],
  },
];
