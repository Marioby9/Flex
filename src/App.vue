<template>
    <div class="center title">
      <h1>FLEX</h1>
    </div>
    <div class="view">
      <RouterView  v-slot="{ Component, route }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
      </RouterView>
    </div>
    <Header/>
</template>

<script setup>

import { RouterView} from 'vue-router'
import Header from '@/components/Header.vue'


</script>

<style  scoped>

@import url('https://fonts.googleapis.com/css2?family=Tektur:wght@400;700;800;900&display=swap');

.title{@apply bg-coal text-7xl p-5;
        font-family: 'Tektur', extrabold;}

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
</style>
