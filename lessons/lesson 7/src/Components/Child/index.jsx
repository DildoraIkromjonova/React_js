import React from "react";
class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.count,"CHILD")
    this.state = {
      count: props.count,
    }
    console.log("bu constructor()");
  }
  componentDidMount() {
    console.log("bu componentDidMount()");
  }

  static getDerivedStateFromProps(nextState , prevProps){
    console.log(nextState.count,prevProps.count, "child")
    if(nextState.count !== prevProps.count){
      return {count:nextState.count}
    }
    return "";
  }
  render() {
    console.log("bu render()")

    return <h1>Child Component - {this.state.count}</h1>
  }
}

export default Child;