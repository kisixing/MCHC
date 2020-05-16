// 儿童健康体检路由
export default {
  name: 'child-examination',
  icon: 'ordered-list',
  path: '/child-examination',
  routes: [
    {
      name: 'archive',
      icon: 'file',
      path: '/child-examination/archive',
      component: './child-management/child-examination/archive',
    },
    {
      name: 'examination-record',
      icon: 'ordered-list',
      path: '/child-examination/examination-record',
      component: './child-management/child-examination/list',
    },
    {
      name: 'examination-edit',
      icon: 'edit',
      path: '/child-examination/examination-edit',
      component: './child-management/child-examination/deliver-edit',
    },
    {
      name: 'birth-information',
      icon: 'edit',
      path: '/child-examination/birth-information',
      component: './child-management/child-examination/birth-information',
    },
    {
      name: 'birth-charts',
      icon: 'edit',
      path: '/child-examination/birth-charts',
      component: './child-management/child-examination/birth-charts',
    },
  ],
};
