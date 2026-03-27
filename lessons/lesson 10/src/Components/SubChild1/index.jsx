import { ContextData } from "../../context/counter";

const SubChild1 = () => {
const [state,dispatch]=ContextData()

  return (
    <div>
      <h1>Counter </h1>
      <br />
      <hr />
      <br />
      <button onClick={()=> dispatch ({type:"-",payload:1})}>Minus -</button>
      <button onClick={()=> dispatch ({type:"+",payload:1})}>Plus +</button>
      <button onClick={()=> dispatch ({type:"-5",payload:5})}>Minus -</button>
      <button onClick={()=> dispatch ({type:"+5",payload:5})}>Plus +</button>
    </div>
  )
}

export default SubChild1;