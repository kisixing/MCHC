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
      component: './gynecological-diseases/women',
    },
    {
      name: 'examination',
      icon: 'ordered-list',
      path: '/gynecological-diseases/examination',
      component: './gynecological-diseases/examination',
    },
    {
      name: 'breast-cancer-screen',
      icon: 'ordered-list',
      path: '/gynecological-diseases/breast-cancer-screen',
      component: './gynecological-diseases/breast',
    },
    {
      name: 'cervical-cancer-screen',
      icon: 'ordered-list',
      path: '/gynecological-diseases/cervical-cancer-screen',
      component: './gynecological-diseases/cervical',
    }
  ]
};
