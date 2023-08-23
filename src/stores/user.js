import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = ref('');
  const height = ref('');
  const weight = ref('');

  const color = ref('#ff8800')

  // AUXILIAR FUNCTION TO SHOW THE STATE OF THE USER

  const showUser = () =>{
    console.log({
      username: username.value
    })
  }

  watch(color, (newColor) => {
    // update
  })

  return { username, height, weight, color, showUser }
})
