<template>
  <Header/>
    <RouterView v-slot="{ Component, route }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
    </RouterView>
</template>

<script setup>

import { RouterView} from 'vue-router'
import Header from '@/components/Header.vue'


</script>

<style  scoped>
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