// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerate = () => {
    const getRandomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: getRandomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="timer">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
