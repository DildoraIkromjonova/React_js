import SubChild7 from "../SubChild 7";
import SubChild8 from "../SubChild 8";

const Child4 = ({lastName})=>{
  return (
    <div>
      <h1>Child 4</h1>
      <SubChild7/>
      <SubChild8 lastName = {lastName}/>
    </div>
  )
}
export default Child4;