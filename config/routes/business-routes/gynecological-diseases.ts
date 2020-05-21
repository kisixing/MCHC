// 妇女病普查管理(Screening Common Gynecological Diseases)
export default {
  name: 'gynecological-diseases',
  icon: 'ordered-list',
  path: '/gynecological-diseases',
  routes: [
    {
      name: 'women',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women',
      component: './gynecological-diseases/women/list',
    },
    {
      name: 'women-add',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women/add',
      component: './gynecological-diseases/women/edit',
    },
    {
      name: 'women-edit',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women/edit',
      component: './gynecological-diseases/women/edit',
    },
    {
      name: 'women-exam-records',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women/women-exam-records',
      component: './gynecological-diseases/women/women-exam-records',
    },
    {
      name: 'women-exam-records-add',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women/women-exam-records/add',
      component: './gynecological-diseases/women/women-exam-records/add',
    },
    {
      name: 'women-exam-records-edit',
      icon: 'ordered-list',
      path: '/gynecological-diseases/women/women-exam-records/edit',
      component: './gynecological-diseases/women/women-exam-records/edit',
    },
    // {
    //   name: 'examination',
    //   icon: 'ordered-list',
    //   path: '/gynecological-diseases/examination',
    //   component: './gynecological-diseases/examination/list',
    // },
    // {
    //   name: 'breast-cancer-screen',
    //   icon: 'ordered-list',
    //   path: '/gynecological-diseases/breast-cancer-screen',
    //   component: './gynecological-diseases/breast/list',
    // },
    // {
    //   name: 'cervical-cancer-screen',
    //   icon: 'ordered-list',
    //   path: '/gynecological-diseases/cervical-cancer-screen',
    //   component: './gynecological-diseases/cervical/list',
    // }
  ],
};
