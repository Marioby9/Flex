<template>
    <div class="header center">
        <h1 class="title">{{ props.title }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    title: "title"
})

</script>

<style scoped>
.header { @apply w-full p-4 bg-darkBlack border-b-4 border-orange }
.title { @apply text-2xl font-thin  }
</style>