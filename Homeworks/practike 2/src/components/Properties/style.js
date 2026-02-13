import styled from "styled-components";
import Beds from "../../assets/icons/beds.svg?react";
import Baths from "../../assets/icons/baths.svg?react";
import Car from "../../assets/icons/car.svg?react";
import Ruler from "../../assets/icons/ruler.svg?react";
import Arrow from "../../assets/icons/arrow.svg?react";
import Like from "../../assets/icons/like.svg?react";

const Icons = styled.div``;
Icons.Beds = styled(Beds)`width:20px;`;
Icons.Baths = styled(Baths)`width:20px;`;
Icons.Car = styled(Car)`width:20px;`;
Icons.Ruler = styled(Ruler)`width:20px;`;
Icons.Arrow = styled(Arrow)`width:18px; cursor:pointer;`;
Icons.Like = styled(Like)`width:20px; cursor:pointer;`;

const Header = styled.header`
  height: 80px;
  background-color:rgb(226, 230, 233);
  color: white;
`;

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const Wrap = styled.div`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  list-style-type: none;
`;

const Item = styled.li``;
const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover { color: greenyellow; cursor: pointer; }
`;

const Button = styled.button`
  padding: 12px 30px;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  background-color: transparent;
  &:hover { cursor: pointer; background-color: rgba(255,255,255,0.1); }
`;

const Wrapper = styled.section`
  padding: 40px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  outline: none;
  border-color: #0061df; 
  background-color:lightblue;
`;

const Select = styled.select`
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgb(98, 200, 228);
 background-color:lightblue;
   outline: none;
`;

const Option = styled.option`
color:black;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
`;

const Card = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  position: relative;
  transition: 0.3s;
  &:hover { box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
  cursor:pointer;
  }

`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #0d263b;
`;

const CardDesc = styled.p`
  color: #696969;
  font-size: 14px;
`;

const CardBoxs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  color: #696969;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
`;

const CardFooterBox = styled.div`
  display: flex;
  flex-direction: ${props => props.type === "left" ? "column" : "row"};
  align-items: ${props => props.type === "left" ? "start" : "center"};
  gap: ${props => props.type === "left" ? "2px" : "15px"};
`;

const CardBtn = styled.button`
  text-transform: uppercase;
  color: white;
  font-size: 10px;
  padding: 5px 15px;
  border-radius: 3px;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 15px;
  background-color: ${props => props.type === "primary" ? "#0061df" : "#0d263b"};
  left: ${props => props.type === "primary" ? "15px" : "auto"};
  right: ${props => props.type === "dark" ? "15px" : "auto"};
`;

export { Header, Container, Wrap, List, Item, Link, Button, Wrapper, SectionHeader, TitleBox, Cards, Card, Img, CardContent, CardTitle, CardDesc, CardBoxs, Box, Icons, CardFooter, CardFooterBox, CardBtn, Form, Input, Select, Option };
