// 产前检查
export default {
  name: 'prenatal-visit',
  icon: 'ordered-list',
  path: '/prenatal-visit',
  routes: [
    {
      name: 'pregnancy',
      icon: 'ordered-list',
      path: '/prenatal-visit/pregnancy/list',
      component: './prenatal-visit/pregnancy/list',
    },
    {
      name: 'pregnancy-add',
      icon: 'ordered-list',
      path: '/prenatal-visit/pregnancy/add',
      component: './prenatal-visit/pregnancy/edit',
    },
    {
      name: 'pregnancy-edit',
      icon: 'ordered-list',
      path: '/prenatal-visit/pregnancy/edit',
      component: './prenatal-visit/pregnancy/edit',
    },
    {
      name: 'main',
      icon: 'ordered-list',
      path: '/prenatal-visit/main',
      component: './prenatal-visit/main',
    },
    {
      name: 'return',
      icon: 'ordered-list',
      path: '/prenatal-visit/main/return',
      component: './prenatal-visit/main/return',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/prenatal-visit/statistics',
      component: './deliver-form/edit',
    },
  ],
};
