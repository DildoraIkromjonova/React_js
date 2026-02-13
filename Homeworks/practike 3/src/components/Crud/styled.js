import styled from "styled-components";

 export const Container = styled.div`
  padding: 30px;
  font-family: sans-serif;

`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
    background-color:#F9F0FF;
    padding:40px 45px;
   border-top-left-radius: 10px;
border-top-right-radius: 10px;

`;

 export const AddBtn = styled.button`
  background: #7c3aed;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

 export const FormWrapper = styled.div`
  background:#F9F0FF;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
`;

 export const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  outline:none;
`;

 export const Select = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ddd;
  opacity:none;
`;

 export const ButtonGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

 export const SaveBtn = styled.button`
  background: #16a34a;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
`;

 export const CancelBtn = styled.button`
  background: #ddd;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
`;



 export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
background:white;
  th, td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  }
  th {
    background:white;
    text-align: left;
  }
`;


 export const Actions = styled.td`
  display: flex;
  gap: 10px;
`;

  export const IconBtn = styled.button`
  border: none;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 6px;
  background-color: ${({ $edit }) =>
    $edit ? "#3b82f6" : "#ef4444"};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;


export default {
  Container,
  Header,
  AddBtn,
  FormWrapper,
  Input,
  Select,
  ButtonGroup,
  SaveBtn,
  CancelBtn,
  Table,
  IconBtn,
};
