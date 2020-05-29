// 产后42天检查
export default {
  name: 'puerperal-check',
  icon: 'ordered-list',
  path: '/puerperal-check',
  routes: [
    {
      name: 'puerperal-check-list',
      icon: 'ordered-list',
      path: '/puerperal-check',
      component: './puerperal-check/list',
    },
    {
      name: 'puerperal-check-add',
      icon: 'ordered-list',
      path: '/puerperal-check/add',
      component: './puerperal-check/edit',
    },
    {
      name: 'puerperal-check-edit',
      icon: 'ordered-list',
      path: '/puerperal-check/edit',
      component: './puerperal-check/edit',
    },
  ],
};
