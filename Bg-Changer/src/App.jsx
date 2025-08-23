
import { useState } from 'react'
import './App.css'

function App() {

const [color,setColor] = useState("black")
  return (
    <>
    <div className='main'
      style={{backgroundColor : color}}>

<div className='second'>
  <div className='third'>
    <button 
    onClick ={()=> setColor("red")}
    className='btn'
    style ={{backgroundColor:"red"}}>Red
    </button>
    
 <button  
  onClick ={()=> setColor("green")}
 className='btn'
    style ={{backgroundColor:"green"}}>Green
    </button>
     <button 
      onClick ={()=> setColor("blue")}
     className='btn'
    style ={{backgroundColor:"blue"}}>Blue
    </button>
     <button
      onClick ={()=> setColor("olive")}
     className='btn'
    style ={{backgroundColor:"olive"}}>Olive
    </button>
     <button 
      onClick ={()=> setColor("pink")}
     className='btn'
    style ={{backgroundColor:"pink"}}>Pink
    </button>    
 <button  
  onClick ={()=> setColor("gray")}
 className='btn'
    style ={{backgroundColor:"gray"}}>Gray
    </button>
     <button 
      onClick ={()=> setColor("orange")}
     className='btn'
    style ={{backgroundColor:"orange"}}>Orange
    </button>    


  </div>
</div>
  </div>
    
     




    </>
  )
}

export default App
