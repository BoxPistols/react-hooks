import React, { Component } from "react"
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  inc = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
      return (
        <>
          <h1>count</h1>
          <p>{this.state.count}</p>
          <button onClick={this.inc}>Add</button>
        </>
      ) }
}

export default Counter