import { useState } from "react";

const Home = ()=>{

  const[count,setCount]=useState(0)

   const setCounter = (type)=>{
    if(type=="+")setCount(count+1)
      else if(type=="-")setCount(count-1)
    else return "";
   }



  return <div style={{flex:1}}>
    <h1>Home Page  {count}</h1>
    <br />
    <hr />
    <br />
    <button onClick={()=> setCounter("-")}>Minus-</button>
    <button onClick={()=> setCounter("+")}>Plus+</button>
  </div>
}
export default Home;