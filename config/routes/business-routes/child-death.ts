// 儿童死亡报告管理路由
export default {
  name: 'child-death',
  icon: 'ordered-list',
  path: '/child-death',
  routes: [
    {
      name: 'child-death',
      icon: 'ordered-list',
      path: '/child-death',
      component: './case-management/child-death/list',
    },
    {
      name: 'child-death-add',
      icon: 'ordered-list',
      path: '/child-death/add',
      component: './case-management/child-death/edit',
    },
    {
      name: 'child-death-edit',
      icon: 'ordered-list',
      path: '/child-death/edit',
      component: './case-management/child-death/edit',
    },
  ]
};
