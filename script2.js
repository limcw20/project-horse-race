//Root of Horses
const horses = [];

//Root of Player selection
let playerChoice = -1;

//Root of Play Button Transitioning
const playButton = document.getElementById("play-button");

function changePage() {
  document.querySelector(".container1").style.display = "none";
  document.querySelector(".container2").style.display = "";
}
playButton.addEventListener("click", changePage);

//Constructor() of Horse class (all 20)
class Horse {
  constructor(horseName, horseNumber, horseSpeed, horseDesc, horseImg) {
    (this.horseName = horseName),
      (this.horseNumber = horseNumber),
      (this.horseSpeed = horseSpeed),
      (this.horseDesc = horseDesc),
      (this.horseImg = horseImg);
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

//Individual Parameters of Horses (Images are currently placeholders)
let horse1 = new Horse("Betty", "49", 1200, "snail-imitator", "/images/0.jpg");
let horse2 = new Horse("A", "04", 1100, "snail-imitator", "/images/1.jpg");
let horse3 = new Horse("B", "29", 1000, "snail-imitator", "/images/2.jpg");
let horse4 = new Horse("C", "53", 1150, "snail-imitator", "/images/0.jpg");
let horse5 = new Horse("D", "62", 1120, "snail-imitator", "/images/1.jpg");
let horse6 = new Horse("E", "10", 1000, "snail-imitator", "/images/2.jpg");
let horse7 = new Horse("F", "99", 1090, "snail-imitator", "/images/0.jpg");
let horse8 = new Horse("G", "22", 1220, "snail-imitator", "/images/1.jpg");
let horse9 = new Horse("H", "41", 1250, "snail-imitator", "/images/2.jpg");
let horse10 = new Horse("I", "25", 900, "snail-imitator", "/images/0.jpg");
let horse11 = new Horse("J", "35", 950, "snail-imitator", "/images/1.jpg");
let horse12 = new Horse("K", "37", 1200, "snail-imitator", "/images/2.jpg");
let horse13 = new Horse("L", "82", 1250, "snail-imitator", "/images/0.jpg");
let horse14 = new Horse("M", "30", 1150, "snail-imitator", "/images/1.jpg");
let horse15 = new Horse("N", "07", 1100, "snail-imitator", "/images/2.jpg");
let horse16 = new Horse("O", "02", 1000, "snail-imitator", "/images/0.jpg");
let horse17 = new Horse("P", "95", 950, "snail-imitator", "/images/1.jpg");
let horse18 = new Horse("Q", "66", 850, "snail-imitator", "/images/2.jpg");
let horse19 = new Horse("R", "50", 1350, "snail-imitator", "/images/0.jpg");
let horse20 = new Horse("S", "77", 1300, "snail-imitator", "/images/1.jpg");

//Putting 20 horses into a single Array
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
];

//Randomize 6 horses from the Array of 20 horses

function randomizeSix(list) {
  const listOfSix = [];
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 20);
    listOfSix.push(list[randomNumber]);
  }
  return listOfSix;
}

//Shallow copy Array of 6 with unique elements (no duplicate horses)
function getHorses(list) {
  return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 6);
}

//Push Array of 6 random horses to root horses Array
horses.push(getHorses(listofHorses));

//Check if root Horses has captured 6 random horses
console.log(horses);
