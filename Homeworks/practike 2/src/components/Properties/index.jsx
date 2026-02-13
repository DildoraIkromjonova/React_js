import React, { useState } from "react";
import { 
  Header, Container, Wrap, List, Item, Link, Button, 
  Wrapper, Cards, Card, Img, CardContent, CardTitle, 
  CardDesc, CardBoxs, Box, Icons, CardFooter, 
  CardFooterBox, CardBtn, Form, Input, Select, Option,
  SectionHeader, TitleBox 
} from "./style";
import { data } from "../../mock/data";

const Properties = () => {
  const [arr,setArr] = useState(data);
  const[select,setSelect]=useState("title");
  const filterAction = ({ target: { value } }) => {
    const newArr = data.filter((obj) => {
      if (select === "price") return obj[select].newPrice.includes(value)
      if (select === "title" || select === "description") return obj[select].includes(value);

      if (select === "beds" || select === "baths" || select === "garage" || select === "area") {
        return String(obj.items[select]).includes(value);
      }
      return true;
    });
    setArr(newArr);
  };
const selectAction=({target:{value}})=>{
setSelect(value)
}
   
  return (
    <>
      <Header>
        <Container>
          <Wrap>
            <h1>Houzing</h1>
            <List>
              <Item><Link href="#">Home</Link></Item>
              <Item><Link href="#">Properties</Link></Item>
              <Item><Link href="#">Contact</Link></Item>
            </List>
            <Button>Login</Button>
          </Wrap>
        </Container>
      </Header>

      <Container>
        <SectionHeader>
          <TitleBox>
            <h1 style={{margin:"0 0 5px 0"}}>Properties</h1>
            <p style={{margin: 0, color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </TitleBox>
          
          <Form>
            <Input type="search" placeholder="Search..." onChange={filterAction}/>
            <Select onChange={selectAction}>
              <Option value="title">Title</Option>
              <Option value="description">Description</Option>
              <Option value="price">Price</Option>
              <Option value="beds">Beds</Option>
              <Option value="baths">Baths</Option>
              <Option value="garage">Garage</Option>
              <Option value="area">Area</Option>
            </Select>
          </Form>
        </SectionHeader>
        <Wrapper>
          <Cards>
            {arr.map((obj) => (
              <Card key={obj.id}>
                <CardBtn type="primary">Featured</CardBtn>
                <CardBtn type="dark">For Sale</CardBtn>
                <Img src={obj.img} alt="house" />
                <CardContent>
                  <CardTitle>{obj.title}</CardTitle>
                  <CardDesc>{obj.description}</CardDesc>
                  <CardBoxs>
                    <Box><Icons.Beds /> {obj.items.beds}</Box>
                    <Box><Icons.Baths /> {obj.items.baths}</Box>
                    <Box><Icons.Car /> {obj.items.garage} </Box>
                    <Box><Icons.Ruler /> {obj.items.area} </Box>
                  </CardBoxs>
                </CardContent>
                
                <CardFooter>
                  <CardFooterBox type="left">
                    <del style={{color:"#9e9e9e", fontSize:"12px"}}>{obj.price.oldPrice}</del>
                    <b style={{fontSize:"16px"}}>{obj.price.newPrice}</b>
                  </CardFooterBox>
                  <CardFooterBox type="right">
                    <Icons.Arrow style={{cursor: 'pointer'}} />
                    <Icons.Like style={{cursor: 'pointer'}} />
                  </CardFooterBox>
                </CardFooter>
              </Card>
            ))}
          </Cards>
        </Wrapper>
      </Container>
    </>
  );
};

export default Properties;