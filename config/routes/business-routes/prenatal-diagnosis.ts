// 产前诊断路由
export default {
  name: 'prenatal-diagnosis',
  icon: 'ordered-list',
  path: '/prenatal-diagnosis',
  routes: [
    {
      name: 'admission',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/admission',
      component: './prenatal-diagnosis/admission/list'
    },
    {
      name: 'main',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/main',
      component: './prenatal-diagnosis/main'
    },
    {
      name: 'new-patient',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/new-patient',
      component: './prenatal-diagnosis/new-patient'
    },
    {
      name: 'medical-record-list',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/medical-record',
      component: './prenatal-diagnosis/medical-record/list'
    },
    {
      name: 'medical-record-form',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/medical-record-form',
      component: './prenatal-diagnosis/medical-record/form'
    },
    {
      name: 'operation-record-list',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/operation-record',
      component: './prenatal-diagnosis/operation-record/list'
    },
    {
      name: 'operation-record-form',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/operation-record-form',
      component: './prenatal-diagnosis/operation-record/form'
    },
    {
      name: 'inspection',
      icon: 'ordered-list',
      path: '/prenatal-diagnosis/inspection',
      component: './prenatal-diagnosis/inspection'
    }
  ]
};
