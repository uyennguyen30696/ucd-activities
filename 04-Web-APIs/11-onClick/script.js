var decrementEl = document.getElementById("decrement");
var incrementEl = document.getElementById("increment");
var spanEl = document.getElementById("count");
var count = 0;

decrementEl.addEventListener("click", function() {
    if (count > 0) {
    spanEl.textContent = --count;
    }
});

incrementEl.addEventListener("click", function() {
    spanEl.textContent = ++count;
});

