import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  onIdTokenChanged,
  type User,
} from "firebase/auth";
import { ref, onMounted } from "vue";

export const useUserAuthStore = defineStore("UserAuthStore", () => {
  const userCredential = ref<null | User>(null);
  const authStore = ref<"init" | "authed" | "not-authed">("not-authed");
  const auth = getAuth();

  onMounted(async () => {
    const user = auth.currentUser;

    onAuthStateChanged(getAuth(), async (userResult) => {
      if (userResult) {
        userCredential.value = userResult;
        authStore.value = "authed";
      } else {
        authStore.value = "not-authed";
      }
    });
  });
  return {
    userCredential,
    authStore,
  };
});
