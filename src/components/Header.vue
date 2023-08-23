<template>
    <div class="header center" :style="{ borderColor: user.color }" >
      <img src="@/assets/img/flex_white.png" alt="FLEX" class="w-10">
    </div>
</template>

<script setup>

import { useUserStore } from '@/stores/user.js'

//

const user = useUserStore()

//

const props = defineProps({
    title: "title",
    color: 'color'
})

</script>

<style scoped>
.header { @apply w-full p-4 bg-darkBlack border-b-4 }
.title { @apply text-2xl font-thin uppercase}
</style>