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

let horse1 = new Horse("Betty", "49", 120, "snail-imitator");
// let arr = []
// arr.push(horse1)

// PLACEHOLDER PLAY BUTTON EVENTLISTENER FOR TRANSITING TO GAME

const playButton = document.getElementById("play-button");

function changePage() {
  document.querySelector(".container1").style.display = "none";
  document.querySelector(".container2").style.display = "";
}
playButton.addEventListener("click", changePage);

//container2.style.display = "block"
//container1.style.display = "hide"
