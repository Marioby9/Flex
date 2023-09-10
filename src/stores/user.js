import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = ref('');
  const height = ref('');
  const weight = ref('');

  const color = ref('#ff8800')

  const isLoggedIn = ref(false)

  // AUXILIAR FUNCTION TO SHOW THE STATE OF THE USER

  const showUser = () =>{
    console.log({
      username: username.value
    })
  }

  const getDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return day + '/' + month + '/' + year
  }

  watch(color, (newColor) => {
    // update
  })

  return { username, height, weight, color, getDate, showUser }
})
