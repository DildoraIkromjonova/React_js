import Subchild from "../SubChild";

const Child =()=>{
  return <div style={{border: "2px solid blue"}}>
    <h1>Child</h1>
    <Subchild/>
  </div>
}
export default Child;