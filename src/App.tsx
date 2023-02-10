import { useCallback, useState } from "react";
import AvatarUpload from "./components/AvatarUpload"

export function App() {
  const [croppedImage, setCroppedImage] = useState("");

  const onChange = useCallback((imageFile: string) => {
    setCroppedImage(imageFile)
    console.log(croppedImage, 'Cropped Image')
  }, [])

  return (
    <div className="App">
      <AvatarUpload
        onChange={onChange}
      />
    </div>
  )
}
