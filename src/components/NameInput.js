import React from 'react';
import Modal from './ui/Modal';
import { useRef,useState } from 'react';
import {useDispatch} from 'react-redux';
import { gameActions } from '../store/game';
import { useNavigate } from 'react-router-dom';

function NameInput() {
  const nameInputRef = useRef();
  const dispatch = useDispatch();
  const [isModalOpen,setModalOpen] = useState(true);
  const [enteredName,setEnteredName] = useState('');
  const navigate = useNavigate();

  function closeModalHandler(){
    setModalOpen(false);
    navigate('/home');
  }

  function onChangeInput(){
    setEnteredName(nameInputRef.current.value);
  }

  async function submitNameHandler(event){
    event.preventDefault();
    dispatch(gameActions.setPlayerName({name:enteredName}));
    closeModalHandler();
    navigate('/home');
  }

  return isModalOpen && <Modal onConfirm={closeModalHandler}>
    <div className='form-container'>
      <h1>What's your name?</h1>
      <form onSubmit={submitNameHandler}>
        <div>
          <input
            ref={nameInputRef}
            id="name"
            type="text"
            placeholder="your name..."
            onChange={onChangeInput}
          ></input>
          </div>
          <button type="submit">Let's play!</button>
      </form>
      </div>
    </Modal>
}

export default NameInput;
