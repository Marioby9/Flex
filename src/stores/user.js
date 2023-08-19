import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const username = ref('');

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

  return { username, logout, showUser }
})
