<template>
    <div class="header center">
      <img src="@/assets/img/flex_white.png" alt="FLEX" class="w-10">
    </div>
</template>

<script setup>
const props = defineProps({
    title: "title"
})

</script>

<style scoped>
.header { @apply w-full p-4 bg-darkBlack border-b-4 border-orange }
.title { @apply text-2xl font-thin uppercase}
</style>