import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/lesson1',
            component: () => import('../views/Lesson1View.vue')
        },
        {
            path: '/homework1',
            component: () => import('../views/Homework1View.vue')
        },
        // {
        //     path: '/week2',
        //     component: () => import('../views/Week2View.vue')
        // },
        // {
        //     path: '/week3',
        //     component: () => import('../views/Week3View.vue')
        // }
    ]
})

export default router