
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {


  const [count, SetCount] = useState(0)
  const [data,Setdata]=useState([])
  useEffect(() => {

    fetch("https://692eaf5d91e00bafccd4d6a2.mockapi.io/productsss")
    .then((result) => result.json())
    .then((result) => Setdata(result))
  }, [count])

  const minus = () => {
    SetCount(count - 1)
  }
  const plus = () => {
    SetCount(count + 1)
  }

  return <div>
    <h1>Home Page - {count}</h1>
    <hr />
    <button onClick={minus}>Minus-</button>
    <button onClick={plus}>Plus+</button>

    <hr />
    <ol>
{
        data.map((obj)=>{
return <li key={obj.id}>
  {obj.title}-{obj.description}
  </li>
        })
}
    </ol>
  </div>
}
export default Home;