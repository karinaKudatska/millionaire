import React, { useState } from 'react';
import './Game.scss';
import hand from '../images/hand.png'
import tasks from '../api/tasks.json';
import { prizes } from '../api/prizes.json';

function Game() {
  const [gameStatus, setGameStatus] = useState(false);
  const [currentTask, setCurrentTask] = useState(0);

  const chooseOption = (option, answer) => {
    if (currentTask < tasks.length && option === answer) {
      setCurrentTask(currentTask + 1);
    }
  }

  return (
    <div className="game">
      {!gameStatus && (
        <div className="game-start">
          <div className="game-start__left-container">
          <img className="game-start__image" src={hand} alt="hand"></img>
          </div>
          <div className="game-start__right-container">
            <h1 className="game-start__title">Who wants to be a millionaire?</h1>
            <button 
              className="game-start__button" 
              type="button"
              onClick={() => setGameStatus(true)}
            >
              Start
            </button>
          </div>
        </div>
      )}
      
      {gameStatus && (
        <div className="game__page">
          <div className="game__task">
            <h2 className="game__question">{tasks[currentTask].question}</h2>
            <ul className="game__options">
              {tasks[currentTask].options.map(option => (
                <li
                  key={option.id}
                  className="game__option"
                  onClick={() => chooseOption(option, tasks[currentTask].answer)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <ul className="game__prizes">
              {prizes.map(prize => (
                <li className="game__prize">
                  {prize}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Game;