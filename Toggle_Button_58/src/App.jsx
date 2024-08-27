import { useState } from "react"

function App() {
  const [toggle, setToggle] = useState('ON')
  const [color, setColor] = useState('')
  
  const handleToggle = () => {
    if (toggle === 'ON') {
      setToggle('OFF');
      setColor('bg-green-500');
    } else {
      setToggle('ON');
      setColor('bg-red-500');
    }
    
}

  return (
    <div className="border border-black h-screen w-screen flex justify-center items-center ">
      <div className={`border border-black w-2/6 h-3/6 flex items-center  rounded justify-center ${color}`}>
        <button type="button" className="border-solid border-4 text-white border-yellow-500 w-3/6 h-12 rounded-lg bg-black" onClick={handleToggle}>{toggle}</button>
      </div>
   </div>
  )
}

export default App
