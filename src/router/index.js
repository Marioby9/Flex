import { createRouter, createWebHistory } from 'vue-router'
import Plans from '@/views/Plans.vue'
import Statsome from '@/views/Stats.vue'
import Me from '@/views/Me.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   
      path: '/plans', 
      name: 'plans',
      component: () => import('@/views/Plans.vue')
    },
    {   
      path: '/stats', 
      name: 'stats',
      component: () => import('@/views/Stats.vue')
    },
    {   
      path: '/me', 
      name: 'me',
      component: () => import('@/views/Me.vue')
    }
  ]
})



export default router