import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='w-full h-screen'>
   <div className="container">
    <Navbar/>
   </div>
  </div>
  
    </>
  )
}

export default App
