import React, { Component } from "react";
import Child from "../Child";
class Parent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  render() {
    return <>
    <button onClick={()=>this.setState({count:this.state.count-=1})}>Click-</button>
    <button onClick={()=>this.setState({count:this.state.count+=1})}>Click+</button>
    <br />
    <hr />
    <br />
     <Child count={this.state.count} />;
    </>
  }
}

export default Parent;

