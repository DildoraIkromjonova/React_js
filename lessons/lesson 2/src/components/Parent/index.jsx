import Child from "../Child";

const Parent = ({data}) => {
  return <div style={{border:"2px solid green"}} >
    <h1>Parent</h1>
    <Child data2 = {data}/>
  </div>

}
export default Parent;