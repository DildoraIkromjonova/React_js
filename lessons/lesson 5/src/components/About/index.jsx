import { Box, Button,  Input,  LargeInput,  MediumInput,  Wrap } from "./styled";
import { Title } from "./styled";

const About = ()=><Wrap>
  <Title>About component-Styled Components</Title>
  <Button type="small">Small</Button>
  <Button type="medium">Medium</Button>
  <Button type="large">Large</Button>
  <Input  placeholder="Enter Your Name..."/>
  <MediumInput placeholder="Enter Your Email..."/>
  <LargeInput type="password"  name="password" placeholder="Enter your Password..."/>
  <Box/>

</Wrap>

export default About;