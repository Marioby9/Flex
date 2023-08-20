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
      <button class="add center" @click="exerciseModal = !exerciseModal">add exercise +</button>
      
    </div>
  </div>
  <!--exercise modal-->
  <Teleport to="#exercise">
    <div class="modal-bg" v-if="exerciseModal">
      <div class="modal" ref="modal">
        <input type="text" placeholder="name" v-model="exerciseName">
        <div class="center exercise-data">
          <div>
            <label for="series">series</label>
            <input type="number" id="series" v-model="series" placeholder="0">
          </div>
          <div>
            <label for="reps">reps</label>
            <input type="number" id="reps" v-model="reps" placeholder="0">
          </div>
          <div>
            <label for="weight">weight</label>
            <input type="number" id="weight" v-model="weight" placeholder="0">
          </div>
        </div>
        <div>
          <button>save</button>
        </div>
      </div>
    </div>
  </Teleport>

  <div class="modal-bg center" v-if="isModalOpen">
    <ModalRoutine ref="modal" :onCancel="closeModal" :onAccept="accept" />
  </div>
</template>

<script setup>

import ExeCard from "../components/ExeCard.vue";
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
const exerciseModal = ref(false)
const isModalOpen = ref(false);
const modal = ref(null);
onClickOutside(modal, () => (closeModals()));

const exerciseName = ref('')
const series = ref(null)
const reps = ref(null)
const weight = ref(null)

//MODAL FUNCTIONS

const closeModals = () => {
  exerciseModal.value = false
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
        uid: auth.currentUser.uid
      });
      routines.value = [];
      isModalOpen.value = false;
    } catch (error) {
      console.log("Error al añadir: ", error);
    }
  }
}

</script>

<style scoped>
.selector-container { @apply w-full flex gap-4 p-4 }
.selector { @apply w-full bg-darkBlack p-2 rounded-lg text-white text-xl }
option { @apply text-white }
.exercises-container { @apply flex flex-col items-center h-full overflow-y-auto gap-6 p-6 }
.add { @apply text-lg text-bone }
.modal-bg{ @apply fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-black }
.modal{ @apply w-full md:w-fit relative bg-black text-white m-4 p-6 md:p-12 flex flex-col gap-8 rounded-2xl }
.exercise-data { @apply gap-2 }
.exercise-data > * { @apply flex flex-col }
input { @apply bg-black w-full }


</style>
