// Set body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var memeEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

// Store all li items in a variable
var listItems = document.body.getElementsByTagName("li");

// Set text contents for relevant elements
h1El.textContent = "Welcome to my page";
h2El.textContent = "This HTML document is created using JavaScipt and Chrome Dev Tools";
memeEl.textContent = "I pat myself on the shoulder for understanding how to do this";
favoriteEl.textContent = "My favorite food are: "
li1.textContent = "Hot pot";
li2.textContent = "Sushi";
li3.textContent = "Korean bbq";

// Append all elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(memeEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);

// Style all elements
h1El.setAttribute("style", "text-align: center; background-color: #C58C6D;");
h2El.setAttribute("style", "text-align: center;");
infoEl.setAttribute("style", "text-align: center;");
imgEl.setAttribute("src", "images/cat-meme.jpg");
imgEl.setAttribute("height", 200);
imgEl.setAttribute("width", 200);
memeEl.setAttribute("style", "margin: auto; padding: 20px; text-align: center;");
favoriteEl.setAttribute("style", "font-size: 20px; padding: 10px; background-color: #C58C6D;");
listEl.setAttribute("style", "margin: 10px; line-height: 30px; background-color: #D0A38A;");
listEl[0].setAttribute("style", "margin: auto;");
listEl[1].setAttribute("style", "margin: auto;");
listEl[2].setAttribute("style", "margin: auto;");
