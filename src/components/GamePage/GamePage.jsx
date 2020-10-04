/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Popup from '../Popup/Popup';
import Burger from '../BurgerButton/BurgerButton';
import './GamePage.scss';

function GamePage({
  chooseOption,
  currentPrize,
  currentTask,
  prizes,
  tasks,
  popup,
}) {
  const letters = ['A', 'B', 'C', 'D'];
  const [isBurgerActive, setisBurgerActive] = useState(false);

  return (
    <div className="game-page">
      <Burger
        active={isBurgerActive}
        setActive={setisBurgerActive}
      />
      <div className={ClassNames(
        'game-page__task',
        { 'game-page__task--closed': isBurgerActive },
      )}
      >
        <h2 className="game-page__question">{tasks[currentTask].question}</h2>
        <ul className="game-page__options">
          {tasks[currentTask].options.map((option, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className="game-page__option"
              onClick={() => chooseOption(option, tasks[currentTask].answer)}
            >
              <span className="game-page__option-letter">{letters[index]}</span>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <ul className={ClassNames(
        'game-page__prizes',
        { 'game-page__prizes--opened': isBurgerActive },
      )}
      >
        {prizes.map((prize, index) => (
          <li
            className={ClassNames({
              'game-page__prize': true,
              'game-page__prize--active': index === currentPrize,
              'game-page__prize--unactive': index < currentPrize,
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
  );
}

GamePage.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prizes: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  currentTask: PropTypes.number.isRequired,
  currentPrize: PropTypes.number.isRequired,
  chooseOption: PropTypes.func.isRequired,
  popup: PropTypes.bool.isRequired,
};

export default GamePage;
