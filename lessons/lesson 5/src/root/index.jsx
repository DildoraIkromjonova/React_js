import About from "../components/About";
import Home from "../components/Home";
const Root = () => {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)",  gap:"20px"}}>
    <Home />
    <About  />
  </div>
}

export default Root;