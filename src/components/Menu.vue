<template>
  <nav class="menu">
    <RouterLink v-for="elm in menu" :to="elm.path">
      <abbr class="center" :title="elm.name">
        <font-awesome-icon :icon="elm.icon" :class="route.path == elm.path ? 'text-orange' : 'text-white'" alt="elm.name" />
      </abbr>
    </RouterLink>
    
  </nav>
</template>

<script setup>

import { RouterLink, useRoute } from "vue-router";

//

const route = useRoute()

const menu = [
  { path: "/workouts", name: "home", icon: "dumbbell" },
  { path: "/stats", name: "stats", icon: "chart-simple" },
  { path: "/user", name: "user", icon: "user" }
];

</script>

<style scoped>

.menu { @apply h-16 w-full flex items-center justify-around text-2xl }

</style>
