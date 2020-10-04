import React, { useState } from 'react';
import './App.scss';
import tasks from './api/tasks.json';
import { prizes } from './api/prizes.json';
import GameStart from './components/GameStart/GameStart';
import GamePage from './components/GamePage/GamePage';
import GameOver from './components/GameOver/GameOver';

function App() {
  const [gameStart, setGameStart] = useState(true);
  const [gamePage, setGamePage] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [currentTask, setCurrentTask] = useState(0);
  const [currentPrize, setCurrentPrize] = useState(0);
  const [popup, setPopup] = useState(false);

  const chooseOption = (option, answer) => {
    if (currentTask < tasks.length && option === answer) {
      if (currentTask !== tasks.length - 1) {
        setPopup(true);
        setTimeout(() => setPopup(false), 1000);
        setCurrentTask(currentTask + 1);
        setCurrentPrize(currentPrize + 1);
      } else {
        setGameOver(true);
        setGamePage(false);
        setCurrentTask(0);
        setCurrentPrize(currentPrize + 1)
      }
    } else {
      setGameOver(true);
      setGamePage(false);
      setCurrentTask(0);
    }
  }

  const tryAgain = () => {
    setGamePage(true);
    setGameOver(false);
    setCurrentPrize(0);
  }

  return (
    <div className="App">
      {gameStart && (
        <GameStart 
          setGameStart={setGameStart}
          setGamePage={setGamePage}
        />
      )}
      {gamePage && (
        <GamePage 
          chooseOption={chooseOption}
          currentTask={currentTask}
          prizes={prizes}
          currentPrize={currentPrize}
          tasks={tasks}
          popup={popup}
        />
      )}
      {gameOver && (
        <GameOver 
          prizes={prizes}
          currentPrize={currentPrize}
          tryAgain={tryAgain}
        />
      )}
    </div>
  );
}

export default App;
