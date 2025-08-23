import { useState } from 'react'
import './App.css'
let Counter = () => {
 let  [count , setCount] = useState(0)

  return (
    <div className="counter">
      <button className="increment" onClick={()=>setCount((count)=>count+1)}>INCREMENT</button>
      <h2>count:{count}</h2>
      <button className="decrement" onClick={()=>setCount((count)=>count-1)}>DECREMENT</button>
    </div>
  )
}

const Image = ()=>{
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1748524480150-7735de539dd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" />
    </div>
  )
}




function App() {
let [Toggle , setToggle] = useState(true)

  return (
    <div id="main">
   <button className="toggle" onClick={()=>setToggle((Toggle)=>!Toggle)}>Change Component</button>
   {Toggle ? <Image/> : <Counter/>}
    </div>
  )
}

export default App
