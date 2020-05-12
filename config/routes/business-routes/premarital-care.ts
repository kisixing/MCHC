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
      component: './premarital-care/wife/list',
    },
    {
      name: 'husband',
      icon: 'ordered-list',
      path: '/premarital-care/husband',
      component: './premarital-care/husband/list',
    },
    {
      name: 'visit-wife',
      icon: 'ordered-list',
      path: '/premarital-care/visit-wife',
      component: './premarital-care/visit-wife/list',
    },
    {
      name: 'visit-husband',
      icon: 'ordered-list',
      path: '/premarital-care/visit-husband',
      component: './premarital-care/visit-husband/list',
    },
    {
      name: 'certification',
      icon: 'ordered-list',
      path: '/premarital-care/certification',
      component: './premarital-care/certification/list',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/premarital-care/statistics',
      component: './premarital-care/statistics/list',
    },
  ],
};
