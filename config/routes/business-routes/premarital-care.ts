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
      name: 'wife-add',
      icon: 'ordered-list',
      path: '/premarital-care/wife/add',
      component: './premarital-care/wife/edit',
    },
    {
      name: 'wife-edit',
      icon: 'ordered-list',
      path: '/premarital-care/wife/edit',
      component: './premarital-care/wife/edit',
    },
    {
      name: 'wife-exam',
      icon: 'ordered-list',
      path: '/premarital-care/wife/wife-exam',
      component: './premarital-care/wife/wife-exam',
    },
    {
      name: 'husband',
      icon: 'ordered-list',
      path: '/premarital-care/husband',
      component: './premarital-care/husband/list',
    },
    {
      name: 'husband-add',
      icon: 'ordered-list',
      path: '/premarital-care/husband/add',
      component: './premarital-care/husband/edit',
    },
    {
      name: 'wife-edit',
      icon: 'ordered-list',
      path: '/premarital-care/husband/edit',
      component: './premarital-care/husband/edit',
    },
    {
      name: 'wife-exam',
      icon: 'ordered-list',
      path: '/premarital-care/husband/husband-exam',
      component: './premarital-care/husband/husband-exam',
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
