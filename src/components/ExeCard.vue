<template>
  <div class="exeCard center" :style="{ borderColor: user.color }">
    <div class="header">
      <h3>{{ props.name }}</h3>
      <font-awesome-icon 
        class="gear" 
        icon="gear"
        alt="options"
        @click="editExercise" 
      />
    </div>
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
        <p>Peso</p>
        <p>{{ props.weight }}</p>
      </div>
    </div>
    <div class="date">
      <div class="prop-cont">
        <p>Última Modificación: </p>
        <p>{{props.lastUpdate}}</p>
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
  weight: "0",
  lastUpdate: '0',
  clickEdit: Function
})

const { emit } = defineEmits();

const editExercise = () => {
  if(props.clickEdit){
    props.clickEdit()
  }
};

</script>

<style scoped>
.exeCard { @apply flex-col gap-3 w-full border-l-4 rounded-r-lg bg-darkBlack p-4 }
.header { @apply w-full flex items-center justify-between text-xl}

.props { @apply w-full flex justify-between items-center }
.prop-cont { @apply flex items-center justify-center gap-2 }
.prop-cont > *:nth-child(1) { @apply font-extralight }
.date  { @apply w-full }
.date .prop-cont { @apply w-fit}



</style>
