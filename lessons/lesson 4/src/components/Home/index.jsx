import { useState } from "react"

function Home() {
  const [data, setData] = useState([
    { id: crypto.randomUUID(), name: "Eshmat", surname: "Toshmatov" },
  ]);

  const [obj, setObj] = useState({});

  const getInputValue = ({ target: { value, name } }) => {
    setObj({ ...obj, id: crypto.randomUUID(), [name]: value });
  };

  const addStudentButton = (e) => {
    e.preventDefault();
    if (!obj.name || !obj.surname) return;
    setData([...data, obj]);
    setObj({});
  };

  const deleteStudent = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2 className="title">Student List</h2>

      <form className="form">
        <input
          name="name"
          value={obj?.name ?? ""}
          onChange={getInputValue}
          placeholder="Enter name..."
        />
        <input
          name="surname"
          value={obj?.surname ?? ""}
          onChange={getInputValue}
          placeholder="Enter surname..."
        />
        <button className="add-btn" onClick={addStudentButton}>
          Add Student
        </button>
      </form>

      <ul className="list">
        {data.map(({ id, name, surname }) => (
          <li className="list-item" key={id}>
            <span className="student-info">
              <b>{name}</b> {surname}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteStudent(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
