$button = document.getElementById("add");
$nom = document.getElementById("nom");
$prenom= document.getElementById("prenom");
$numero = document.getElementById("numero");
$liste = document.getElementById("liste");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$found = document.getElementById("found");

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
   prenom:"Erwan",
   nom: "Kezzar"
} , {
   prenom: "Naomi",
   nom: "Ventura"
},  {
   prenom: "Jean",
   nom: "Dupond"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
	$liste.innerHTML = "";
  _.each(contacts, function (contact) {
    $liste.innerHTML += "<li>" + contact.prenom + " " + contact.nom + "</li>";
  });
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });

		afficherListe();
}

function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $found.innerHTML = elements;
}

$rechercher.onclick = rechercher; 
afficherListe();
$button.onclick = ajouter;
