import { ContextData } from "../../context/counter";



const SubChild2 =()=>{
  const [state]= ContextData()

  
  return <h1>Subchild2 {state}</h1>
}

export default SubChild2;