import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
import clapping from '../sounds/clapping.mp3';
import { gameActions } from '../store/game';
import Clock from '../components/game/Clock';
import QuestionCount from '../components/game/QuestionsCount';
import Question from '../components/game/Question';
import AllAnswers from '../components/game/AllAnswers';
import Card from '../components/ui/Card';
import Summery from '../components/game/Summery';
import Quit from '../components/game/Quit';


function GamePage() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionsByLevel);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const playerName = useSelector((state) => state.playerName);
  const score = useSelector((state) => state.score);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [quit, setQuit] = useState(false);
  const [play] = useSound(clapping,{volume:0.25});

  function changeQuestionHandler() {
    if (currentQuestion + 1 === questions.length) {
      setIsQuizOver(true);
      if(score > 5){
        dispatch(gameActions.openNextLevel());
      }
      play();
      return;
    }
    dispatch(gameActions.setCurrentQuestion({ index: currentQuestion + 1 }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(timer);
      changeQuestionHandler();
    }, 61000);
    return ()=>{clearTimeout(timer)}
  }, [currentQuestion]);

  function chosenAnswerHandler(isCorrect) {
    if (isCorrect) {
      dispatch(gameActions.updateScore());
    }
    changeQuestionHandler();
  }

  function nextQuestionHandler() {
    changeQuestionHandler();
  }

  function quitHandler() {
    setQuit(!quit);
  }

  return (
    <div className="game-container">
      <Card>
        <p className="player-name">
          Player: {playerName ? playerName : 'Anonymus'}
        </p>
        <p className="score">Score: {score}</p>
        <Clock endTime={Date.now() + 62000} />
        <QuestionCount></QuestionCount>
        <Question text={questions[currentQuestion].question}></Question>
        <AllAnswers
          onChooseAnswer={chosenAnswerHandler}
          correct={questions[currentQuestion].correct_answer}
          incorrect={questions[currentQuestion].incorrect_answers}
        />
        <div className="button-container">
          <button onClick={quitHandler}>Quit</button>
          <button onClick={nextQuestionHandler}>Next</button>
        </div>
      </Card>
      {isQuizOver && (
        <Summery score={score}></Summery>
      )}
      {quit && <Quit></Quit>}
    </div>
  );
}

export default GamePage;
