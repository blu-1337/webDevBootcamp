randomNr = Math.floor(Math.random()*10) + 1;
console.log(randomNr);



inputNr = parseInt(prompt("enter your number"));






guessed = false;

if (inputNr === randomNr){
  console.log(inputNr === randomNr)
  guessed = true;
}

attempts = 1

while (!guessed){
  attempts ++;
  inputNr = parseInt(prompt("enter your number"));
  if (inputNr === randomNr){
    console.log(inputNr === randomNr)
    guessed = true;
  }
  if (inputNr === "q"){
    guessed = true;
  }
}


console.log(`you got it in ${attempts} attempts`)