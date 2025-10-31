function App(){
  const natures = [
    {
      img:"https://images.unsplash.com/photo-1761153121828-0994a82db8f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title:"Lake",
      descrption:"lorem ipsum"
    },
    {
      img:"https://images.unsplash.com/photo-1761220930689-75e08ac35d70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title:"Forest",
      descrption:"lorem ipsum"
    },
     {
      img:"https://images.unsplash.com/photo-1761220930689-75e08ac35d70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title:"River",
      descrption:"River is the awesome"
    },
     {
      img:"https://images.unsplash.com/photo-1761220930689-75e08ac35d70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title:"Trees",
      descrption:"Trees are good looking"
    },
     {
      img:"https://images.unsplash.com/photo-1761220930689-75e08ac35d70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title:"Island",
      descrption:"The good looking view"
    } ,
    {
      img:"https://images.unsplash.com/photo-1761140400491-c38b526aaf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
      title:"Mountains",
      descrption:"These are extreme level awesome looks"
    }
  ]
  return (
    <>
{natures.map((nature,index)=><Card key={index} img={nature.img} title={nature.title} descrption={nature.descrption}></Card>)}

    </>
  )
}

export default App;