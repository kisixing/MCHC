export default {
  name: 'child-management',
  icon: 'ordered-list',
  path: '/child-management',
  routes: [
    {
      name: 'child-archive',
      icon: 'file',
      path: '/child-management/child-archive',
      component: './child-management/child-archive/list',
    },
    {
      name: 'child-archive-add',
      icon: 'ordered-list',
      path: '/child-management/child-archive/add',
      component: './child-management/child-archive/edit',
    },
    {
      name: 'child-archive-edit',
      icon: 'edit',
      path: '/child-management/child-archive/edit',
      component: './child-management/child-archive/edit',
    },
    // {
    //   name: 'child-archive-deliver-edit',
    //   icon: 'edit',
    //   path: '/child-management/child-archive/deliver-edit',
    //   component: './child-management/child-archive/deliver-edit',
    // },
    // {
    //   name: 'birth-information',
    //   icon: 'edit',
    //   path: '/child-management/child-archive/birth-information',
    //   component: './child-management/child-archive/birth-information',
    // },
    // {
    //   name: 'birth-charts',
    //   icon: 'edit',
    //   path: '/child-management/birth-charts',
    //   // component: './child-management/child-examination/birth-charts',
    // },
    {
      name: 'child-examination',
      icon: 'ordered-list',
      path: '/child-management/child-examination',
      component: './child-management/child-examination/list',
    },
    {
      name: 'child-examination-add',
      icon: 'edit',
      path: '/child-management/child-examination/edit',
      component: './child-management/child-examination/add',
    },
    {
      name: 'child-examination-edit',
      icon: 'edit',
      path: '/child-management/child-examination/deliver-edit',
      component: './child-management/child-examination/deliver-edit',
    },
  ],
};
