<template>
  <div class="page">

    <div class="selector-container">
      <select class="selector" v-model="currentRout">
        <option v-for="routine in routines" :value="routine">{{ routine.name }}</option>
      </select>
      <img
        class="h-9 w-9"
        src="@/assets/img/add.png"
        alt="add"
        @click="addPlan"
      />
    </div>


    <div
      class="exercises-container"
      :class="{ 'opacity-10': isOpac, 'pointer-events-none': isDisabled }"
    >
      <ExeCard
        class="exeCard"
        v-for="exe in exercises"
        :name="exe.name"
        :series="exe.series"
        :reps="exe.reps"
      />
    </div>

    <div
      class="addExe absolute top-1/4 self-center"
      :class="{ hidden: showModal }"
    >
      <AddRoutine :onCancel="closeAdd" :onAccept="accept" />
    </div>
  </div>
</template>

<script setup>

import ExeCard from "../components/ExeCard.vue";
import AddRoutine from "../components/AddRoutine.vue";

import { getRoutines, getExercise, addRoutine } from "@/firebase.js";
import { onMounted, ref, watch } from "vue";

const routines = ref([]);
const currentRout = ref({});
const exercises = ref([]);

const aux = ref([1, 2, 3, 4, 5, 6, 7])
const test = ref('1')

//Modal Logic
const isOpac = ref(false);
const isDisabled = ref(false);
const showModal = ref(true);

const loadRoutines = () => {
  getRoutines((docs) => {
    docs.forEach((element) => {
      routines.value.push({ id: element.id, ...element.data() });
    });
    currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
  });
};

const loadExercises = () => {
  exercises.value = []
  currentRout.value[["exercises"]].forEach((id) => {
    getExercise(id, (doc) => {
      exercises.value.push({ id: doc.id, ...doc.data() });
    });
  });
};

watch(currentRout, (newRout) => loadExercises());

onMounted(() => loadRoutines());

//Functions when adding an exercise
const addPlan = () => {
  isOpac.value = true;
  isDisabled.value = true;
  showModal.value = false;
};

const closeAdd = () => {
  isOpac.value = false;
  isDisabled.value = false;
  showModal.value = true;
};

const accept = (newName) => {
  if (newName == "") {
    console.log("No ha rellenado el campo");
  } else {
    try {
      addRoutine({
        name: newName,
        exercises: [],
      });
      routines.value = [];
      closeAdd();
    } catch (error) {
      console.log("Error al añadir: ", error);
    }
  }
};
</script>

<style scoped>

.selector-container { @apply w-full shrink-0 flex gap-4 p-4 bg-black }
.selector { @apply w-full bg-black text-white }
option { @apply text-white }
.exercises-container { @apply flex flex-col overflow-y-auto gap-4 p-4 }

</style>
