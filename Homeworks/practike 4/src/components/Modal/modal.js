import styled from "styled-components";

import plus from "../../assets/icons/plus.svg?react"


const Icon = styled.div`
`
Icon.plus = styled(plus)`
`
const ModalContainer = styled.div`
width:470px;
height:590px;
top:126px;
left:35%;
gap:10px;
border-radius:12px;
background-color:white;
position:absolute;
display:flex;
flex-direction:column;
padding:20px 40px; 
z-index:999;
`;

const ModalTop = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
`;

const Xcancelbtn = styled.button`
width: 24px;
height: 24px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
border: none;
outline: none;
cursor: pointer;
`

const Form = styled.div`
width:100%;  
display:flex;
flex-direction:column;
gap:10px;
`;

const Input = styled.input`
height:50px;
padding:8px;
border-radius:6px;
border:1px solid #ccc;
 font-size: 14px;
outline:none;
`;

const Label = styled.label`
font-size:18px;
font-weight:500;
`;

const ButtonGroup = styled.div`
display:flex;
gap:12px;
margin-top:20px;
`;

const CloseBtn = styled.button`
height:40px;
border-radius:5px;
border:1px solid #6200EE;
background:white;
color:#6200EE;
cursor:pointer;
flex:1;
`;

const SubmitBtn = styled.button`
height:40px;
border-radius:5px;
border:none;
background:#6200EE;
color:white;
cursor:pointer;
flex:1;
`;
export { ModalContainer, ModalTop, Icon, Xcancelbtn, Form, Input, Label, SubmitBtn, ButtonGroup, CloseBtn };

