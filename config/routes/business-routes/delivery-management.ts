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
      component: './deliver-management/admission/list',
    },
    {
      name: 'admission-add',
      icon: 'ordered-list',
      path: '/deliver-management/admission/add',
      component: './deliver-management/admission/edit',
    },
    {
      name: 'admission-edit',
      icon: 'ordered-list',
      path: '/deliver-management/admission/edit',
      component: './deliver-management/admission/edit',
    },
    {
      name: 'labour-record',
      icon: 'ordered-list',
      path: '/deliver-management/labour-record',
      component: './deliver-management/labour-record/list',
    },
    {
      name: 'labour-record-add',
      icon: 'ordered-list',
      path: '/deliver-management/labour-record/add',
      component: './deliver-management/labour-record/edit',
    },
    {
      name: 'labour-record-edit',
      icon: 'ordered-list',
      path: '/deliver-management/labour-record/edit',
      component: './deliver-management/labour-record/edit',
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
