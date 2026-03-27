import { ModalData } from '../../context/Modal/index.jsx';
import { StudentListData } from '../../context/Students/index.jsx';
import Modal from '../Modal/index.jsx';
import {
  Icons, Header, Content, Section, SectionH1P, SectionDiv,
  Input, Button, BooksGrid, Card, Title, Wrapper, Bfooter,
  Pages, Container, Blur, Loading, LoadingWrapper, DeleteWrap,
  DeleteButton, TitleWrap,
  EdtButton,
  Lorem,
  LoremText,
  Select,
  LoremIcon
} from './styled.js';

import { useEffect, useState } from 'react';

const Dashboard = () => {
  const api = import.meta.env.VITE_API;
  const [{ loading, list }, dispatch] = StudentListData();
  const [{ type }, dispatchModal] = ModalData();
  const [search, Setsearch] = useState('');
  const [select, setSelect] = useState("title")
  const [show,SetShow]=useState(false)

  const getListData = async () => {
    dispatch({ type: "start" });
    try {
      let res = await fetch(`${api}/library`);
      res = await res.json();
      dispatch({ type: "success", payload: res });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error" });
    }
  };

  useEffect(() => {
    getListData();
  }, []);

  const Filter = list?.filter((obj) =>
    obj[select]?.toLowerCase().includes(search.toLowerCase())
  );

  const Deletebtn = async (id) => {
    const confirmDelete = confirm("Haqiqatdan ham ushbu kitobni o'chirmoqchimisiz?");
    if (confirmDelete) {
      try {
        await fetch(`${api}/library/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => {
          if (res.status >= 200 && res.status < 300) {
            getListData();
            SetShow(true);
            setTimeout(() => {
              SetShow(false);
            }, 2000);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const EditBtn = (obj) => {
    console.log(obj);
    dispatchModal({ type: "open", payload: obj })
  }

  return (
    <div style={{ position: "relative" }}>
      <Container>
        <Header>
          <Content>
            <Icons.Logo />
            <h1 style={{ color: "white" }}>
              <span style={{ color: "#6200EE" }}>Books</span> List
            </h1>
          </Content>
          <Content>
            <Icons.Frame />
            <Icons.UserImage />
          </Content>
        </Header>
        <Section>
          <SectionH1P>
            <h1>
              You've got <span> {list?.length || 0} books</span>
            </h1>
            <p>Your task today</p>
          </SectionH1P>
          <SectionDiv>
            <Input
              value={search}
              onChange={(e) => Setsearch(e.target.value)}
              type='text'
              placeholder='Enter book name'
            />
            <Select onChange={({ target: { value } }) => setSelect(value)}>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="description">Description</option>
              <option value="pages">Pages</option>
            </Select>
            <Button onClick={() => dispatchModal({ type: "open" })}>+ Create a book</Button>
          </SectionDiv>
        </Section>
        <Wrapper>
          {loading ? (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : (
            <BooksGrid>
              {Filter?.map((obj) => (
                <Card key={obj.id}>
                  <TitleWrap>
                    <Title>{obj.title}</Title>
                    <DeleteWrap>
                      <DeleteButton onClick={() => Deletebtn(obj.id)}>
                        <Icons.Delete />
                      </DeleteButton>
                      <EdtButton onClick={() => EditBtn(obj)}>
                        <Icons.Edit />
                      </EdtButton>
                    </DeleteWrap>
                  </TitleWrap>
                  <p style={{ textAlign: "justify" }}>{obj.description}</p>
                  <Bfooter>
                    <h4 style={{ color: "#333333" }}>
                      {obj.author} :{obj.published?.toString().slice(0, 4)}-year
                    </h4>
                    <Pages>{obj.pages} pages </Pages>
                  </Bfooter>
                </Card>
              ))}
              {Filter?.length === 0 && !loading && (
                <p style={{ color: "white", textAlign: "center", width: "100%" }}>
                </p>
              )}
            </BooksGrid>
          )}
        </Wrapper>
        {show && (
  <Lorem>
    <LoremIcon>
      <Icons.Galochka />
    </LoremIcon>
    <LoremText>
      <p>The book was successfully deleted.</p>
    </LoremText>
  </Lorem>
)}

        {type && <Modal />}
      </Container>

      {type && <Blur />}
    </div>
  );
};

export default Dashboard;
