// 高危孕产妇管理路由
export default {
  name: 'high-risk-management',
  icon: 'ordered-list',
  path: '/high-risk-management',
  routes: [
    {
      name: 'highrisk',
      icon: 'ordered-list',
      path: '/high-risk-management/highrisk',
      component: './deliver-form/edit',
    },
    {
      name: 'followup',
      icon: 'ordered-list',
      path: '/high-risk-management/followup',
      component: './deliver-form/edit',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/high-risk-management/statistics',
      component: './deliver-form/edit',
    },
  ],
};
