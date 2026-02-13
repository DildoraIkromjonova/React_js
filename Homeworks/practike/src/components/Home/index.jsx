import { useState } from "react";
import {
  Container,
  Title,
  Form,
  Item,
  Table,
  Actions,
  EditBtn,
  DeleteBtn,
  SaveCancel
} from "./style";

const Home = () => {
  let storgeData = localStorage.getItem("data");
  const [data, setData] = useState(JSON.parse(storgeData) || []);
  const [inputVaule, setInpValue] = useState({});
  const [editvalue, setEditValue] = useState({});

  const setInputValue = ({ target: { value, id } }) => {
    setInpValue({ ...inputVaule, id: crypto.randomUUID(), [id]: value });
  };

  const editSave = ({ target: { value, id } }) => {
    setEditValue({ ...editvalue, [id]: value });
  };

  const setStudent = (e) => {
    e.preventDefault();
    if (inputVaule?.name && inputVaule?.last && inputVaule?.age && inputVaule?.status) {
      const newData = [...data, inputVaule];
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
      setInpValue({});
    } else alert("Iltimos ma'lumot to'liq to'ldiring");
  };

  const delStudent = (id) => {
    if (confirm("Haqiqatan ham o‘chirishni xohlaysizmi?")) {
      const newArr = data.filter((obj) => obj.id !== id);
      setData(newArr);
      localStorage.setItem("data", JSON.stringify(newArr));
    }
  };

  const editStudent = (id) => {
    const newArr = data.map((obj) =>
      obj.id === id ? { ...obj, edit: true } : { ...obj, edit: false }
    );
    setEditValue(data.find((o) => o.id === id));
    setData(newArr);
  };

  const cancelStudent = (id) => {
    setData(data.map((obj) => (obj.id === id ? { ...obj, edit: false } : obj)));
  };

  const saveStudent = (id) => {
    const newArr = data.map((obj) =>
      obj.id === id ? { ...editvalue, edit: false } : obj
    );
    setData(newArr);
    localStorage.setItem("data", JSON.stringify(newArr));
  };

  return (
    <Container>
      <Title>Student list</Title>
      <Form>
        <Item>
          <label>First name:</label>
          <input id="name" onChange={setInputValue} value={inputVaule.name || ""} />
        </Item>
        <Item>
          <label>Last name:</label>
          <input id="last" onChange={setInputValue} value={inputVaule.last || ""} />
        </Item>
        <Item>
          <label>Age:</label>
          <input id="age" onChange={setInputValue} value={inputVaule.age || ""} />
        </Item>
        <Item>
          <label>Status:</label>
          <input id="status" onChange={setInputValue} value={inputVaule.status || ""} />
        </Item>
        <button onClick={setStudent}>Add Student</button>
      </Form>
      <Table border="1">
        <thead>
          <tr>
            <th>№</th>
            <th>First</th>
            <th>Last</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => (
            <tr key={obj.id}>
              <td>{i + 1}</td>
              <td>{obj.edit ? <input id="name" defaultValue={obj.name} onChange={editSave} /> : obj.name}</td>
              <td>{obj.edit ? <input id="last" defaultValue={obj.last} onChange={editSave} /> : obj.last}</td>
              <td>{obj.edit ? <input id="age" defaultValue={obj.age} onChange={editSave} /> : obj.age}</td>
              <td>{obj.edit ? <input id="status" defaultValue={obj.status} onChange={editSave} /> : obj.status}</td>
              <Actions>
                {obj.edit ? (
                  <SaveCancel>
                    <button onClick={() => saveStudent(obj.id)}>Save</button>
                    <button onClick={() => cancelStudent(obj.id)}>Cancel</button>
                  </SaveCancel>
                ) : (
                  <EditBtn onClick={() => editStudent(obj.id)}>Edit</EditBtn>
                )}
                <DeleteBtn onClick={() => delStudent(obj.id)}>Delete</DeleteBtn>
              </Actions>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
