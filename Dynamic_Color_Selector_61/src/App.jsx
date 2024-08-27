import { useState } from "react"
import Color_Display from "./Color_Display"
import Color_Selector from "./Color_Selector"


function App() {
  const [color, setColor] = useState('')

  const functions = (fn) => {
    setColor(fn);

  }
  const clas ='w-16 border border-solid h-7 bg-yellow-300 m-auto rounded '

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center border-blue-400 ">
      <Color_Display color={color} />
      <Color_Selector fn={functions} clas={clas} />
    </div>
  
  )
}

export default App
