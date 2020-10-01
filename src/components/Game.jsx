import React from 'react';
import './Game.scss';
import hand from '../images/hand.png'

function Game() {

  return (
    <div className="game">
      <div className="game-start">
        <div className="game-start__left-container">
        <img className="game-start__image" src={hand} alt="hand"></img>
        </div>
        <div className="game-start__right-container">
          <h1 className="game-start__title">Who wants to be a millionaire?</h1>
          <button className="game-start__button" type="button">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Game;