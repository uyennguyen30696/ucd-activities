var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var bodyEl = document.createElement("div");
var timeEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var i = 0;

var millisecondsPerWord = prompt("How many seconds per word do you want to read?");

function prepareRead() {
  var secondsLeft = 5;

  // Create the countdown timer.
  var timeInterval = setInterval(function() {
  timeEl.textContent = secondsLeft + " seconds until start...";
  secondsLeft--;

    if (secondsLeft === 0) {
      timeEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }
  }, 1000);
}

function speedRead() {
  mainEl.append(bodyEl);

  // Print words to the screen one at a time.
  // for (i = 0; i <= words.length; i++) {
    var poemInterval = setInterval(function() {

    if (words[i] === undefined) {
      clearInterval(poemInterval);
    }

    else {
    mainEl.textContent = words[i];
    i++;
    }

    },millisecondsPerWord);
  }
// }

prepareRead();
