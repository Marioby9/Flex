<template>

     <div class="page" >
        
            <div class="options flex gap-3">
                <h3 class="text-2xl" 
                        v-for="rou in routines"
                        @click="changeRoutine(rou)"> 
                        {{ rou.name }}
                </h3>

                <img class="h-9 w-9" src="@/assets/img/add.png" alt="add" @click="addExercise">
            </div>

           
            <div class="exercises space-y-4" :style="{ opacity: opacity }">
                <ExeCard class="exeCard"
                    v-for="exe in exercises"
                    :name = exe.name
                    :series = exe.series
                    :reps = exe.reps
                />

            </div>

            <div class="addExe absolute top-1/4 self-center" :class="{ 'hidden': isHidden }">
                <AddExe :onCancel = "cancel" />
            </div>
            
            
    </div>
    

</template>

<script setup>
    import ExeCard from "../components/ExeCard.vue";
    import AddExe from "../components/AddExe.vue";

    import {getRoutines, getExercise} from "@/firebase.js";
    import {onMounted, ref, watch} from "vue";

    const routines = ref([]);
    const currentRout = ref({});
    const exercises = ref([]);
    const opacity = ref(1);
    const isHidden = ref(true);


    const changeRoutine = (routine) => {
        exercises.value = [];
        currentRout.value = routine;
    };

    const loadRoutines = () => {
        getRoutines(docs => {
            docs.forEach(element => { 
                routines.value.push( {id:element.id , ...element.data()}); 
            })
            currentRout.value = routines.value[0]; //Habia que ponerlo dentro del callback de getRoutines
        });
    }

    const loadExercises = () => {
        
        currentRout.value[['exercises']].forEach(id => {
            getExercise(id, doc => {
                exercises.value.push({id: doc.id, ...doc.data()})
            })
        })
    }



    watch(currentRout, (newRout) => loadExercises());

    onMounted(() => loadRoutines());
     

    //Functions when adding an exercise
    const addExercise = () => {
        opacity.value = 0.1;
        isHidden.value = false;
    }

    const cancel = () => {
        opacity.value = 1;
        isHidden.value = true;
    }

    
</script>

<style scoped>
   
</style>