import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Login from "../components/Login"
import { Route, Routes, Navigate } from "react-router-dom"


const Root = () => {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to={"/home"}/>} />
      <Route path="*" element={<h1>404 Not found</h1>}/>
    </Routes>
  </div>
}

export default Root;