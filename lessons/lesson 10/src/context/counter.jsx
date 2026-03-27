import { createContext, useContext, useReducer } from "react";
import { InitialState, reducer } from "./reducer";
const Counter = createContext()


export const ContextData = () => useContext(Counter)

const CounterContext = ({ children }) => {


  const data = useReducer(reducer,InitialState )
  return <Counter.Provider value={data}>{children}</Counter.Provider>
}

export default CounterContext;





// 1.createContext- yaratilish
// 2.provider- umumiy project data dan foydalnish uchun main ni o'rab qo'yish kerak.
// 3.useContext- datani ishlatamiz