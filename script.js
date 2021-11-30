document.getElementById("generateRandomNum").addEventListener("click", randomNumGen);
function randomNumGen(){
  //generate a random number from 1 to 10 five times and add them to an array
  let randomArray = [], randomNumber = document.getElementById("randomNumber"), numberTimes = document.getElementById("numberTimes");
  //clears the HTML when the function is called again
  randomNumber.innerHTML = "";
  for(i = 0; i < 5; i++){
    let randomNum = Math.floor(Math.random() * 10 + 1);
    randomArray[i] = randomNum;
  }
  //user to input a number from 1 to 10
  let userGuess = parseInt(prompt("Pick a number from 1 to 10!"));
  //display the array of five random numbers
  for(i = 0; i < randomArray.length; i++){
    if(randomArray.includes(userGuess)){
      randomNumber.innerHTML = "The number " + userGuess + " is in the array!";
      console.log(randomArray[i] + " ");
      if(randomArray[i] === userGuess){
        let numtimes = randomArray.filter(x => x === userGuess).length;
        numberTimes.innerHTML = userGuess + " is in the array " + numtimes + " time(s).";
      }
    } else if(userGuess > 10 || userGuess <= 0){
      randomNumber.innerHTML = "Pick a number from 1 to 10.";
      numberTimes.innerHTML = "";
    } else{
      randomNumber.innerHTML = "No luck! The number " + userGuess + " isn't present.";
      numberTimes.innerHTML = "";
    }
  }
}
