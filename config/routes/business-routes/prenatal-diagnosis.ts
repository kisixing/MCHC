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
      component: './Welcome'
    }
  ]
};
