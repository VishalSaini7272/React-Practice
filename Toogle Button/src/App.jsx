
import { useState } from 'react'
import './App.css'

const DarkMode = () =>{

  return(
    
    <div className='darkmode'>
    <h2>DADK MODE ON</h2>
    </div>
    
  )
}

const LightMode = () =>{
  
  return(
    <div className='lightmode'>
    <h2>LIGHT MODE ON</h2>
    </div>
  )
}



function App() {
  
let [Toggle , setToggle] = useState(true);
  return (
    <>
    <button onClick={()=> setToggle((Toggle)=>!Toggle)}  class="btn">Click Me!</button>
     {
      Toggle ? <LightMode/> : <DarkMode/>
     }
    
    </>
  )
}

export default App
