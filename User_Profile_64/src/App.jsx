import { useEffect, useState } from "react"
import Userprofile from "./Userprofile"


function App() {
  const [userdata, setUserdata] = useState({ name: '', email: '', company: { name: '', catchPhrase: '', bs: '' } });

  useEffect(() => {

    const fetchData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json();
      setUserdata({
        name: data.name,
        email: data.email,
        company:data.company
      })
    

    }
    fetchData();
  },[])
  

  return (
    <div className="w-screen flex h-screen items-center justify-center">
      <div className="border border-solid w-5/6 h-2/4 absolute mx-auto flex items-center  ">
        <Userprofile userdata={userdata} />
       

      </div>
      
    </div>
  )
}

export default App
  