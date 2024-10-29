import { getAuth, signOut } from "firebase/auth";

export default function signOutUser() {
  const auth = getAuth();

  const signOutFirebase = async () => {
    await signOut(auth);
  };
  return {
    signOutFirebase,
  };
}
