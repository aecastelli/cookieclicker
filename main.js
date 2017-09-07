//set variable of cookies
var cookies = 0;
//set function of clicking for cookies
function cookieClick(number) {
  cookies = cookies + number;
//link this js to the cookies element in the index
  document.getElementById("cookies").innerHTML = cookies;
};

//set grannies variable
var grannies = 0;
//outline the functions of buying a granny
function buyGranny() {
//oh geez that math, definitely need to learn about this function
  var grannyCost = Math.floor(10 * Math.pow(1.1,grannies))
    if(cookies >= grannyCost) {
      grannies = grannies + 1;
      cookies = cookies - grannyCost;
      //again linking to the index document
      document.getElementById('grannies').innerHTML = grannies;
      document.getElementById('cookies').innerHTML = cookies;
  };
  //this updates the cost of buying new grannies, as the price increases
  var nextCost = Math.floor(10 * Math.pow(1.1,grannies))
  document.getElementById('grannyCost').innerHTML = nextCost;
};

//this code gets the grannies to do work! baking one cookie per second. the 1000 indicates
//1000 miliseconds, or one second. Takes into account the number of grannies and
//makes them do work! 10 grannies will make 10 cookies per second!
window.setInterval(function(){
  cookieClick(grannies);
},1000);
