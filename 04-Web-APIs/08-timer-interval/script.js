var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until colosplosion!";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }
}, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";

    var imgEl = document.createElement("img");

    mainEl.appendChild(imgEl);
    imgEl.setAttribute("src", "images/image_1.jpg");
}

setTime();

