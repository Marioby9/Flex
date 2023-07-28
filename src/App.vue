<template>
    <div class="center bg-coal text-6xl p-5 font-mono">
      <h1>FLEX</h1>
    </div>
    <div class="view">
      <RouterView />
    </div>
    <Header/>
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