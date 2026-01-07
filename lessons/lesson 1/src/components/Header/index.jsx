import React from "react";

 export function Header(){
  return (<header style={{ height: "100px", backgroundColor: "black",color:"white", display: "flex",alignItems: "center",justifyContent:"space-around"

  }}>
    <h2>Logo</h2>
    <nav>
      <ul style={{ display:"flex",alignItems:"center",gap:"20px", listStyleType:"none"}}>
        <li>
          <a href="#" style={{ color: "white", textDecoration:"none"}}>Home</a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration:"none"}}>About</a>
        </li>
        <li>
          <a href="#" style={{ color: "white", textDecoration:"none"}}>Contact </a>
        </li>
      </ul>
    </nav>

    <button style={{padding: "6px", cursor:"pointer"}}>Contact us</button>
  </header>
  )
}