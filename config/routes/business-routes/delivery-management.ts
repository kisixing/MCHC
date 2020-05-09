// 分娩管理路由
export default {
  name: 'deliver-management',
  icon: 'ordered-list',
  path: '/deliver-management',
  routes: [
    {
      name: 'admission',
      icon: 'ordered-list',
      path: '/deliver-management/admission',
      component: './deliver-form/edit',
    },
    {
      name: 'labour-record',
      icon: 'ordered-list',
      path: '/deliver-management/labour-record',
      component: './deliver-form/edit',
    },
    {
      name: 'nursing-record',
      icon: 'ordered-list',
      path: '/deliver-management/nursing-record',
      component: './deliver-form/edit',
    },
    {
      name: 'predelivery',
      icon: 'ordered-list',
      path: '/deliver-management/predelivery',
      component: './deliver-form/edit',
    },
    {
      name: 'caesarean-delivery',
      icon: 'ordered-list',
      path: '/deliver-management/caesarean-delivery',
      component: './deliver-form/edit',
    },
    {
      name: 'neonate-record',
      icon: 'ordered-list',
      path: '/deliver-management/neonate-record',
      component: './deliver-form/edit',
    },
    {
      name: 'postpartum-visit',
      icon: 'ordered-list',
      path: '/deliver-management/postpartum-visit',
      component: './deliver-form/edit',
    },
    {
      name: 'deliver-form',
      icon: 'ordered-list',
      path: '/deliver-management/deliver-form',
      component: './deliver-form/edit',
    },
  ],
};
