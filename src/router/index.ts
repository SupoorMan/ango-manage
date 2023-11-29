import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { Chicken } from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/', //主页
      name: 'home',
      component: HomeView,
      redirect: "/index",
      children: [ //子页
        {
          path: '/index',
          name: "index",
          component: () => import('../components/Index.vue')
        },{
          path: '/product',
          name: "product",
          component: () => import('../views/Product.vue')
        },{
          path: '/lowcode',
          name: "lowcode",
          component: () => import('@/views/LowCode.vue')
        },{
          path: '/builder',
          name: "builder",
          component: () => import('../components/Builder.vue')
        },{
          path: '/game',
          name: "game",
          component: () => import('../components/Game.vue')
        },{
          path: '/productTemplate',
          name: "productTemplate",
          component: () => import('../components/ProductTemplate.vue')
        },{
          path: '/fruitShop',
          name: "fruitShop",
          component: () => import('../components/FruitShop.vue')
        },{
          path: '/doc',
          name: "doc",
          component: () => import('../components/Doc.vue')
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
