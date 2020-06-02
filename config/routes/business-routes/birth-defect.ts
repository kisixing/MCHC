// 出生缺陷登记路由
export default {
  name: 'birth-defect',
  icon: 'ordered-list',
  path: '/birth-defect',
  routes: [
    {
      name: 'birth-defect',
      icon: 'ordered-list',
      path: '/birth-defect/list',
      component: './case-management/birth-defect/list',
    },
    {
      name: 'birth-defect-add',
      icon: 'ordered-list',
      path: '/birth-defect/add',
      component: './case-management/birth-defect/edit',
    },
    {
      name: 'birth-defect-edit',
      icon: 'ordered-list',
      path: '/birth-defect/edit',
      component: './case-management/birth-defect/edit',
    },
  ]
};
