// 孕产妇死亡
export default {
    name: 'maternal-death',
    icon: 'ordered-list',
    path: '/maternal-death',
    routes: [
      {
        name: 'maternal-death',
        icon: 'ordered-list',
        path: '/maternal-death',
        component: './case-management/maternal-death/list',
      },
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
    ]
  };
  