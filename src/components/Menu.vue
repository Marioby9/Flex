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
console.log(route.path)

const menu = [
  { path: "/", name: "home", icon: "dumbbell" },
  { path: "/stats", name: "stats", icon: "chart-simple" },
  { path: "/user", name: "user", icon: "user" }
];

</script>

<style scoped>
.menu {
  @apply h-24 w-full flex items-center justify-around text-3xl;
}
.menu a {
  @apply w-1/3 h-full p-1;
}
abbr {
  @apply w-full h-full flex-col;
}
</style>
