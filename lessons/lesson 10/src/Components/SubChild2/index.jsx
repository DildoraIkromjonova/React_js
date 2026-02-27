import { ContextData } from "../../context/counter";



const SubChild2 =()=>{
  const data= ContextData()

  
  return <h1>Subchild2 {data}</h1>
}

export default SubChild2;