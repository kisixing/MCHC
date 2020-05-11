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
      component: './prenatal-visit/pregnancy',
    },
    {
      name: 'initial',
      icon: 'ordered-list',
      path: '/prenatal-visit/initial',
      component: './prenatal-visit/initial',
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
