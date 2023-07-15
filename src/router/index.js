import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Plans from '@/views/Plans.vue'
import Explore from '@/views/Explore.vue'
import Statsome from '@/views/Stats.vue'
import Me from '@/views/Me.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   
      path: '/', 
      name: 'home',
      component: () => Home,
      meta: { 
          enter: 'animate__animated animate__slideInLeft',
          leave: 'animate__animated animate__slideOutRight'
      }
    },
    {   
      path: '/plans', 
      name: 'plans',
      component: () => import('@/views/Plans.vue'),
      meta: { 
        enter: 'animate__animated animate__slideInRight',
        leave: 'animate__animated animate__slideOutLeft'
      }
    },
    {   
      path: '/explore', 
      name: 'explore',
      component: () => import('@/views/Explore.vue'),
      meta: { 
        enter: 'animate__animated animate__slideInRight',
        leave: 'animate__animated animate__slideOutLeft'
      }
    },
    {   
      path: '/stats', 
      name: 'stats',
      component: () => import('@/views/Stats.vue'),
      meta: { 
        enter: 'animate__animated animate__slideInRight',
        leave: 'animate__animated animate__slideOutLeft'
      }
    },
    {   
      path: '/me', 
      name: 'me',
      component: () => import('@/views/Me.vue'),
      meta: { 
        enter: 'animate__animated animate__slideInRight',
        leave: 'animate__animated animate__slideOutLeft'
      }
    }
  ]
})



export default router