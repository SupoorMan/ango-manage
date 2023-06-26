import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { Chicken } from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: "/index",
      children: [
        {
          path: '/index',
          name: "index",
          component: () => import('../components/Index.vue')
        },
        {
          path: '/builder',
          name: "builder",
          component: () => import('../components/Builder.vue')
        },
      ]
    }, {
      path: '/login',
      name: 'login',
      component: LoginView,
      redirect: "/auth",
      children: [
        {
          path: '/auth',
          name: "auth",
          component: () => import('../components/Login.vue')
        }, {
          path: '/register',
          name: "register",
          component: () => import('../views/RegisterView.vue')
        }, {
          path: '/test',
          name: "test",
          component: () => import('../views/TestView.vue')
        },
      ]
    }, {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
