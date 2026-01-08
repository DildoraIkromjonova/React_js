import SubChild1 from "../SubChild 1";
import SubChild2 from "../SubChild 2";

const Child1 = ({firstName})=>{
return (
  <div>
    <h1>Child 1</h1>
 <SubChild1 firstName = {firstName}/>
 <SubChild2/>
  </div>
)
}
export default Child1;