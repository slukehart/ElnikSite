import { error } from "firebase-functions/logger";
import { getAuth } from "firebase/auth";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";

export default function uplaodFileToFirebase() {
  const uploadImage = async (file: File | undefined) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }
    if (!file) throw Error();
    const metadata = {
      contentType: file.type,
    };

    const storage = getStorage();
    const filePath = `blog_images/${file.name}`;
    const storageRef = ref(storage, filePath);

    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type });

    // Upload the file
    await uploadBytes(storageRef, blob, metadata);

    // Get and return the file's download URL
    return getDownloadURL(storageRef);
  };

  return { uploadImage };
}
