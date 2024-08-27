import { useState } from "react"
import CommentInput from "./CommentInput"
import CommentList from "./CommentList"


function App() {
  const [comment, setComments] = useState('')
  const[list,setList]=useState([])
  
  const handleChange = (e) => {
    let val = e.target.value;
    setComments(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      setList([...list, comment]);
      setComments(''); 
    }
  }

  return (
    <div className="h-screen w-screen ">
      <div className="w-5/6 h-screen border border-solid m-auto flex flex-col  ">
        <CommentList list={list} />
        <CommentInput handleChange={handleChange} comment={comment} handleSubmit={handleSubmit } />
      </div>

    </div>
  )
}

export default App
