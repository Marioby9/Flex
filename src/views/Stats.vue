<template>
  
  <div class="page">
    
    <div class="charts">

      <ChartCard 
      :type="'line'" 
      :title="benchPress.title" 
      :data="benchPress.data" 
      :values="benchPress.values" />

      <ChartCard 
      :type="'bar'" 
      :title="deadLift.title" 
      :data="deadLift.data" 
      :values="deadLift.values" />

      <ChartCard 
      :type="'line'" 
      :title="squat.title" 
      :data="squat.data" 
      :values="squat.values" />

    </div>
    
  </div>
</template>

<script setup>
import ChartCard from '../components/ChartCard.vue';

const benchPress = {
  title: 'Press Banca',
  data: ['Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: [100, 115, 120, 125, 130, 145]
};
const deadLift = {
  title: 'Peso Muerto',
  data: ['Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: [120, 140, 170, 180, 190, 170]
};
const squat = {
  title: 'Sentadilla',
  data: ['Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: [120, 130, 140, 150, 160, 150]
};



</script>

<style scoped>
.page{ @apply flex flex-col gap-4 }
.charts{ @apply flex flex-col items-center h-full overflow-y-auto gap-4 p-4 }

</style>
