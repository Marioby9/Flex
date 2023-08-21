<template>
  <div class="page">
    <div class="selector-container">
      <select class="selector" v-model="currentRout">
        <option v-for="routine in routines" :value="routine">
          {{ routine.name }}
        </option>
      </select>
      <img
        class="w-10"
        src="@/assets/img/add.png"
        alt="add"
        @click="isWorkModalOpen = !isWorkModalOpen"
      />
    </div>

    <div class="exercises-container">
      <ExeCard
        v-for="exe in exercises"
        :name="exe.name"
        :series="exe.series"
        :reps="exe.reps"
      />
      <button class="add center" @click="isExeModalOpen = !isExeModalOpen">add exercise +</button>
      
    </div>
  </div>
 
  <!--exercise modal-->
  <Teleport to="#addExercise">
    <div class="modal-bg" v-if="isExeModalOpen">
      <div class="modal" ref="exeModal">

        <header class="center">
          <img src="@/assets/img/addExe.png" alt="addExercise">
        </header>

        <div class="exNameData">
          <label for="name">Exercise name</label>
          <input type="text" id="name" placeholder="Ex: Bench Press" v-model="exerciseName">
        </div>
        
        <div class="center exercise-data">
          <div>
            <label for="series">series</label>
            <input type="number" id="series" v-model="series" placeholder="0">
          </div>
          <div>
            <label for="reps">reps</label>
            <input type="text" id="reps" v-model="reps" placeholder="0-0-0">
          </div>
          <div>
            <label for="weight">weight</label>
            <input type="text" id="weight" v-model="weight" placeholder="0">
          </div>
        </div>
        <div class="buttons">
          <button @click="saveExercise">save</button>
          <button @click="closeExeModal">cancel</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!--Workout modal-->
  <Teleport to="#addWorkout">
    <div class="modal-bg" v-if="isWorkModalOpen">
      <div class="modal" ref="workModal">

        <header class="center">
          <img src="@/assets/img/addExe.png" alt="addExercise">
        </header>

        <div class="exNameData">
          <label for="name">Workout name</label>
          <input type="text" id="name" placeholder="Ex: Push B" v-model="workoutName">
        </div>
        
        <div class="center frequency">
          <h1>Frequency:</h1>
          <div class="days">
            <button
            class="day"
            v-for="day in days"
            :class="day.isSelected ? 'bg-orange' : 'bg-salmon'"
            @click="day.isSelected = !day.isSelected"
            >
              {{ day.name }}
            </button>
          </div>
        </div>

        <div class="buttons">
          <button @click="saveWorkout">save</button>
          <button @click="closeWorkModal">cancel</button>
        </div>
      </div>
    </div>
  </Teleport>

</template>

<script setup>

import ExeCard from "../components/ExeCard.vue";

import { useUserStore } from "../stores/user";
import { getRoutines, getExercise, addRoutine, addExercise, auth } from "@/firebase.js";
import { onMounted, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

//

const user = useUserStore();

//

const routines = ref([]);
const currentRout = ref({});
const exercises = ref([]);

//FUNCTIONS
const loadRoutines = () => {
  getRoutines(auth.currentUser.uid, (docs) => {
    docs.forEach((element) => {
      routines.value.push({ id: element.id, ...element.data() });
    });
    if(routines.value[0]){
      currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
    }
  });
};

const loadExercises = () => {
  exercises.value = [];
  currentRout.value[["exercises"]].forEach((id) => {
    getExercise(id, (doc) => {
      exercises.value.push({ id: doc.id, ...doc.data() });
    });
  });
};


//

watch(currentRout, (newRout) => loadExercises());
onMounted(() => loadRoutines());


//MODAL LOGIC
const isExeModalOpen = ref(false)
const isWorkModalOpen = ref(false);

const exeModal = ref(null);
const workModal = ref(null);

onClickOutside(exeModal, () => (closeExeModal()));
onClickOutside(workModal, () => (closeWorkModal()));

const exerciseName = ref('')
const series = ref(null)
const reps = ref('')
const weight = ref('')

const workoutName = ref('');
const days = ref([
  { name: "M", isSelected: false },
  { name: "TU", isSelected: false },
  { name: "W", isSelected: false },
  { name: "TH", isSelected: false },
  { name: "F", isSelected: false },
  { name: "SA", isSelected: false },
  { name: "SU", isSelected: false },
]);

//MODAL FUNCTIONS

const saveWorkout = () => {
  if(workoutName == ''){
    console.log('No ha rellenado el campo');
  }
  else{
    try {
      addRoutine({
        name: workoutName.value,
        exercises: [],
        frequency: days.value.filter(day => day.isSelected).map(day => day.name),
        uid: auth.currentUser.uid
      });
      routines.value = [];
      closeWorkModal();
    } catch (error) {
      console.log("Error al añadir: ", error);
    }
  }
}

const closeWorkModal = () => {
  isWorkModalOpen.value = false;
  workoutName.value = '';
  days.value.forEach(day => {
    day.isSelected = false;
  })
};


const saveExercise = () => {
  const newExe = {
    name: exerciseName.value,
    reps: reps.value,
    series: series.value,
    weight: weight.value
  };
  addExercise(newExe, currentRout.value.id)
  routines.value = [];
  closeExeModal();
 
}

const closeExeModal = () => {
  isExeModalOpen.value = false;
  exerciseName.value = '';
  series.value = null;
  reps.value = '';
  weight.value = '';
}


</script>

<style scoped>
.selector-container { @apply w-full flex gap-4 p-4 }
.selector { @apply w-full bg-darkBlack p-2 rounded-lg text-white text-xl }
option { @apply text-white }
.exercises-container { @apply flex flex-col items-center h-full overflow-y-auto gap-6 p-6 }
.add { @apply text-lg text-bone }



.modal-bg { @apply fixed top-0 left-0 w-full h-full flex justify-center items-center bg-overlayBlack }
.modal { @apply w-full md:w-fit relative bg-black text-white text-lg  m-4 p-6 md:p-12 flex flex-col gap-8 rounded-2xl }
.modal > header { @apply w-full border-b-4 border-orange }
.modal img { @apply w-20 h-20 p-3 }
.exNameData { @apply flex flex-col w-full text-center gap-2}
.exercise-data { @apply gap-2 }
.exercise-data > * { @apply flex flex-col text-center gap-2}
input { @apply bg-gray p-2 focus:outline-none w-full rounded-md text-center}
.buttons { @apply flex items-center justify-center w-full gap-16 }

.frequency { @apply flex-col text-white w-full gap-2 }
.days {
  @apply flex justify-between items-center text-black gap-2;
}
.day {
  @apply font-extrabold text-lg p-1 rounded-full w-9;
}





</style>
