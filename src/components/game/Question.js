import React from "react";
import {cleanString} from '../../utils'

function Question(props){

  function html(){
    return {__html: cleanString(props.text)}
  }
  return <div className="question">
      <h3 dangerouslySetInnerHTML={html()}></h3>
    </div>
}

export default Question;
