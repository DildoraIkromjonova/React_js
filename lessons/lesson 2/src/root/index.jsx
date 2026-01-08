import Parent from "../components/Parent";

function Root() {
  let name = "Eshmat"
  return <div style={{border:"2px solid greenyellow"}}>
    <h1>Root</h1>
    <Parent data={name}/>
  </div>
}

export default Root;