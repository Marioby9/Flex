<template>
  <div class="page">
    <div class="selector-container">
      <select class="selector" v-model="currentRout">
        <option v-for="routine in routines" :value="routine">
          {{ routine.name }}
        </option>
      </select>
      <img
        class="h-9 w-9"
        src="@/assets/img/add.png"
        alt="add"
        @click="isModalOpen = true"
      />
    </div>

    <div class="exercises-container">
      <ExeCard
        class="exeCard"
        v-for="exe in exercises"
        :name="exe.name"
        :series="exe.series"
        :reps="exe.reps"
      />
    </div>

    <div class="modal-bg center" v-if="isModalOpen">
      <ModalRoutine ref="modal" :onCancel="closeModal" :onAccept="accept" />
    </div>
  </div>
</template>

<script setup>
import ExeCard from "../components/ExeCard.vue";
import ModalRoutine from "../components/ModalRoutine.vue";

import { getRoutines, getExercise, addRoutine } from "@/firebase.js";
import { onMounted, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

const routines = ref([]);
const currentRout = ref({});
const exercises = ref([]);

//MODAL LOGIC
const isModalOpen = ref(false);
const modal = ref(null);
onClickOutside(modal, () => (isModalOpen.value = false));

//FUNCTIONS
const loadRoutines = () => {
  getRoutines((docs) => {
    docs.forEach((element) => {
      routines.value.push({ id: element.id, ...element.data() });
    });
    currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
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

watch(currentRout, (newRout) => loadExercises());
onMounted(() => loadRoutines());

//MODAL FUNCTIONS

const closeModal = () => {
  isModalOpen.value = false;
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
      isModalOpen.value = false;
    } catch (error) {
      console.log("Error al añadir: ", error);
    }
  }
};
</script>

<style scoped>
.selector-container {
  @apply w-full shrink-0 flex gap-4 p-4 bg-black;
}
.selector {
  @apply w-full bg-black text-white text-xl;
}
option {
  @apply text-white;
}
.exercises-container {
  @apply flex flex-col overflow-y-auto gap-4 p-4;
}

.modal-bg {
  @apply bg-overlayBlack fixed top-0 w-full h-full;
}
</style>
