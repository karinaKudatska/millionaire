import React from 'react';
import './GameOver.scss';
import hand from '../../images/hand.png';

function GameOver({ prizes, currentPrize, tryAgain }) {
  return (
    <div className="game-over">
      <div className="game-over__left-container">

        <img className="game-over__image" src={hand} alt="hand"></img>
      </div>
      <div className="game-over__right-container">
        <h1 className="game-over__title">Total score:</h1>
        <span className="game-over__result">{prizes[currentPrize - 1] || '$0'} earned</span>
        <button 
          className="game-over__button" 
          type="button"
          onClick={tryAgain}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default GameOver;