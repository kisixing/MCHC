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
      component: './premarital-care/wife',
    },
    {
      name: 'husband',
      icon: 'ordered-list',
      path: '/premarital-care/husband',
      component: './premarital-care/husband',
    },
    {
      name: 'visit-wife',
      icon: 'ordered-list',
      path: '/premarital-care/visit-wife',
      component: './premarital-care/visit-wife',
    },
    {
      name: 'visit-husband',
      icon: 'ordered-list',
      path: '/premarital-care/visit-husband',
      component: './premarital-care/visit-husband',
    },
    {
      name: 'certification',
      icon: 'ordered-list',
      path: '/premarital-care/certification',
      component: './premarital-care/certification',
    },
    {
      name: 'statistics',
      icon: 'ordered-list',
      path: '/premarital-care/statistics',
      component: './premarital-care/statistics',
    },
  ],
};
