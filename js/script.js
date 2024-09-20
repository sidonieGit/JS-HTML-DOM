let zone1 = document.getElementById("zone1");
let zone2 = document.getElementsByClassName("zone2")[0]; // Accéder au premier bouton de la classe
let image = document.getElementById("myImage");

function gestionnaireClick() {
  zone1.innerHTML = "Hello World! Vous venez de faire un clic";
}

function gestionnaireEffacerClick() {
  zone1.style.backgroundColor = "gray";
  zone1.innerHTML = "Je suis le gris";
}

function gestionnaireMouseout() {
  zone1.innerHTML = "Bye"; // Change le contenu de zone1
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

// Ajouter des gestionnaires de clic uniquement aux éléments ciblés
zone1.addEventListener("click", gestionnaireClick);
zone2.addEventListener("click", gestionnaireClickBouton);
image.addEventListener("click", gestionnaireClickChangerImage);

zone1.addEventListener("mouseover", gestionnaireEffacerClick);
zone1.addEventListener("mouseout", gestionnaireMouseout);
zone2.addEventListener("mouseover", gestionnaireEffacerClick);
zone2.addEventListener("mouseout", gestionnaireMouseout);
