import styled from "styled-components";
import { NavLink } from "react-router-dom"
const Header = styled.div`
height:80px;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
`;

const List = styled.ul`
list-style:none;
color:white;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
`;

const activeStyle= {color:"red", textDecoration:"underline"}
const Item = styled(NavLink).attrs(() => {
  return { activeStyle}
})`
color:white;
text-decoration:none;
&:hover{
 color:lightblue;
}
`;

export { Header, List, Item };
