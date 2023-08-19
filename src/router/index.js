import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import Workouts from '@/views/Workouts.vue'
import Stats from '@/views/Stats.vue'
import User from '@/views/User.vue'

import { auth } from '@/firebase'
import { useUserStore } from "../stores/user";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   
      path: '/', 
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
      }
    },
    {   
      path: '/signup', 
      name: 'signup',
      component: Signup,
      meta: {
        requiresAuth: false,
      }
    },
    {   
      path: '/login', 
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
      }
    },
    {   
      path: '/workouts', 
      name: 'workouts',
      component: Workouts,
      meta: {
        requiresAuth: true,
      }
    },
    {   
      path: '/stats', 
      name: 'stats',
      component: Stats,
      meta: {
        requiresAuth: true,
      }
    },
    {   
      path: '/user', 
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(auth.currentUser) {
        console.log(auth.currentUser.email)
        next()
    } else {
      console.log('forbidden')
      next('/')
    }
  } else {
    next()
  }
})

export default router