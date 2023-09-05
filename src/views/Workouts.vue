<template>
  <div class="page">
    <div class="selector-container">
      <select class="selector" v-model="currentWorkout">
        <option v-for="workout in workouts" :value="workout">
          {{ workout.name }}
        </option>
      </select>

      <font-awesome-icon 
        class="iconList" 
        icon="list"
        alt="eyePassword" 
        @click="listModalOpen = !listModalOpen"
      />
    </div>

    <div class="exercises-container" v-if="workouts[0]">
      <ExeCard
        v-for="exe in exercises.filter(item => item.workout == currentWorkout.id)"
        :name="exe.name"
        :series="exe.series"
        :reps="exe.reps"
        :weight = "exe.weight"
      />
      <button class="add center" @click="isExeModalOpen = !isExeModalOpen" v-if="currentWorkout" >add exercise +</button>
      
    </div>

    <div class="emptyWorks center" v-if="!workouts[0]">
      <img :src="'src/assets/img/lazy' + randomImg + '.png'" alt="">
      <p>Wow, you don't have any workout...</p> <p>Get up and hit the weights!</p>
      <button @click="openAddWorkoutModal()" class="add center mt-4" >add workout +</button>
    </div>

  </div>
 
  <!-- ListWorkouts Modal -->
  <Teleport to="#listWorkouts">
    <div class="modal-bg" v-if="listModalOpen">
      <div class="listModal" ref="listModal">

        <header class="center" :style="{ borderColor: user.color }">
          <h1 class="listTitle">Your Workouts</h1>
        </header>

        <div class="workoutsList">
          <div class="workout" v-for="workout in workouts">
            <h1>{{workout.name}}</h1>
            <div class="options">
              <font-awesome-icon 
                icon="fa-pen-to-square"
                alt="eyePassword" 
                @click="editWorkout()"
              />
              <font-awesome-icon  
                icon="trash"
                alt="eyePassword"
                @click="deleteWorkout(currentWorkout.id)"
              />
            </div>
          </div>
        </div>
        <button @click="openAddWorkoutModal()" class="add center mt-4" >add workout +</button>
      </div>
    </div>
  </Teleport>

  <!--exercise modal-->
  <Teleport to="#addExercise">
    <div class="modal-bg" v-if="isExeModalOpen">
      <div class="modal" ref="exeModal">

        <header class="center" :style="{ borderColor: user.color }">
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

        <header class="center" :style="{ borderColor: user.color }">
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
import { getWorkouts, getExercises, addWorkout, addExercise, deleteWorkout, auth } from "@/fb";
import { onMounted, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

//

const user = useUserStore();

//

const randomImg = Math.floor(Math.random() * 5) + 1;

//

const workouts = ref([])
const currentWorkout = ref({})
const exercises = ref([])

const loadworkouts = () => {
  getWorkouts(auth.currentUser.uid, docs => {
    workouts.value = []
    docs.forEach(doc => workouts.value.push({ id: doc.id, ...doc.data() }))
    currentWorkout.value = workouts.value[0]
  })
}

const loadExercises = () => {
  getExercises(auth.currentUser.uid, docs => {
    exercises.value = []
    docs.forEach(doc => exercises.value.push({ id: doc.id, ...doc.data() }))
  })
}

onMounted(() => {
  loadworkouts()
  loadExercises()
})


//MODAL LOGIC
const listModalOpen = ref(false)
const isExeModalOpen = ref(false)
const isWorkModalOpen = ref(false)

const listModal = ref(null);
const exeModal = ref(null);
const workModal = ref(null);

onClickOutside(listModal, () => (closeListModal()));
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

const editWorkout = () => {

}

const openAddWorkoutModal = () => {
  listModalOpen.value = false
  isWorkModalOpen.value = true
}

const saveWorkout = async() => {
  if(workoutName == ''){
    console.log('No ha rellenado el campo');
  }
  else{
    try {
      await addWorkout({
        name: workoutName.value,
        uid: auth.currentUser.uid,
        frequency: days.value.filter(day => day.isSelected).map(day => day.name),
      })
      currentWorkout.value = workouts.value.find(item => item.name == workoutName.value)
      closeWorkModal()
    } catch (error) {
      console.log("Error al añadir: ", error);
    }
  }
}


const closeListModal = () => {
  listModalOpen.value = false;
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
    weight: weight.value,
    workout: currentWorkout.value.id,
    uid: auth.currentUser.uid
  }
  exercises.value = []
  console.log(currentWorkout.value)
  addExercise(newExe, currentWorkout.value.id)
  closeExeModal()
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
.selector-container { @apply w-full flex gap-4 p-4 items-center }
.selector { @apply w-full bg-darkBlack p-2 rounded-lg text-white text-xl }
.iconList { @apply text-2xl w-10 }
.exercises-container { @apply flex flex-col items-center h-full overflow-y-auto gap-6 p-6 }



.modal-bg { @apply fixed top-0 left-0 w-full h-full flex justify-center items-center bg-overlayBlack }
.modal { @apply w-full md:w-fit relative bg-black text-white text-lg m-4 p-6 md:p-12 flex flex-col rounded-2xl gap-5}
.modal > header { @apply w-full border-b-4}
.modal img { @apply w-20 h-20 p-3 }

.listModal{ @apply w-full md:w-fit relative bg-black text-white text-lg m-4 p-6 md:p-12 flex flex-col rounded-2xl gap-3 }
.listModal > header { @apply w-full border-b-4}
.listTitle { @apply text-2xl p-4 }

.workoutsList { @apply flex flex-col gap-4 py-4 max-h-80 overflow-y-auto}
.workoutsList .workout { @apply flex items-center w-full bg-darkBlack rounded-md p-4 text-xl }
.workout > h1 { @apply w-full }
.workout .options { @apply flex gap-6 }


.exNameData { @apply flex flex-col w-full text-center gap-3 }
.exercise-data { @apply gap-2 }
.exercise-data > * { @apply flex flex-col text-center gap-2 }
input { @apply bg-gray p-2 focus:outline-none w-full rounded-md text-center}
.buttons { @apply flex items-center justify-center w-full gap-16 }

.frequency { @apply flex-col text-white w-full gap-3 }
.days { @apply flex justify-between items-center text-black gap-2 }
.day { @apply font-extrabold text-lg p-1 rounded-full w-9 }


.emptyWorks { @apply w-full flex-col text-2xl p-5 text-center}
.emptyWorks img { @apply w-52 opacity-70 }
.emptyWorks button { @apply text-2xl }

</style>