import "./App.css";
import Card from "./Card.jsx";
import Counter from "./components/Counter.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const natures = [
    {
      img: "https://images.unsplash.com/photo-1761197698146-f5d09c08bab1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
      title: "Lake",
      description: "lorem ipsum",
      isFav: false,
    },
    {
      img: "https://images.unsplash.com/photo-1761220930689-75e08ac35d70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: "Forest",
      description: "lorem ipsum",
      isFav: false,
    },
    {
      img: "https://images.unsplash.com/photo-1760994031808-08d199c9b68f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
      title: "River",
      description: "River is the awesome",
      isFav: false,
    },
    {
      img: "https://images.unsplash.com/photo-1751489094075-15cb9644c894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600  ",
      title: "Trees",
      description: "Trees are good looking",
      isFav: false,
    },
    {
      img: "https://images.unsplash.com/photo-1761056014179-25c179ff9fa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
      title: "Island",
      description: "The good looking view",
      isFav: false,
    },
  ];
 const isEven = true;
  return (
    <>
      <div className="main-container">
        { 
          natures.map((nature, index) => (
            <Card
              key={index}
              img={nature.img}
              title={nature.title}
              description={nature.description}
              isFav={nature.isFav}
            />
            
          ))
     
      }
      <h1>{
          isEven ? "Number is Even" : "Number is odd"
          }
          </h1>
        
      </div>
<Counter />
<Profile />
        
    </>
  );
}

export default App;
