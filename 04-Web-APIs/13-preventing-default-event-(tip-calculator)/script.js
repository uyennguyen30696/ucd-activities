var tipEl = document.getElementById("tip-percentage");
var submitEl = document.getElementById("submit");
var priceEl = document.getElementById("price");
var numPeopleEl = document.getElementById("num-people");
var splitEl = document.getElementById("split");

function calculateTip(price, tipPercentage) {
    var roundedTip = (price * tipPercentage).toFixed(2);
    return roundedTip;
}

function calculateTotal(price, tipAmount) {
    return parseFloat(price) + parseFloat(tipAmount);
}

function addTip(event) {
    event.preventDefault();

    var tipPercentage = tipEl.value * .01;
    var price = priceEl.value;
    var tipAmount = calculateTip(price, tipPercentage);
    var newTotal = calculateTotal(tipAmount, price);

    document.getElementById("tip-amount").textContent = tipAmount;
    document.getElementById("new-total").textContent = newTotal.toFixed(2);
}

function split(event) {
    event.preventDefault();

    var numberPeople = numPeopleEl.value;
    var newTotal = document.getElementById("new-total").textContent;
    var splitAmount = (newTotal / numberPeople).toFixed(2);

    document.getElementById("split-total").textContent = splitAmount;
}

submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", split);