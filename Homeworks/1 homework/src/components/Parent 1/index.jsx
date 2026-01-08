import Child1 from "../Child 1";
import Child2 from "../Child 2";

const Parent1 = ({firstName}) => {
  return (
    <div>
      <h1>Parent 1</h1>
      <Child1  firstName = {firstName}/>
      <Child2 />
    </div>
  )
}
export default Parent1;