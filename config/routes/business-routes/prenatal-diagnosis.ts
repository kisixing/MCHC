// 产前诊断路由
export default {
  name: 'prenatal-diagnosis',
  icon: 'ordered-list',
  path: '/prenatal-diagnosis',
  routes: [
    {
      name: 'medical-record',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/medical-record',
      component: './prenatal-diagnosis/medical-record'
    },
    {
      name: 'operation-record',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/operation-record',
      component: './prenatal-diagnosis/operation-record'
    },
  ]
};
