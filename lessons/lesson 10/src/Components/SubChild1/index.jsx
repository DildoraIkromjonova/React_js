import { useState, } from "react"

const SubChild1 = () => {

  const [count, setCount] = useState(0);
  const minus=()=>setCount(count-1);
  const plus=()=>setCount(count+1);




  return (
    <div>
      <h1>Counter {count} </h1>
      <br />
      <hr />
      <br />
      <button onClick={minus}>Minus -</button>
      <button onClick={plus}>Plus +</button>
    </div>
  )
}

export default SubChild1;