import React, { Component } from "react";

export class ClassClick extends Component {
    clickHandler(){
        console.log("class btn clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click Me</button>
      </div>
    );
  }
}

export default ClassClick;
