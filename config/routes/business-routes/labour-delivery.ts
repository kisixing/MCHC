// 分娩管理路由
export default {
  name: 'labour-delivery',
  icon: 'ordered-list',
  path: '/labour-delivery',
  routes: [
    {
      name: 'admission',
      icon: 'ordered-list',
      path: '/labour-delivery/admission',
      component: './deliver-form/edit',
    },
    {
      name: 'labour-record',
      icon: 'ordered-list',
      path: '/labour-delivery/labour-record',
      component: './deliver-form/edit',
    },
    {
      name: 'nursing-record',
      icon: 'ordered-list',
      path: '/labour-delivery/nursing-record',
      component: './deliver-form/edit',
    },
    {
      name: 'predelivery',
      icon: 'ordered-list',
      path: '/labour-delivery/predelivery',
      component: './deliver-form/edit',
    },
    {
      name: 'caesarean-delivery',
      icon: 'ordered-list',
      path: '/labour-delivery/caesarean-delivery',
      component: './deliver-form/edit',
    },
    {
      name: 'neonate-record',
      icon: 'ordered-list',
      path: '/labour-delivery/neonate-record',
      component: './deliver-form/edit',
    },
    {
      name: 'postpartum-visit',
      icon: 'ordered-list',
      path: '/labour-delivery/postpartum-visit',
      component: './deliver-form/edit',
    },
    {
      name: 'deliver-form',
      icon: 'ordered-list',
      path: '/labour-delivery/deliver-form',
      component: './deliver-form/edit',
    },
  ],
};
