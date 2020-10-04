import React from 'react';
import './GameStart.scss';
import hand from '../../images/hand.png';

function GameStart({ setGameStart, setGamePage }) {

  return (
    <div className="game-start">
      <div className="game-start__left-container">
        <img className="game-start__image" src={hand} alt="hand" />
      </div>
      <div className="game-start__right-container">
        <h1 className="game-start__title">Who wants to be a millionaire?</h1>
        <button 
          className="game-start__button" 
          type="button"
          onClick={() => {
          setGamePage(true);
          setGameStart(false);
        }}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default GameStart;