import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/login/index.vue')
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('../layout/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../view/home/index.vue')
            },
            {
                path: '/category',
                name: 'category',
                component: () => import('../view/category/index.vue')
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('../view/cart/index.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../view/user/index.vue')
            }
        ]
    },
    {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../components/productDetail.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router