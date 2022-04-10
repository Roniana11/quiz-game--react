import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Level from '../components/game/Level';
import Modal from '../components/ui/Modal';
import Card from '../components/ui/Card';
import { useDispatch } from 'react-redux';
import { gameActions } from '../store/game';

function HomePage() {
  const playerName = useSelector((state) => state.playerName);
  const easy = useSelector((state) => state.easy);
  const medium = useSelector((state) => state.medium);
  const hard = useSelector((state) => state.hard);
  const [isLevelChosen, setIsLevelChosen] = useState(false);
  const [levelMessage, setLevelMessage] = useState('');
  const [chosenLevel, setLevelChosen] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  function openLevelModalHandler(){
    setIsLevelChosen(!isLevelChosen);
  }

  function chooseLevelHandler(level, message) {
    if(level === 'medium' && !easy){
      setLevelMessage('Unlock this level by scoring over 50 points in the previous one!');
      setLevelChosen('');
    } else if(level === 'hard' && !medium){
      setLevelMessage('Unlock this level by scoring over 50 points in the previous one!');
      setLevelChosen('');
    }else{
    setLevelMessage(message);
    setLevelChosen(level);
    }
    openLevelModalHandler();
  }

  function startQuizHandler() {
    if(chosenLevel){
    dispatch(gameActions.setLevel({ level: chosenLevel }));
    navigate('/quiz');
    }else{
      openLevelModalHandler();
    }
  }

  return (
    <div className="home-container">
      <Card>
        <div>
          <h1>
            Hey There!<br></br>
            {playerName}
          </h1>
        </div>
        <div>
          <h3>How good are you?</h3>
        </div>
        <div className="level-container">
          <Level
            onClick={() => {
              chooseLevelHandler('easy', 'A slaw start is a work of art!');
            }}
            levelName="EASY"
            unlocked={true}
            completed={easy}
          ></Level>
          <Level
            onClick={() => {
              chooseLevelHandler(
                'medium',
                'You are a medium well player! here we go!'
              );
            }}
            levelName="MEDIUM"
            unlocked={easy}
            completed={medium}
          ></Level>
          <Level
            onClick={() => {
              chooseLevelHandler('hard', 'You are on fire today!');
            }}
            levelName="HARD"
            unlocked={medium}
            completed={hard}
          ></Level>
        </div>
      </Card>
      {isLevelChosen && (
        <Modal onConfirm={openLevelModalHandler}>
          <h2>{levelMessage}</h2>
          <button onClick={startQuizHandler}>{chosenLevel? 'START QUIZ':'OK'}</button>
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
