var artDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

artDiv.children[0].style.fontSize = "50px";
artDiv.children[0].lastElementChild.style.color = "blue";
artDiv.previousElementSibling.style.backgroundColor = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";