import { useCallback, useMemo, useState } from "react";
import Home from "../components/Home";

const Root = () => {
  console.log("root re-render")
  const [count, SetCount] = useState(0)
  // const data = useMemo(()=>{
  //   return {count}
  // },[])

  const data = useCallback((text) =>{
 console.log(text,"rooooooot")
 return {count}
  },[])
  return <div>
    <p>Root Component | {count}</p>
    <Home data={data} />

    <button onClick={() => SetCount(count - 1)}>Minus</button>
    <button onClick={() => SetCount(count + 1)}>Plus</button>
  </div>
}

export default Root;