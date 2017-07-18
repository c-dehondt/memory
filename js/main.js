
// variable
var choixJoueur =document.getElementsByClassName("carte");
var carte= ["img/image1.png","img/image2.png","img/image3.png","img/image4.png",
            "img/image5.png","img/image6.png","img/image1.png","img/image2.png",
            "img/image3.png","img/image4.png","img/image5.png","img/image6.png"];

var comparer=[];
var nbEssai=10;
var clickStop=0;

// function

function jouer() {
  var joueur=prompt("quel est ton pseudo??");
  document.getElementById("pseudo").innerHTML="Bonjour " + joueur;
  shuffleArray(carte);
  for (var i = 0; i < choixJoueur.length; i++) {
    document.getElementsByTagName("img")[i].src=carte[i];
    choixJoueur[i].onclick = function () {
      if (clickStop == 0) {
        comparer.push(this);
        this.style.opacity= 1;
        this.parentElement.classList.remove("dos");

            if(comparer.length == 2){
                clickStop++;
                comparaison();

            }
          }
        }
      }


}

function shuffleArray(carte) {
    for (var i = carte.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = carte[i];
        carte[i] = carte[j];
        carte[j] = temp;
    }
    return carte;
}


function comparaison(){
      if (comparer[0].src == comparer[1].src) {
        clickStop=0;
        comparer=[];
      }else {
        nbEssai--;
        console.log(nbEssai);
        setTimeout(function () {
          comparer[0].style.opacity=0;
          comparer[0].parentElement.classList.add("dos");
          comparer[1].style.opacity=0;
          comparer[1].parentElement.classList.add("dos");

          clickStop =0;
          comparer=[];
        },600 );
      }chance();

  }

function reset() {
  nbEssai =10;
  window.location.reload();
}

function chance() {
  if(nbEssai ==0){
    alert("tu as perdu")
    reset();
  }document.getElementById("essai").innerHTML= nbEssai;
}

// script
