<template>
    <div class="exeCard center">
      <h3 class="text-xl">Add a  <strong> New Exercise </strong> <br> to your workout </h3>
      <font-awesome-icon class="icon" icon="circle-plus" />
      
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  
  
  .exeCard {
    @apply  p-5 gap-10 w-80 h-32 bg-salmon rounded-xl text-black;
  }
  .exeCard:hover {
    @apply scale-105 duration-700;
  }

  .icon{@apply text-4xl text-darkBlack}
  </style>
  