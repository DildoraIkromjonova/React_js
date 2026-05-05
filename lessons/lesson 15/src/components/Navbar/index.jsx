import { Item, List } from "./style";


const Navbar = ()=>{
  return <div>
    <List>
      <Item to="/home">Home</Item>
      <Item to="/about">About</Item>
      <Item to="/contact">Contact</Item>
      <Item to="/login">Login</Item>
    </List>
  </div>
}

export default Navbar;