import React from "react";
import { validateAnswer } from "../../utils";

function AllAnswers(props){
  
  const incorrect= props.incorrect;
  const correct= props.correct;
  const answers = [...incorrect,correct];

  function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function chosenAnswerHandler(e,answer){
    const isCorrect = validateAnswer(correct,answer);
    props.onChooseAnswer(isCorrect);
  }

  shuffle(answers);

return <div className="answers-container">
  {answers.map( ans => <button className='answers-button' onClick={(e)=>chosenAnswerHandler(e,ans)}>{ans}</button>)}
  </div>
}

export default AllAnswers;