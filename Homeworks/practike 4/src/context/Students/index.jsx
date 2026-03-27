import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const StudentList = createContext();

export const StudentListData = () => useContext(StudentList)

const StudentListContext = ({ children }) => {
  const data = useReducer(reducer, []);
  return <StudentList.Provider value={data}>{children}</StudentList.Provider>
}
export default StudentListContext;

