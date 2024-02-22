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
//function to convert speed to interval 2000-1200 = 800ms
//                                      2000-800 = 1200ms

let horse1 = new Horse("Betty", "49", 1200, "snail-imitator");
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
