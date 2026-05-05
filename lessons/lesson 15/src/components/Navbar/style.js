import styled from "styled-components";
import { NavLink } from "react-router-dom";

const List = styled.ul`
height:60px;
width:100%;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
gap:50px;
list-style-type:none;
.active{
color:red;
}
`

const Item = styled(NavLink)`
font-size:25px;
color:white;
cursor:pointor;
text-decoration:none;
`

export {List, Item};