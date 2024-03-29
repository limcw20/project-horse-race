//TRANSITION TO GAME FROM MENU
const playButton = document.getElementById("play-button");

function changePage() {
  document.querySelector(".container1").style.display = "none";
  document.querySelector(".container2").style.display = "";
}
playButton.addEventListener("click", changePage);
//need to set rule if no horses selected = doesnt work,  if horse selected = work

//HORSE CLASS
class Horse {
  constructor(horseName, horseNumber, horseSpeed, horseDesc) {
    (this.horseName = horseName),
      (this.horseNumber = horseNumber),
      (this.horseSpeed = horseSpeed),
      (this.horseDesc = horseDesc);
  }
  gainSpeed(timeTaken) {
    this.horseSpeed -= timeTaken;
    console.log(`${this.horseName}'s speed increased!`);
  }
  loseSpeed(timeTaken) {
    this.horseSpeed += timeTaken;
    console.log(`${this.horseName}'s speed decreased..`);
  }
}
//timeTaken = adds/subtract the time taken for horse to reach the end?
//idea setInterval to change by 100
//function to convert speed to interval 2000-1200 = 800ms per grid
//                                      2000-800 = 1200ms per grid

let horse1 = new Horse("Betty", "49", 1200, "snail-imitator");
let horse2 = new Horse("A", "04", 1100, "snail-imitator");
let horse3 = new Horse("B", "29", 1000, "snail-imitator");
let horse4 = new Horse("C", "53", 1150, "snail-imitator");
let horse5 = new Horse("D", "62", 1120, "snail-imitator");
let horse6 = new Horse("E", "10", 1000, "snail-imitator");
let horse7 = new Horse("F", "99", 1090, "snail-imitator");
let horse8 = new Horse("G", "22", 1220, "snail-imitator");
let horse9 = new Horse("H", "41", 1250, "snail-imitator");
let horse10 = new Horse("I", "25", 900, "snail-imitator");
let horse11 = new Horse("J", "35", 950, "snail-imitator");
let horse12 = new Horse("K", "37", 1200, "snail-imitator");
let horse13 = new Horse("L", "82", 1250, "snail-imitator");
let horse14 = new Horse("M", "30", 1150, "snail-imitator");
let horse15 = new Horse("N", "07", 1100, "snail-imitator");
let horse16 = new Horse("O", "02", 1000, "snail-imitator");
let horse17 = new Horse("P", "95", 950, "snail-imitator");
let horse18 = new Horse("Q", "66", 850, "snail-imitator");
let horse19 = new Horse("R", "50", 1350, "snail-imitator");
let horse20 = new Horse("S", "77", 1300, "snail-imitator");

const listofHorses = [
  horse1,
  horse2,
  horse3,
  horse4,
  horse5,
  horse6,
  horse7,
  horse8,
  horse8,
  horse9,
  horse10,
  horse11,
  horse12,
  horse13,
  horse14,
  horse15,
  horse16,
  horse17,
  horse18,
  horse19,
  horse20,
]; //Array of 20 horses

function randomizeSix(list) {
  const sixRandomHorses = [];
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 20);
    sixRandomHorses.push(list[randomNumber]);
  }
  return sixRandomHorses;
}

function getHorses(list) {
  return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 6); //shallow copy to an array of 6 random horses
}

const sixHorsesSelected = getHorses(listofHorses); //six horses selected put into variable
//console.log(sixHorsesSelected);

function addHorseImg() {
  const horseElement = document.getElementsByClassName("horse");
  for (let i = 0; i < 6; i++) {
    const horseImg = document.createElement("img");
    horseImg.classList.add("randomImg");
    const randomImg = Math.floor(Math.random() * 2) + 1;
    horseImg.src = "/images/" + randomImg + ".jpg";
    horseElement[i].appendChild(horseImg);
    console.log(randomImg);
  }
} //random images for each character
addHorseImg();

const horseDisplay = document.getElementsByClassName("horse");

let selectedHorse = null; // To keep track of the currently selected horse

function selectCharacter() {
  if (selectedHorse) {
    selectedHorse.style.border = 0;
  }

  this.style.border = "5px solid red";
  selectedHorse = this;
}

for (let i = 0; i < 6; i++) {
  let chosenHorse = horseDisplay[i];
  chosenHorse.style.boxSizing = "border-box";
  chosenHorse.addEventListener("click", selectCharacter);
}
