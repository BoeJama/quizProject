function quiz() {
  document.getElementById("questions").innerHTML = "HTML stands for HyperText Markup Language";
  document.getElementById("true").style.visibility = "visible";
  document.getElementById("false").style.visibility = "visible";
  document.getElementById("button").style.visibility = "hidden";

  var timeLeft = 25;
  var elem = document.getElementById('timer');
  
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
    } else {
      elem.innerHTML = "Time left: " + timeLeft + " Seconds";
      timeLeft--;
    }
  };
};

function wrong() {
  document.getElementById("questions").innerHTML = "You answered incorrectly";
};

function wrong2() {
  document.getElementById("questions").innerHTML = "You answered incorrectly";
};

function wrong3() {
  document.getElementById("questions").innerHTML = "You answered incorrectly";
};

function right() {
    document.getElementById("questions").innerHTML = "CSS stands for Cascading Style Sheets";
    document.getElementById("true").style.visibility = "hidden";
    document.getElementById("false").style.visibility = "hidden";
    document.getElementById("true2").style.visibility = "visible";
    document.getElementById("false2").style.visibility = "visible";
};

function right2() {
  document.getElementById("questions").innerHTML = "JS stands for JavaScript"
  document.getElementById("true2").style.visibility = "hidden";
  document.getElementById("false2").style.visibility = "hidden";
  document.getElementById("true3").style.visibility = "visible";
  document.getElementById("false3").style.visibility = "visible";
};

function right3() {
  document.getElementById("questions").innerHTML = "You finished the test! Your final score is: "
  document.getElementById("button").style.visibility = "visible";
  document.getElementById("true3").style.visibility = "hidden";
  document.getElementById("false3").style.visibility = "hidden";

};
