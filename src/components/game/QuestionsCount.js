import React from "react";
import {useSelector} from 'react-redux';


function QuestionCount(){

  const total = useSelector(state => state.totalQuestionsByLevel);
  const current = useSelector(state => state.currentQuestion);

  return <div>
    <h3>{current+1} of {total}</h3>
  </div>

}

export default QuestionCount;