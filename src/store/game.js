import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  questionsByLevel:[],
  totalQuestionsByLevel:0,
  currentQuestion: 0,
  score: 0,
  level:'',
  playerName:'',
  easy: false,
  medium: false,
  hard:false,
};
const gameSlice = createSlice({ 
  name: 'game',
  initialState: initialState,
  reducers:{
    setQuestions(state,payload){
      const questions = payload.payload.questions;
      state.questions = questions;
    },
    setPlayerName(state,payload){
      const name = payload.payload.name;
      state.playerName = name;
    },
    setLevel(state,payload){
      const level = payload.payload.level;
      state.level= level;
      state.questionsByLevel = state.questions.filter(q => q.difficulty === level);
      state.totalQuestionsByLevel = state.questionsByLevel.length;
      state.currentQuestion = 0;
      state.score = 0;
    },
    setCurrentQuestion(state,payload){
      let index = payload.payload.index;
      state.currentQuestion = index;
    },
    updateScore(state,payload){
      const scorePerQuestion = Math.floor(100/state.totalQuestionsByLevel);
      state.score += scorePerQuestion;
    },
    openNextLevel(state,payload){
      const level = state.level;
      state[level] = true;
    }
  }
 });

 export const gameActions = gameSlice.actions;

 const store = configureStore({
   reducer: gameSlice.reducer
 })

 export default store;