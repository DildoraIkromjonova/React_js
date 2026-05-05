import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import { Switch, Route , useHistory} from 'react-router-dom'
import Eror from "../components/404Notfound";

const Root = () => {
  const history = useHistory()
  console.log(history)
  return <div>
    <Navbar />
    <button onClick={()=>history.goBack()}>GoBack</button>
    <button onClick={()=>history.goForward()}>GoForwrad</button>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home}/>
      <Route path="*">
        <Eror />
      </Route>
      {/* <Home/>
    <About/>
    <Contact/>  */}
    </Switch>
  </div>
}

export default Root;