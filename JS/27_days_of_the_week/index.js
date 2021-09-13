// DEFINE YOUR FUNCTION BELOW:

function returnDay(nr){
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  if(nr>7 || nr<1){
    return null;
  } else {
    console.log(days[nr-1]);
  }

}