import { useReducer } from "react";

const Reducer = ()=>{

  const callback = (state,{type,payload})=>{
    switch(type){
     case"-":
     return state - payload
     case "+":
       return state + payload
       case"-5":
       return state - payload
       case "+5":
         return state + payload
       default: 
       return  state;
    }
   }

  const [state,dispatch]=useReducer(callback,0)
  return (
    <div style={{flex:1}}>
        <h1>Reducer Page {state}</h1>
        <br />
        <hr />
        <br />


        <button onClick={()=>dispatch({type:"-", payload:1})}>Minus-</button>
        <button onClick={()=>dispatch({type:"+", payload:1})}>Plus+</button>
        <button onClick={()=>dispatch({type:"-5", payload:5})}>Plus-5</button>
        <button onClick={()=>dispatch({type:"+5", payload:5})}>Plus+5</button>
    </div>
  )
}

export default Reducer;