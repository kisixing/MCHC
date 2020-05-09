// 婚前保健路由
export default {
  name: 'premarital-care',
  icon: 'ordered-list',
  path: '/premarital-care',
  routes: [
    {
      name: 'wife',
      icon: 'ordered-list',
      path: '/premarital-care/wife',
      component: './deliver-form/edit',
    },
    {
      name: 'husband',
      icon: 'ordered-list',
      path: '/premarital-care/husband',
      component: './deliver-form/edit',
    },
    {
      name: 'visit-wife',
      icon: 'ordered-list',
      path: '/premarital-care/visit-wife',
      component: './deliver-form/edit',
    },
    {
      name: 'visit-husband',
      icon: 'ordered-list',
      path: '/premarital-care/visit-husband',
      component: './deliver-form/edit',
    },
    {
      name: 'certification',
      icon: 'ordered-list',
      path: '/premarital-care/certification',
      component: './deliver-form/edit',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/premarital-care/statistics',
      component: './deliver-form/edit',
    },
  ],
};
