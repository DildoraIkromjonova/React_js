import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  const [checkbox, setCheckbox] = useState([]);


  const counter = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else if (type === "minus") {
      setCount(count - 1);
    } else {
      console.log("siz xato type yuborgansiz...");
    }
  };


  const changeAction = ({ target: { value } }) => {
    setValue(value);
  };


  const SelectChange = (eventElement) => {
    setSelect(eventElement.target.value);
  };

  const CheckboxChange = (eventElement) => {
    const val = eventElement.target.value;

    if (checkbox.includes(val)) {
      setCheckbox(checkbox.filter((item) => item !== val));
    } else {
      setCheckbox([...checkbox, val]);
    }
  }
  return (
    <div style={{padding:"10px"}}>
      <h1 style={{color: "red"}}>Home Component {count} {value} {select} {checkbox}</h1>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <button onClick={() => counter("plus")}>Click +</button>
      <button onClick={() => counter("minus")}>Click -</button>
   
      <input
        type="text"
        onChange={changeAction}
        style={{ padding: "5px,10px" }}
      />
      
    
      <select value={select} onChange={SelectChange}>
        <option value="">Tilni tanlang</option>
        <option value="O'zbek">O'zbek</option>
        <option value="Ingliz">Ingliz</option>
        <option value="Rus">Rus</option>
      </select>

      <label>
        <input
          onChange={CheckboxChange}
          value="Html"
          type="checkbox"
          style={{ padding: "5px ,5px" }}
        />
        HTML
      </label>

      <label>
        <input
          onChange={CheckboxChange}
          value="CSS"
          type="checkbox"
          style={{ padding: "5px ,5px" }}
        />
        CSS
      </label>

      <label>
        <input
          onChange={CheckboxChange}
          value="JS"
          type="checkbox"
          style={{ padding: "5px ,5px" }}
        />
        JS
      </label>

      <label>
        <input
          onChange={CheckboxChange}
          value="React"
          type="checkbox"
          style={{ padding: "5px ,5px"}}
        />
        React
      </label>
    </div>
  )
}

export default Home;
