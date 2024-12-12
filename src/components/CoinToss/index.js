import './index.css'
import {Component} from 'react'

const HEADS_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImg: HEADS_IMG,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEADS_IMG
      latestHeadsCount +=  1
    } else {
      tossImage = TAILS_IMG
      latestTailsCount  += 1
    }
    this.setState({
      tossResultImg: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" />
          <button onClick={this.onClickTossCoin} >
            Toss Coin
          </button>
        </div>
        <div>
          <p>Total: {totalCount}</p>
          <p>Heads: {headsCount}</p>
          <p>Tails: {tailsCount}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
