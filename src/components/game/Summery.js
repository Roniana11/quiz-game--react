import React from "react";
import Modal from '../ui/Modal';
import {useNavigate} from 'react-router-dom';
import trophy from '../../images/trophy.png';


function Summery(props){

  const navigate = useNavigate();

  function continueHandler(){
    navigate('/home')
  }

  let message = 'You will do better next time!';
  if(props.score > 25 && props.score < 50){
    message = "Not Bad :)"
  }

  if(props.score > 50){
    message = "Level Completed!"
  }
  
  return <Modal>
    <div className='summery'>
    <img src={trophy} alt='Trophy'></img>
    <h1>{message}</h1>
    <h2>Your Score:</h2>
    <h1>{props.score}</h1>
    <button onClick={continueHandler}>Continue</button>
    </div>
  </Modal>
}

export default Summery;