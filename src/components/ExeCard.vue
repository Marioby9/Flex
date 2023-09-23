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
    <div class="date" v-if="getDaysBetween(props.lastUpdate) >= 60">
      <div class="prop-cont">
        <p class="text-bone mt-2">última modificación hace <b>{{ getDaysBetween(props.lastUpdate) }}</b> días</p>
      </div>
    </div>
    

  </div>
</template>

<script setup>

import { onMounted } from "vue"
import { useUserStore } from "@/stores/user"
import { differenceInDays, startOfToday } from 'date-fns'

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

const getDaysBetween = (update) => {
  const date = new Date(update.split('/')[2], update.split('/')[1] - 1, update.split('/')[0])
  return differenceInDays(startOfToday(), date)
}


</script>

<style scoped>

.exeCard { @apply flex-col gap-1 w-full border-l-4 rounded-r-lg bg-darkBlack p-3 }
.header { @apply w-full flex items-center justify-between text-lg }
.props { @apply w-full flex justify-between items-center }
.prop-cont { @apply flex items-center justify-center gap-2 }
.prop-cont > *:nth-child(1) { @apply font-extralight }
.date  { @apply w-full }
.date .prop-cont { @apply w-fit}

</style>
