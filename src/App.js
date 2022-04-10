import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";
import {fetchQuestions} from './store/game-actions';
import PreGamePage from "./pages/PreGame";

function App(){

  const dispatch = useDispatch();
  dispatch(fetchQuestions());
  return (
      <Routes>
        <Route path='/' element={<PreGamePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/quiz' element={<GamePage/>}></Route>
      </Routes>
    )
}

export default App;
