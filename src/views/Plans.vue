<template>
     <div class="page" v-if="loading">
        
        <div class="options flex gap-3">
            <h3 v-for="rou in routines" class="text-2xl underline decoration-orange" @click="changeRoutine(rou)"> 
                {{ rou.name }}
            </h3>

            <img class="h-9 w-9" src="@/assets/img/add.png" alt="add">
        </div>

        <div class="exercise" v-for="exe in exercises">
            <h3 class="text-xl font-bold">{{ exe.name }}</h3>
            <p>Series: {{ exe.series }} </p>
            <p>Reps: {{ exe.reps }}</p>
        </div>

    </div>
</template>

<script setup>

    import { getRoutines, getExercise } from "@/firebase.js";
    import { onMounted, ref, reactive, watch } from "vue";

    //

    const routines = ref([]);
    const currentRout = ref({});
    const exercises = ref([]);
    const loading = ref(true)

    //

    const loadRoutines = () => {
        getRoutines(docs => {
            docs.forEach(element => {
                console.log(element.data())
                routines.value.push({...{ id: element.id , ...element.data() }})
                
            })
            currentRout.value = routines.value[0]
        })
    }

    const loadExercises = () => {
        currentRout.value[['exercises']].forEach(id => {
            getExercise(id, doc => {
                exercises.value.push({ id: doc.id, ...doc.data() })
            })
        })
    }

    watch(currentRout, (newRout) => loadExercises())

    //

    onMounted(() => loadRoutines())
    
</script>

<style scoped>
    .exercise{@apply w-full h-32  bg-orange rounded-xl text-black text-lg p-2}
   
</style>