import { useState, useEffect } from "react";
import { firegramStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = firegramStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        //storageRef.put(file).on() has 4 arguemnt
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
