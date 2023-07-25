<template>
     <div class="page">
        
        <div class="options flex gap-3">
            <h3 class="text-2xl underline decoration-orange" 
                       v-for="rou in routines"
                       @click="changeRoutine(rou)"> 
                {{ rou.name }}
            </h3>

            <img class="h-9 w-9" src="@/assets/img/add.png" alt="add">
        </div>

        <div class="exercise" v-for="exe in exercises">
            <h3 class="text-xl font-bold">{{ exe.name }}</h3>
            <p>Series: {{ exe.series}} </p>
            <p>Reps: {{ exe.reps  }}</p>
        </div>

    </div>
</template>

<script setup>
    import {getRoutines, getExercise} from "@/firebase.js";
    import {onMounted, ref} from "vue";

    const routines = ref([]);
    const currentRout = ref({});
    const exercises = ref([]);

    const changeRoutine = (routine) => {
        currentRout.value = routine;
    };

    onMounted(() => {
        getRoutines(docs => {
            docs.forEach(element => {
            routines.value.push( {id:element.id , ...element.data()}); 
        })

        currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
        console.log(routines.value[0].exercises)
        });

        currentRout.value.exercises.forEach(id => {
            getExercise(id, doc => {
                exercises.value.push( {id:doc.id, ...doc.data()} );
            })
        })


    })

    


     
    
</script>

<style scoped>
    .exercise{@apply w-full h-32  bg-orange rounded-xl text-black text-lg p-2}
   
</style>