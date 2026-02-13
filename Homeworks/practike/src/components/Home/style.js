import styled from "styled-components";
 const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  border: 3px solid red;
  margin: 0 auto;
  padding: 0 10px;
  background-color: blanchedalmond;
`;
 const Title = styled.h1`
  text-align: center;
  font-size: 46px;
  padding: 10px 0;
`;
 const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  button {
    padding: 8px 10px;
    cursor: pointer;
    font-size: 18px;
    border: 2px solid grey;
    border-radius: 7px;
    white-space: nowrap;
  }
`;
 const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  label {
    font-size: 20px;
  }
  input {
    padding: 10px 15px;
    font-size: 16px;
    color: grey;
    border-radius: 7px;
    border: 2px solid grey;
  }
`;
 const Table = styled.table`
  margin: 20px 0;
  width: 100%;
  font-size: 22px;
  text-align: center;
  border-collapse: collapse;
  thead {
    background-color: rgb(74, 132, 232);
    color: white;
  }
  th, td {
    padding: 5px 0;
  }
 td {
    font-size: 20px;
  }
  tbody tr:nth-child(2n) {
    background-color: rgb(74, 132, 232);
  }
`;
 const Actions = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
 const EditBtn = styled.button`
  color: green;
  background-color: lightgreen;
  border: 2px solid green;
  border-radius: 4px;
  cursor: pointer;
  padding:5px 10px;
  &:active {
    background-color: rgb(81, 226, 149);
  }
`;
 const DeleteBtn = styled.button`
  color: red;
  background-color: pink;
  border:2px solid red;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  &:active {
    background-color: rgb(249, 166, 180);
  }
`;
 const SaveCancel = styled.div`
  button:first-child {
    color: blue;
    background-color: lightblue;
    border: 1px solid blue;
  }
  button:last-child {
    color: grey;
    background-color: white;
    border: 1px solid grey;
    margin-left: 5px;
  }
`;
export{ 
 Container,
  Title,
  Form,
  Item,
  Table,
  Actions,
  EditBtn,
  DeleteBtn,
  SaveCancel,
}