import { createContext, useContext } from "react";
 const Counter = createContext()


 export const ContextData=()=>useContext(Counter)

const CounterContext=({children})=>{
  const name = "Dildora"
  return  <Counter.Provider value={name}>{children}</Counter.Provider>
}

export default CounterContext;





// 1.createContext- yaratilish
// 2.provider- umumiy project data dan foydalnish uchun main ni o'rab qo'yish kerak.
// 3.useContext- datani ishlatamiz