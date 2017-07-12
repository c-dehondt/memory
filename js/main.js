// variable
var choixJoueur =document.getElementsByClassName("carte");
var carte= ["img/image1.jpg","img/image2.png","img/image3.jpg","img/image4.jpg",
            "img/image5.jpeg","img/image6.png","img/image7.jpeg","img/image8.jpg",
            "img/image1.jpg","img/image2.png","img/image3.jpg","img/image4.jpg",
            "img/image5.jpeg","img/image6.png","img/image7.jpeg","img/image8.jpg"];

// var melanger= carte[Math.floor(Math.random()*carte.length)];
var comparer=[];



// function
function shuffleArray(carte) {
    for (var i = carte.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = carte[i];
        carte[i] = carte[j];
        carte[j] = temp;
    }
    return carte;
}

// script
shuffleArray(carte);
for (var i = 0; i < choixJoueur.length; i++) {
  document.getElementsByTagName("img")[i].src=carte[i];
  choixJoueur[i].onclick = function () {
  this.style.opacity= 1;
}
}





// for (var i = 0; i < choixJoueur2.length; i++) {
//   choixJoueur2[i].onclick = function() {
//   this.src ="";
//   }
// }
