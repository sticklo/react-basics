import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
      const {name, heroName} = this.props
    return (
      <div>Welcome {name} aka {heroName}</div>
    )
  }
}
export default Welcome