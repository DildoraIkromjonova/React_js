import { use, useState } from "react";
import "./style.css";

const Home = () => {
  let storgeData = localStorage.getItem("data")
  const [data, setData] = useState(JSON.parse(storgeData) || [])
  const [inputVaule, setInpValue] = useState({})
  const [editvalue, setEditValue] = useState({})


  const setInputValue = ({ target: { value, id } }) => {
    setInpValue({ ...inputVaule, id: crypto.randomUUID(), [id]: value })
  }

  const editSave = ({ target: { value, id } }) => {
    setEditValue({ ...editvalue, [id]: value })
  }

  const setStudent = (e) => {
    e.preventDefault();
    if (inputVaule?.name && inputVaule?.last && inputVaule?.age && inputVaule?.status) {
      localStorage.setItem("data", JSON.stringify([...data, inputVaule]))
      setData([...data, inputVaule])
      setInpValue({})
    } else alert("Iltimos ma'lumot to'liq to'ldiring")
  }


  const delStudent = (del_ID) => {
    if (confirm("Haqiqatan ham o‘chirishni xohlaysizmi?")) {
      let newArr = data.filter((obj) => obj.id !== del_ID);
      setData(newArr);
      localStorage.setItem("data", JSON.stringify(newArr));
    }
  };
  

  const editStudent = (edit_ID) => {
    let newArr = data.map((obj) => {
      if (obj.id === edit_ID) {
        setEditValue(obj)
        return { ...obj, edit: true }
      }
      return { ...obj, edit: false }
    }
    )
    setData(newArr)
    localStorage.setItem("data", JSON.stringify(newArr))
  }

  const cencelStudent = (cencel_ID) => {
    let newArr = data.map((obj) =>
      obj.id === cencel_ID ? { ...obj, edit: false } : obj)
    setData(newArr)
    localStorage.setItem("data", JSON.stringify(newArr))
  }
  const saveStudent = (save_ID) => {
if(confirm("Saqlashni xoxlaysizmi")){
  let newArr = data.map((obj) =>
    obj.id === save_ID ? { ...editvalue, edit: false } : obj)
  setData(newArr)
  localStorage.setItem("data", JSON.stringify(newArr))
} 
  }

  return (

    <div className="container">
      <h1 className="title">Student list</h1>


      <form>
        <div className="item">
          <label htmlFor="name">First name:</label>
          <input type="text" id="name" placeholder="Enter your first name..." onChange={setInputValue} value={inputVaule.name || ""} />
        </div>
        <div className="item">
          <label htmlFor="name">Last name:</label>
          <input type="text" id="last" placeholder="Enter your last name..."
            onChange={setInputValue}
            value={inputVaule.last || ""}
          />
        </div>
        <div className="item">
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" placeholder="Enter your age..." onChange={setInputValue} value={inputVaule.age || ""} />
        </div>
        <div className="item">
          <label htmlFor="name">Status:</label>
          <input type="text" id="status" placeholder="Enter your status..." onChange={setInputValue} value={inputVaule.status || ""} />
        </div>

        <button onClick={setStudent}>Add Student</button>
      </form>

      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th>№ </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((obj, index) => {
              return (
                <tr key={obj.id}>
                  <td>{index + 1}</td>
                  <td>{obj.edit ? (<input onChange={editSave} type="text" defaultValue={obj.name || ""} id="name" />) : (obj.name)}</td>
                  <td>{obj.edit ? (<input onChange={editSave} type="text" defaultValue={obj.last || ""} id="last" />) : (obj.last)}</td>
                  <td>{obj.edit ? (<input onChange={editSave} type="number" defaultValue={obj.age || ""} id="age" />) : (obj.age)} </td>
                  <td>{obj.edit ? (<input onChange={editSave} type="text" defaultValue={obj.status || ""} id="status" />) : (obj.status)} </td>
                  <td className="actions">
                    {
                      obj.edit ? <div className="saveAndCencel">
                        <button onClick={() => saveStudent(obj.id)}>Save</button>
                        <button onClick={() => cencelStudent(obj.id)}>Cencel</button>
                      </div> : <button className="edit" onClick={() => editStudent(obj.id)} >Edit</button>
                    }
                    <button className="del" onClick={() => delStudent(obj.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default Home;