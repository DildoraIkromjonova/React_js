
import axios from "axios";
import api from "../axios/api";

const Root = () => {
  const Requeriest=()=>{
    //   // fetch
    //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((res) => {
    //     console.log("fetch",res)
    //   })
    // // axios
    // axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
    //   console.log("axios",data)
    // })
    const data ={
        title: "oq kema ",
        author: "xdfnghmjk",
        description: "“Sohil yoqalab chopayotgan olapar”, “Oq kema” hamda “Sarvqomat dilbarim” kabi mashhur qissalardan iborat ushbu kitob Chingiz Aytmatov ijodining eng sermahsul davridan dalolatdir.",
        pages: "200",
        published: "2025-year",
        
    
    }
    // ====================================
        //   // fetch
        //   fetch("https://692eaf5d91e00bafccd4d6a2.mockapi.io/api/v1/library"),{
        //     method:"POST",
        // headers:{
        //   "Content-type":"application/json",
        // },
        // body:JSON.stringify(data())
        //   }
        // // // axios
        // // axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
        // //   console.log("axios",data)
        // // })

        // =====================================================

    //   // fetch

    const token = localStorage.getItem("token")
      fetch("https://692eaf5d91e00bafccd4d6a2.mockapi.io/api/v1/library" , {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          Authorization:"Bearer "+token,
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()).then((res) => {
        console.log("fetch",res)
      })
    // // axios
   api.post("/library", data)
  }
  return <div>
    <h1>Root component</h1>
    <br />
    <hr />
    <br />
    <button onClick={Requeriest}>Back requeries</button>
  </div>
}

export default Root;