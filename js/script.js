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

function texteContact(contact) {
    return contact.prenom + " " + contact.nom ;
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}


afficherListe();
