 import {NavLink}from "react-router-dom"
import { Header, Item, List } from "./style";
const Navbar =()=>{
  return (
  <Header>
    <List>
      <Item to="/home">Home</Item>
      <Item to="/about">About</Item>
      <Item to="/contact">Contact</Item>
    </List>
  </Header>)
}

export default Navbar;