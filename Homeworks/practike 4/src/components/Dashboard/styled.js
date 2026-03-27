import styled, { keyframes } from "styled-components";
import Frame from "../../assets/icons/frame.svg?react";
import Logo from "../../assets/icons/Logo.svg?react";
import UserImage from "../../assets/icons/user-image.svg?react";
import Delete from "../../assets/icons/delete.svg?react";
import Edit from "../../assets/icons/edit.svg?react";
import Galochka from "../../assets/icons/galochka.svg?react";


const Icons = styled.div``;
Icons.Frame = styled(Frame)` color:white; `;
Icons.Logo = styled(Logo)` margin-right:auto; `;
Icons.UserImage = styled(UserImage)``;
Icons.Delete = styled(Delete)`
width:16px;
height:16px;
`;
Icons.Edit = styled(Edit)`
`
Icons.Galochka = styled(Galochka)`
`

const Container = styled.header`
  max-width: 1240px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const Blur = styled.div`
  height:100vh;
  position:fixed; 
  left:0; 
  top:0; 
  bottom:0;
 right:0;
  background-color:#0000006a;
  z-index:998;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 72px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 20px;
`;

const SectionH1P = styled.div`
  text-align: left;
  h1 {
   margin: 0;
   font-size: 24px; 
   color:white; 
   span{ color:#6200EE; } }
  p { 
  margin: 5px 0 0 0; 
  color: white; }
`;

const SectionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; 
`;

const Input = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 181px;
  height: 40px;
  border-radius: 4px;
  padding: 10px 24px;
  background-color: #6200EE;
  color: white;
  border: none;
  cursor: pointer;
  &:hover { opacity: 0.9; 
    transform: scale(1.03); 
    box-shadow: 0px 15px 35px rgba(123, 90, 222, 0.16); 
    border-color: #e0e0e0;
  }
`;

const Wrapper = styled.div`
  width:100%;
  height:420px;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 20px;
  margin-top: 12px;
  height: 600px;         
  overflow-y: auto;      
  padding: 10px;         
  @media (max-width: 1024px)
   { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px)
   { grid-template-columns: 1fr; }
`;


const Card = styled.div`
  height: auto;
  border-radius: 12px;
  background-color: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05); 
  transition: all 0.3s; 
  cursor: pointer;
  &:hover {
    transform: scale(1.03); 
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1); 
    border-color: #e0e0e0;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin:0 0 10px 0 ;
`;

const Description = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const Bfooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: black;
  border-top: 1px solid #f0f0f0;
  padding-top: 10px;
  margin-top: auto;
`;

const Pages = styled.div`
  font-size:14px;
  color:#9654F4;
  padding:4px 8px;
  border-radius: 12px;
  background-color:#EFE6FD;
  font-weight: bold;
`;
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const Loading = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color:rgb(215, 208, 226); 
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite; 
`;
const TitleWrap = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:25px;
  `

const DeleteWrap = styled.div`
 display: flex;
 align-items:center;
 gap:5px;
`
const DeleteButton = styled.button`
 width:32px;
 height:32px;
 background-color:#FF4D4F;
 border:2px solid #FF4D4F;
 border-radius:8px;
 display:flex;
 align-items:center;
 justify-content:center;
 cursor:pointer;
`

const EdtButton = styled.div`
 width:32px;
 height:32px;
 background-color:#6200EE;
 border:2px solid #6200EE;
 border-radius:8px;
 display:flex;
 align-items:center;
 justify-content:center;
 cursor:pointer;
`

const Select = styled.select`
  width: 220px;
  height: 38px;
  padding: 0 35px 0 10px; /* o‘ng tomonga joy qoldiramiz */
  background-color: white;
  border: 1px solid #cccccc; 
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M5 7l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  &:hover {
    border-color: #b3b3b3;
  }
  &:focus {
    border-color: #2684ff;
    box-shadow: 0 0 0 1px #2684ff;
  }
`;


const Lorem = styled.div`
  background-color: #73d13d; 
  width: 320px;
  position: fixed; 
  bottom: 40px;
  right: 40px;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: flex-start; 
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #52c41a;
`;

const LoremIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  }
`;

const LoremText = styled.div`
  color: white;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.9;
  }
`;



export {
  Icons, Header, Content, Section, SectionDiv, Wrapper, Input, Button,
  SectionH1P, Card, BooksGrid, Title, Description, Bfooter, Pages,
  Container, Blur, Loading, LoadingWrapper, DeleteWrap, DeleteButton, TitleWrap, EdtButton, Lorem, LoremText, Select, LoremIcon
};
