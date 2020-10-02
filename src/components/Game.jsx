import React, { useState } from 'react';
import ClassNames from 'classnames';
import './Game.scss';
import hand from '../images/hand.png'
import tasks from '../api/tasks.json';
import { prizes } from '../api/prizes.json';

function Game() {
  const [gameStart, setGameStart] = useState(true);
  const [gameProcess, setGameProcess] = useState(false);
  const [currentTask, setCurrentTask] = useState(0);
  const [currentPrize, setCurrentPrize] = useState(prizes.length-1);
  const [gameOver, setGameOver] = useState(false);
  const letters = ["A", "B", "C", "D"];

  const chooseOption = (option, answer) => {
    if (currentTask < tasks.length && option === answer) {
      if (currentTask !== tasks.length - 1) {
        setCurrentTask(currentTask + 1);
        setCurrentPrize(currentPrize - 1);
      } else {
        setCurrentPrize(currentPrize - 1);
        setGameOver(true);
        setGameProcess(false);
        setCurrentTask(0);
      }
    } else {
      setGameOver(true);
      setGameProcess(false);
      setCurrentTask(0);
    }
  }

  return (
    <div className="game">
      {gameStart && (
        <div className="game-start">
          <div className="game-start__left-container">
          <img className="game-start__image" src={hand} alt="hand"></img>
          </div>
          <div className="game-start__right-container">
            <h1 className="game-start__title">Who wants to be a millionaire?</h1>
            <button 
              className="game-start__button" 
              type="button"
              onClick={() => {
                setGameProcess(true);
                setGameStart(false);
              }}
            >
              Start
            </button>
          </div>
        </div>
      )}
      
      {gameProcess && (
        <div className="game__page">
          <div className="game__task">
            <h2 className="game__question">{tasks[currentTask].question}</h2>
            <ul className="game__options">
              {tasks[currentTask].options.map((option, index) => (
                <li
                  className="game__option"
                  onClick={() => chooseOption(option, tasks[currentTask].answer)}
                >
                  <span className="game__option-letter">{letters[index]}</span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <ul className="game__prizes">
              {prizes.map((prize, index) => (
                <li className={ClassNames({
                  "game__prize": true,
                  "game__prize--active": index === currentPrize,
                  "game__prize--unactive": index > currentPrize,
                })}
                >
                  {prize}
                </li>
              ))}
          </ul>
        </div>
      )}

      {gameOver && (
        <div className="game-over">
          <div className="game-over__left-container">
            <img className="game-over__image" src={hand} alt="hand"></img>
          </div>
          <div className="game-over__right-container">
            <h1 className="game-over__title">Total score:</h1>
            <span className="game-over__result">{prizes[currentPrize + 1] || '$0'} earned</span>
            <button 
              className="game-over__button" 
              type="button"
              onClick={() => {
                setGameProcess(true);
                setGameOver(false);
                setCurrentPrize(prizes.length-1)
              }}
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;