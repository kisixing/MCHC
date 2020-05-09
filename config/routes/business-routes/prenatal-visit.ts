// 产前检查
export default {
  name: 'prenatal-visit',
  icon: 'ordered-list',
  path: '/prenatal-visit',
  routes: [
    {
      name: 'pregnancy',
      icon: 'ordered-list',
      path: '/prenatal-visit/pregnancy',
      component: './deliver-form/edit',
    },
    {
      name: 'initial',
      icon: 'ordered-list',
      path: '/prenatal-visit/initial',
      component: './deliver-form/edit',
    },
    {
      name: 'return',
      icon: 'ordered-list',
      path: '/prenatal-visit/return',
      component: './deliver-form/edit',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/prenatal-visit/statistics',
      component: './deliver-form/edit',
    },
  ],
};
