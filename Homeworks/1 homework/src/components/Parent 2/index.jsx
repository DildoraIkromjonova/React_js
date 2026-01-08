import Child3 from "../Child 3";
import Child4 from "../Child 4";

const Parent2 = ({lastName}) => {
  return (
    <div>
      <h1>Parent 2</h1>
      <Child3 />
      <Child4 lastName = {lastName} />
    </div>
  )
}
export default Parent2;