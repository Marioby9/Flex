<template>
  <div class="view">
    <RouterView v-slot="{ Component, route }">
        <component :is="Component" />
    </RouterView>
  </div>
  <div class="footer" v-if="isLoggedIn">
    <Menu />
  </div>
</template>

<script setup>

import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import Menu from "@/components/Menu.vue";
import { auth, getUsername } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user.js"

//

const router = useRouter()

const user = useUserStore();

//

const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (newUser) => {
    if(newUser) {
      isLoggedIn.value = true
      getUsername(auth.currentUser.uid, (doc) => {
          user.username = doc.data().username; 
          user.showUser();
      })
      router.push({ path: '/workouts' })
    } else {
      isLoggedIn.value = false
      router.push({ path: '/' })
    }
  })
})

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Tektur:wght@400;700;800;900&display=swap");

.title {
  @apply bg-coal text-7xl p-5 text-orange sticky top-0;
  font-family: "Tektur", extrabold;
}

.view {
  @apply flex-1 overflow-y-auto;
}
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.footer {
  @apply sticky bottom-0 left-0 bg-darkBlack;
}
</style>
