

const myList = []

while(true){
  userInput = prompt("Your Command:");
  if(userInput === "new"){
    itemToAppend = prompt("What would you like to add?");
    myList.push(itemToAppend);
  }
  if(userInput === "quit"){
    break;
  }
  if(userInput === "delete"){
  index = prompt("Enter index of item:");
    console.log("deleted " + myList.splice(index,1))
    //delete items
  }
  if(userInput === "list"){
    for (let item in myList){
      console.log(item, myList[item]);
    }
  }
}