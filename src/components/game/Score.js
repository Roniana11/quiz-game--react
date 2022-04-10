import React from "react";
import {useSelector} from 'react-redux';

function Score(){

const score = useSelector(state => state.score);
 return <p className="score">score: {score}</p>

}

export default Score;