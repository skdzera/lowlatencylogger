import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { Storage} from "./firebase"

const upload = async (File) => {

  const date = new Date()
  const storageRef = ref(Storage, `images/${date + File.name}`)

  const uplaodTask = uploadBytesResumable(storageRef, File)

  return new Promise((resolve, reject) => {

    uplaodTask.on (
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done");
          },
          (Error) => {
            reject("Something went worng!" + error.code)
          },
          () => {
            getDownloadURL(uplaodTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            })
          }
        )
      })
    }

export default upload
