// 分娩管理路由
export default {
  name: 'deliver-management',
  icon: 'ordered-list',
  path: '/deliver-management',
  routes: [
    {
      name: 'deliver-form',
      icon: 'ordered-list',
      path: '/deliver-management/deliver-form',
      component: './deliver-form/edit',
    },
  ],
};
