import { signInWithEmailAndPassword } from "@firebase/auth";
import { getAuth, signOut } from "firebase/auth";

export default function signIn() {
  const auth = getAuth();
  const loading = ref(false);
  let error = "";

  const signInWithEmail = async (email: string, password: string) => {
    loading.value = true;
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { status: 200, message: result };
    } catch (e: any) {
      if (
        e.code === "auth/invalid-email" ||
        e.code === "auth/wrong-password" ||
        e.code === "auth/user-not-found"
      ) {
        error =
          "Invalid email or password. Please check your credentials and try again.";
        return { status: 401, message: error };
      } else if (e.code === "auth/too-many-requests") {
        error = "Too many failed attempts, please try again later.";
        return { status: 403, message: error };
      } else {
        error =
          "Please check your credentials and try again. Contact support if this issue continues.";
        return { status: 500, message: error };
      }
    } finally {
      loading.value = false;
    }
  };

  const signOutFirebase = async () => {
    await signOut(auth);
  };

  return {
    signOutFirebase,
    signInWithEmail,
    loading,
  };
}
