import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

   increase(){
    //    this.setState({
    //        count: this.state.count + 1 
    //    }, () => {console.log("callback value", this.state.count)})

          this.setState(prevState => ({
              count: prevState.count + 1
          }))

       console.log(this.state.count)
   }

    increamentFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

  render() {
    return (
      <div>
        <p>Count -{this.state.count}</p>
        <button onClick={() => this.increamentFive()}>increament</button>
      </div>
    );
  }
}

export default Counter;
