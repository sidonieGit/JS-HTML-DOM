let zone1 = document.getElementById("zone1");
let zone2 = document.getElementsByClassName("zone2")[0]; // Accéder au premier bouton de la classe
const image = document.getElementById("myImage");
let changeImageButton = document.getElementById("changeImageButton");
let backButton = document.getElementById("backButton");

function gestionnaireClick() {
  zone1.innerHTML =
    "Hello World! <br> DOM intro / DOM Methods / Dom Documents <br>  Vous venez de faire un clic! si on parlait du DOM, Est-ce une représentation objet d'un document. ";
  zone1.style.color = "white";
}

function gestionnaireEffacerClick() {
  zone1.style.backgroundColor = "gray";
  zone1.innerHTML =
    "Hello World! <br> DOM intro / DOM Methods / Dom Documents <br>Cest quoi DOM ";
}

function gestionnaireMouseout() {
  zone1.innerHTML =
    "Bye  <br> DOM intro / DOM Methods / Dom Documents <br> pour info : Document Object Model—ensemble d obets disposés sous forme d arbre dans un document";
}

function gestionnaireClickBouton() {
  zone1.innerHTML = "Le bouton a été cliqué !";
  dateDisplay.innerHTML = Date(); // Mettre la date dans le paragraphe
  dateDisplay.style.display = "block"; // Affiche le paragraphe
}

function gestionnaireClickChangerImage() {
  // Changer l'attribut src
  image.setAttribute("src", "img/bird.webp");

  // Changer l'attribut alt
  image.setAttribute("alt", "Image modifiée");
}

//animate
function gestionnaireClickAnimateImage() {
  let animationId; // More descriptive name
  let position = 0;

  animationId = setInterval(animateFrame, 10); // Adjusted delay

  function animateFrame() {
    if (position === 350) {
      clearInterval(animationId);
    } else {
      position++;
      image.style.top = position + "px";
      image.style.left = position + "px";
    }
  }
}

function gestionnaireEvenementBackClick() {
  window.history.back();
}

// Ajouter des gestionnaires de clic uniquement aux éléments ciblés
zone1.addEventListener("click", gestionnaireClick);
zone2.addEventListener("click", gestionnaireClickBouton);
changeImageButton.addEventListener("click", gestionnaireClickChangerImage);
image.addEventListener("click", gestionnaireClickAnimateImage);

zone1.addEventListener("mouseover", gestionnaireEffacerClick);
zone1.addEventListener("mouseout", gestionnaireMouseout);
zone2.addEventListener("mouseover", gestionnaireEffacerClick);
zone2.addEventListener("mouseout", gestionnaireMouseout);
backButton.addEventListener("click", gestionnaireEvenementBackClick);
