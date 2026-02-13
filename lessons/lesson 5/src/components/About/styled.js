import styled, { keyframes } from "styled-components";
const Wrap = styled.div`
   background-color: blanchedalmond;
   border : 2px solid blue;
    display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   gap: 20px;
  `

const Title = styled.h1`
  color: blue;
  &:hover{
  color:red;
  }
  `

const getStyleAction = ({ type }) => {
  switch (type) {
    case "small":
      return {
        padding: '5px',
        backgroundColor: "pink",
        border: '3px solid red',
        color: 'maroon',
        borderRadius: '3px'
      }
    case "medium":
      return {
        padding: '10px',
        backgroundColor: 'lightgreen',
        border: '3px solid green',
        color: 'rgb(0, 128, 6)',
        bordeRadius: '3px',
      }
    case "large":
      return {
        padding: ' 15px 25px',
        backgroundColor: 'lightblue',
        border: ' 3px solid blue',
        color: ' rgb(9, 20, 49)',
        bordeRadius: '3px',
      }
  }
}
const Button = styled.button`
${getStyleAction}


&:hover{
  background-color:${({ type }) => type == "large" && "rgb(107, 177, 200)"};

  &:focus{
   border:${({ type }) => type == "large" && "2px solid red"};
  }
   &:after{
   border:${({ type }) => type == "large" && "2px solid blue"};
  background-color:${({ type }) => type == "large" && "rgb(24, 145, 185)"};
    
   }
}
`

const Input = styled.input`
width:200px;
padding:5px 15px;
border:2px solid lightblue;
border-radius:5px;
outline:none;
`

const MediumInput = styled(Input)`
width:300px;
border-color:lightgreen;
 padding:10px 20px
`
const LargeInput = styled(MediumInput)`
 width:400px;
 padding:15px 45px;
`

const fn = keyframes`
 from{
  width:100px;
 }
  to{
 width:500px;
  }
`

const Box = styled.div`
width:100px;
height:200px;
border: 3px solid red;
background-color:maroon

&:hover{
animation-name:${fn};
 animation-timing-function:linear;
 animation-duration:3s
}
`

export { Wrap, Title, Button, Input, MediumInput, LargeInput, Box }