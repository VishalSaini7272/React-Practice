import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount ] = useState(0)
const handleClick = () => {
 setCount(count + 1)
}
 

  return (
    <>
    <div>
      
        <p> Button clicked {count} times </p>
  <button onClick = {handleClick}> Click me </button>
  </div>
    </>
  )
}

export default App
