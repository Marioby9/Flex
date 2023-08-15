<template>
  <div class="center exeCard">
    <h3 class="text-2xl font-bold">{{ props.name }}</h3>

    <div class="props">
      <div class="prop-cont">
        <h2>Series:</h2>
        <p>{{ props.series }}</p>
      </div>
      <div class="prop-cont">
        <h2>Reps:</h2>
        <p>{{ props.reps }}</p>
      </div>
      <div class="prop-cont">
        <h2>Type:</h2>
        <p>Power</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  name: "Exercise",
  series: 0,
  reps: "0",
});
</script>

<style scoped>
.props {
  @apply w-full flex justify-around items-center gap-4;
}
.props .prop-cont {
  @apply flex items-center justify-center flex-col  ;
}
.props h2 {
  @apply font-bold underline;
}

.exeCard {
  @apply flex-col space-y-3 w-full h-32  bg-lightOrange rounded-xl text-black text-lg p-3;
}
.exeCard:hover {
  @apply scale-105 duration-700;
}
</style>
