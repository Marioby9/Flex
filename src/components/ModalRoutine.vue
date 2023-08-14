<template>
  <div class="modal">
    <header class="center">
      <img src="@/assets/img/addExe.png" alt="addWorkout" />
    </header>

    <div class="card">
      <h1 class="title">Create a new workout</h1>
      <section>
        <h3>Name:</h3>
        <input
          class="name"
          type="text"
          placeholder="Ex: Push B"
          v-model="newName"
        />
      </section>

      <section class="frequency">
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
      </section>

      <section class="buttons center">
        <button @click="accept">ACCEPT</button>
        <button @click="cancel">CANCEL</button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let newName = ref("");

const days = ref([
  { name: "M", isSelected: false },
  { name: "TU", isSelected: false },
  { name: "W", isSelected: false },
  { name: "TH", isSelected: false },
  { name: "F", isSelected: false },
  { name: "SA", isSelected: false },
  { name: "SU", isSelected: false },
]);

const props = defineProps({
  onCancel: "closeModal",
  onAccept: "accept",
});

//Executes when cancel is clicked
const cancel = () => {
  props.onCancel();
  newName.value = "";
};

//Executes when accept is clicked and pass the newName to the parent
const accept = () => {
  props.onAccept(newName.value);
};
</script>

<style scoped>
.modal {
  @apply relative bg-white shadow-xl text-black text-lg w-80 h-96 rounded-2xl;
}
.modal > header {
  @apply bg-orange w-full h-1/4 rounded-t-2xl;
}
.modal > header > img {
  @apply w-16 h-16;
}
.modal .card {
  @apply p-5 flex flex-col gap-4;
}
.modal .card .title {
  @apply font-bold text-xl;
}
.modal .card .name {
  @apply border-black border-2 rounded-2xl w-full h-10 pl-2;
}
.days {
  @apply flex justify-between items-center;
}
.day {
  @apply font-extrabold text-lg p-1 rounded-full w-9;
}
.modal .buttons {
  @apply w-full p-3 gap-5 font-bold;
}
</style>
