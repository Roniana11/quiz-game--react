import { gameActions } from "./game";

export function fetchQuestions(){
  return async (dispatch) =>{
    try{
      const response = await fetch('https://opentdb.com/api.php?amount=100');
      const data = await response.json();
      console.log(data);
      dispatch(gameActions.setQuestions({questions: data.results}))
  }catch(err){
    console.log(err);
  }
  }
};