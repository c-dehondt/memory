// variable
var choix1 =document.getElementsByClassName("carte");
var choix2 =document.getElementsByClassName("carte2");

for (var i = 0; i < choix1.length; i++) {
  choix1[i].onclick = function() {
  this.src ="img/bravo.png";
  }
}

for (var i = 0; i < choix2.length; i++) {
  choix2[i].onclick = function() {
  this.src ="img/carte.gif";
  }
}
