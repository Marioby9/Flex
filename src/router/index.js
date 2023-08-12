import { createRouter, createWebHistory } from 'vue-router'
import Workouts from '@/views/Workouts.vue'
import Stats from '@/views/Stats.vue'
import User from '@/views/User.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   
      path: '/', 
      name: 'home',
      component: Workouts
    },
    {   
      path: '/stats', 
      name: 'stats',
      component: Stats
    },
    {   
      path: '/user', 
      name: 'user',
      component: User
    }
  ]
})



export default router