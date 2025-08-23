import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] = useState(0)

 
let addValue = () => {
counter = counter + 1
setCounter(counter)
}
let removeValue =()=> {
counter = counter - 1
setCounter(counter)
}
  return (
    <>
<h1>Counter App</h1>
<h2>Counter Value :{counter} </h2>
<button
 onClick={addValue}>Add Button {counter} </button>
<br />
<button
onClick= {removeValue}>Remove Button {counter} </button>
    </>
  )
}

export default App
