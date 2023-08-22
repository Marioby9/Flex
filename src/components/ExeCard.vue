<template>
  <div class="center exeCard" :style="{ borderColor: user.color }">
    <h3 class="text-xl self-start">{{ props.name }}</h3>

    <div class="props">
      <div class="prop-cont">
        <p>Series</p>
        <p>{{ props.series }}</p>
      </div>
      <div class="prop-cont">
        <p>Reps</p>
        <p>{{ props.reps }}</p>
      </div>
      <div class="prop-cont">
        <p>Weight</p>
        <p>{{ props.weight }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useUserStore } from "@/stores/user"

//

const user = useUserStore()

//

const props = defineProps({
  name: "Exercise",
  series: 0,
  reps: "0",
  weight: "0"
})

</script>

<style scoped>
.exeCard { @apply flex-col gap-2 w-full border-l-4 rounded-r-lg bg-darkBlack p-4 }
.props { @apply w-full flex justify-between items-center }
.prop-cont { @apply flex items-center justify-center gap-2 }
.prop-cont > *:nth-child(1) { @apply font-extralight }

</style>
