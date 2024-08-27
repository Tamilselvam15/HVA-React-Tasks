import { useState } from "react"
import Font_Display from "./Font_Display"
import Size_Adjuster from "./Size_Adjuster"


function App() {
  const [size, setSize] = useState(16)
  const Adjust = (Size) => {
    console.log(size)
    setSize(Size);
  }



  return (
    <div className="w-5/6 h-screen border m-auto flex flex-col   ">
      <Font_Display size={size} />
      <Size_Adjuster Size={ Adjust} size={size} />
    </div>
  )
}

export default App
