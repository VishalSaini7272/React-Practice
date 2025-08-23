
import './App.css'

const Greet = ({username,greetings,img})=>{
return (
  <div>

    <img src={img}/>
    <b><u>Hey,this is {username} and {greetings}</u></b>
  </div>
)
}

function App() {
let data =[
  {username: "vishal" , greetings:"Good Morning" , img:"https://images.unsplash.com/photo-1754824321161-764fb98adc71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},
  {username: "rahul" , greetings:"Good Evening" , img:"https://images.unsplash.com/photo-1754824321161-764fb98adc71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},
{username: "vishal" , greetings:"Good Morning" , img:"https://images.unsplash.com/photo-1754824321161-764fb98adc71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},
  {username: "rahul" , greetings:"Good Evening" , img:"https://images.unsplash.com/photo-1754824321161-764fb98adc71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},

]

  return (
    <div class="container"> 
    {
     data.map((ele) => {
      return (
        <Greet username={ele.username} greetings={ele.greetings} img={ele.img}/>
      )
     })
    }
    </div>
  )
}

export default App
