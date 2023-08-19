<template>
  <div class="page">
    <Header :title="'MY WORKOUTS'" />

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
        v-for="exe in exercises"
        :name="exe.name"
        :series="exe.series"
        :reps="exe.reps"
      />

      <AddExeCard />
    </div>
  </div>

  <div class="modal-bg center" v-if="isModalOpen">
    <ModalRoutine ref="modal" :onCancel="closeModal" :onAccept="accept" />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import ExeCard from "../components/ExeCard.vue";
import AddExeCard from "../components/AddExeCard.vue";
import ModalRoutine from "../components/ModalRoutine.vue";

import { useUserStore } from "../stores/user";
import { getRoutines, getExercise, addRoutine, auth } from "@/firebase.js";
import { onMounted, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

//

const user = useUserStore();

//

const routines = ref([]);
const currentRout = ref({});
const exercises = ref([]);

//MODAL LOGIC
const isModalOpen = ref(false);
const modal = ref(null);
onClickOutside(modal, () => (isModalOpen.value = false));

//FUNCTIONS
const loadRoutines = () => {
  getRoutines(auth.currentUser.uid, (docs) => {
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


//

watch(currentRout, (newRout) => loadExercises());

onMounted(() => loadRoutines());

//MODAL FUNCTIONS

const closeModal = () => {
  isModalOpen.value = false;
};

const accept = (newName, frequency) => {
  if (newName == "") {
    console.log("No ha rellenado el campo");
  } else {
    try {
      addRoutine({
        name: newName,
        exercises: [],
        frequency: frequency,
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
  @apply w-full flex gap-4 p-4 bg-darkBlack;
}
.selector {
  @apply w-full bg-darkBlack text-white text-xl;
}
option {
  @apply text-white;
}
.exercises-container {
  @apply flex flex-col items-center h-full overflow-y-auto gap-6 p-6;
}

.modal-bg {
  @apply bg-overlayBlack fixed top-0 w-full h-full;
}
</style>
