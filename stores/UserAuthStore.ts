import {defineStore} from "pinia";
import {getAuth, onAuthStateChanged, onIdTokenChanged, type User} from "firebase/auth";
import {ref, onMounted} from "vue";

export const useUserAuthStore = defineStore("UserAuthStore", () => {
  const userCredential = ref<null | User>(null);
  const authStore = ref<"init" | "authed" | "not-authed">("not-authed");

  onMounted(async () => {
    onAuthStateChanged(getAuth(), async(userResult) => {
      if (userResult) {
        userCredential.value = userResult;
        console.log("user credential", userCredential.value);
        authStore.value = "authed";
      } else {
        console.log("user credential", userCredential.value);

        authStore.value = "not-authed";

      }

    })


  })
  return {
    userCredential,
    authStore
  }





})