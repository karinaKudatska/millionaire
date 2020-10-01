import React from 'react';
import './Game.scss';
import hand from '../images/hand.png'

function Game() {

  return (
    <div className="game">
      <img className="game__image" src={hand} alt="hand"></img>
      <div className="game__right-container">
        <h1 className="game__title">Who wants to be a millionaire?</h1>
        <button className="game__start-button" type="button">Start</button>
      </div>
    </div>
  );
}

export default Game;