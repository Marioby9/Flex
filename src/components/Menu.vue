<template>
  <nav class="menu">
    <RouterLink v-for="elm in menu" :to="elm.path">
      <abbr class="center" :title="elm.name">
        <img :src="route.path == elm.path ? elm.img + '.png' : elm.img + 'W.png'" alt="elm.name"/>
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
  { path: "/", name: "home", img: "/Flex/src/assets/img/plan" },
  { path: "/stats", name: "stats", img: "/Flex/src/assets/img/stats" },
  { path: "/user", name: "user", img: "/Flex/src/assets/img/me" }
];
</script>

<style scoped>
.menu {
  @apply h-24 w-full flex items-center justify-around;
}
.menu a {
  @apply w-1/3 h-full p-1;
}
abbr {
  @apply w-full h-full flex-col;
}
</style>
