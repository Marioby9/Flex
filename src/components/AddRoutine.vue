<template>


        <div class="card">
            <header class="center">
                <img src="@/assets/img/addExe.png" alt="addExe">
            </header>

            <div class="form">
                <h1>Add a new plan</h1>
                <h3>Name:</h3>
                <input type="text" placeholder="Ex: Push B Routine" v-model="newName">
                <h3>Description:</h3>
                <input type="text" placeholder="Observations">
            </div>

            <div class="options center">
                <h3 @click="cancel">CANCEL</h3>
                <h3 @click="accept">ACCEPT</h3>
            </div>

        </div>
    

    
</template>

<script setup>

    import { defineProps, ref } from 'vue';

    let newName = ref('');

    //Props from the parent
    const props = defineProps({
        onCancel : 'onCancel',
        onAccept : 'onAccept'
    });
    
    //Executes when cancel is clicked
    const cancel = () => {
        props.onCancel();
        newName.value = '';
    }

    //Executes when accept is clicked and pass the newName to the parent
    const accept = () => {
        props.onAccept(newName.value);
    }

</script>

<style scoped>
    .card{@apply bg-white text-black rounded-2xl flex flex-col text-lg}
    .card{
        height: 400px;
    }
    header{@apply w-full h-1/4 bg-orange rounded-t-2xl}
    header > img {@apply w-14 h-14}
    .form{@apply p-3 space-y-3 flex flex-col }
    .form > input{@apply w-72 h-12 border-black border-2 rounded-2xl p-3 self-center} 
    .form > h1 {@apply text-center font-bold text-2xl}
    .options{@apply text-orange cursor-pointer space-x-10 p-5}
</style>