import React from 'react';
import ClassNames from 'classnames';
import Popup from '../Popup/Popup';
import './GamePage.scss';

function GamePage({ chooseOption, currentPrize, currentTask, prizes, tasks, popup}) {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="game-page">
      <div className="game-page__task">
        <h2 className="game-page__question">{tasks[currentTask].question}</h2>
        <ul className="game-page__options">
          {tasks[currentTask].options.map((option, index) => (
            <li
              key={index}
              className="game-page__option"
              onClick={() => chooseOption(option, tasks[currentTask].answer)}
            >
              <span className="game-page__option-letter">{letters[index]}</span>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <ul className="game-page__prizes">
          {prizes.map((prize, index) => (
            <li 
              key={index}
              className={ClassNames({
                "game-page__prize": true,
                "game-page__prize--active": index === currentPrize,
                "game-page__prize--unactive": index < currentPrize,
              })}
            >
              {prize}
            </li>
          ))}
      </ul>
      {popup && (
        <Popup 
          prize={prizes[currentPrize - 1]}
        />
      )}
    </div>
  )
}

export default GamePage;