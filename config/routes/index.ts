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

export const omitRoutes = [
  {
    id: 999,
    type: 'others',
    key: '/account/settings',
    name: '个人设置',
    parentid: 0,
    active: null,
  },
  {
    id: 998,
    type: 'others',
    key: '/pregnancies/physical-exam/edit',
    name: '体格检查',
    parentid: 24,
    active: null,
  },
  {
    id: 998,
    type: 'others',
    key: '/deliver-management',
    name: '分娩管理',
    parentid: 0,
    isMenu: true,
    active: null,
  },
  {
    id: 997,
    type: 'others',
    key: '/deliver-management/deliver-form',
    name: '分娩记录',
    parentid: 998,
    isMenu: true,
    active: null,
  },
  {
    id: 996,
    type: 'others',
    key: '/form-test',
    name: '表单测试',
    parentid: 0,
    active: null,
    isMenu: true,
  },
];
