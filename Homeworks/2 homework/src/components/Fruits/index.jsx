import { useState } from "react";

// Rasmlarni to‘g‘ri import qilamiz
import watermelon from "../../assets/images/watermelon.png";
import peach from "../../assets/images/peach.png";
import papaya from "../../assets/images/papaya.png";
import orange from "../../assets/images/orange.png";
import mango from "../../assets/images/mango.png";
import lemon from "../../assets/images/lemon.png";
import grape from "../../assets/images/grape.png";
import banana from "../../assets/images/banana.png"; // tuzatildi
import cherry from "../../assets/images/cherry.png";
import avocado from "../../assets/images/avocado.png"; // tuzatildi

function Fruit() {
  const [fruits] = useState([
    { id: 1, title: "Tarvuz", img: watermelon },
    { id: 2, title: "Peach", img: peach },
    { id: 3, title: "Papaya", img: papaya },
    { id: 4, title: "Orange", img: orange },
    { id: 5, title: "Mango", img: mango },
    { id: 6, title: "Lemon", img: lemon },
    { id: 7, title: "Grape", img: grape },
    { id: 8, title: "Banana", img: banana },
    { id: 9, title: "Cherry", img: cherry },
    { id: 10, title: "Avocado", img: avocado },
  ]);

  return (
    <div style={{ backgroundColor: "pink", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", padding: "10px" }}>Fruits</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "15px",
          padding: "20px",
        }}
      >
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={fruit.img}
              alt={fruit.title}
              style={{ width: "80%", borderRadius: "6px" }}
            />
            <p>{fruit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fruit;
