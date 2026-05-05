import { useRef } from "react";

const Root =()=>{
  const nameref= useRef("")
  const surNameref= useRef("")

  const Click = ()=>{
    console.log(nameref.current.value , surNameref.current.value)
  }
   
  return <div>
    <p>Root components</p>
    <br />
    <hr />
    <br />
    <input  ref={nameref} type="text" placeholder="Enter your Name" />
    <input ref={surNameref} type="text"  placeholder="Enter your Surname" />
    <button onClick={Click}>Yuborish....</button>
  </div>
}
export default Root;