
//Random Dice1
var random_number1= Math.floor(Math.random()*6)+1;

var image_address1= "images/dice" + random_number1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", image_address1);

//Randon dice2
var random_number2= Math.floor(Math.random()*6)+1;

var image_address2= "images/dice" + random_number2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", image_address2);
//Case 1 wins
if(random_number1>random_number2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
//case 2 wins
else if(random_number1<random_number2) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
// case nobody wins
else {
  document.querySelector("h1").innerHTML = "Draw!!"
}
