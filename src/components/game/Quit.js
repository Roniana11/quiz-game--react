import React from "react";
import Modal from '../ui/Modal';
import {useNavigate} from 'react-router-dom';

function Quit(props){
  const navigate = useNavigate();
  setTimeout(() =>{
    navigate('/home');
  },2000);

  return <Modal>
    <h2>See you next time!</h2>
  </Modal>
}

export default Quit;