import { IRoute } from 'umi-types';


// 个人中心页路由
const r: IRoute = {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
        {
            name: 'basic',
            icon: 'smile',
            path: '/profile/basic',
            component: './profile/basic',
        },
        {
            name: 'advanced',
            icon: 'smile',
            path: '/profile/advanced',
            component: './profile/advanced',
        },
    ],
}

export default r