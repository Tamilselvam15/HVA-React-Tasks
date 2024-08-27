import { useState } from "react";

function App() {

  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');
  
    
  const getText = (e) => {
    let val = e.target.value;
    setInput(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(input);

  }

  
  return (
    <div className="border border-black h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col border border-black w-5/12 h-1/5">
        <input type="text" placeholder="Enter somthing....." onChange={getText} className="w-5/6 mx-auto mt-5 border border-blue-600 h-8" />
        <button type="submit" className="mt-5 border w-2/6 mx-auto h-8">submit</button>
        {display && <p className="mx-auto mt-5">{ display}</p>}
       
      </form>
    </div>
        
  )
}

export default App
