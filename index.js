// DRYEST SOLUTION 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

// DRYER SOLUTION 2
/*var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);*/

// ORIGINAL ATTEMPT SOLUTION - WET SOLUTION!
/*// DICE ROLL
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

// PLAYER 1
if (randomNumber1 === 1) {
  document.querySelector("img").setAttribute("src", "images/dice1.png");
}
if (randomNumber1 === 2) {
  document.querySelector("img").setAttribute("src", "images/dice2.png");
}
if (randomNumber1 === 3) {
  document.querySelector("img").setAttribute("src", "images/dice3.png");
}
if (randomNumber1 === 4) {
  document.querySelector("img").setAttribute("src", "images/dice4.png");
}
if (randomNumber1 === 5) {
  document.querySelector("img").setAttribute("src", "images/dice5.png");
}
if (randomNumber1 === 6) {
  document.querySelector("img").setAttribute("src", "images/dice6.png");
}

// PLAYER 2
if (randomNumber2 === 1) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice1.png");
}
if (randomNumber2 === 2) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice2.png");
}
if (randomNumber2 === 3) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice3.png");
}
if (randomNumber2 === 4) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice4.png");
}
if (randomNumber2 === 5) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice5.png");
}
if (randomNumber2 === 6) {
  document.querySelector("div").lastElementChild.lastElementChild.setAttribute("src", "images/dice6.png");
}*/

// PODIUM
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
