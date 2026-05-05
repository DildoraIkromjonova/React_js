import Header from "../Header";
import { memo } from "react";

const Home = memo(({data})=>{
  console.log("home re-render")
  return <div>
    <p>Home Component |  {data("salom").count}</p>
    <Header/>
  </div>
})

export default Home;