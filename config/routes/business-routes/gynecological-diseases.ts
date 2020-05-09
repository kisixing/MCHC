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
      component: './deliver-form/edit',
    },
    {
      name: 'examination',
      icon: 'ordered-list',
      path: '/gynecological-diseases/examination',
      component: './deliver-form/edit',
    },
    {
      name: 'breast-cancer-screen',
      icon: 'ordered-list',
      path: '/gynecological-diseases/breast-cancer-screen',
      component: './deliver-form/edit',
    },
    {
      name: 'cervical-cancer-screen',
      icon: 'ordered-list',
      path: '/gynecological-diseases/cervical-cancer-screen',
      component: './deliver-form/edit',
    }
  ]
};
