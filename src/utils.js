
export function validateAnswer(correct,chosenAnswer){
return correct === chosenAnswer;
}

export function cleanString(str){

  let newString = str.replace('&#39',"'");
  newString = newString.replace('&quot;','"');

  return newString;
}
