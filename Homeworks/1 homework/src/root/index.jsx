import Parent1 from "../components/Parent 1";
import Parent2 from "../components/Parent 2";

function Root() {
  let firstName = "Eshamat"
  let lastName = "Toshmatov"
  return (
    <div>
      <h1>Root</h1>
      <Parent1 firstName = {firstName} />
      <Parent2 lastName = {lastName} />
    </div>
  )
}
export default Root;