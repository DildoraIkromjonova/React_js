import { useState } from "react"
import { ModalData } from "../../context/Modal"
import { ModalContainer, ModalTop, Xcancelbtn, Icon, Form, Label, Input, SubmitBtn, ButtonGroup, CloseBtn } from "./modal"
import { StudentListData } from "../../context/Students";

const Modal = () => {
  const ModalInput = {
    title: "",
    author: "",
    cover: "",
    published: "",
    pages: "",
  }
  const api = import.meta.env.VITE_API;
  const [{ loading, list }, dispatch] = StudentListData();
  const [{ type, payload }, dispatchModal] = ModalData()
  const [data, SetData] = useState(payload?.id ? payload : ModalInput)

  const getListData = async () => {
    dispatch({ type: "start" });
    try {
      let res = await fetch(`${api}/library`);
      res = await res.json();
      dispatch({ type: "success", payload: res })
    } catch (error) {
      dispatch({ type: "error" })
    }
  }

  const Postdata = () => {
    fetch(payload?.id ? `${api}/library/${payload.id}` : `${api}/library`, {
      method: payload?.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatchModal({ type: "close" })
          getListData()
        }
      })
      .catch((error) => {
        dispatchModal({ type: "open" })
        console.log(error)
      })
  }

  const changeInput = ({ target: { name, value } }) => {
    return SetData(obj => ({ ...obj, [name]: value }))
  }

  return (
    <ModalContainer>
      <ModalTop>
        <h2>Create a book</h2>
        <Xcancelbtn onClick={() => dispatchModal({ type: "close" })}>
          <Icon.plus />
        </Xcancelbtn>
      </ModalTop>
      <Form>
        <Label>Title</Label>
        <Input defaultValue={payload?.title || ""} type="text" name="title" placeholder="Enter your title" onChange={changeInput} />
        <Label>Author</Label>
        <Input defaultValue={payload?.author || ""} type="text" name="author" placeholder="Enter your author" onChange={changeInput} />
        <Label>Cover</Label>
        <Input defaultValue={payload?.description || ""} type="text" name="description" placeholder="Enter your cover " onChange={changeInput} />
        <Label>Published</Label>
        <Input defaultValue={payload?.published || ""} type="text" name="published" placeholder="Enter your published" onChange={changeInput} />
        <Label>Pages</Label>
        <Input defaultValue={payload?.pages || ""} type="text" name="pages" placeholder="Enter your pages" onChange={changeInput} />
        <ButtonGroup>
          <CloseBtn onClick={() => dispatchModal({ type: "close" })}>Close</CloseBtn>
          <SubmitBtn onClick={Postdata}>{payload ? "Edit" : "Submit"}</SubmitBtn>
        </ButtonGroup>
      </Form>
    </ModalContainer>
  )
}

export default Modal;