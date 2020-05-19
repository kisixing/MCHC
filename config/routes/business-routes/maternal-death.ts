// 孕产妇死亡
export default {
  name: 'maternal-death',
  icon: 'ordered-list',
  path: '/maternal-death',
  component: './case-management/maternal-death/list',
  routes: [
    {
      name: 'maternal-death-add',
      icon: 'ordered-list',
      path: '/maternal-death/add',
      component: './case-management/maternal-death/edit',
    },
    {
      name: 'maternal-death-edit',
      icon: 'ordered-list',
      path: '/maternal-death/edit',
      component: './case-management/maternal-death/edit',
    },
  ],
};
