<template>
  <div class="page">
    <div class="options flex gap-3 overflow-auto">
      <h3 v-for="rou in routines" @click="changeRoutine(rou)">
        {{ rou.name }}
      </h3>

      <img
        class="h-9 w-9"
        src="@/assets/img/add.png"
        alt="add"
        @click="addPlan"
      />
    </div>

    <div
      class="exercises space-y-4"
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

    <div>
      <h1 class="text-3xl font-semibold">My routines</h1>
      <div class="flex gap-3 w-full overflow-auto pt-3 ">
        <ExeCard class="exeCard" v-for="rou in routines" :name="rou.name" />
        <img
        class="h-30 w-20 "
        src="@/assets/img/add.png"
        alt="add"
        @click="addPlan"
      />
      </div>
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

//Modal Logic
const isOpac = ref(false);
const isDisabled = ref(false);
const showModal = ref(true);

const changeRoutine = (routine) => {
  exercises.value = [];
  currentRout.value = routine;
};

const loadRoutines = () => {
  getRoutines((docs) => {
    docs.forEach((element) => {
      routines.value.push({ id: element.id, ...element.data() });
    });
    currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
  });
};

const loadExercises = () => {
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
.options {
  font-size: 22px;
}
</style>
