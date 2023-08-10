import { createRouter, createWebHistory } from 'vue-router'
import Plans from '@/views/Plans.vue'
import Stats from '@/views/Stats.vue'
import Me from '@/views/Me.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   
      path: '/', 
      name: 'home',
      component: Plans
    },
    {   
      path: '/stats', 
      name: 'stats',
      component: Stats
    },
    {   
      path: '/me', 
      name: 'me',
      component: Me
    }
  ]
})



export default router