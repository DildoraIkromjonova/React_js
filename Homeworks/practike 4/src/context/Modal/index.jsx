import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const Modal = createContext()
export const ModalData = () => useContext(Modal)

const ModalContext = ({ children }) => {

  const data = useReducer(reducer, false)

  return <Modal.Provider value={data}>{children}</Modal.Provider>
}

export default ModalContext