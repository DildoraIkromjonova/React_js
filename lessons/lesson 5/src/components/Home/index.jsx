import "./style.css";
const Home = ()=>{
  return <div  className="wrap">
 <h1>Home component- Extrenal Css</h1>
 <button className="Small">Small</button>
 <button className="Medium">Medium</button>
 <button className="Large">Large</button>
 <input className="Input" placeholder="Enter your Name..." />
 <input className="input" placeholder="Enter your Email..." />
 <input type="password" className="inpute" name="password" placeholder="Enter your Password..." />

  </div>

}

export default Home;