// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count >= 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.count}`)
        return {count: prevState.count + 1}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="counting">{count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <div className="buttons">
          <button type="button" className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
