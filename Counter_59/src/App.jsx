import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const[error,setError]=useState('')

  const handleCount = () => {
    setCount(count + 1)
    if (count === 10|| count===20|| count===30) {
      setError(20);
    } else {
      setError('')
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col' >
      <button type='button' onClick={handleCount} className='w-44 bg-green-500 h-12 rounded'>{count}</button>
      {error && <p className='text-red-700'>you clicked{ error}times,so enough you can stop .</p>}
  </div>
  )
}

export default App
