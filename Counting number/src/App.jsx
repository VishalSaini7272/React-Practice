import { useState } from 'react';
import './App.css'

const Counter = ()=>{
  // let count = 0;
  let [count , setCount] = useState(0);
   
  return (
    <div>
<button onClick = {()=>setCount((count)=> count + 1)}>Increment</button>
<h2>{count}</h2>
<button onClick = {()=>setCount((count)=> count -1)}>Decrement</button>
    </div>
  )
}

function App  ()  {
  return (
    <>
     <Counter/>
    </>
  )
}

export default App
