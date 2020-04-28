// 系统页路由
export default {
  name: 'system',
  icon: 'setting',
  path: '/system',
  routes: [
    {
      name: 'users',
      icon: 'user',
      path: '/system/user',
      component: './system/users',
    },
    {
      name: 'roles',
      icon: 'usergroup-add',
      path: '/system/role',
      component: './system/roles',
    },
    {
      name: 'menus',
      icon: 'menu',
      path: '/system/menu',
      component: './system/menus',
    },
    {
      name: 'task',
      icon: 'code',
      path: '/system/task',
      component: './system/task',
    },
    {
      name: 'audit',
      icon: 'audit',
      path: '/system/audit',
      component: './system/audit',
    },
    {
      name: 'version',
      icon: 'audit',
      path: '/system/version',
      component: './system/version',
    },
  ],
};
