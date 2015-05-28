$button = document.getElementById("add");
$nom = document.getElementById("nom");
$prenom= document.getElementById("prenom");
$numero = document.getElementById("numero");
$liste = document.getElementById("liste");


contacts = [{
    prenom: "Julien",
    nom: "Grillot"
}, {
    prenom: "John",
    nom: "Smith"
}, {
    prenom : "Yoan",
    nom: "Dieu"
}, {
    prenom:"Erwan" ,
    nom: "Kezzar"
} , {
    prenom: "Naomi"  ,
    nom: "Ventura"
},  {
    prenom: "Jean" ,
    nom: "Dupond"
}];


function afficherListe() {
    _.each(contacts, function (contact) {
    $liste.innerHTML += "<li>" + contact.prenom + " " + contact.nom + "</li>";
})
}


afficherListe();
