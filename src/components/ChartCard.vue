<template>
  <div class="container center">
    <h1 class="title">{{ props.title }}</h1>
    <div class="bar-chart center">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
import { useUserStore } from "@/stores/user.js"

const user = useUserStore()

const props = defineProps({
  title: "title",
  type: "bar",
  data: {
    type: Array,
    required: true,
  },
  values: {
    type: Array,
    equired: true,
  },
});

const chartCanvas = ref(null);

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    new Chart(ctx, {
      type: props.type,
      data: {
        labels: props.data,
        datasets: [
          {
            data: props.values,
            borderWidth: 1,
            borderColor: user.color,
            backgroundColor: user.color,
            pointBackgroundColor: user.color,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              font: {
                size: 18,
              },
              color: "white",
            },
          },
          y: {
            beginAtZero: false,
            ticks: {
              font: {
                size: 18,
              },
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
});
</script>

<style scoped>
.container {
  @apply flex-col w-full h-60 gap-2 p-4;
}
.title {
  @apply text-2xl;
}
.bar-chart {
  @apply w-80 p-4 bg-darkBlack text-white rounded-3xl;
}
</style>
