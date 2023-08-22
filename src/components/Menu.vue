<template>
  <nav class="menu">
    <RouterLink class="icon" v-for="elm in menu" :to="elm.path">
      <abbr class="center" :title="elm.name">
        <font-awesome-icon :icon="elm.icon" :style="{ color: route.path == elm.path ? user.color : '#aeaeae' }" alt="elm.name" />
      </abbr>
    </RouterLink>
    
  </nav>
</template>

<script setup>

import { RouterLink, useRoute } from "vue-router"
import { useUserStore } from "../stores/user"

//

const route = useRoute()

const user = useUserStore()

//

const menu = [
  { path: "/workouts", name: "home", icon: "dumbbell" },
  { path: "/stats", name: "stats", icon: "chart-simple" },
  { path: "/user", name: "user", icon: "user" }
];

</script>

<style scoped>

.menu { @apply h-16 w-full flex items-center justify-around text-2xl }
.icon { @apply w-full h-full flex items-center justify-center}

</style>
