import Subchild from "../SubChild";

const Child =({data2})=>{
  return <div style={{border: "2px solid blue"}}>
    <h1>Child</h1>
    <Subchild data3 = {data2}/>
  </div>
}
export default Child;