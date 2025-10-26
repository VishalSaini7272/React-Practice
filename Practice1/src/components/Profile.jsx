import { useState } from "react";

function Profile() {

    const names =   ["vishal","ravi","shivani","rahul","poonam","supriya"]
    const cities =["jaipur","jabalpur","katni","sagar"]

  const [name, setName] = useState(0);
  const [age, setAge] = useState(20);
  const [city, setCity] = useState(0);

  const changeName = () =>{
    setName((prevIndex)=>(prevIndex + 1) %  names.length)
  }

  const changeCity = () =>{
    setCity((prevIndex)=>(prevIndex + 1) % cities.length)
    }
    const changeAge = ()=>{
        setAge(age + 1);
    }
  
  return (
    <div>
      <h2>Profile Details</h2>
      <p>Name: {names[name]}</p>
      <p>Age: {age}</p>
      <p>City: {cities[city]}</p>
      
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeAge}>Increase Age</button>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

export default Profile;
