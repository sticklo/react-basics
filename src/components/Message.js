import React, { Component } from "react";


class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: "welcome visitor"
        }
    }

    changeMessage(){
        this.setState({
            message: "tanks  d sub "
        })
         
    }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
