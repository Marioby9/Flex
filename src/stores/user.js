import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = ref('');

  const color = ref('#ff8800')

  //

  const logout = () => {
    username.value = null;
  }


  // AUXILIAR FUNCTION TO SHOW THE STATE OF THE USER

  const showUser = () =>{
    console.log({
      username: username.value
    })
  }

  watch(color, (newColor) => {
    console.log(newColor)
    // update
  })

  return { username, color, logout, showUser }
})
