console.log("Executed!");

number1 = document.getElementById("number1");
number2 = document.getElementById("number2");

// console.log(parseInt(number1.innerText));

const btn1 = document.getElementById("btnP1");
const btn2 = document.getElementById("btnP2");
const btnReset = document.getElementById("btnReset");

const upToSelector = document.getElementById("upToNumber");
const upTo = upToSelector.value;

btn1.addEventListener('click', function () { increment(1, 0) });
btn2.addEventListener('click', function (e) { increment(0, 1) });
btnReset.addEventListener('click', function () { increment(0, 0) });
upToSelector.addEventListener('change', function(){increment(2,3)}) //increment 2,3 values to nod enter if statements

function increment(value1, value2) {
  const upToSelector = document.getElementById("upToNumber");
  const upTo = upToSelector.value; 
  console.log(upTo)
  if ((number1.innerText < upTo) && (number2.innerText < upTo)) {
    if (value1 === 1) { //button1 pressed
      number1.innerText = parseInt(number1.innerText) + 1;
    }
    else if (value2 === 1) { //button2 pressed
      number2.innerText = parseInt(number2.innerText) + 1;
    }
  }
  if (value1 === value2) { //reset button pressed
    number1.innerText = 0;
    number2.innerText = 0;
    number1.style.color = "black";
    number2.style.color = "black";
  }
  if (number1.innerText == upTo) {
    number1.style.color = "green";
  } else if (number2.innerText == upTo) {
    number2.style.color = "green";
  } else {
    number1.style.color = "black";
    number2.style.color = "black";
  }
}


