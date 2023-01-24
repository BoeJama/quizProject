function quiz() {
var timeLeft = 75;
var elem = document.getElementById('Timer');


var timerId = setInterval(countdown, 1000);


function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = "Time left: " + timeLeft;
    timeLeft--;
  }
}
}
